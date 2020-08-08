export interface DropdownInterface {
    id: number;
    name: string;
    isSelected: boolean;
}

export class DropdownModel {
    inputItem: string;
    filteredList: DropdownInterface[];
    canShow: boolean;
    filters: Array<string> = [];
}