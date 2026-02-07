export interface Product {
    _globalIndex: number;
    // Identifiers
    KOD: string;

    // Sales
    "Son 45 Satis Miktar"?: number;
    "Son 90 Satis Miktar"?: number;
    "Son 180 Satis Miktar"?: number;

    // Intake
    "Son 45 Giris Miktar"?: number;
    "Son 90 Giris Miktar"?: number;
    "Son 180 Giris Miktar"?: number;

    // Stocks
    DEPO?: number;
    "MGZ GLN ARA DEPO"?: number;
    "TPL DEPO"?: number;
    "TPL MGZ"?: number;
    MKL?: number;
    "BKLNYN MGZ SEVK"?: number;

    // Store Stocks
    SRN?: number;
    BZK?: number;
    HTY?: number;
    NKT?: number;
    ÜÇK?: number;
    GZM?: number;
    TRB?: number;
    MGL?: number;
    FRB?: number;

    // AI Analysis Results
    AB?: number; // Calculated Need
    AC?: string; // Reason
}

export interface AnalysisResult {
    need: number;
    reason: string;
}
