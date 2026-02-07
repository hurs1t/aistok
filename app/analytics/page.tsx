"use client";

import { BarChart, TrendingUp, DollarSign, Activity, Archive } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AnalyticsPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col space-y-4 mb-8">
                    <h1 className="text-3xl font-bold tracking-tight">Performans Analitiği</h1>
                    <p className="text-muted-foreground">
                        Envanter performansınızı ve finansal metriklerinizi takip edin.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <MetricCard
                        title="Stok Devir Hızı"
                        value="4.2x"
                        desc="Yıllık ortalama"
                        icon={<RefreshIcon className="h-4 w-4 text-muted-foreground" />}
                    />
                    <MetricCard
                        title="Satış Oranı (Sell-through)"
                        value="%68"
                        desc="Son 30 gün"
                        icon={<TrendingUp className="h-4 w-4 text-green-500" />}
                    />
                    <MetricCard
                        title="Elde Tutma Maliyeti"
                        value="₺12,450"
                        desc="Aylık tahmini"
                        icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
                    />
                    <MetricCard
                        title="Ölü Stok Oranı"
                        value="%12"
                        desc="Hareketsiz ürünler"
                        icon={<Archive className="h-4 w-4 text-red-500" />}
                    />
                </div>

                <div className="grid gap-6 md:grid-cols-2 mt-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Tahmin Doğruluğu</CardTitle>
                        </CardHeader>
                        <CardContent className="h-[300px] flex items-center justify-center bg-slate-100 dark:bg-slate-900 rounded-md">
                            <p className="text-muted-foreground">Doğruluk Grafiği (Mock)</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Kategori Bazlı Performans</CardTitle>
                        </CardHeader>
                        <CardContent className="h-[300px] flex items-center justify-center bg-slate-100 dark:bg-slate-900 rounded-md">
                            <p className="text-muted-foreground">Kategori Grafiği (Mock)</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    );
}

function MetricCard({ title, value, desc, icon }: any) {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                    {title}
                </CardTitle>
                {icon}
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{value}</div>
                <p className="text-xs text-muted-foreground">
                    {desc}
                </p>
            </CardContent>
        </Card>
    )
}

function RefreshIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
            <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
            <path d="M16 16h5v5" />
        </svg>
    )
}
