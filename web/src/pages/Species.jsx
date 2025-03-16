import { useEffect, useState } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router";
import { useContext } from "react";
import { FavouritesContext } from "./FavsContext";
import { getSpecies } from "../fecthes/species";

export const Species = () => {
  const [species, setSpecies] = useState([]);
  const { favs, addFavs, deleteFavs, isFav } = useContext(FavouritesContext);

  useEffect(() => {
    getSpecies().then((species) => {
      setSpecies(species);
    });
  }, []);

  return (
    <>
      <Row>
        {species.map((item) => {
          return (
            <Col sm={6} lg={3} className="m-2">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.designation}</Card.Text>
                  <NavLink to={`/species/${item.id}`}>
                    <Button variant="primary">More info</Button>
                  </NavLink>
                  <Button
                    className="m-1"
                    variant="warning"
                    onClick={() => {
                      isFav(item.id, "species", favs)
                        ? deleteFavs(item.id, "species")
                        : addFavs(item.id, "species", item.name);
                    }}
                  >
                    {isFav(item.id, "species") ? "Unfav" : "Fav"}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};
