import React from "react";
import Calendar from "../components/Calendar/Calendar";

const Agenda = () => {
  return (
    <div>
      <h1>Titre</h1>
      <p>
        La page d'accueil doit montrer un lien pour se signup et un lien pour se
        signin si la personne parcourant le site n'est pas connectée. Si elle
        est connectée, le lien pour se logout doit être affiché à la place.
      </p>
      <Calendar></Calendar>
      <button class="btn">Button</button>
    </div>
  );
};

export default Agenda;
