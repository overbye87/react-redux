import { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./App.css";

function App() {
  const bodyInputRef = useRef();

  const dispatch = useDispatch();
  const likes = useSelector((state) => state.likes);

  const [json, setJson] = useState({});
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((j) => {
        console.log(j);
        setJson(j);
      });
  }, []);

  useEffect(() => {
    let t = setTimeout(() => {
      console.log(`Ты накликал ${likes} лайков.`);
    }, 1000);
    return () => {
      clearTimeout(t);
    };
  });

  useEffect(() => {
    console.log("отработал хук эффекта");
    console.log(bodyInputRef.current.value);
    document.title = json.title;
  });

  const addLike = () => {
    dispatch({ type: "ADD_LIKE", payload: 5 });
  };
  const removeLike = () => {
    dispatch({ type: "REMOVE_LIKE", payload: 5 });
  };
  const changeLikes = (e) => {
    dispatch({ type: "CHANGE_LIKES", payload: Number(e.target.value) });
  };

  return (
    <div className="App">
      <h1>{likes}</h1>
      <input value={likes} onChange={(e) => changeLikes(e)}></input>
      <br />
      <br />
      <input ref={bodyInputRef}></input>
      <br />
      <br />
      <div>
        <button onClick={() => addLike()}>Add like</button>
        <button onClick={() => removeLike()}>Remove like</button>
      </div>
    </div>
  );
}

export default App;
