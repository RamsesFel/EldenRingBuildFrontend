export interface Weapons {
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
    category:           string;
    weight:             number;
}

export interface Attack {
    name:   Name;
    amount: number;
}

export enum Name {
    Arc = "Arc",
    Boost = "Boost",
    Crit = "Crit",
    Dex = "Dex",
    EColorMag = "e-color=\"\">Mag",
    Empty = "",
    Fai = "Fai",
    Fire = "Fire",
    Holy = "Holy",
    Inc = "Inc",
    Int = "INT",
    Ligt = "Ligt",
    Mag = "Mag",
    Name = "-",
    NameDEX = "DEX",
    NameInt = "Int",
    NameSTR = "STR",
    Phy = "Phy",
    Rng = "Rng",
    Sor = "Sor",
    Sorc = "Sorc",
    Str = "Str",
}

export interface ScalesWith {
    name:     Name;
    scaling?: Scaling;
}

export enum Scaling {
    B = "B",
    C = "C",
    D = "D",
    E = "E",
    Empty = "?",
    S = "S",
}
