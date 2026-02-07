
import { OpenAI } from "openai";
import { Product, AnalysisResult } from "@/types";
import { NextResponse } from "next/server";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || "dummy-key",
});

// Helper function to create the "slim" object for the prompt
function createSlimProduct(r: Product) {
    return {
        idx: r._globalIndex,
        sku: r["KOD"],

        // Sales
        s45: Number(r["Son 45 Satis Miktar"] || 0),
        s90: Number(r["Son 90 Satis Miktar"] || 0),
        s180: Number(r["Son 180 Satis Miktar"] || 0),

        // Intake
        g45: Number(r["Son 45 Giris Miktar"] || 0),
        g90: Number(r["Son 90 Giris Miktar"] || 0),
        g180: Number(r["Son 180 Giris Miktar"] || 0),

        // Stock
        dep: Number(r["DEPO"] || 0),
        mgzAra: Number(r["MGZ GLN ARA DEPO"] || 0),
        tplDepo: Number(r["TPL DEPO"] || 0),
        tplMgz: Number(r["TPL MGZ"] || 0),
        mkl: Number(r["MKL"] || 0),
        bklSevk: Number(r["BKLNYN MGZ SEVK"] || 0),

        // Store Stocks
        SRN: Number(r["SRN"] || 0),
        BZK: Number(r["BZK"] || 0),
        HTY: Number(r["HTY"] || 0),
        NKT: Number(r["NKT"] || 0),
        ÜÇK: Number(r["ÜÇK"] || 0),
        GZM: Number(r["GZM"] || 0),
        TRB: Number(r["TRB"] || 0),
        MGL: Number(r["MGL"] || 0),
        FRB: Number(r["FRB"] || 0),
    };
}

const SYSTEM_PROMPT = `Sen, “MARKA ADI” adlı gıda-dışı perakende zinciri için çalışan Türkçe konuşan bir envanter analistisin. Sana gönderilecek her ürün nesnesinde şu alanlar bulunur: s45, s90, s180 (son 45/90/180 gün satış miktarı); g45, g90, g180 (aynı dönem alış miktarı); ly45 (geçen yılın son 45 gün satış miktarı); dep (mevcut depo stoğu); mkl (mal kabul stoğu); mgzAra (MGZ GLN ARA DEPO – yoldaki/ara depo stoğu); tplDepo (toplam depolardaki stok); tplMgz (tüm mağazalardaki stok); bklSevk (bekleyen mağaza sevk adedi); SRN, BZK, HTY, NKT, ÜÇK, GZM, TRB, MGL, FRB (dokuz mağazanın stokları). Görevin HER ürün için: 1) “need” adında **tam sayı (integer)** → bugün merkezi depoya eklenmesi gereken adet; 2) “reason” adında **tek cümle Türkçe açıklama** → kararı neye göre verdiğini kısaca açıklar. Satış eğilimlerini (s45/s90/s180, ly45), alım eğilimlerini (g45/g90/g180) ve mevcut stok verilerini (dep, mkl, mgzAra, tplDepo, tplMgz, bklSevk, mağaza stokları) birlikte değerlendir; formül sabit değildir, profesyonel muhakeme kullan. Negatif değer üretme. Çıktı sırayı koruyan YALNIZCA şu biçimde bir JSON dizisi olmalıdır: \`[{"need":123,"reason":"…"}, …]\`. Ek başlık, açıklama, metin, anahtar KULLANMA.`;

export async function POST(req: Request) {
    try {
        const { batch } = await req.json();

        if (!batch || !Array.isArray(batch)) {
            return NextResponse.json({ error: "Invalid batch data" }, { status: 400 });
        }

        const slimProducts = batch.map(createSlimProduct);
        const userPrompt = `Aşağıdaki ürün dizisini değerlendir ve yalnızca istenilen JSON biçiminde sonuç ver:\n\n${JSON.stringify(slimProducts)}`;

        const apiKey = process.env.OPENAI_API_KEY;
        if (!apiKey) {
            return NextResponse.json({ error: "OpenAI API Key is missing" }, { status: 500 });
        }

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini", // Use mini for cost/speed efficiency
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: userPrompt },
            ],
            temperature: 0.1, // Low temperature for consistent JSON output
        });

        const content = completion.choices[0].message.content?.trim();
        if (!content) {
            throw new Error("Empty response from OpenAI");
        }

        // Clean markdown code blocks if present
        let cleanedContent = content;
        if (cleanedContent.startsWith("```")) {
            cleanedContent = cleanedContent.replace(/```json|```/g, "").trim();
        }

        const results = JSON.parse(cleanedContent) as AnalysisResult[];
        return NextResponse.json(results);

    } catch (error) {
        console.error("Analysis Error:", error);
        return NextResponse.json({ error: "Failed to analyze batch" }, { status: 500 });
    }
}
