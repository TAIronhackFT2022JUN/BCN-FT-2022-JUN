// src/App.js
import "./App.css";

import contacts from "./contacts.json";
//importing useState
import { useState } from "react";
//Function to show only 5 contacts || Importing contacts | Hay un total de 52, mejor hacer -5 y que no nos imprima los 5 primeros
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
                <td> {Number(actor.popularity).toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default App;
