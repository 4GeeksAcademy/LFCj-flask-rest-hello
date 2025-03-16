import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const PlanetDetails = () => {
  const { uid } = useParams();
  const [planetDetails, setPlanetDetails] = useState({});

  useEffect(() => {
    const fetchPlanetDetails = () => {
      fetch(`https://reimagined-waffle-pjpjpqgwwq7x27q4q-3000.app.github.dev/planets/${uid}`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data.result);
          setPlanetDetails(data);
        });
    };

    fetchPlanetDetails();
  }, [uid]);

  return (
    <div style={{ padding: "20px" }}>
      {!isEmpty(planetDetails) && (
        <>
          <h2>{planetDetails.name}</h2>
          <p>
            <strong>Climate:</strong> {planetDetails.climate}
          </p>
          <p>
            <strong>Terrain:</strong> {planetDetails.terrain}
          </p>
          <p>
            <strong>Population:</strong> {planetDetails.population}
          </p>
          <p>
            <strong>Diameter:</strong> {planetDetails.diameter} km
          </p>
          <p>
            <strong>Orbital Period:</strong> {planetDetails.orbital_period} days
          </p>
        </>
      )}
    </div>
  );
};
