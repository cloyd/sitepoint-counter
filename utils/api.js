import apisauce from 'apisauce'

// our "constructor"
/**
 * 
 * 
 * @param {string} [baseURL='api.sitepointcounter.com'] 
 * @returns 
 */
const API = () => {

  const api = apisauce.create({
    baseURL: 'http://localhost:3000/api/v1/',
    headers: {
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json',
    },
    // 10 second timeout...
    timeout: 10000,
    mode: 'no-cors',
  })

  const getCounters = () => api.get('counters')
  const addCounter = title => api.post('counter', {title})
  const deleteCounter = id => api.delete('counter', {}, {data: {id}})
  const incrementCounter = item => api.post('counter/inc', item)
  const decrementCounter = item => api.post('counter/dec', item)

  return {
    getCounters,
    addCounter,
    deleteCounter,
    incrementCounter,
    decrementCounter,
  }
}

export default {
  API
}
