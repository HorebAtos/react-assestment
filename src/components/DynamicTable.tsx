
export interface DynamicTable<T> {
    table: Array<T>;
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
}


export const Dynamictable = <T,>(props: DynamicTable<T>) => {
    return <table>

    </table>
}
export default Dynamictable;