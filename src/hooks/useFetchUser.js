import { useQuery } from '@tanstack/react-query';
import { fetchUser } from '@/api/fetchUser';
import { parseUserInfo } from '@/helpers';

export const useFetchUser = (username) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['user', username],
    queryFn: async () => await fetchUser(username),
    enabled: !!username,
  });

  const userData = parseUserInfo(data);

  return { data: userData, isLoading, error };
};
