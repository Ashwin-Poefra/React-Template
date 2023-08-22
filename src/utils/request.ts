import axios, { Method } from 'axios';

interface RequestData {
  url: string;
  method: Method;
  data?: unknown;
  isTokenIncluded?: boolean;
}

export const request = async ({ url, method, data, ...rest }: RequestData) => {
  try {
    const responseData = await axios({
      url,
      method,
      data,
      headers: {
        ...(rest.isTokenIncluded && {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }),
      },
    });

    return responseData.data;
  } catch (err) {
    return null;
  }
};
