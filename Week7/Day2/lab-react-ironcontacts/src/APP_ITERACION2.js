// src/App.js
import "./App.css";
// Importing contacts | Hay un total de 52, mejor hacer -5 y que no nos imprima los 5 primeros
import contacts from "./contacts.json";
//importing useState
import { useState } from "react";

//Function to show only 5 contacts
// const actorsFiveMax = contacts.splice(5, 5); <-- Poner esto para que se vea el Matt Damon con el oscar
const actorsFiveMax = contacts.splice(0, 5);

function App() {
  //const and variables, and hooks
  const [actors, setActors] = useState(actorsFiveMax);

  return (
    <div className="App">
      <table className="tableActors">
        <thead>
          <tr>
            <th> Picture </th>
            <th> Name </th>
            <th> Popularity </th>
            {/* --------------------------- ITERACION 2 --------------------------- */}
            <th> Won Oscar</th>
            <th> Won Emmy</th>
            {/* --------------------------- ITERACION 2 --------------------------- */}
          </tr>
        </thead>
        <tbody>
          {actors.map((actor) => {
            return (
              <tr key={actor.id}>
                <td>
                  <img
                    src={actor.pictureUrl}
                    width="100px"
                    height="120px"
                    alt="Actor"
                  />
                </td>
                <td> {actor.name} </td>
                {/* Number.toFixed para redondear */}
                <td> {Number(actor.popularity).toFixed(2)}</td>
                <td>{actor.wonOscar ? "🏆" : ""}</td>
                <td>{actor.wonEmmy ? "🏆" : ""}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default App;
