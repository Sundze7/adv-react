// import { useContext } from "react";
// import { NavbarContext } from "./01-navbar";

import { useAppContext } from "./01-navbar";

function UseContainer() {
  // const { user, logout } = useContext(NavbarContext);
  const { user, logout } = useAppContext();
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello There, {user?.name?.toUpperCase()}</p>
          <button className="btn" onClick={logout}>
            log out
          </button>
        </>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  );
}
export default UseContainer;
