export interface ShieldsModel {
    success: boolean;
    count:   number;
    total:   number;
    data:    Datum[];
}

export interface Datum {
    id:                 string;
    name:               string;
    image:              string;
    description:        string;
    attack:             Attack[];
    defence:            Attack[];
    scalesWith:         ScalesWith[];
    requiredAttributes: Attack[];
    category:           string | null;
    weight:             number;
}

export interface Attack {
    name:   string;
    amount: number | null;
}

export interface ScalesWith {
    name:     string;
    scaling?: string;
}

