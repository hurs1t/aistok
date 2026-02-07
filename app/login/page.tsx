"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="container flex h-[calc(100vh-4rem)] w-full flex-col items-center justify-center">
            <Card className="mx-auto w-full max-w-sm">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold">Giriş Yap</CardTitle>
                    <CardDescription>
                        E-posta adresinizi ve şifrenizi giriniz
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">E-posta</Label>
                            <Input id="email" placeholder="ornek@sirket.com" required type="email" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password">Şifre</Label>
                                <Link href="#" className="text-sm text-primary hover:underline">
                                    Şifremi unuttum?
                                </Link>
                            </div>
                            <Input id="password" required type="password" />
                        </div>
                        <Button className="w-full" type="submit">
                            Giriş Yap
                        </Button>
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-background px-2 text-muted-foreground">
                                    veya
                                </span>
                            </div>
                        </div>
                        <Button variant="outline" className="w-full" disabled>
                            Google ile Giriş Yap (Yakında)
                        </Button>
                    </form>
                </CardContent>
            </Card>
            <p className="px-8 text-center text-sm text-muted-foreground mt-4">
                Hesabınız yok mu?{" "}
                <Link href="#" className="underline underline-offset-4 hover:text-primary">
                    Kayıt Ol
                </Link>
            </p>
        </div>
    );
}
