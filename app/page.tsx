"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Zap, BarChart2, Smartphone, ShoppingBag, Coffee, Book, Check, RotateCw } from "lucide-react";

export default function LandingPage() {
    return (
        <main className="flex min-h-screen flex-col font-sans">
            {/* Hero Section */}
            <section className="relative overflow-hidden pt-24 pb-32 landing-hero-bg">
                {/* Background Decoration */}
                <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.08)_0%,transparent_70%)] animate-float opacity-70 pointer-events-none" />

                <div className="container px-4 md:px-6 relative z-10">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                        <div className="flex flex-col justify-center space-y-6">
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                                Yapay Zeka ile <br />
                                <span className="landing-gradient-text">Stok Devrimi</span>
                            </h1>
                            <p className="max-w-[540px] text-lg md:text-xl text-slate-500 leading-relaxed">
                                Fazla stoğu azaltın, yok satmaları önleyin ve satın alma kararlarınızı yapay zekaya bırakın. E-ticaret ve perakende için akıllı envanter yönetimi.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                <Link href="/dashboard">
                                    <Button size="lg" className="h-14 px-8 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 text-lg font-bold">
                                        Ücretsiz Dene
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>
                                <Link href="/contact">
                                    <Button size="lg" variant="outline" className="h-14 px-8 rounded-2xl border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300 text-lg font-semibold bg-transparent">
                                        Demo Talep Et
                                    </Button>
                                </Link>
                            </div>
                            <p className="text-sm text-slate-400 font-medium">
                                *Kredi kartı gerekmez. 14 gün ücretsiz deneme.
                            </p>
                        </div>

                        {/* Hero Visual */}
                        <div className="relative mx-auto w-full max-w-[600px] lg:max-w-none">
                            <div className="relative p-12 rounded-[32px] bg-gradient-to-br from-slate-900 to-slate-950 shadow-2xl overflow-hidden border border-white/5 group">
                                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>

                                <div className="flex flex-col items-center justify-center relative z-10">
                                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-8 animate-pulse-slow shadow-lg shadow-orange-500/25">
                                        <Zap className="h-10 w-10 text-white" fill="currentColor" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-8 text-center">AI Analiz Motoru Çalışıyor...</h3>

                                    <div className="flex flex-wrap gap-4 justify-center">
                                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/15 border border-green-500/30 text-green-400 font-semibold text-sm">
                                            <span className="w-2 h-2 rounded-full bg-green-400 animate-[pulse_1.5s_infinite]"></span>
                                            Tahmin %98.2 Doğruluk
                                        </div>
                                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-400 font-semibold text-sm">
                                            <span className="w-2 h-2 rounded-full bg-blue-400 animate-[pulse_1.5s_infinite]"></span>
                                            Senkronizasyon Aktif
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="w-full py-12 border-y border-slate-100 bg-white">
                <div className="container px-4 md:px-6">
                    <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">
                        500+ İşletme Tarafından Güveniliyor
                    </p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                        <div className="flex items-center gap-3 px-8 py-4 bg-slate-50 rounded-xl border border-slate-100 font-bold text-slate-600 transition-colors hover:border-orange-200 hover:text-orange-600">
                            <Smartphone className="h-6 w-6" /> TeknoStore
                        </div>
                        <div className="flex items-center gap-3 px-8 py-4 bg-slate-50 rounded-xl border border-slate-100 font-bold text-slate-600 transition-colors hover:border-orange-200 hover:text-orange-600">
                            <ShoppingBag className="h-6 w-6" /> ModaButik
                        </div>
                        <div className="flex items-center gap-3 px-8 py-4 bg-slate-50 rounded-xl border border-slate-100 font-bold text-slate-600 transition-colors hover:border-orange-200 hover:text-orange-600">
                            <Coffee className="h-6 w-6" /> CafeZinciri
                        </div>
                        <div className="flex items-center gap-3 px-8 py-4 bg-slate-50 rounded-xl border border-slate-100 font-bold text-slate-600 transition-colors hover:border-orange-200 hover:text-orange-600">
                            <Book className="h-6 w-6" /> KitapDünyası
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="w-full py-32 bg-white">
                <div className="container px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="inline-block py-2 px-5 rounded-full bg-orange-50 text-orange-600 font-semibold text-sm uppercase tracking-wide mb-6">
                            Özellikler
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            İşletmenizi Büyüten Akıllı Araçlar
                        </h2>
                        <p className="text-xl text-slate-500">
                            StokAI, verilerinizi sürekli analiz eder ve "Ne Zaman?", "Ne Kadar?" sorularını sizin yerinize yanıtlar.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<Brain className="h-8 w-8 text-amber-600" />}
                            iconBg="bg-gradient-to-br from-amber-100 to-amber-200"
                            title="AI Talep Tahmini"
                            description="Gelecekteki satışları %90+ doğrulukla tahmin edin."
                        />
                        <FeatureCard
                            icon={<Zap className="h-8 w-8 text-blue-600" />}
                            iconBg="bg-gradient-to-br from-blue-100 to-blue-200"
                            title="Akıllı Uyarılar"
                            description="Kritik stok ve aşırı stok durumlarında anlık bildirim alın."
                        />
                        <FeatureCard
                            icon={<RotateCw className="h-8 w-8 text-pink-600" />}
                            iconBg="bg-gradient-to-br from-pink-100 to-pink-200"
                            title="Çoklu Entegrasyon"
                            description="Shopify, Amazon ve WooCommerce ile tam senkronize."
                        />
                        <FeatureCard
                            icon={<BarChart2 className="h-8 w-8 text-green-600" />}
                            iconBg="bg-gradient-to-br from-green-100 to-green-200"
                            title="Otomatik Raporlar"
                            description="Haftalık performans ve karlılık raporları e-postanızda."
                        />
                        <FeatureCard
                            icon={<ShoppingBag className="h-8 w-8 text-indigo-600" />}
                            iconBg="bg-gradient-to-br from-indigo-100 to-indigo-200"
                            title="Satın Alma Planı"
                            description="AI size en uygun sipariş listesini hazırlasın."
                        />
                        <FeatureCard
                            icon={<Zap className="h-8 w-8 text-orange-600" />}
                            iconBg="bg-gradient-to-br from-orange-100 to-orange-200"
                            title="Anlık Senkronizasyon"
                            description="Stok değişimleri tüm kanallara anında yansır."
                        />
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="w-full py-32 landing-hero-bg">
                <div className="container px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="inline-block py-2 px-5 rounded-full bg-orange-50 text-orange-600 font-semibold text-sm uppercase tracking-wide mb-6">
                            Fiyatlandırma
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            Her Ölçek İçin Uygun Fiyatlar
                        </h2>
                        <p className="text-xl text-slate-500">
                            Gizli ücret yok. İstediğiniz zaman iptal edin.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Starter Plan */}
                        <div className="bg-white rounded-[32px] p-10 border-2 border-slate-100 hover:border-orange-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                            <div className="text-center mb-8">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Başlangıç</h3>
                                <div className="flex justify-center items-baseline text-slate-900 mb-2">
                                    <sup className="text-2xl font-bold">₺</sup>
                                    <span className="text-6xl font-extrabold tracking-tight">499</span>
                                    <sub className="text-lg text-slate-500 font-medium">/ay</sub>
                                </div>
                                <p className="text-slate-500">Küçük işletmeler için.</p>
                            </div>
                            <ul className="space-y-4 mb-8">
                                <PricingItem text="1 Mağaza Entegrasyonu" />
                                <PricingItem text="Temel Tahminleme" />
                                <PricingItem text="Günlük Güncelleme" />
                            </ul>
                            <Button className="w-full h-12 rounded-2xl bg-slate-900 text-white hover:bg-slate-800 text-base font-bold">
                                Ücretsiz Başla
                            </Button>
                        </div>

                        {/* Growth Plan (Popular) */}
                        <div className="bg-white rounded-[32px] p-10 border-2 border-orange-500 relative shadow-2xl scale-105 z-10">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                                Popüler
                            </div>
                            <div className="text-center mb-8">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Büyüme</h3>
                                <div className="flex justify-center items-baseline text-slate-900 mb-2">
                                    <sup className="text-2xl font-bold">₺</sup>
                                    <span className="text-6xl font-extrabold tracking-tight">999</span>
                                    <sub className="text-lg text-slate-500 font-medium">/ay</sub>
                                </div>
                                <p className="text-slate-500">Hızlı büyüyen markalar için.</p>
                            </div>
                            <ul className="space-y-4 mb-8">
                                <PricingItem text="3 Mağaza Entegrasyonu" />
                                <PricingItem text="Gelişmiş AI Analizi" />
                                <PricingItem text="Saatlik Güncelleme" />
                                <PricingItem text="Akıllı Satın Alma" />
                            </ul>
                            <Button className="w-full h-12 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/30 text-base font-bold">
                                Hemen Başla
                            </Button>
                        </div>

                        {/* Enterprise Plan */}
                        <div className="bg-white rounded-[32px] p-10 border-2 border-slate-100 hover:border-orange-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                            <div className="text-center mb-8">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Kurumsal</h3>
                                <div className="flex justify-center items-baseline text-slate-900 mb-2">
                                    <span className="text-5xl font-extrabold tracking-tight">Özel</span>
                                    <sub className="text-lg text-slate-500 font-medium">/teklif</sub>
                                </div>
                                <p className="text-slate-500">Büyük operasyonlar için.</p>
                            </div>
                            <ul className="space-y-4 mb-8">
                                <PricingItem text="Sınırsız Entegrasyon" />
                                <PricingItem text="Özel Model Eğitimi" />
                                <PricingItem text="Dedicated Destek" />
                            </ul>
                            <Button className="w-full h-12 rounded-2xl bg-slate-900 text-white hover:bg-slate-800 text-base font-bold">
                                Teklif Al
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full py-32 bg-gradient-to-br from-orange-500 to-orange-600 relative overflow-hidden">
                <div className="absolute top-[-50%] left-[-10%] w-[500px] h-[500px] rounded-full bg-white opacity-10 pointer-events-none" />

                <div className="container px-4 md:px-6 text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Stok Sorunlarını Tarihe Gömün
                    </h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium">
                        İlk 14 gün ücretsiz. Kurulum sadece 2 dakika. Kredi kartı gerekmez.
                    </p>
                    <Link href="/dashboard">
                        <Button size="lg" className="h-16 px-10 rounded-2xl bg-white text-orange-600 hover:bg-slate-50 hover:scale-105 shadow-2xl text-lg font-extrabold transition-all duration-300">
                            Ücretsiz Denemeyi Başlat
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="w-full py-16 bg-slate-950 text-slate-400">
                <div className="container px-4 grid md:grid-cols-4 gap-12">
                    <div className="col-span-2 space-y-4">
                        <div className="text-2xl font-bold text-white tracking-tight">
                            Stok <span className="text-orange-500">Analiz AI</span>
                        </div>
                        <p className="text-slate-400 max-w-xs leading-relaxed">
                            E-ticaret ve perakende işletmeleri için yeni nesil yapay zeka destekli envanter yönetim platformu.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Ürün</h4>
                        <ul className="space-y-3">
                            <li><Link href="/#features" className="hover:text-orange-500 transition-colors">Özellikler</Link></li>
                            <li><Link href="/#pricing" className="hover:text-orange-500 transition-colors">Fiyatlandırma</Link></li>
                            <li><Link href="/integrations" className="hover:text-orange-500 transition-colors">Entegrasyonlar</Link></li>
                            <li><Link href="/dashboard" className="hover:text-orange-500 transition-colors">Giriş Yap</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Kaynaklar</h4>
                        <ul className="space-y-3">
                            <li><Link href="/resources" className="hover:text-orange-500 transition-colors">Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-orange-500 transition-colors">İletişim</Link></li>
                            <li><Link href="#" className="hover:text-orange-500 transition-colors">Yardım Merkezi</Link></li>
                            <li><Link href="#" className="hover:text-orange-500 transition-colors">API Dokümanı</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="container px-4 mt-16 pt-8 border-t border-slate-900 text-center text-sm font-medium">
                    © 2024 StokAI Teknoloji A.Ş. Tüm hakları saklıdır.
                </div>
            </footer>
        </main>
    );
}

function FeatureCard({ icon, iconBg, title, description }: { icon: React.ReactNode; iconBg: string; title: string; description: string }) {
    return (
        <div className="group p-10 rounded-[24px] bg-slate-50 border border-slate-100 hover:border-orange-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className={`w-16 h-16 rounded-2xl ${iconBg} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                {icon}
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
            <p className="text-slate-500 leading-relaxed font-medium">{description}</p>
        </div>
    );
}

function PricingItem({ text }: { text: string }) {
    return (
        <li className="flex items-center gap-3 text-slate-600 font-medium">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                <Check className="w-3 h-3 font-bold" strokeWidth={4} />
            </div>
            {text}
        </li>
    );
}
