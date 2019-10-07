import { environment } from "../enviroment";
import axios from 'axios';

export async function callApi(method: string, path: string, data ?: object, url: string = environment.apiUrl) {
  const response = await axios(`${url}/${path}`, {
    method : method,
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
     data: !(method === "GET") ? JSON.stringify(data) : null
  })
  return await response
}

export async function callApiGuard(method: string, path: string, data ?: object, url: string = environment.apiUrl) {
  const response = await axios(`${url}/${path}`, {
    method : method,
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
     data: !(method === "GET") ? JSON.stringify(data) : null
  })
  return await response
}
