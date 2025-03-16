import { useState, useEffect } from "react";
import { useParams } from "react-router";

export const PeopleDetails = () => {
  const { uid } = useParams();
  const [PeopleDetails, setPeopleDetails] = useState({});

  useEffect(() => {
    const fetchPeopleDetails = async () => {
      try {
        const response = await fetch(`https://reimagined-waffle-pjpjpqgwwq7x27q4q-3000.app.github.dev/people/${uid}`);
        const data = await response.json();
  
        console.log("Respuesta de la API:", data); // 🐛 Debug
  
        if (data) {
          setPeopleDetails(data); // ✅ Asigna el objeto directamente
        } else {
          console.error("Error: La API no devolvió datos válidos", data);
          setPeopleDetails(null);
        }
      } catch (error) {
        console.error("Error en fetchPeopleDetails:", error);
        setPeopleDetails(null);
      }
    };
  
    fetchPeopleDetails();
  }, [uid]);
    

  return (
    <div style={{ padding: "20px" }}>
      {PeopleDetails ? (
        <>
          <h2>{PeopleDetails.name}</h2>
          <p>
            <strong>Name:</strong> {PeopleDetails.name}
          </p>
          <p>
            <strong>Specie:</strong> {PeopleDetails.species}
          </p>
          <p>
            <strong>Height:</strong> {PeopleDetails.height}
          </p>
          <p>
            <strong>Hair color:</strong> {PeopleDetails.hair_color}
          </p>
        </>
      ) : (
        <p>Cargando datos o no disponibles...</p>
      )}
    </div>
  );
}