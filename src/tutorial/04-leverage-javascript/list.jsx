import { people } from "../../../data";
function List() {
  return (
    <div>
      {people.map((people) => {
        return <h3 key={people.name}>{people.name}</h3>;
      })}
    </div>
  );
}
export default List;
