// src/App.js
import "./App.css";
// Importing contacts | Hay un total de 52, mejor hacer -5 y que no nos imprima los 5 primeros
import contacts from "./contacts.json";
//importing useState
import { useState } from "react";

{
  /* --------------------------- ITERACION 3 ---------------------------
  https://react-bootstrap.github.io/getting-started/introduction
  npm install react-bootstrap bootstrap
   */
}
//React bootstrap components
// import Button from "react-bootstrap/Button";
{
  /* --------------------------- ITERACION 3 --------------------------- */
}

//Function to show only 5 contacts
// const actorsFiveMax = contacts.splice(5, 5); <-- Poner esto para que se vea el Matt Damon con el oscar
const actorsFiveMax = contacts.splice(0, 5);

function App() {
  //const and variables, and hooks
  const [actors, setActors] = useState(actorsFiveMax);
  let copyArray = [...actors];

  /* --------------------------- ITERACION 3 --------------------------- */
  //Function that adds a random contact at the start, and prevents to keep adding
  const addRandomContact = () => {
    //5 primeros no
    let randomContact =
      contacts[Math.floor(Math.random() * contacts.length) + 5];
    //Pillamos el valor si está o no
    let existIn = contacts.indexOf(randomContact);

    //unshift first position (add at first)
    if (randomContact) {
      copyArray.unshift(randomContact);
    }
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
    //or -1 if it is not present. to not repeat
    if (existIn > -1) {
      contacts.splice(existIn, 1);
    }

    setActors(copyArray);
  };
  /* --------------------------- ITERACION 3 --------------------------- */

  return (
    <div className="App">
      {/* --------------------------- ITERACION 3 --------------------------- */}
      <button onClick={addRandomContact}>Add random contact</button>
      {/* --------------------------- ITERACION 3 --------------------------- */}
      <table className="tableActors">
        <thead>
          <tr>
            <th> Picture </th>
            <th> Name </th>
            <th> Popularity </th>
            <th> Won Oscar</th>
            <th> Won Emmy</th>
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
                <td>{actor.wonOscar ? "🏆" : ""}</td>
                <td>{actor.wonEmmy ? "🏆" : ""}</td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default App;
