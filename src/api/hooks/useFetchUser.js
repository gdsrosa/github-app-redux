<<<<<<<< HEAD:src/api/hooks/useFetchUser.ts
import { fetchUser } from '@/api/fetchUser';
import { parseUserInfo } from '@/helpers';
import { useQuery } from '@tanstack/react-query';
========
import { useQuery } from '@tanstack/react-query';
import { fetchUser } from '../fetchUser';
import { transformUserData } from './utils';
>>>>>>>> 0ad717f (feat: update import from api):src/api/hooks/useFetchUser.js

export const useFetchUser = (username: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['user', username],
    queryFn: async () => await fetchUser(username),
    enabled: !!username,
  });

  const userData = transformUserData(data);

  return { data: userData, isLoading, error };
};
