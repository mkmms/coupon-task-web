import axios from "axios";

const getHeaders = () => {
  const userJson = localStorage.getItem('auth');
  const user = userJson ? JSON.parse( userJson ) : null;
  
  if( user ){
    return {
      'access-token': user['token'],
      'client': user['client'],
      'uid': user['uid'],
      'provider': 'email'
    }
  } else {
    return {}
  }
}

const instance = axios.create({
  baseURL: "http://localhost:3001/",
});

instance.interceptors.request.use(function (request) {
  const headers = getHeaders();

  request.headers = {
    ...request.headers,
    ...headers
  }

  return request;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
})

instance.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  // Do something with response error
  if( error.response.status === 401 ){
    localStorage.removeItem("auth");
    window.location.href="/login"
  }
  return Promise.reject(error);
})



export const httpPost = async (url, params) => {
  try {
    const response = await instance.post(url, params);

    return response;
  } catch (error) {
    if( error.response.status === 422) {
      const errors = Object.keys(error.response.data)
      return {
        error: `${errors[0]}: ${error.response.data[errors[0]]}`,
        statusCode: error.response.status,
      }
    } else if (error.response && error.response.data) {
      return {
        error: error.response.data.msg,
        statusCode: error.response.data.status,
      };
    }

    return {
      error: error.message,
      statusCode: 500,
    };
  }
};

export const httpGet = async (url, params = {}) => {
  try {
    const response = await instance.get(url, params);

    return response;
  } catch (error) {
    if (error.response && error.response.data) {
      return {
        error: error.response.data.msg,
        statusCode: error.response.data.status,
      };
    }

    return {
      error: error.message,
      statusCode: 500,
    };
  }
};


export const httpDelete = async (url, params = {}) => {
  try {
    const response = await instance.delete(url, params);

    return response;
  } catch (error) {
    if (error.response && error.response.data) {
      return {
        error: error.response.data.msg,
        statusCode: error.response.data.status,
      };
    }

    return {
      error: error.message,
      statusCode: 500,
    };
  }
};

export const httpPut =  async (url, params = {}) => {
  try {
    const response = await instance.put(url, params);

    return response;
  } catch (error) {
    if( error.response.status === 422) {
      const errors = Object.keys(error.response.data)
      return {
        error: `${errors[0]}: ${error.response.data[errors[0]]}`,
        statusCode: error.response.status,
      }
    } else if (error.response && error.response.data) {
      return {
        error: error.response.data.msg,
        statusCode: error.response.data.status,
      };
    }

    return {
      error: error.message,
      statusCode: 500,
    };
  }
};

export default instance;
