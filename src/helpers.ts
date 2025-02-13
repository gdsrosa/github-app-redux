type UserInfo = {
  avatar_url: string;
  bio: string;
  location: string;
  name: string;
  public_repos: number;
  login: string;
};

export const parseUserInfo = (data: UserInfo) => {
  if (!data) return {};

  return {
    photo: data.avatar_url,
    bio: data.bio,
    location: data.location,
    name: data.name,
    publicRepos: data.public_repos,
    username: data.login,
  };
};
