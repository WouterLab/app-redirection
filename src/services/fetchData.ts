/* eslint-disable no-console */
import axios, { AxiosRequestConfig } from 'axios';
import { BACKEND_URL } from '@/constants/constants';
import { FETCH_METHODS } from '@/types';

type FetchParams = {
  url: string;
  method?: FETCH_METHODS;
  body?: Object;
};

export async function fetchData({
  url,
  method = FETCH_METHODS.GET,
  body,
}: FetchParams) {
  try {
    const fetchUrl = `${BACKEND_URL}/api${url}`;

    const options: AxiosRequestConfig = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (body) {
      options.data = body;
    }

    const response = await axios(fetchUrl, options);

    return response.data;
  } catch (error) {
    console.error('An error occurred while fetching data');
  }
}
