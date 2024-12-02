import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.BASE_URL
});

export const SECRET_KEY = process.env.SECRET_KEY;
export const PROJECT_ID = process.env.PROJECT_ID;
