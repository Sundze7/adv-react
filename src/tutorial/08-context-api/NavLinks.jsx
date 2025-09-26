import UserContainer from "./UserContainer";

function NavLinks() {
  return (
    <div className="nav-container">
      <ul className="nav-links">
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">about</a>
        </li>
      </ul>

      {/* prop drilling */}
      <UserContainer />
    </div>
  );
}
export default NavLinks;
