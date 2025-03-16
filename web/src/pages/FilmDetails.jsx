import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const FilmDetails = () => {
  const { uid } = useParams();
  const [filmDetails, setfilmDetails] = useState({});

  useEffect(() => {
    const fetchfilmDetails = () => {
      fetch(`https://reimagined-waffle-pjpjpqgwwq7x27q4q-3000.app.github.dev/films/${uid}`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data.result);
          setfilmDetails(data);
        });
    };

    fetchfilmDetails();
  }, [uid]);

  return (
    <div style={{ padding: "20px" }}>
      {!isEmpty(filmDetails) && (
        <>
          <h2>{filmDetails.title}</h2>
          <p>
            <strong></strong> {filmDetails.opening_crawl}
          </p>
          <p>
            <strong>Planet:</strong> {filmDetails.planets}
          </p>
          <p>
            <strong>Directed by:</strong> {filmDetails.director}
          </p>
          <p>
            <strong>Produced by:</strong> {filmDetails.producer}
          </p>
        </>
      )}
      {/* Muestra más detalles si es necesario */}
    </div>
  );
};
