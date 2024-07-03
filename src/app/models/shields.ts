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
    category:           Category | null;
    weight:             number;
}

export interface Attack {
    name:   string;
    amount: number | null;
}

export enum Category {
    Greatshield = "Greatshield",
    MediumShield = "Medium Shield",
    SmallShield = "Small Shield",
    SmallShields = "Small Shields",
}

export interface ScalesWith {
    name:     string;
    scaling?: string;
}

