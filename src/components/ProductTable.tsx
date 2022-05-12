import { useEffect, useRef, useState } from "react";
import useDynamicProductTable from "../custom-hooks/useDynamicProductTable";
import { ProductTable } from "../interfaces/interfaces";
export const ProductTableComponent = ({ table }: ProductTable) => {
    const [myTableHead, myTableBody] = useDynamicProductTable(table);
    const [searchValue, setSearchValue] = useState<string>('');
    const searchInput = useRef<HTMLInputElement>(null);
    useEffect(() => {
        console.log(searchValue);
    }, [searchValue]);
    return <section>
        <input type="text" ref={searchInput} onChange={() => setSearchValue(searchInput.current!.value)} />
        <table>
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

    </section>


}
export default ProductTableComponent;