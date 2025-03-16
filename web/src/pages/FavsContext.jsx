import { createContext, useEffect, useState } from "react";
import { deleteUserFavs, postUserFavs, getUserFavs } from "../fetches/user";

export const FavouritesContext = createContext({
  setFavs: () => {},
  deleteFavs: (id) => {},
  addFavs: (id, name, type) => {},
});

export const FavouritesProvider = ({ children }) => {
  const [favs, setFavs] = useState([]);

  const userId = 1;

  const deleteFavs = (externalId, type) => {
    const fav = favs.find((fav) => fav.external_id === externalId && fav.type === type);
    if (!fav) {
      console.error("Error: No se encontró el favorito para eliminar");
      return;
    }
    deleteUserFavs(userId, fav.id).then(() => {
      refreshFavs();
    });
  };

  const isFav = (id, type) => {
    return Array.isArray(favs) ? favs.some((fav) => fav.id === id && fav.type === type) : false;
  };
  

  const addFavs = (externalId, name, type) => {
    postUserFavs(userId, externalId, type, name).then(() => {
      refreshFavs();
    });
  };

  const refreshFavs = () => {
    getUserFavs(userId).then((data) => {
      console.log("Favoritos recibidos:", data); // 🐛 Debug
      if (Array.isArray(data)) {
        setFavs(data);
      } else {
        console.error("Error: getUserFavs no devolvió un array", data);
        setFavs([]); // Evita errores en .some()
      }
    }).catch(error => {
      console.error("Error en getUserFavs:", error);
      setFavs([]);
    });
  };
  

  useEffect(() => {
    refreshFavs();
  }, []);

  return (
    <FavouritesContext.Provider
      value={{ favs, setFavs, addFavs, deleteFavs, isFav }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
