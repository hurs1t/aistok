"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, TrendingUp, AlertTriangle, RefreshCw, BarChart2, CheckCircle, Smartphone, Zap } from "lucide-react";

export default function LandingPage() {
    return (
        <main className="flex min-h-screen flex-col">
            {/* 1. Hero Section */}
            <section className="relative overflow-hidden bg-background py-20 md:py-32">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                        <div className="flex flex-col justify-center space-y-8">
                            <div className="space-y-4">
                                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                                    Yapay Zeka ile <br />
                                    <span className="text-primary">Stok Devrimi</span>
                                </h1>
                                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Fazla stoğu azaltın, yok satmaları önleyin ve satın alma kararlarınızı yapay zekaya bırakın. E-ticaret ve perakende için akıllı envanter yönetimi.
                                </p>
                            </div>
                            <div className="flex flex-col gap-3 min-[400px]:flex-row">
                                <Link href="/dashboard">
                                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                                        Ücretsiz Dene
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                                <Link href="/contact">
                                    <Button size="lg" variant="outline">
                                        Demo Talep Et
                                    </Button>
                                </Link>
                            </div>
                            <p className="text-xs text-muted-foreground">
                                *Kredi kartı gerekmez. 14 gün ücretsiz deneme.
                            </p>
                        </div>

                        {/* Dashboard Preview / Animation Placeholder */}
                        <div className="mx-auto w-full max-w-[600px] lg:max-w-none">
                            <div className="relative aspect-video rounded-xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 opacity-50"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center space-y-2">
                                        <Zap className="h-12 w-12 text-yellow-400 mx-auto animate-pulse" />
                                        <p className="text-white font-medium">AI Analiz Motoru Çalışıyor...</p>
                                        <div className="flex gap-2 justify-center mt-4">
                                            <span className="bg-slate-800 text-green-400 px-2 py-1 rounded text-xs">Tahmin: %98.2 Doğruluk</span>
                                            <span className="bg-slate-800 text-blue-400 px-2 py-1 rounded text-xs">Senkronizasyon: Aktif</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Social Proof */}
            <section className="w-full py-12 border-y bg-slate-50 dark:bg-slate-900/50">
                <div className="container px-4 md:px-6 text-center">
                    <p className="text-sm font-semibold text-muted-foreground mb-6 uppercase tracking-wider">
                        500+ İşletme Tarafından Güveniliyor
                    </p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all">
                        <div className="flex items-center gap-2 font-bold text-xl"><Smartphone /> TeknoStore</div>
                        <div className="flex items-center gap-2 font-bold text-xl"><ShoppingBagIcon /> ModaButik</div>
                        <div className="flex items-center gap-2 font-bold text-xl"><Coffee /> CafeZinciri</div>
                        <div className="flex items-center gap-2 font-bold text-xl"><Book /> KitapDünyası</div>
                    </div>
                </div>
            </section>

            {/* 3. Problem -> Solution */}
            <section className="w-full py-20">
                <div className="container px-4 md:px-6">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="space-y-2 p-6 rounded-2xl bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20">
                            <h3 className="text-xl font-bold text-red-600">📉 Fazla Stok Maliyeti</h3>
                            <p className="text-muted-foreground">Nakit akışınızı raflarda bekleyen ürünlere mi bağlıyorsunuz?</p>
                        </div>
                        <div className="space-y-2 p-6 rounded-2xl bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/20">
                            <h3 className="text-xl font-bold text-orange-600">🚫 Stoksuz Kalma</h3>
                            <p className="text-muted-foreground">Müşterileriniz ürün bulamayıp rakibe mi gidiyor?</p>
                        </div>
                        <div className="space-y-2 p-6 rounded-2xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/20">
                            <h3 className="text-xl font-bold text-blue-600">🤯 Manuel Excel Kaosu</h3>
                            <p className="text-muted-foreground">Saatlerce veri girmekten ve analiz yapmaktan yoruldunuz mu?</p>
                        </div>
                    </div>
                    <div className="text-center mt-12">
                        <h2 className="text-3xl font-bold">Çözüm: Otopilot Envanter Yönetimi</h2>
                        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                            StokAI, verilerinizi sürekli analiz eder ve sizin yerinize "Ne Zaman?", "Ne Kadar?" sorularını yanıtlar.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. Features Summary */}
            <section className="w-full py-20 bg-slate-50 dark:bg-slate-900">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                        <span className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
                            Özellikler
                        </span>
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                            İşletmenizi Büyüten Akıllı Araçlar
                        </h2>
                    </div>
                    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
                        <FeatureCard
                            icon={<Brain className="h-10 w-10 text-primary" />}
                            title="AI Talep Tahmini"
                            description="Gelecekteki satışları %90+ doğrulukla tahmin edin."
                        />
                        <FeatureCard
                            icon={<AlertTriangle className="h-10 w-10 text-orange-500" />}
                            title="Akıllı Uyarılar"
                            description="Kritik stok ve aşırı stok durumlarında anlık bildirim alın."
                        />
                        <FeatureCard
                            icon={<RefreshCw className="h-10 w-10 text-blue-500" />}
                            title="Çoklu Entegrasyon"
                            description="Shopify, Amazon ve WooCommerce ile tam senkronize."
                        />
                        <FeatureCard
                            icon={<BarChart2 className="h-10 w-10 text-purple-500" />}
                            title="Otomatik Raporlar"
                            description="Haftalık performans ve karlılık raporları e-postanızda."
                        />
                        <FeatureCard
                            icon={<TrendingUp className="h-10 w-10 text-green-500" />}
                            title="Satın Alma Planı"
                            description="AI size en uygun sipariş listesini hazırlasın."
                        />
                        <FeatureCard
                            icon={<Zap className="h-10 w-10 text-yellow-500" />}
                            title="Anlık Senkronizasyon"
                            description="Stok değişimleri tüm kanallara anında yansır."
                        />
                    </div>
                </div>
            </section>

            {/* 5. Pricing Preview */}
            <section className="w-full py-20">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold">Her Ölçek İçin Uygun Fiyatlar</h2>
                        <p className="text-muted-foreground mt-2">Gizli ücret yok. İstediğiniz zaman iptal edin.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* Starter */}
                        <div className="p-8 rounded-2xl border bg-card flex flex-col">
                            <h3 className="font-bold text-xl">Başlangıç</h3>
                            <div className="text-3xl font-bold mt-4">₺499<span className="text-sm font-normal text-muted-foreground">/ay</span></div>
                            <p className="text-muted-foreground mt-2 text-sm">Küçük işletmeler için.</p>
                            <ul className="mt-6 space-y-3 flex-1">
                                <li className="flex gap-2 text-sm"><CheckCircle className="h-4 w-4 text-green-500" /> 1 Mağaza Entegrasyonu</li>
                                <li className="flex gap-2 text-sm"><CheckCircle className="h-4 w-4 text-green-500" /> Temel Tahminleme</li>
                                <li className="flex gap-2 text-sm"><CheckCircle className="h-4 w-4 text-green-500" /> Günlük Güncelleme</li>
                            </ul>
                            <Button className="w-full mt-8" variant="outline">Ücretsiz Başla</Button>
                        </div>
                        {/* Growth */}
                        <div className="p-8 rounded-2xl border-2 border-primary bg-card flex flex-col relative shadow-xl">
                            <div className="absolute top-0 right-0 bg-primary text-white text-xs px-3 py-1 rounded-bl-xl font-bold">POPÜLER</div>
                            <h3 className="font-bold text-xl text-primary">Büyüme</h3>
                            <div className="text-3xl font-bold mt-4">₺999<span className="text-sm font-normal text-muted-foreground">/ay</span></div>
                            <p className="text-muted-foreground mt-2 text-sm">Hızlı büyüyen markalar için.</p>
                            <ul className="mt-6 space-y-3 flex-1">
                                <li className="flex gap-2 text-sm"><CheckCircle className="h-4 w-4 text-primary" /> 3 Mağaza Entegrasyonu</li>
                                <li className="flex gap-2 text-sm"><CheckCircle className="h-4 w-4 text-primary" /> Gelişmiş AI Analizi</li>
                                <li className="flex gap-2 text-sm"><CheckCircle className="h-4 w-4 text-primary" /> Saatlik Güncelleme</li>
                                <li className="flex gap-2 text-sm"><CheckCircle className="h-4 w-4 text-primary" /> Akıllı Satın Alma</li>
                            </ul>
                            <Button className="w-full mt-8">Hemen Başla</Button>
                        </div>
                        {/* Enterprise */}
                        <div className="p-8 rounded-2xl border bg-card flex flex-col">
                            <h3 className="font-bold text-xl">Kurumsal</h3>
                            <div className="text-3xl font-bold mt-4">Özel<span className="text-sm font-normal text-muted-foreground">/teklif</span></div>
                            <p className="text-muted-foreground mt-2 text-sm">Büyük operasyonlar için.</p>
                            <ul className="mt-6 space-y-3 flex-1">
                                <li className="flex gap-2 text-sm"><CheckCircle className="h-4 w-4 text-green-500" /> Sınırsız Entegrasyon</li>
                                <li className="flex gap-2 text-sm"><CheckCircle className="h-4 w-4 text-green-500" /> Özel Model Eğitimi</li>
                                <li className="flex gap-2 text-sm"><CheckCircle className="h-4 w-4 text-green-500" /> Dedicated Destek</li>
                            </ul>
                            <Button className="w-full mt-8" variant="outline">Teklif Al</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Final CTA */}
            <section className="w-full py-24 bg-primary text-primary-foreground text-center">
                <div className="container px-4">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Stok Sorunlarını Tarihe Gömün</h2>
                    <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                        İlk 14 gün bizden. Kredi kartı gerekmez. Kurulum sadece 2 dakika.
                    </p>
                    <Link href="/dashboard">
                        <Button size="lg" className="bg-background text-foreground hover:bg-background/90 text-lg px-8 py-6">
                            Ücretsiz Denemeyi Başlat
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="w-full py-12 bg-slate-950 text-slate-400 text-sm">
                <div className="container px-4 grid md:grid-cols-4 gap-8">
                    <div className="col-span-2">
                        <span className="text-white font-bold text-lg">StokAI</span>
                        <p className="mt-4 max-w-xs">E-ticaret ve perakende işletmeleri için yeni nesil yapay zeka destekli envanter yönetim platformu.</p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Ürün</h4>
                        <ul className="space-y-2">
                            <li><Link href="/features">Özellikler</Link></li>
                            <li><Link href="/pricing">Fiyatlandırma</Link></li>
                            <li><Link href="/integrations">Entegrasyonlar</Link></li>
                            <li><Link href="/dashboard">Giriş Yap</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Kaynaklar</h4>
                        <ul className="space-y-2">
                            <li><Link href="/resources">Blog</Link></li>
                            <li><Link href="/contact">İletişim</Link></li>
                            <li><Link href="#">Yardım Merkezi</Link></li>
                            <li><Link href="#">API Dokümanı</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="container px-4 mt-12 pt-8 border-t border-slate-800 text-center">
                    © 2024 StokAI Teknoloji A.Ş. Tüm hakları saklıdır.
                </div>
            </footer>
        </main>
    );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
        <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm hover:shadow-md transition-shadow bg-background">
            <div className="mb-2">{icon}</div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-center text-sm text-muted-foreground">{description}</p>
        </div>
    );
}

// Icons
function ShoppingBagIcon(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg> }
function Coffee(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v2" /><path d="M14 2v2" /><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" /><line x1="6" x2="6" y1="2" y2="4" /></svg> }
function Book(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg> }
