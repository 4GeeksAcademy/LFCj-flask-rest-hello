import { NavLink } from "react-router";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Badge, NavDropdown } from "react-bootstrap";
import { useContext } from "react";
import { FavouritesContext } from "../pages/FavsContext";

export const NavigateBar = () => {
  const { favs, deleteFavs } = useContext(FavouritesContext);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Stars Wars de Murcia</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto p-2">
            <NavLink className="p-2" to="/species" end>
              Species
            </NavLink>
            <NavLink className="p-2" to="/spaceships" end>
              Spaceships
            </NavLink>
            <NavLink className="p-2" to="/vehicles" end>
              Vehicles
            </NavLink>
            <NavLink className="p-2" to="/films" end>
              Films
            </NavLink>
            <NavLink className="p-2" to="/people" end>
              People
            </NavLink>
            <NavLink className="p-2" to="/planets" end>
              Planets
            </NavLink>
            <NavDropdown title="Favs" id="basic-nav-dropdown">
              {Array.isArray(favs) && favs.length > 0 ? (
                favs.map((fav) => (
                  <div key={`${fav.type}${fav.uid}`}>
                    <NavDropdown.Item>
                      <NavLink to={`${fav.uid}${fav.type}`}>{fav.name}</NavLink>
                      <Badge onClick={() => deleteFavs(fav.uid, fav.type)}>
                        {" "}
                        X{" "}
                      </Badge>
                    </NavDropdown.Item>
                  </div>
                ))
              ) : (
                <NavDropdown.Item>No favorites</NavDropdown.Item>
              )}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
