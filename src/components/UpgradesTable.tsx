import useDynamicUpgradeTable from "../custom-hooks/useDynamicUpgradeTable";
import { Upgrade } from "../interfaces/interfaces"

export interface UpgradeTableProps {
    table: Array<Upgrade>;
}
export type UpgradeColumns = [upgradeName: string, upgradePrice: number];
export type UpgradeRow = Array<UpgradeColumns>;

export const UpgradeTableComponent = ({ table }: UpgradeTableProps) => {
    const [myTableHeads, myTableBody] = useDynamicUpgradeTable(table);
    return <table>
        <thead>
            <tr>
                {
                    myTableHeads.map((heading, k) => {
                        return <td key={k}>
                            {heading}
                        </td>
                    })
                }
            </tr>
        </thead>
        <tbody>
            {
                myTableBody.map((row, i) => {
                    return <tr key={i}>
                        {
                            row.map((column, y) => {
                                return <td key={y}>
                                    {column}
                                </td>
                            })
                        }
                    </tr>
                })
            }
        </tbody>
    </table>

}