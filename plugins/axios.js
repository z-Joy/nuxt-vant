const REQUEST_HEADERS = {
  GET: {
    'Content-Type': 'application/json',
  },
  POST: {
    'Content-Type': 'application/json',
  },
}

const nodeEnvDev = process.env.NODE_ENV === 'development';

export default function ({ $axios, redirect }) {
  $axios.interceptors.request.use((config) => {
    let { headers = {}, method = 'GET' } = config
    method = method.toUpperCase()
    let url = 'api/' + config.url.productionUrl;
    if (nodeEnvDev) {
      url = config.url.developmentUrl;
    }
    config.url = url;
    Object.assign(headers, REQUEST_HEADERS[method])
    config.headers = headers
    return config
  })

  $axios.interceptors.response.use((response) => {
    if (response.data.code === 200) {
      return response.data.module
    } else {
      throw new Error(response.data.message);
    }
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status);
    if (code === 400) {
      redirect('/400')
    }
  })
}