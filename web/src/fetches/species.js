import { baseUrl, fetchWrapper, speciesUrl } from "../fetch";

const speciesEndpoint = `${baseUrl}${speciesUrl}`;

export const getSpecies = async () => {
  return await fetchWrapper(speciesEndpoint).then((data) => {
    return data;
  });
};
