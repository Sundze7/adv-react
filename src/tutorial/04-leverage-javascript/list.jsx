import { people } from "../../../data";
import Person from "./person";
function List() {
  return (
    <div>
      {people.map((person) => {
        return <Person key={person.name} {...person} />;
      })}
    </div>
  );
}
export default List;
