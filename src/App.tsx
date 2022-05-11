import './App.css'
import { useInactiveUsers, useOrderedCompaniesBySalary, useRelatedCompanies, useSalaryGroups } from './custom-hooks/useRelatedCompanies'
function App() {
  const [companies] = useRelatedCompanies();
  const [inactiveUsers] = useInactiveUsers(companies);
  const [salaryGroup] = useSalaryGroups(companies);
  const [orderedCompanies] = useOrderedCompaniesBySalary(companies);
  return <main>
    <div>
      activity 1
    </div>
    <ul>
      {
        companies.length > 0 ?
          companies.map((company) => {
            return <li key={company.id}>
              company: {company.name}
              <ol>
                {
                  company.employees.map((e) => {
                    return <li key={e.id}>
                      { e.name }
                    </li>
                  })
                }
              </ol>
            </li>
          })
          :
          <div>
            Loading
          </div>
      }
    </ul>
    <div>
      activity 2
    </div>
    <span>
      2.a
    </span>
    <ul>
      {
        inactiveUsers.map((user) => {
          return <li key={user.id}>
            {user.name}
          </li>
        })
      }
    </ul>
    <br />
    <span>
      2.b
    </span>
    <ul>
      {
        salaryGroup.map((group) => {
          return <li>
            name {group.name}
            <br />
            male {group.male}
            <br />
            female {group.female}
          </li>
        })
      }
    </ul>
    <br />
    <span>
      2.c
    </span>
    <ul>
      {
        orderedCompanies.map((companyName, k) => {
          return <li key={k}>
            {companyName}
          </li>
        })

      }
    </ul>
  </main>
}

export default App
