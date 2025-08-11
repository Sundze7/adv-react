import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    // normally connect to db or api
    setUser({ name: "Shout-out To You" });
  };
  const logout = () => {
    setUser(null);
  };
  return (
    <div>
      {user ? (
        <div>
          <h4>Hello there, {user.name}</h4>
          <button className="btn" onClick={logout}>
            log out
          </button>
        </div>
      ) : (
        <div>
          <h4>Please Log-in</h4>
          <button className="btn" onClick={login}>
            log out
          </button>
        </div>
      )}
    </div>
  );
};
export default UserChallenge;
