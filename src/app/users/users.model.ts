export interface UserDatas {
    users: User[];
}

export interface User {
    id: number;
    name: string;
    company: string;
    isSelected: boolean;
    products: Array<string>;
}

export interface DropdownInterface {
    id: number;
    name: string;
    isSelected: boolean;
}

export class UsersDataModel {
    companyFilter: Array<DropdownInterface> = [];
    companyFilterUpdate: Array<DropdownInterface> = [];
    users: User[] = [];
    constructor() { }
}

export interface UsersDataInterface {
    companyFilter: Array<DropdownInterface>;
    companyFilterUpdate: Array<DropdownInterface>;
    users: User[];
    applyFilter: boolean;
}

