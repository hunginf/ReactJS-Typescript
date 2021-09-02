import { create } from 'apisauce'

// define the api
const api = create({
  baseURL: 'https://sample-accounts-api.herokuapp.com',
  headers: { Accept: 'application/vnd.github.v3+json' },
})

export default api;