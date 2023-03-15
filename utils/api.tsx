import axios from 'axios';

export function postRequest(url: string, data: any) {
  return new Promise((resolve, reject) => {
    try {
      axios
        .post(`${process?.env?.NEXT_PUBLIC_API_URL}${url}`, data)
        .then((response) => {
          console.log(['postRequest response', response?.data]);
          resolve(response?.data);
        })
        .catch((err) => {
          console.log(['postRequest err', err?.response?.data?.message]);
          reject(err);
        });
    } catch (err) {
      console.log(['postRequest err', err]);
      reject(err);
    }
  });
}

export function getRequest(url: string, data: any) {
  return new Promise((resolve, reject) => {
    try {
      axios
        .get(`${process?.env?.NEXT_PUBLIC_API_URL}${url}`, data)
        .then((response) => {
          console.log(['getRequest response', response?.data]);
          resolve(response?.data);
        })
        .catch((err) => {
          console.log(['getRequest err', err?.response?.data?.message]);
          reject(err);
        });
    } catch (err) {
      console.log(['getRequest err', err]);
      reject(err);
    }
  });
}
