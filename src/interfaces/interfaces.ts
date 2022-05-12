export interface ProductTable {
    table: Array<Product>;
}
export interface Product {
    product: string;
    finishes: Finish[];
}

export interface Finish {
    finish: string;
    price: number;
}

export interface Upgrade {
    upgrade: string;
    price: number;
    [index:string]:any;
}