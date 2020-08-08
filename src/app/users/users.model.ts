export interface UserDatas {
    users: User[];
    filters: DropdownInterface[];
    applyFilter: boolean;
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
    applyFilter: boolean = null;
    constructor() { }
}

export interface UsersDataInterface {
    companyFilter: Array<DropdownInterface>;
    companyFilterUpdate: Array<DropdownInterface>;
    users: User[];
    applyFilter: boolean;
}

