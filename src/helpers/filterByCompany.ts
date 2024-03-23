import { salaryType } from '../types/salaryTypes.ts';
import { companyType } from '../types/companyTypes.ts';

export const filterByCompany = (
  salariesList: salaryType[],
  company?: companyType
) => {
  const filteredByCompanyList: salaryType[] = [];

  for (const salaryData of salariesList) {
    if (salaryData.company?.name === company?.name) {
      filteredByCompanyList.push(salaryData);
    }
  }

  return filteredByCompanyList;
};
