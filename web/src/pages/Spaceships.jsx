import { useEffect, useState } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router";
import { useContext } from "react";
import { FavouritesContext } from "./FavsContext";
import { getSpaceships } from "../fecthes/spaceships";

export const Spaceships = () => {
  const [spaceships, setSpaceships] = useState([]);
  const { favs, addFavs, deleteFavs, isFav } = useContext(FavouritesContext);

  useEffect(() => {
    getSpaceships().then((spaceships) => {
      setSpaceships(spaceships);
    });
  }, []);

  return (
    <>
      <Row>
        {spaceships.map((item) => {
          return (
            <Col sm={6} lg={3} className="m-2">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.manufacturer}</Card.Text>
                  <NavLink to={`/spaceships/${item.id}`}>
                    <Button variant="primary">More info</Button>
                  </NavLink>
                  <Button
                    className="m-1"
                    variant="warning"
                    onClick={() => {
                      isFav(item.id, "spaceships", favs)
                        ? deleteFavs(item.id, "spaceships")
                        : addFavs(item.id, "spaceships", item.name);
                    }}
                  >
                    {isFav(item.id, "spaceships") ? "Unfav" : "Fav"}
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
