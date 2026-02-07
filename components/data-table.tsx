"use client";

import { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Product } from "@/types";
import { Download, Search } from "lucide-react";
import * as XLSX from "xlsx";


interface DataTableProps {
    data: Product[];
}

export function DataTable({ data }: DataTableProps) {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterNeed, setFilterNeed] = useState(false);

    // Filter logic
    const filteredData = data.filter((item) => {
        const matchesSearch = item.KOD?.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesNeed = filterNeed ? (item.AB || 0) > 0 : true;
        return matchesSearch && matchesNeed;
    });

    const handleExport = () => {
        // Create a new worksheet from the current data
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Analysis Results");
        XLSX.writeFile(workbook, "Stock_Analysis_Result.xlsx");
    };

    return (
        <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                <div className="relative w-full sm:max-w-xs">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="SKU ile ara..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-8"
                    />
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                    <Button
                        variant={filterNeed ? "default" : "outline"}
                        onClick={() => setFilterNeed(!filterNeed)}
                        className="w-full sm:w-auto"
                    >
                        {filterNeed ? "Sadece İhtiyaçlar" : "Tümünü Göster"}
                    </Button>
                    <Button onClick={handleExport} variant="outline" className="w-full sm:w-auto">
                        <Download className="mr-2 h-4 w-4" /> Excel İndir
                    </Button>
                </div>
            </div>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Ürün Kodu</TableHead>
                            <TableHead className="text-right">Son 45 Gün Satış</TableHead>
                            <TableHead className="text-right">Toplam Stok</TableHead>
                            <TableHead className="text-right">İhtiyaç (AI)</TableHead>
                            <TableHead>Sebep</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredData.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={5} className="h-24 text-center">
                                    Sonuç bulunamadı.
                                </TableCell>
                            </TableRow>
                        ) : (
                            filteredData.slice(0, 100).map((row) => (
                                <TableRow key={row._globalIndex}>
                                    <TableCell className="font-medium">{row.KOD}</TableCell>
                                    <TableCell className="text-right">{row["Son 45 Satis Miktar"] || 0}</TableCell>
                                    <TableCell className="text-right">{row["TPL DEPO"] || row.DEPO || 0}</TableCell>
                                    <TableCell className="text-right font-bold text-lg">
                                        {row.AB !== undefined ? (
                                            <span className={row.AB > 0 ? "text-green-600" : "text-gray-400"}>
                                                {row.AB}
                                            </span>
                                        ) : (
                                            <span className="text-muted-foreground">-</span>
                                        )}
                                    </TableCell>
                                    <TableCell className="max-w-[400px]">
                                        {row.AC ? (
                                            <p className="text-sm text-foreground">{row.AC}</p>
                                        ) : (
                                            <span className="text-xs text-muted-foreground">Bekleniyor...</span>
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                        {filteredData.length > 100 && (
                            <TableRow>
                                <TableCell colSpan={5} className="text-center text-muted-foreground p-4">
                                    İlk 100 kayıt gösteriliyor. Tam listeyi görmek için Excel'e aktarın.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="text-xs text-muted-foreground">
                Total: {data.length} rows | Filtered: {filteredData.length}
            </div>
        </div>
    );
}
