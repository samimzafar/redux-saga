const initState = {
  name: "Samim",
  age: 25,
  joke: "",
};
const UserReducer = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE_NAME_SUCCESS":
      return { ...state, name: action.payload };
    case "UPDATE_AGE_SUCCESS":
      return { ...state, age: action.payload };
    case "GET_JOKE_SUCCESS":
      return { ...state, joke: action.payload };
    default:
      return state;
  }
};
export default UserReducer;
