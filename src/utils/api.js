import axios from 'axios'

const api = axios.create({
  baseURL : ''
})

export async function doNothing() {
  try {
    return await api.get('/nothing')
      .then((nothing) => nothing.data)
      .catch((err) => { throw err })
  } catch (err) {
      console.error(err);
    }
}