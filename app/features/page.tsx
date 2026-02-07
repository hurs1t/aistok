"use client";

import { Brain, Bell, ShoppingCart, RefreshCw, FileText } from "lucide-react";

export default function FeaturesPage() {
    return (
        <main className="min-h-screen bg-background">
            <section className="py-20 md:py-32">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
                            Platform Özellikleri
                        </h1>
                        <p className="max-w-[700px] text-muted-foreground md:text-xl">
                            Yapay zeka tabanlı envanter yönetiminin gücünü keşfedin.
                        </p>
                    </div>

                    <div className="mt-16 grid gap-12 lg:gap-16">

                        {/* 1. Demand Forecasting */}
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="space-y-4">
                                <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
                                    <Brain className="mr-2 h-4 w-4" /> Tahminleme
                                </div>
                                <h2 className="text-3xl font-bold">AI Talep Tahmini</h2>
                                <p className="text-muted-foreground text-lg">
                                    Geçmiş verilerinizi analiz ederek gelecekteki satışları öngörün. Mevsimsellik, trendler ve özel günleri dikkate alan gelişmiş modellerimizle stok yönetimini optimize edin.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center">✓ Geçmiş veri analizi</li>
                                    <li className="flex items-center">✓ Mevsimsellik tespiti</li>
                                    <li className="flex items-center">✓ Trend tahmini</li>
                                </ul>
                            </div>
                            <div className="bg-slate-100 dark:bg-slate-800 rounded-xl aspect-video flex items-center justify-center text-muted-foreground">
                                [Tahmin Grafiği Görseli]
                            </div>
                        </div>

                        {/* 2. Smart Alerts */}
                        <div className="grid md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
                            <div className="order-last md:order-first bg-slate-100 dark:bg-slate-800 rounded-xl aspect-video flex items-center justify-center text-muted-foreground">
                                [Uyarı Paneli Görseli]
                            </div>
                            <div className="space-y-4">
                                <div className="inline-flex items-center rounded-lg bg-red-100 dark:bg-red-900/30 px-3 py-1 text-sm text-red-600 font-medium">
                                    <Bell className="mr-2 h-4 w-4" /> Akıllı Uyarılar
                                </div>
                                <h2 className="text-3xl font-bold">Kritik Stok Bildirimleri</h2>
                                <p className="text-muted-foreground text-lg">
                                    Stok tükenme riskini önceden haber alın. Aşırı stoklanmış ürünleri ve hareketsiz (ölü) envanteri tespit ederek nakit akışınızı koruyun.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center">✓ Düşük stok riski</li>
                                    <li className="flex items-center">✓ Aşırı stok uyarısı</li>
                                    <li className="flex items-center">✓ Ölü stok tespiti</li>
                                </ul>
                            </div>
                        </div>

                        {/* 3. Purchase Recommendations */}
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="space-y-4">
                                <div className="inline-flex items-center rounded-lg bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-600 font-medium">
                                    <ShoppingCart className="mr-2 h-4 w-4" /> Satın Alma
                                </div>
                                <h2 className="text-3xl font-bold">AI Satın Alma Önerileri</h2>
                                <p className="text-muted-foreground text-lg">
                                    Ne zaman, ne kadar ve hangi tedarikçiden sipariş vermeniz gerektiğini sistem söylesin. Satın alma planlamasını otomatiğe bağlayın.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center">✓ Sipariş miktarı önerisi</li>
                                    <li className="flex items-center">✓ Zamanlama optimizasyonu</li>
                                </ul>
                            </div>
                            <div className="bg-slate-100 dark:bg-slate-800 rounded-xl aspect-video flex items-center justify-center text-muted-foreground">
                                [Sipariş Öneri Görseli]
                            </div>
                        </div>

                        {/* 4. Multi-Channel Sync */}
                        <div className="grid md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
                            <div className="order-last md:order-first bg-slate-100 dark:bg-slate-800 rounded-xl aspect-video flex items-center justify-center text-muted-foreground">
                                [Entegrasyon Görseli]
                            </div>
                            <div className="space-y-4">
                                <div className="inline-flex items-center rounded-lg bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm text-purple-600 font-medium">
                                    <RefreshCw className="mr-2 h-4 w-4" /> Entegrasyon
                                </div>
                                <h2 className="text-3xl font-bold">Çok Kanallı Senkronizasyon</h2>
                                <p className="text-muted-foreground text-lg">
                                    Shopify, WooCommerce, Amazon ve diğer platformlardaki stoklarınızı tek merkezden yönetin. CSV ve API desteği ile her sisteme uyumlu.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center">✓ Pazar yeri entegrasyonları</li>
                                    <li className="flex items-center">✓ Gerçek zamanlı senkronizasyon</li>
                                </ul>
                            </div>
                        </div>

                        {/* 5. Automated Reporting */}
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="space-y-4">
                                <div className="inline-flex items-center rounded-lg bg-green-100 dark:bg-green-900/30 px-3 py-1 text-sm text-green-600 font-medium">
                                    <FileText className="mr-2 h-4 w-4" /> Raporlama
                                </div>
                                <h2 className="text-3xl font-bold">Otomatik Raporlama</h2>
                                <p className="text-muted-foreground text-lg">
                                    Haftalık performans raporları, karlılık analizleri ve tahmin doğruluk raporları e-postanıza gelsin.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center">✓ Haftalık özetler</li>
                                    <li className="flex items-center">✓ Karlılık etkisi analizi</li>
                                </ul>
                            </div>
                            <div className="bg-slate-100 dark:bg-slate-800 rounded-xl aspect-video flex items-center justify-center text-muted-foreground">
                                [Rapor Görseli]
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
