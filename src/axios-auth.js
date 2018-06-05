import axios from 'axios'

const instance = axios.create({
  baseURL:"https://wd1182543348jfzvtq.wilddogio.com"
})

// instance.defaults.headers.common['SOMETHING'] = 'SOMETHING'

export default instance