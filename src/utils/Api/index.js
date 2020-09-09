import axios from 'axios';

let instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 1000,
    headers: {
      'Content-Type': 'Application/json',
      Accept: 'application/json'
    }
  });

const successHandler = (response) => {
  return response
}

// enable response interceptors
instance.interceptors.response.use(
  response => successHandler(response)
)

export const GET = instance.get;
export const POST = instance.post;
export const PUT = instance.put;
export const PATCH = instance.patch;
export const DELETE = instance.delete;
