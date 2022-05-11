import { useEffect, useState } from "react";
import { CompaniesWithRelatedUsers, Employees, Gender, SalaryCost, TableCompaniesWithRelatedUsers } from "../promises/interfaces";
import { getCompanies, getUsers } from "../promises/promises";

export const useRelatedCompanies = () => {
    const [relatedCompanies, setRelatedCompanies] = useState<TableCompaniesWithRelatedUsers>([]);
    useEffect(() => {
        Promise.all([
            getUsers(),
            getCompanies(),
        ]).then(([employees, companies]) => {

            const relation = companies.map((company) => {
                const companyWithEmployees: CompaniesWithRelatedUsers = {
                    ...company,
                    employees: company.employees.map((id) => employees.find(employee => employee.id === id)!),
                };
                return companyWithEmployees;
            });
            setRelatedCompanies(relation);
        });
    }, []);
    return [relatedCompanies];
}

export const useInactiveUsers = (companies: TableCompaniesWithRelatedUsers) => {
    const [inactiveUsers, setInactiveusers] = useState<Array<Employees>>([]);
    useEffect(() => {
        const activeCompanies = companies.filter((company) => company.status === 'active')
        const inactiveEmployees = activeCompanies.map((activeCompany) => {
            return activeCompany.employees.filter((employee) => employee.status === 'inactive');
        }).filter((inactiveEmployees) => inactiveEmployees !== []).reduce((p, c) => p.concat(c), []);
        setInactiveusers(inactiveEmployees);
    }, [companies])
    return [inactiveUsers];
}

export const useSalaryGroups = (companies: TableCompaniesWithRelatedUsers) => {
    const [salaryGroups, setSalaryGroup] = useState<Array<SalaryCost>>([]);
    const getSalaryFromGroup = (companyToFilter: CompaniesWithRelatedUsers, gender: Gender): number => companyToFilter.employees
        .filter((employee) => employee.gender === gender)
        .map((e) => e.salary)
        .reduce((p, c) => p + c, 0)
    useEffect(() => {
        const salaryGroup: Array<SalaryCost> = [];
        for (let k = 0; k < companies.length; k++) {
            const company = companies[k];
            const salaryGrouping = {
                name: company.name,
                male: getSalaryFromGroup(company, 'male'),
                female: getSalaryFromGroup(company, 'female')
            }
            salaryGroup.push(salaryGrouping);
        }
        setSalaryGroup(salaryGroup);
    }, [companies]);
    return [salaryGroups];
}

export const useOrderedCompaniesBySalary = (companies: TableCompaniesWithRelatedUsers) => {
    const [companyList, setCompanyList] = useState<Array<string>>([]);
    useEffect(() => {
        const companyWithSalary = companies.map((company) => {
            return {
                name: company.name,
                totalSalary: company.employees.map((e) => e.salary).reduce((p, c) => p + c, 0)
            }
        });
        const orderedCompanies = companyWithSalary.sort((a, b) => a.totalSalary - b.totalSalary).map((c) => c.name);
        setCompanyList(orderedCompanies);
    }, [companies])
    return [companyList];
}