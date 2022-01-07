import axios from "axios";
import react, { useState } from "react";

export default function App() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}

function MyComponent() {
  const [validation, setvalidation] = useState(false);
  const [msg, setmsg] = useState("");
  const [list, setlist] = useState([]);

  let getmsg = (e) => {
    setmsg(e.target.value);
  };

  let getsend = async () => {
    if (msg == "") {
      setvalidation(true);
      return;
    }
    const url = "http://localhost:8000/addUser";
    const body = {
      message: msg,
    };
    await axios.post(url, body);

    const newlist = [...list, body];
    setlist(newlist);
    setmsg("");
    setvalidation(false);
  };

  return (
    <div>
      <div className="bg-info p-3 m-0 d-flex ">
        <h4 className="me-2">MyChatApp </h4>
        <p> by (Mahima Modhawala)( 210940320060)</p>
      </div>
      <div className="d-flex mt-3 ms-2 mb-2">
        <input
          type="text"
          value={msg}
          className="form-control me-3 p-2 m-2"
          placeholder="Lets chat here..."
          className={
            msg == "" && validation ? "border border-danger border-3" : ""
          }
          onChange={getmsg}
        />
        <input
          type="button"
          className="btn btn-primary btn-sm me-2 ms-2"
          value="SEND"
          onClick={getsend}
        />
      </div>
      {list.map((item, index) => (
        <div key={index} className="alert-info mb-2 p-2">
          {item.message}
        </div>
      ))}
    </div>
  );
}
