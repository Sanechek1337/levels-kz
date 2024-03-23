import { locationType } from './locationTypes.ts';
import { specializationType } from './specializationTypes.ts';

export type salaryType = {
  _id: string;
  email: string;
  grade: string;
  location: locationType;
  specialization: specializationType;
  yac: number;
  yoe: number;
};
