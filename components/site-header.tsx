"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, CreditCard, Mail, LogIn, PieChart, BookOpen } from "lucide-react";

export function SiteHeader() {
    const pathname = usePathname();

    const routes = [
        {
            href: "/dashboard",
            label: "Dashboard",
            icon: LayoutDashboard,
            active: pathname === "/dashboard",
        },
        {
            href: "/features",
            label: "Özellikler",
            icon: LayoutDashboard,
            active: pathname === "/features",
        },
        {
            href: "/analytics",
            label: "Analitik",
            icon: PieChart,
            active: pathname === "/analytics",
        },
        {
            href: "/pricing",
            label: "Fiyatlandırma",
            icon: CreditCard,
            active: pathname === "/pricing",
        },
        {
            href: "/resources",
            label: "Kaynaklar",
            icon: BookOpen,
            active: pathname === "/resources",
        },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
                <div className="mr-4 hidden md:flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <span className="hidden font-bold sm:inline-block">
                            Stok Analiz AI
                        </span>
                    </Link>
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        {routes.map((route) => (
                            <Link
                                key={route.href}
                                href={route.href}
                                className={cn(
                                    "transition-colors hover:text-foreground/80",
                                    route.active ? "text-foreground" : "text-foreground/60"
                                )}
                            >
                                {route.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Mobile Nav (Simplified) */}
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <Link href="/" className="md:hidden font-bold">Stok AI</Link>
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        {/* Add search or other nav items here if needed */}
                    </div>
                    <nav className="flex items-center gap-2">
                        <Link href="/login">
                            <Button variant="ghost" size="sm">
                                <LogIn className="h-4 w-4 mr-2" />
                                Giriş
                            </Button>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
