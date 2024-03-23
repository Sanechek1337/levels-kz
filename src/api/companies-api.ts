import { instance } from './axios-instance.ts';
import { AxiosResponse } from 'axios';
import { companyType } from '../types/companyTypes.ts';

export const companiesApi = {
  getCompanies(): Promise<AxiosResponse<companyType[]>> {
    return instance.get('companies');
  },

  getCompanyById(id: string) {
    return instance.get(`companies/${id}`);
  },

  createCompany(name: string) {
    return instance.post('companies', { name });
  },

  updateCompany(id: string, name: string) {
    return instance.put(`companies/${id}`, { name });
  },

  deleteCompany(id: string) {
    return instance.delete(`companies/${id}`);
  },
};
