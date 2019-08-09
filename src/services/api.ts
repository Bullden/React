import { environment } from "../enviroment";
import axios from 'axios';


export async function callApi(method: string, path: string, data ?: object, url: string = environment.apiUrl) {
  const response = await fetch(`${url}/${path}`, {
    method : method,
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
     body: !(method === "GET") ? JSON.stringify(data) : null
  }).then(d => d.json())
  return await response
}