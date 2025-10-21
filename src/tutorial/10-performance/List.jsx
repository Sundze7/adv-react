import { memo } from "react";
import Person from "../04-leverage-javascript/person";

function List({ people }) {
  return (
    <div>
      {people.map((person) => {
        return <Person key={person.name} {...person} />;
      })}
    </div>
  );
}
export default memo(List);
