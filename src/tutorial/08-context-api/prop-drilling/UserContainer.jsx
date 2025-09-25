function UseContainer({ user, logout }) {
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
