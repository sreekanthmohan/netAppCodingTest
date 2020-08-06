export interface UserDatas {
    users: User[];
    filters: FilterInterface[];
    applyFilter: boolean;
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
