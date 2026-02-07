"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PricingPage() {
    const plans = [
        {
            name: "Başlangıç",
            price: "0₺",
            description: "Küçük işletmeler ve deneme amaçlı kullanım için.",
            features: [
                "Aylık 100 ürün analizi",
                "Temel raporlama",
                "Excel dışa aktarma",
                "E-posta desteği"
            ],
            action: "Ücretsiz Başla",
            popular: false
        },
        {
            name: "Pro",
            price: "499₺",
            period: "/ay",
            description: "Büyüyen işletmeler ve detaylı stok takibi için ideal.",
            features: [
                "Sınırsız ürün analizi",
                "Gelişmiş AI tahminleme",
                "Öncelikli analiz sırası",
                "Detaylı satın alma raporları",
                "7/24 Öncelikli destek"
            ],
            action: "Pro'ya Geç",
            popular: true
        },
        {
            name: "Kurumsal",
            price: "Özel",
            description: "Çok şubeli ve büyük ölçekli perakende zincirleri için.",
            features: [
                "Özel API entegrasyonu (ERP)",
                "Çoklu kullanıcı yetkilendirme",
                "Özel AI model eğitimi",
                "SLA garantisi",
                "Size özel müşteri temsilcisi"
            ],
            action: "İletişime Geç",
            popular: false
        }
    ];

    return (
        <div className="container py-10">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                    Basit ve Şeffaf Fiyatlandırma
                </h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    İşletmenizin büyüklüğüne uygun paketi seçin. Kredi kartı gerekmez, istediğiniz zaman iptal edin.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-8 pt-12 max-w-7xl mx-auto">
                {plans.map((plan) => (
                    <Card key={plan.name} className={`flex flex-col relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
                        {plan.popular && (
                            <div className="absolute top-0 right-0 -mr-2 -mt-2">
                                <Badge variant="default" className="bg-primary text-primary-foreground">En Popüler</Badge>
                            </div>
                        )}
                        <CardHeader>
                            <CardTitle className="text-2xl">{plan.name}</CardTitle>
                            <CardDescription>{plan.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-4 flex-1">
                            <div className="text-4xl font-bold">
                                {plan.price}
                                {plan.period && <span className="text-lg font-normal text-muted-foreground">{plan.period}</span>}
                            </div>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center">
                                        <Check className="mr-2 h-4 w-4 text-green-500" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" variant={plan.popular ? "default" : "outline"}>{plan.action}</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
