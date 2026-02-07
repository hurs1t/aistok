"use client";

import Link from "next/link";
import { BookOpen, FileText, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ResourcesPage() {
    return (
        <main className="min-h-screen bg-background py-12">
            <div className="container px-4 md:px-6 mx-auto max-w-5xl">
                <div className="text-center space-y-4 mb-12">
                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Kaynaklar & Blog</h1>
                    <p className="text-xl text-muted-foreground">
                        Envanter yönetimi, AI ve e-ticaret hakkında rehberler.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <BlogCard
                        title="Stok Talebini Nasıl Tahmin Edersiniz?"
                        desc="AI kullanmadan önce bilmeniz gereken temel tahminleme yöntemleri."
                        category="Rehber"
                    />
                    <BlogCard
                        title="KPI Nedir? Envanter KPI'ları"
                        desc="İşletmeniz için takip etmeniz gereken en önemli 5 metrik."
                        category="Eğitim"
                    />
                    <BlogCard
                        title="Ölü Stoktan Kurtulma Rehberi"
                        desc="Hareketsiz ürünleri nakde çevirmenin yolları."
                        category="Strateji"
                    />
                    <BlogCard
                        title="Tedarik Zincirinde AI Devrimi"
                        desc="Yapay zeka tedarik zinciri yönetimini nasıl değiştiriyor?"
                        category="Teknoloji"
                    />
                </div>

                <div className="mt-16 bg-primary/5 rounded-2xl p-8 text-center">
                    <h2 className="text-2xl font-bold mb-4">Daha Fazla Bilgiye mi İhtiyacınız Var?</h2>
                    <p className="text-muted-foreground mb-6">Demo talep edin, uzmanlarımız size platformu anlatsın.</p>
                    <Link href="/contact">
                        <Button size="lg">Demo Talep Et</Button>
                    </Link>
                </div>
            </div>
        </main>
    );
}

function BlogCard({ title, desc, category }: any) {
    return (
        <div className="flex flex-col overflow-hidden rounded-lg border bg-card shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-slate-100 dark:bg-slate-800 h-48 w-full flex items-center justify-center text-muted-foreground">
                [Görsel]
            </div>
            <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-semibold text-primary mb-2 uppercase tracking-wider">{category}</span>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm flex-1">{desc}</p>
                <div className="mt-4">
                    <span className="text-sm font-medium hover:underline cursor-pointer">Devamını Oku →</span>
                </div>
            </div>
        </div>
    )
}
