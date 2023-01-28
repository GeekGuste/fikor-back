import { environment } from './environment';

export const apiConfig = {
    base_path: '/api' + '/v' + environment.version[0];
};