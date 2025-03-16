import { baseUrl, fetchWrapper, planetsUrl } from "../fetch";

const planetsEndpoint = `${baseUrl}${planetsUrl}`;

export const getPlanets = async () => {
  return await fetchWrapper(planetsEndpoint).then((data) => {
    return data;
  });
};
