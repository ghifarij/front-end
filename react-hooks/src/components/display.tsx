import { useContext } from "react";
import { UserContext } from "../App";

function DisplayComp() {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>Hello {user}</h1>
    </div>
  );
}

export default DisplayComp;
