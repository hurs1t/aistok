"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, FileSpreadsheet, X, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import * as XLSX from "xlsx";
import { Product } from "@/types";

interface FileUploadProps {
    onDataLoaded: (data: Product[]) => void;
}

export function FileUpload({ onDataLoaded }: FileUploadProps) {
    const [isParsing, setIsParsing] = useState(false);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        if (!file) return;

        setIsParsing(true);
        const reader = new FileReader();

        reader.onload = (e) => {
            try {
                const data = e.target?.result;
                const workbook = XLSX.read(data, { type: "binary" });
                const sheetName = workbook.SheetNames[0];
                const sheet = workbook.Sheets[sheetName];
                const jsonData = XLSX.utils.sheet_to_json<Product>(sheet);

                // Add global index to keep track of order
                const dataWithIndex = jsonData.map((item, index) => ({
                    ...item,
                    _globalIndex: index
                }));

                onDataLoaded(dataWithIndex);
                toast.success(`Successfully loaded ${jsonData.length} rows.`);
            } catch (error) {
                console.error("Error parsing file:", error);
                toast.error("Failed to parse Excel file.");
            } finally {
                setIsParsing(false);
            }
        };

        reader.readAsBinaryString(file);
    }, [onDataLoaded]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"],
            "application/vnd.ms-excel": [".xls"],
        },
        maxFiles: 1,
        disabled: isParsing,
    });

    return (
        <div
            {...getRootProps()}
            className={cn(
                "border-2 border-dashed rounded-lg p-12 text-center transition-colors cursor-pointer",
                isDragActive
                    ? "border-primary bg-primary/5"
                    : "border-muted-foreground/25 hover:border-primary/50 hover:bg-muted/50",
                isParsing && "opacity-50 cursor-not-allowed"
            )}
        >
            <input {...getInputProps()} />
            <div className="flex flex-col items-center gap-4">
                <div className="p-4 bg-background rounded-full shadow-sm border">
                    {isParsing ? (
                        <Loader2 className="w-8 h-8 text-primary animate-spin" />
                    ) : (
                        <Upload className="w-8 h-8 text-muted-foreground" />
                    )}
                </div>
                <div>
                    <h3 className="text-lg font-semibold">
                        {isParsing ? "Excel Okunuyor..." : "Stok Dosyasını Yükle"}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                        Dosyayı buraya sürükleyin veya seçmek için tıklayın
                    </p>
                </div>
            </div>
        </div>
    );
}
