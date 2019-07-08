/*
  Mock client-server processing
*/
import _collections from './collections.json'

const TIMEOUT = 100

export default {
  getCollections: (cb, timeout) => setTimeout(() => cb(_collections), timeout || TIMEOUT)
}
