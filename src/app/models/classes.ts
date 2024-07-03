export interface ClassesModel {
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
    stats:       Stats;
}

export interface Stats {
    level:        string;
    vigor:        string;
    mind:         string;
    endurance:    string;
    strength:     string;
    dexterity:    string;
    intelligence: string;
    faith:        string;
    arcane:       string;
}
