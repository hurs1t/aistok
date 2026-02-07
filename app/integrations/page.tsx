"use client";

import { CheckCircle, Code, ShoppingBag, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function IntegrationsPage() {
    return (
        <main className="min-h-screen bg-background py-12">
            <div className="container px-4 md:px-6 max-w-5xl mx-auto">
                <div className="text-center space-y-4 mb-16">
                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                        Entegrasyonlar
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Favori e-ticaret platformlarınız ve araçlarınızla sorunsuz çalışın.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Native Integrations */}
                    <div className="col-span-full mb-8">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <ShoppingBag className="h-6 w-6 text-primary" /> Hazır Entegrasyonlar
                        </h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <IntegrationCard
                                name="Shopify"
                                desc="Siparişleri ve stokları gerçek zamanlı senkronize edin."
                                status="Aktif"
                            />
                            <IntegrationCard
                                name="WooCommerce"
                                desc="WordPress mağazanızla tam entegrasyon."
                                status="Aktif"
                            />
                            <IntegrationCard
                                name="Amazon"
                                desc="FBA ve FBM envanter yönetimi."
                                status="Yakında"
                            />
                        </div>
                    </div>

                    {/* API Access */}
                    <div className="col-span-full">
                        <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-border">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold flex items-center gap-2">
                                        <Code className="h-6 w-6 text-blue-500" /> Geliştirici API
                                    </h2>
                                    <p className="text-muted-foreground max-w-lg">
                                        Özel entegrasyonlar mı gerekiyor? REST API ve Webhook desteğimizle kendi çözümlerinizi geliştirin.
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2 text-sm"><CheckCircle className="h-4 w-4 text-green-500" /> REST API Erişimi</li>
                                        <li className="flex items-center gap-2 text-sm"><CheckCircle className="h-4 w-4 text-green-500" /> Webhook Bildirimleri</li>
                                    </ul>
                                </div>
                                <div className="flex-shrink-0">
                                    <Button size="lg">API Dokümantasyonu</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

function IntegrationCard({ name, desc, status }: any) {
    return (
        <div className="flex flex-col p-6 rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg">{name}</h3>
                <span className={`px-2 py-1 text-xs rounded-full font-medium ${status === 'Aktif' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'}`}>
                    {status}
                </span>
            </div>
            <p className="text-muted-foreground text-sm flex-1">{desc}</p>
            <div className="mt-4 pt-4 border-t">
                <Button variant="outline" size="sm" className="w-full">Bağla</Button>
            </div>
        </div>
    )
}
