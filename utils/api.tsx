import axios from 'axios';

export function postRequest(
  url: string,
  data: any,
  callSetLoader?: any,
  callSetAlert?: any
) {
  return new Promise((resolve, reject) => {
    callSetLoader && callSetLoader(true);

    try {
      axios
        .post(`${process?.env?.NEXT_PUBLIC_API_URL}${url}`, data)
        .then((response) => {
          console.log(['postRequest response', response?.data]);
          callSetAlert(true, response?.data?.message, 'success');
          resolve(response?.data);
        })
        .catch((err) => {
          callSetAlert(true, err?.response?.data?.message, 'error');
          console.log(['postRequest err', err?.response?.data?.message]);
          reject(err);
        });
    } catch (err: any) {
      console.log(['postRequest err', err]);
      callSetAlert(true, err?.response?.data?.message, 'error');
      reject(err);
    } finally {
      setTimeout(() => {
        callSetLoader && callSetLoader(false);
      }, 1000);
    }
  });
}

export function getRequest(
  url: string,
  data: any,
  callSetLoader?: any,
  callSetAlert?: any
) {
  return new Promise((resolve, reject) => {
    callSetLoader && callSetLoader(true);

    try {
      axios
        .get(`${process?.env?.NEXT_PUBLIC_API_URL}${url}`, data)
        .then((response) => {
          callSetAlert(true, response?.data?.message, 'success');
          console.log(['getRequest response', response?.data]);
          resolve(response?.data);
        })
        .catch((err) => {
          callSetAlert(true, err?.response?.data?.message, 'error');
          console.log(['getRequest err', err?.response?.data?.message]);
          reject(err);
        });
    } catch (err: any) {
      console.log(['postRequest err', err]);
      callSetAlert(true, err?.response?.data?.message, 'error');
      reject(err);
    } finally {
      setTimeout(() => {
        callSetLoader && callSetLoader(false);
      }, 1000);
    }
  });
}
