import { baseUrl, fetchWrapper, spaceshipsUrl } from "../fetch";

const spaceshipsEndpoint = `${baseUrl}${spaceshipsUrl}`;

export const getSpaceships = async () => {
  return await fetchWrapper(spaceshipsEndpoint).then((data) => {
    return data;
  });
};
