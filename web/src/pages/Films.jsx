import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { NavLink } from "react-router";
import { FavouritesContext } from "./FavsContext";
import { useContext } from "react";
import { getFilms } from "../fecthes/films";

export const Films = () => {
  const [films, setFilms] = useState([]);
  const { favs, addFavs, deleteFavs, isFav } = useContext(FavouritesContext);

  useEffect(() => {
    getFilms().then((films) => {
      setFilms(films);
    });
  }, []);

  return (
    <>
      <Row>
        {films.map((item) => {
          return (
            <Col sm={6} lg={3} className="m-2">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    Dirigido por el cabeza de chorlito de{" "}
                    <strong>{item.director}</strong>
                  </Card.Text>
                  <NavLink to={`/films/${item.id}`}>
                    <Button className="m-1" variant="primary">
                      More info
                    </Button>
                  </NavLink>
                  <Button
                    className="m-1"
                    variant="warning"
                    onClick={() => {
                      isFav(item.id, "film", favs)
                        ? deleteFavs(item.id, "film")
                        : addFavs(item.id, "film", item.title);
                    }}
                  >
                    {isFav(item.id, "film") ? "Unfav" : "Fav"}
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
