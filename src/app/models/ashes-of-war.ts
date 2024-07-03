export interface AshesOfWarModel {
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
    affinity:    string;
    skill:       null | string;
}
