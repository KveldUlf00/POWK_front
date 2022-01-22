import axios from "axios";
import IconButton from "@mui/material/IconButton";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { useState } from "react";

const RunControl = () => {
  const [disabled, setDisabled] = useState(false);
  const clickHandler = () => {
    console.log("odpalam");
    setDisabled(true);
    axios
      .create()
      .get("http://127.0.0.1:5000/run")
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err))
      .finally(() => setDisabled(false));
  };

  return (
    <div className="runPanel">
      <div className="box">
        <h2>Włącz projekt</h2>
        <IconButton
          aria-label="Start"
          onClick={clickHandler}
          color="success"
          disabled={disabled}
          size="large"
        >
          <PlayCircleFilledIcon className="icon" fontSize="inherit" />
        </IconButton>
      </div>
    </div>
  );
};

export default RunControl;
