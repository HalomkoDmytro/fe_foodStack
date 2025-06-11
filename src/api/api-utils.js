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

    return data;
  } catch (error) {
    console.log(error);
  }
};

const uploadFileRequest = async (path, requestMethod = 'POST', formData) => {
    const url = `${API}/${path}`;
    const authToken = getTokenFromStorage();
    const options = extendWithAuthToken({'method': requestMethod, 'mode': 'cors'}, authToken);

    options.body = formData;

    try {
        const res = await fetch(url, options);
        return await res.text();;
    } catch (err) {
        console.error("Failed upload FILE:", err);
        return false;
    }

}

const getTokenFromStorage = () => {
    return localStorage.getItem('auth');
}

export {getOptions, extendWithAuthToken, uploadFileRequest, basicRequest};