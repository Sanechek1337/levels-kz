import { instance } from './axios-instance.ts';
import { AxiosResponse } from 'axios';
import { specializationType } from '../types/specializationTypes.ts';

export const specializationsApi = {
  getAllSpecializations(): Promise<AxiosResponse<specializationType[]>> {
    return instance.get('specializations');
  },

  createSpecialization(name: string) {
    return instance.post('specializations', { name });
  },

  updateSpecialization(id: string, name: string) {
    return instance.put(`specializations/${id}`, { name });
  },

  deleteSpecialization(id: string) {
    return instance.delete(`specializations/${id}`);
  },
};
