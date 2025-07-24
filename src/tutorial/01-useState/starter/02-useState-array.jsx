import { useState } from "react";
import { data } from "../../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        // console.log(person);
        return (
          <div key={id}>
            <h4>{name}</h4>
          </div>
        );
      })}
    </div>
  );
};
export default UseStateArray;
