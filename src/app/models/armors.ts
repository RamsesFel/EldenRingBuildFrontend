export interface ArmorModel {
    success: boolean;
    count:   number;
    total:   number;
    data:    Datum[];
}

export interface Datum {
    id:          string;
    name:        string;
    image:       string;
    description: string;
    category:    string;
    dmgNegation: DmgNegation[];
    resistance:  DmgNegation[];
    weight:      number;
}

export interface DmgNegation {
    name:   string;
    amount: number;
}