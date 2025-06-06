const API = 'http://localhost:8080';

const getOptions = method => ({
  method,
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

const extendWithAuthToken = (options, token) => ({
  ...options,
  headers: {
    ...options.headers,
    Authorization: `Bearer ${token}`
  }
});

const basicRequest = async (path, requestMethod = 'GET', body) => {
  try {
    const url = `${API}/${path}`;
    const authToken = getTokenFromStorage();
    const options = extendWithAuthToken(getOptions(requestMethod), authToken);

    if (body) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);
    const data = await response.json();

    if (data.response) {
      return {success: true, data: data.response.data};
    }

    return {success: false, originalResponse: data};
  } catch (error) {
    return {
        success: false,
        error: true,
        errorDetails: error
     };
  }
};

const uploadFile = async (path, requestMethod = 'POST', formData) => {

}

const getTokenFromStorage = () => {
    return localStorage.getItem('auth');
}

export {getOptions, extendWithAuthToken, uploadFile, basicRequest};