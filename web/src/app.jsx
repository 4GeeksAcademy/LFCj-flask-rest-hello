import { NavigateBar } from "./components/NavBar";
import { People } from "./pages/People";
import { Route, Routes } from "react-router";
import { Films } from "./pages/Films";
import { Planets } from "./pages/Planets";
import { PlanetDetails } from "./pages/PlanetDetails";
import { PeopleDetails } from "./pages/PeopleDetails";
import { FilmDetails } from "./pages/FilmDetails";
import { Vehicles } from "./pages/Vehicles";
import { Spaceships } from "./pages/Spaceships";
import { Species } from "./pages/Species";
import { Login } from "./pages/Login";

export const App = () => {
  return (
    <>
      <NavigateBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/films" element={<Films />} />
        <Route path="/films/:uid" element={<FilmDetails />} />
        <Route path="/people" element={<People />} />
        <Route path="/people/:uid" element={<PeopleDetails />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/planets/:uid" element={<PlanetDetails />} />
        <Route path="/species" element={<Species />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/spaceships" element={<Spaceships />} />
      </Routes>
    </>
  );
};