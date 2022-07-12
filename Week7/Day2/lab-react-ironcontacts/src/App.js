// src/App.js
import "./App.css";
// Importing contacts
import contacts from "./contacts.json";
//importing useState
import { useState } from "react";

//React bootstrap components
import Button from "react-bootstrap/Button";

//Function to show only 5 contacts
const actorsFiveMax = contacts.splice(0, 5);

function App() {
  //const and variables, and hooks
  const [actors, setActors] = useState(actorsFiveMax);
  let copyArray = [...actors];

  //Function that adds a random contact at the start, and prevents to keep adding
  const addRandomContact = () => {
    //not the first 5
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

  //Another method - easier
  // const addRandomContact = () => {
  //   let random = Math.floor(Math.random() * contacts.length);
  //   setActors([...actors, contacts[random]]);
  // };

  //Function that sorts by popularity
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  const sortByPopularity = () => {
    copyArray.sort(function (a, b) {
      return b.popularity - a.popularity;
    });
    setActors(copyArray);
  };

  //Function that sorts by name
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
  const sortByName = () => {
    copyArray.sort((a, b) => a.name.localeCompare(b.name));
    setActors(copyArray);
  };

  //Function that deletes the actor
  const deleteActor = (actorID) => {
    const actorsNoDeleted = actors.filter((actor) => {
      return actor.id !== actorID;
    });
    setActors(actorsNoDeleted);
  };

  return (
    <div className="App">
      <div className="tableDiv">
        <h1>IronContacts</h1>
        <div>
          <Button
            variant="outline-warning"
            onClick={addRandomContact}
            className="btnIroncontact"
          >
            Add random contact
          </Button>
          <Button
            variant="outline-warning"
            onClick={sortByPopularity}
            className="btnIroncontact"
          >
            Sort by popularity
          </Button>
          <Button
            variant="outline-warning"
            onClick={sortByName}
            className="btnIroncontact"
          >
            Sort by name
          </Button>
        </div>

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
                  {/* Number.toFixed para redondear */}
                  <td> {Number(actor.popularity).toFixed(2)}</td>
                  <td>{actor.wonOscar ? "🏆" : ""}</td>
                  <td>{actor.wonEmmy ? "🏆" : ""}</td>
                  <td>
                    <Button
                      variant="outline-danger"
                      onClick={() => {
                        deleteActor(actor.id);
                      }}
                      id={actor.id}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
