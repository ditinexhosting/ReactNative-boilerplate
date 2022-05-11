import axios from 'axios';
import {API_URL} from '../config';

export const API = axios.create({baseURL: API_URL});

export const handleResponse = response => {
  if (response.status == 200 || response.status == true) {
    return response.data;
  } else {
    // Handle api connection error
    return {
      status: false,
      code: 500,
      data: null,
      error: 'Invalid api call',
    };
  }
};
