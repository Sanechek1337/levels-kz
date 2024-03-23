import { filterByCompany } from './filterByCompany.ts';
import { companyType } from '../types/companyTypes.ts';
import { salaryType } from '../types/salaryTypes.ts';

export const getAverageSalary = (
  company: companyType,
  salariesList: salaryType[]
) => {
  const companySalaries = filterByCompany(salariesList, company);
  let totalBaseSalary = 0;
  let totalBonusSalary = 0;
  let iterations = 0;

  for (let i = 0; i < companySalaries.length; i++) {
    if (companySalaries[i].salary.base && companySalaries[i].salary.bonus) {
      totalBaseSalary += companySalaries[i].salary.base;
      totalBonusSalary += companySalaries[i].salary.bonus;
      iterations++;
    }
  }

  return {
    averageBaseSalary: Math.round(totalBaseSalary / iterations),
    averageBonusSalary: Math.round(totalBonusSalary / iterations),
    iterations,
  };
};
