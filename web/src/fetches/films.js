import { baseUrl, fetchWrapper, filmsUrl } from "../fetch";

const filmsEndpoint = `${baseUrl}${filmsUrl}`;

export const getFilms = async () => {
  return await fetchWrapper(filmsEndpoint).then((data) => {
    return data;
  });
};
