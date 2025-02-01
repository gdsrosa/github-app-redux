export const parseUserInfo = data => {
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
