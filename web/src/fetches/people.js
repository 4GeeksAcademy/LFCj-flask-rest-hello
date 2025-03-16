import { baseUrl, fetchWrapper, peopleUrl } from "../fetch";

const peopleEndpoint = `${baseUrl}${peopleUrl}`;

export const getPeople = async () => {
  return await fetchWrapper(peopleEndpoint).then((data) => {
    return data;
  });
};
