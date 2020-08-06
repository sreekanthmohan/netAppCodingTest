export interface Users {
    list: User[];
}

export interface User {
    id?: number;
    name?: string;
    company?: string;
    isSelected?: boolean;
    products?: Array<string>;
}

export interface FilterInterface {
    id: number;
    name: string;
    isSelected: boolean;
}

export interface Filters {
    filters: FilterInterface[];
}