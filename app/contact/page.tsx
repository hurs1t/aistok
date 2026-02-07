"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
    return (
        <div className="container flex items-center justify-center min-h-[calc(100vh-4rem)] py-10">
            <Card className="w-full max-w-2xl">
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold">Bize Ulaşın</CardTitle>
                    <CardDescription className="text-lg mt-2">
                        Sorularınız mı var? Ekibimiz size yardımcı olmaya hazır.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Adınız Soyadınız</Label>
                                <Input id="name" placeholder="Ad Soyad" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">E-posta Adresiniz</Label>
                                <Input id="email" placeholder="ornek@sirket.com" type="email" required />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="subject">Konu</Label>
                            <Input id="subject" placeholder="Hangi konuda yardımcı olabiliriz?" required />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="message">Mesajınız</Label>
                            <Textarea
                                id="message"
                                placeholder="Mesajınızı buraya yazın..."
                                className="min-h-[150px]"
                                required
                            />
                        </div>

                        <Button type="submit" className="w-full md:w-auto md:min-w-[200px]">
                            Gönder
                        </Button>
                    </form>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center border-t pt-8">
                        <div>
                            <h3 className="font-semibold text-lg">E-posta</h3>
                            <p className="text-muted-foreground text-sm mt-1">info@stokai.com</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Telefon</h3>
                            <p className="text-muted-foreground text-sm mt-1">+90 (212) 123 45 67</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Ofis</h3>
                            <p className="text-muted-foreground text-sm mt-1">Levent, İstanbul</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
