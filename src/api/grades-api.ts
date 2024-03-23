import { instance } from './axios-instance.ts';
import { AxiosResponse } from 'axios';

export const gradesApi = {
  getGrades(): Promise<AxiosResponse<string[]>> {
    return instance.get('grades');
  },
};
