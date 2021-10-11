import React from "react";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const { name, age, joke } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Redux Saga App</h1>
      <h3>Name = {name}</h3>
      <button onClick={() => dispatch({ type: "UPDATE_NAME" })}>
        Fetch Name
      </button>
      <br /> <br />
      <h3>Age = {age}</h3>
      <button onClick={() => dispatch({ type: "UPDATE_AGE" })}>
        Fetch Age
      </button>
      <h3>Joke = {joke}</h3>
      <button onClick={() => dispatch({ type: "GET_JOKE" })}>Fetch Joke</button>
    </>
  );
}

export default App;
