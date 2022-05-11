export interface Employees {
    id: number;
    name: string;
    gender: Gender;
    status: Status;
    salary: number;
}

export type Gender = "male" | "female";
export type Status = "active" | "inactive";
export type EmployeesTable = Array<Employees>;

export interface Company {
    id: number;
    name: string;
    employees: number[];
    status: Status;
}
export type CompaniesTable = Array<Company>;

export interface CompaniesWithRelatedUsers {
    id: number;
    name: string;
    status: Status;
    employees: EmployeesTable;
}
export type TableCompaniesWithRelatedUsers = Array<CompaniesWithRelatedUsers>;

export interface SalaryCost {
    name: string;
    male: number;
    female: number;
}