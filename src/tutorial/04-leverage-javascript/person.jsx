import avatar from "../../assets/avatar.png";
const Person = ({ name, nickName = "Shikantia", images }) => {
  // optional chaining
  // const img = images?.[0]?.small?.url || avatar;

  // Or using the 'Nullish Coalescing Operator ??
  const img = images?.[0]?.small?.url ?? avatar;

  return (
    <div>
      <img src={img} alt={name} style={{ width: "50px" }} />
      <h4>{name}</h4>
      <p>Nickname: {nickName}</p>
    </div>
  );
};
export default Person;
