import { ReactNode } from 'react';

export enum FETCH_METHODS {
  GET = 'GET',
  PATCH = 'PATCH',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export type ProviderProps = {
  children: ReactNode;
};
