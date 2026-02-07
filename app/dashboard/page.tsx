"use client";

import { useState, useMemo } from "react";
import { FileUpload } from "@/components/file-upload";
import { Product, AnalysisResult } from "@/types";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import {
    TrendingUp,
    TrendingDown,
    Package,
    AlertTriangle,
    ShoppingCart,
    BarChart3,
    Bell,
    Search,
    Filter,
    Download,
    Play,
    RotateCcw,
    Activity,
    Zap
} from "lucide-react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    AreaChart,
    Area
} from 'recharts';

export default function DashboardPage() {
    const [data, setData] = useState<Product[]>([]);
    const [isProcessing, setIsProcessing] = useState(false);
    const [progress, setProgress] = useState(0);
    const [processedCount, setProcessedCount] = useState(0);

    // UI State
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");
    const [view, setView] = useState("dashboard");

    const handleDataLoaded = (loadedData: Product[]) => {
        setData(loadedData);
        setProcessedCount(0);
        setProgress(0);
    };

    const handleReset = () => {
        setData([]);
        setProcessedCount(0);
        setProgress(0);
        setIsProcessing(false);
    };

    // Calculate Derived Metrics and Status for each product
    const enhancedData = useMemo(() => {
        return data.map(item => {
            const currentStock = Number(item.DEPO || item["TPL DEPO"] || 0);
            const sales45 = Number(item["Son 45 Satis Miktar"] || 0);
            const dailyAvg = sales45 / 45;
            const daysUntilOut = dailyAvg > 0 ? Math.floor(currentStock / dailyAvg) : 999;

            // Determine Status
            let status = 'normal';
            if (daysUntilOut < 7 || (item.AB && item.AB > 0)) {
                status = 'critical';
            } else if (daysUntilOut < 15) {
                status = 'warning';
            } else if (daysUntilOut > 90) {
                status = 'excess';
            }

            return {
                ...item,
                currentStock,
                dailyAvg: Number(dailyAvg.toFixed(2)),
                daysUntilOut,
                status,
                aiNeed: item.AB || 0,
                aiReason: item.AC
            };
        });
    }, [data]);

    // KPIs
    const kpis = useMemo(() => {
        const totalStock = enhancedData.reduce((acc, item) => acc + item.currentStock, 0);
        const criticalCount = enhancedData.filter(p => p.status === 'critical').length;
        const needsOrder = enhancedData.filter(p => p.aiNeed > 0).length;
        const monthlySalesEst = enhancedData.reduce((acc, item) => acc + (item.dailyAvg * 30 * 100), 0); // Mock price

        // Mock Health Score based on critical items ratio
        const healthScore = Math.max(0, 100 - (criticalCount * 5));

        return { totalStock, criticalCount, needsOrder, monthlySalesEst, healthScore };
    }, [enhancedData]);

    // Filtering
    const filteredProducts = useMemo(() => {
        return enhancedData.filter(p => {
            const matchesSearch = p.KOD?.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesStatus = statusFilter === 'all' || p.status === statusFilter;
            return matchesSearch && matchesStatus;
        });
    }, [enhancedData, searchTerm, statusFilter]);

    // Mock Forecast Data for Chart
    const forecastData = [
        { name: 'Pzt', sales: 40, forecast: 42 },
        { name: 'Sal', sales: 30, forecast: 35 },
        { name: 'Çar', sales: 20, forecast: 45 },
        { name: 'Per', sales: 27, forecast: 30 },
        { name: 'Cum', sales: 18, forecast: 48 },
        { name: 'Cmt', sales: 23, forecast: 38 },
        { name: 'Paz', sales: 34, forecast: 43 },
    ];


    const startAnalysis = async () => {
        if (data.length === 0) return;

        setIsProcessing(true);
        setProcessedCount(0);
        const BATCH_SIZE = 15;

        const itemsToProcess = data.filter(item => item.AB === undefined);
        const totalItems = itemsToProcess.length;

        if (totalItems === 0) {
            toast.info("Tüm ürünler zaten analiz edildi.");
            setIsProcessing(false);
            return;
        }

        try {
            for (let i = 0; i < totalItems; i += BATCH_SIZE) {
                if (!isProcessing) break;

                const batch = itemsToProcess.slice(i, i + BATCH_SIZE);

                try {
                    const response = await fetch("/api/analyze", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ batch }),
                    });

                    if (!response.ok) {
                        console.error("Batch failed");
                        continue;
                    }

                    const results: AnalysisResult[] = await response.json();

                    setData(prevData => {
                        const newData = [...prevData];
                        results.forEach((res, idx) => {
                            const originalIndex = batch[idx]._globalIndex;
                            const itemIndex = newData.findIndex(item => item._globalIndex === originalIndex);
                            if (itemIndex !== -1) {
                                newData[itemIndex] = {
                                    ...newData[itemIndex],
                                    AB: res.need,
                                    AC: res.reason
                                };
                            }
                        });
                        return newData;
                    });

                    const currentCount = Math.min(itemsToProcess.length, i + BATCH_SIZE);
                    setProcessedCount(currentCount);
                    setProgress(((i + BATCH_SIZE) / totalItems) * 100);

                } catch (err) {
                    console.error("Error processing batch:", err);
                }
            }
            toast.success("Analiz tamamlandı!");
        } catch (error) {
            toast.error("Hata oluştu.");
        } finally {
            setIsProcessing(false);
        }
    };

    // Helper Components
    const KPICard = ({ title, value, subtitle, icon: Icon, trend, color }: any) => (
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl ${color}`}>
                    <Icon className="w-6 h-6" />
                </div>
                {trend && (
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${trend > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {trend > 0 ? '+' : ''}{trend}%
                    </span>
                )}
            </div>
            <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">{title}</p>
                <p className="text-3xl font-bold text-foreground">{value}</p>
                {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
            </div>
        </div>
    );

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'critical': return 'text-red-600 bg-red-50 border-red-200 dark:bg-red-950/20 dark:border-red-900';
            case 'warning': return 'text-amber-600 bg-amber-50 border-amber-200 dark:bg-amber-950/20 dark:border-amber-900';
            case 'excess': return 'text-blue-600 bg-blue-50 border-blue-200 dark:bg-blue-950/20 dark:border-blue-900';
            default: return 'text-emerald-600 bg-emerald-50 border-emerald-200 dark:bg-emerald-950/20 dark:border-emerald-900';
        }
    };

    const StatusBadge = ({ status }: { status: string }) => {
        const labels: Record<string, string> = {
            critical: 'Kritik',
            warning: 'Azalıyor',
            excess: 'Fazla',
            normal: 'Normal'
        };
        return (
            <span className={`px-3 py-1.5 rounded-lg text-xs font-bold border ${getStatusColor(status)}`}>
                {labels[status]}
            </span>
        );
    };

    if (data.length === 0) {
        return (
            <main className="min-h-screen bg-slate-50 dark:bg-slate-950 p-6 md:p-8">
                <div className="max-w-3xl mx-auto space-y-8 text-center pt-20">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-orange-600 mb-6 shadow-xl shadow-primary/20 animate-in zoom-in duration-500">
                        <Package className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-4xl font-bold text-primary">
                        Stok Yönetim Paneli
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-lg mx-auto">
                        Başlamak için ERP sisteminizden aldığınız Excel dosyasını yükleyin.
                        Yapay zeka envanterinizi analiz edip sipariş önerileri sunacak.
                    </p>

                    <div className="bg-white dark:bg-slate-900 rounded-xl border-2 border-dashed border-slate-200 dark:border-slate-800 p-8 shadow-sm hover:border-primary/50 transition-colors">
                        <FileUpload onDataLoaded={handleDataLoaded} />
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-left mt-12 opacity-60">
                        <div className="p-4 bg-white rounded-lg border">
                            <Zap className="w-5 h-5 mb-2 text-yellow-500" />
                            <h4 className="font-bold text-sm">Hızlı Analiz</h4>
                            <p className="text-xs text-muted-foreground">Saniyeler içinde sonuç</p>
                        </div>
                        <div className="p-4 bg-white rounded-lg border">
                            <Activity className="w-5 h-5 mb-2 text-green-500" />
                            <h4 className="font-bold text-sm">AI Tahmin</h4>
                            <p className="text-xs text-muted-foreground">Kritik stok uyarısı</p>
                        </div>
                        <div className="p-4 bg-white rounded-lg border">
                            <ShoppingCart className="w-5 h-5 mb-2 text-blue-500" />
                            <h4 className="font-bold text-sm">Sipariş Planı</h4>
                            <p className="text-xs text-muted-foreground">Otomatik liste</p>
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 p-6">
            <div className="max-w-[1600px] mx-auto space-y-8">

                {/* Header & Controls */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
                            <LayoutDashboard className="w-6 h-6" /> Envanter Paneli
                        </h1>
                        <p className="text-muted-foreground">Toplam {data.length} ürün, Sağlık Skoru: <span className="font-bold text-green-600">{kpis.healthScore}/100</span></p>
                    </div>

                    <div className="flex items-center gap-3 w-full md:w-auto">
                        <div className="relative flex-1 md:w-64">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <input
                                className="w-full pl-9 pr-4 py-2 rounded-xl border border-border bg-white dark:bg-slate-900 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                placeholder="Ürün ara..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <Button variant="outline" onClick={handleReset} size="icon" title="Sıfırla">
                            <RotateCcw className="w-4 h-4" />
                        </Button>
                        <Button onClick={startAnalysis} disabled={isProcessing} className="bg-primary text-primary-foreground">
                            {isProcessing ? 'Analiz Ediliyor...' : 'Yeniden Analiz Et'}
                        </Button>
                    </div>
                </div>

                {/* Processing State */}
                {(isProcessing || processedCount > 0) && processedCount < data.length && (
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-border shadow-sm animate-pulse">
                        <div className="flex justify-between items-center mb-4">
                            <div>
                                <h3 className="font-semibold text-primary">AI Analizi Devam Ediyor</h3>
                                <p className="text-sm text-muted-foreground">Ürünler analiz edilerek sipariş önerileri oluşturuluyor...</p>
                            </div>
                            <span className="text-primary font-bold">{Math.round(progress)}%</span>
                        </div>
                        <Progress value={progress} className="h-2" />
                    </div>
                )}


                {/* Navigation Tabs (View Selector) */}
                <div className="flex gap-2 p-1.5 bg-white dark:bg-slate-900 rounded-xl border border-border w-fit shadow-sm">
                    <button
                        onClick={() => setView('dashboard')}
                        className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-all ${view === 'dashboard' ? 'bg-primary text-primary-foreground shadow-md' : 'hover:bg-slate-50 dark:hover:bg-slate-800 text-muted-foreground'}`}
                    >
                        <BarChart3 className="w-4 h-4" /> Genel Bakış
                    </button>
                    <button
                        onClick={() => setView('products')}
                        className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-all ${view === 'products' ? 'bg-primary text-primary-foreground shadow-md' : 'hover:bg-slate-50 dark:hover:bg-slate-800 text-muted-foreground'}`}
                    >
                        <Package className="w-4 h-4" /> Ürün Listesi
                    </button>
                </div>

                {view === 'dashboard' && (
                    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
                        {/* KPIs */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <KPICard
                                title="Toplam Stok Adedi"
                                value={kpis.totalStock.toLocaleString()}
                                icon={Package}
                                color="bg-orange-100 text-orange-600 dark:bg-orange-950/30"
                                trend={2.5}
                            />
                            <KPICard
                                title="Kritik Stok"
                                value={kpis.criticalCount}
                                subtitle="Acil Sipariş Gerekli"
                                icon={AlertTriangle}
                                color="bg-red-100 text-red-600 dark:bg-red-950/30"
                                trend={-5}
                            />
                            <KPICard
                                title="AI Sipariş Önerisi"
                                value={kpis.needsOrder}
                                subtitle="Ürün için öneri var"
                                icon={ShoppingCart}
                                color="bg-blue-100 text-blue-600 dark:bg-blue-950/30"
                                trend={12}
                            />
                            {/* Health Score Widget */}
                            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-border flex flex-col justify-between items-center text-center">
                                <h3 className="font-medium text-muted-foreground text-sm">Envanter Sağlık Skoru</h3>
                                <div className="relative w-24 h-24 flex items-center justify-center my-2">
                                    <svg className="w-full h-full transform -rotate-90">
                                        <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-100 dark:text-slate-800" />
                                        <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray={251.2} strokeDashoffset={251.2 * (1 - kpis.healthScore / 100)} className="text-green-500 transition-all duration-1000" />
                                    </svg>
                                    <span className="absolute text-2xl font-bold">{Math.round(kpis.healthScore)}</span>
                                </div>
                                <p className="text-xs text-muted-foreground">Mükemmel seviyedesiniz!</p>
                            </div>
                        </div>

                        {/* Charts Section */}
                        <div className="grid lg:grid-cols-3 gap-6">
                            {/* Forecast Chart */}
                            <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-2xl border border-border p-6">
                                <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5 text-primary" /> 7 Günlük Talep Tahmini
                                </h3>
                                <div className="h-[300px] w-full">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart data={forecastData}>
                                            <defs>
                                                <linearGradient id="colorForecast" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#f97316" stopOpacity={0.8} />
                                                    <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                                            <XAxis dataKey="name" axisLine={false} tickLine={false} />
                                            <YAxis axisLine={false} tickLine={false} />
                                            <Tooltip
                                                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                                            />
                                            <Area type="monotone" dataKey="forecast" stroke="#f97316" fillOpacity={1} fill="url(#colorForecast)" name="Tahmin" />
                                            <Area type="monotone" dataKey="sales" stroke="#94a3b8" fill="transparent" strokeDasharray="5 5" name="Geçen Hafta" />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>

                            {/* Risk Alerts Panel */}
                            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-border p-6 flex flex-col">
                                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5 text-red-500" /> Risk Altındaki Ürünler
                                </h3>
                                <div className="flex-1 overflow-y-auto pr-2 space-y-3 max-h-[300px]">
                                    {enhancedData.filter(p => p.status === 'critical').length === 0 ? (
                                        <div className="text-center py-8 text-muted-foreground">
                                            <CheckCircle className="w-8 h-8 mx-auto mb-2 text-green-500" />
                                            Riskli ürün bulunmuyor.
                                        </div>
                                    ) : (
                                        enhancedData.filter(p => p.status === 'critical').slice(0, 10).map((product, i) => (
                                            <div key={i} className="flex items-center justify-between p-3 bg-red-50/50 dark:bg-red-950/10 rounded-xl border border-red-100 dark:border-red-900/50">
                                                <div className="overflow-hidden">
                                                    <p className="font-medium text-sm truncate">{product.KOD}</p>
                                                    <p className="text-xs text-red-600 font-medium">Stok: {product.currentStock} • {product.daysUntilOut} gün kaldı</p>
                                                </div>
                                                <Button size="sm" variant="outline" className="h-7 text-xs border-red-200 text-red-700 hover:bg-red-100">
                                                    İncele
                                                </Button>
                                            </div>
                                        ))
                                    )}
                                </div>
                                <Button variant="ghost" className="w-full mt-4 text-xs" onClick={() => { setView('products'); setStatusFilter('critical'); }}>
                                    Tüm Riskleri Gör →
                                </Button>
                            </div>
                        </div>
                    </div>
                )}

                {view === 'products' && (
                    <div className="space-y-4 animate-in slide-in-from-bottom-4 duration-500">
                        {/* Filters */}
                        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-border flex flex-wrap gap-4 items-center shadow-sm">
                            <span className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                                <Filter className="w-4 h-4" /> Filtrele:
                            </span>
                            <select
                                className="px-3 py-1.5 rounded-lg border border-border bg-transparent text-sm focus:ring-2 focus:ring-primary/20 outline-none cursor-pointer hover:bg-slate-50"
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                            >
                                <option value="all">Tüm Durumlar</option>
                                <option value="critical">Kritik Stok</option>
                                <option value="warning">Azalıyor</option>
                                <option value="excess">Fazla Stok</option>
                                <option value="normal">Normal</option>
                            </select>
                        </div>

                        {/* Table */}
                        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-border overflow-hidden shadow-sm">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm text-left">
                                    <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-border text-muted-foreground uppercase text-xs">
                                        <tr>
                                            <th className="px-6 py-4 font-semibold">Ürün Kodu</th>
                                            <th className="px-6 py-4 font-semibold">Mevcut Stok</th>
                                            <th className="px-6 py-4 font-semibold">Satış Hızı (Ort)</th>
                                            <th className="px-6 py-4 font-semibold">Tükenme (Gün)</th>
                                            <th className="px-6 py-4 font-semibold">Risk Seviyesi</th>
                                            <th className="px-6 py-4 font-semibold">AI Önerisi</th>
                                            <th className="px-6 py-4 font-semibold">Sebep</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border">
                                        {filteredProducts.slice(0, 100).map((product, idx) => (
                                            <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                                                <td className="px-6 py-4 font-medium group-hover:text-primary transition-colors">{product.KOD}</td>
                                                <td className="px-6 py-4 font-mono">{product.currentStock}</td>
                                                <td className="px-6 py-4 font-mono">{product.dailyAvg}</td>
                                                <td className="px-6 py-4">
                                                    <span className={`font-mono ${product.daysUntilOut < 7 ? 'text-red-600 font-bold' : ''}`}>
                                                        {product.daysUntilOut}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <StatusBadge status={product.status} />
                                                </td>
                                                <td className="px-6 py-4">
                                                    {product.aiNeed > 0 ? (
                                                        <span className="text-orange-600 font-bold flex items-center gap-1 bg-orange-50 px-2 py-1 rounded w-fit">
                                                            +{product.aiNeed}
                                                            <ShoppingCart className="w-3 h-3" />
                                                        </span>
                                                    ) : '-'}
                                                </td>
                                                <td className="px-6 py-4 text-muted-foreground max-w-xs truncate" title={product.aiReason}>
                                                    {product.aiReason || '-'}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            {filteredProducts.length > 100 && (
                                <div className="p-4 text-center text-muted-foreground border-t border-border">
                                    İlk 100 kayıt gösteriliyor. Daha fazlası için filtreleri kullanın.
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}

function CheckCircle(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg> }
import { LayoutDashboard } from "lucide-react";
