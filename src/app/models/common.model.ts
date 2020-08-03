export interface TestDataInterface {
    name: string;
    id: number;
}

export interface CombinedDataInterface {
    productsData: TestDataInterface;
    usersData: TestDataInterface;

}
