import { instance } from './axios-instance.ts';
import { AxiosResponse } from 'axios';
import { locationType } from '../types/locationTypes.ts';

export const locationsApi = {
  getLocations(): Promise<AxiosResponse<locationType[]>> {
    return instance.get('locations');
  },

  createLocation(name: string) {
    return instance.post('locations', { name });
  },

  updateLocation(id: string, name: string) {
    return instance.put(`locations/${id}`, { name });
  },

  deleteLocation(id: string) {
    return instance.delete(`locations/${id}`);
  },
};
