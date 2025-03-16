import { baseUrl, fetchWrapper, favouritesUrl } from "../fetch";

const favouritesEndpoint = `${baseUrl}${favouritesUrl}`;

export const getFavourites = async () => {
  return await fetchWrapper(favouritesEndpoint).then((data) => {
    return data;
  });
};
