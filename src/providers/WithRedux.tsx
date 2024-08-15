import { store } from '@/store';
import { ProviderProps } from '@/types';
import { Provider } from 'react-redux';

export function WithRedux({ children }: ProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}
