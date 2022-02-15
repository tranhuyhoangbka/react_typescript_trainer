import env from 'react-dotenv';

const login = (email: string, password: string) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  };

  console.log('start...');

  return fetch(`${env.API_URL}/session`, requestOptions)
    .then(handleResponse)
    .then((response) => {
      console.log('result');
      sessionStorage.setItem('user', JSON.stringify(response));
      return response;
    });
};

const logout = () => {
  sessionStorage.removeItem('user');
};

const handleResponse = (response: any) => {
  console.log('xxxxxx');
  return response.text().then((text: string) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
};

export const userService = {
  login,
  logout,
};