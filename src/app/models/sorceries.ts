export interface SorceriesModel {
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
    type:        string;
    cost:        number;
    slots:       number;
    effects:     string;
    requires:    Require[];
}

export interface Require {
    name:   string;
    amount: number;
}