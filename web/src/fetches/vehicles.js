import { baseUrl, fetchWrapper, vehiclesUrl } from "../fetch";

const vehiclesEndpoint = `${baseUrl}${vehiclesUrl}`;

export const getVehicles = async () => {
  return await fetchWrapper(vehiclesEndpoint).then((data) => {
    return data;
  });
};
