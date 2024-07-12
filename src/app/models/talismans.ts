export interface TalismansModel {
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
    effect:      string;
}
