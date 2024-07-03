export interface IncantationsModel {
    success: boolean;
    count:   number;
    total:   number;
    data:    Datum[];
}

export interface Datum {
    id:          string;
    name:        string;
    image:       null | string;
    description: string;
    type:        string;
    cost:        number;
    slots:       number;
    effects:     null | string;
    requires:    Require[] | null;
}

export interface Require {
    name:   string;
    amount: number;
}