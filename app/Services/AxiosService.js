// @ts-ignore
export const hpApi = axios.create({
  baseURL: 'http://hp-api.herokuapp.com/api/characters',
  timeout: 3000
})