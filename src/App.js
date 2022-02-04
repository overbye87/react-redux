import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const likes = useSelector((state) => state.likes);
  console.log(likes);

  const addLike = () => {};
  const removeLike = () => {};

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
