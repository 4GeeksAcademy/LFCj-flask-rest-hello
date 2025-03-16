import { useEffect, useState, useContext } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FavouritesContext } from "./FavsContext";
import { getPlanets } from "../fecthes/planets";

export const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const { favs, addFavs, deleteFavs, isFav } = useContext(FavouritesContext);

  useEffect(() => {
    getPlanets().then((planets) => {
      setPlanets(planets);
    });
  }, []);

  return (
    <>
      <Row>
        {planets.map((item) => {
          return (
            <Col sm={6} lg={3}>
              <Card key={item.id} style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.terrain}</Card.Text>
                  <NavLink to={`/planets/${item.id}`}>
                    <Button variant="primary">More info</Button>
                  </NavLink>
                  <Button
                    className="m-1"
                    variant="warning"
                    onClick={() => {
                      isFav(item.id, "planets", favs)
                        ? deleteFavs(item.id, "planets")
                        : addFavs(item.id, "planets", item.name);
                    }}
                  >
                    {isFav(item.id, "planets") ? "Unfav" : "Fav"}
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
