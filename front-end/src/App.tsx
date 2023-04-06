import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { userSliceProps } from "./redux/types";
import { setUsername, setUserDatas } from "./redux/userSlice";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const userOne = "Pierr";

  const user = useSelector((state: userSliceProps) => state);
  console.log(user);

  const [userDatas, setUserDatasState] = useState<string>("");

  return (
    <div className="App">
      <h1>salut les gens</h1>
      <input
        type="text"
        value={user.username}
        onChange={(e) => setUserDatasState(e.target.value)}
      />
      <button onClick={() => dispatch(setUsername(userDatas))}>
        update user
      </button>
    </div>
  );
}

export default App;
