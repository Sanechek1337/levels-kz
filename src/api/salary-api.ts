import { instance } from './axios-instance.ts';
import { AxiosResponse } from 'axios';
import { salaryType } from '../types/salaryTypes.ts';

export const salaryApi = {
  getSalaries(): Promise<AxiosResponse<salaryType[]>> {
    return instance.get('salaries');
  },

  createSalary(
    email: string | null,
    location: { name: string },
    specialization: { name: string },
    company: { name: string },
    salary: {
      base: number;
      bonus: number;
    },
    yoe: number,
    yac: number,
    grade: string,
    created: string
  ): Promise<AxiosResponse<salaryType>> {
    return instance.post('salaries', {
      email,
      location,
      specialization,
      company,
      salary,
      yoe,
      yac,
      grade,
      created,
    });
  },

  updateSalary(
    id: string,
    email: string,
    location: string,
    specialization: string,
    salary: number,
    yoe: number,
    yac: number,
    grade: string
  ) {
    return instance.put(`salaries/${id}`, {
      email,
      location,
      specialization,
      salary,
      yoe,
      yac,
      grade,
    });
  },

  deleteSalary(id: string) {
    return instance.delete(`salaries/${id}`);
  },
};
