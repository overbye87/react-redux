import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const likes = useSelector((state) => state.likes);
  console.log(likes);

  const addLike = () => {
    dispatch({ type: "ADD_LIKE", payload: 5 });
  };
  const removeLike = () => {
    dispatch({ type: "REMOVE_LIKE", payload: 5 });
  };

  return (
    <div className="App">
      <h1>{likes}</h1>
      <div>
        <button onClick={() => addLike()}>Add like</button>
        <button onClick={() => removeLike()}>Remove like</button>
      </div>
    </div>
  );
}

export default App;
