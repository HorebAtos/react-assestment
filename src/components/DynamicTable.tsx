import { useEffect, useState } from "react";
import useDynamicTable from "../custom-hooks/useDynamicTable";

export interface DynamicTable {
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
}


export const Dynamictable = ({ table }: DynamicTable) => {
    const [myTableHead, myTableBody] = useDynamicTable(table);
    return <table>
        <thead>
            <tr>
                {
                    myTableHead.map((v, k) => {
                        return <th key={k}>
                            {v}
                        </th>
                    })
                }
            </tr>
        </thead>
        <tbody>
            {
                myTableBody.map((row, k) => {
                    return <tr key={k}>
                        {
                            row.map((vColumn, l) => {
                                return <td key={l}>
                                    {vColumn}
                                </td>
                            })
                        }
                    </tr>
                })
            }
            <tr>

            </tr>
        </tbody>
    </table>

}
export default Dynamictable;