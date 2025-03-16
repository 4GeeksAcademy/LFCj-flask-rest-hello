import { baseUrl, fetchWrapper, usersUrl } from "../fetch";

const usersEndpoint = `${baseUrl}${usersUrl}`;

export const getUsers = async () => {
  return await fetchWrapper(usersEndpoint).then((data) => {
    return data;
  });
};

export const getUserFavs = async (userId) => {
  return await fetchWrapper(`${usersEndpoint}${userId}/favourites`).then(
    (data) => {
      return data;
    },
  );
};

export const postUserFavs = async (userId, externalId, name, type) => {
  return await fetchWrapper(`${usersEndpoint}${userId}/favourites`, {
    method: "POST",
    headers: {
      "Content-Type": "aplication/json",
    },
    body: JSON.stringify({
      external_id: externalId,
      name: name,
      type: type,
    }),
  }).then((data) => {
    return data;
  });
};

export const deleteUserFavs = async (userId, favId) => {
  return await fetchWrapper(`${usersEndpoint}${userId}/favourites`, {
    method: "DELETE",
    headers: {
      "Content-Type": "aplication/json",
    },
    body: JSON.stringify({
      id: favId,
    }),
  }).then((data) => {
    return data;
  });
};
