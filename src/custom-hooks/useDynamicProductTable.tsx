import { useEffect, useState } from "react";
import { Product } from "../interfaces/interfaces";

const useDynamicProductTable = (table: Array<Product>): [Array<string>, Array<Array<string | number>>] => {
    const [myTableHead, setTableHeads] = useState<Array<string>>([]);
    const [myTableBody, setTableBody] = useState<Array<Array<string | number>>>([]);
    useEffect(() => {
        const tempTable = table as Array<Product>
        const heads: Array<string> = ['finishes', ...tempTable.map((product) => product.product)];
        setTableHeads(heads);
        const body: Array<string | number>[] = [...tempTable[0]['finishes'].map(f => [f.finish])]; // << * @ 
        for (let k = 0; k < tempTable.length; k++) {
            const product = tempTable[k];
            for (let i = 0; i < body.length; i++) {
                const key: string = body[i][0] as string;
                const price = product.finishes.find((finish) => finish.finish === key)?.price || 0;
                body[i].push(price);
            }
        }
        setTableBody(body);

    }, [table]);
    return [myTableHead, myTableBody];
}

export default useDynamicProductTable;