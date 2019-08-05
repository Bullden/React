import { environment } from "../enviroment";
import axios from 'axios';


export async function callApi(method: string, path: string, data: any = {}, url: string = environment.apiUrl) {
  const response = await fetch(`${url}/${path}`, {
    method : method,
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      
    },
    body: JSON.stringify(data)
  }).then(d => d.json())
  return await response
}