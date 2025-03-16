import { useEffect, useState } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router";
import { useContext } from "react";
import { FavouritesContext } from "./FavsContext";
import { getPeople } from "../fecthes/people";

export const People = () => {
  const [people, setPeople] = useState([]);
  const { favs, addFavs, deleteFavs, isFav } = useContext(FavouritesContext);

  useEffect(() => {
    getPeople().then((people) => {
      setPeople(people);
    });
  }, []);

  return (
    <>
      <Row>
        {people.map((item) => {
          return (
            <Col sm={6} lg={3} className="m-2">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.species}</Card.Text>
                  <NavLink to={`/people/${item.id}`}>
                    <Button variant="primary">More info</Button>
                  </NavLink>
                  <Button
                    className="m-1"
                    variant="warning"
                    onClick={() => {
                      isFav(item.id, "people", favs)
                        ? deleteFavs(item.id, "people")
                        : addFavs(item.id, "people", item.name);
                    }}
                  >
                    {isFav(item.id, "people") ? "Unfav" : "Fav"}
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
