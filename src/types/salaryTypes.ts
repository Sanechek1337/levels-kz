import { locationType } from './locationTypes.ts';
import { specializationType } from './specializationTypes.ts';
import { companyType } from './companyTypes.ts';

export type salaryType = {
  _id: string;
  email: string;
  location: locationType;
  specialization: specializationType;
  company: companyType;
  salary: {
    base: number;
    bonus: number;
  };
  yoe: number;
  yac: number;
  grade: string;
  created: Date;
};
