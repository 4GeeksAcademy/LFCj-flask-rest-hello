import { useEffect, useState } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router";
import { useContext } from "react";
import { FavouritesContext } from "./FavsContext";
import { getVehicles } from "../fecthes/vehicles";

export const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const { favs, addFavs, deleteFavs, isFav } = useContext(FavouritesContext);

  useEffect(() => {
    getVehicles().then((vehicles) => {
      setVehicles(vehicles);
    });
  }, []);

  return (
    <>
      <Row>
        {vehicles.map((item) => {
          return (
            <Col sm={6} lg={3} className="m-2">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.manufacturer}</Card.Text>
                  <NavLink to={`/vehicles/${item.id}`}>
                    <Button variant="primary">More info</Button>
                  </NavLink>
                  <Button
                    className="m-1"
                    variant="warning"
                    onClick={() => {
                      isFav(item.id, "vehicles", favs)
                        ? deleteFavs(item.id, "vehicles")
                        : addFavs(item.id, "vehicles", item.name);
                    }}
                  >
                    {isFav(item.id, "vehicles") ? "Unfav" : "Fav"}
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
