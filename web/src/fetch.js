export const baseUrl =
  "https://reimagined-waffle-pjpjpqgwwq7x27q4q-3000.app.github.dev/";
export const usersUrl = "users/";
export const peopleUrl = "people/";
export const filmsUrl = "films/";
export const vehiclesUrl = "vehicles/";
export const spaceshipsUrl = "spaceships/";
export const speciesUrl = "species/";
export const planetsUrl = "planets/";
export const favouritesUrl = "users/favs";

export const fetchWrapper = async (input, init) => {
  return await fetch(input, init)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText || response.status);
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};
