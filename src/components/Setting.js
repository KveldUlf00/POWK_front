import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { makeStyles } from "@material-ui/core/styles";
// import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  select: {
    color: "#fff !important",
    borderColor: "#fff !important",
    "&:before": {
      borderColor: "#fff !important",
    },
    "&:after": {
      borderColor: "#fff !important",
    },
    "&:not(.Mui-disabled):hover::before": {
      borderColor: "#fff !important",
    },
  },
  icon: {
    fill: "#fff !important",
  },
}));

const Setting = ({ handleClick, name, value, videos }) => {
  const classes = useStyles();
  const [actualColor, setActualColor] = useState("success");
  const [video, setVideo] = useState("");

  const colorHandler = () => {
    if (typeof value === "boolean") {
      return value ? "success" : "error";
    } else {
      return "secondary";
    }
  };

  useEffect(() => {
    if (value !== null) {
      setActualColor(colorHandler(value));
      if (name === "videoHandler") {
        if (value !== "") {
          setVideo(value.split("\\").slice(-1));
        } else {
          setVideo("Pusty");
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div className="setting">
      <p>{name}</p>
      {name === "videoHandler" ? (
        <Select
          className={classes.select}
          inputProps={{
            classes: {
              icon: classes.icon,
            },
          }}
          labelId="label for videos select"
          id="videosSelect"
          name={name}
          value={video}
          label="Video"
          onChange={handleClick}
        >
          {videos.map((elem) => (
            <MenuItem value={elem} key={elem !== "" ? elem : "Pusty"}>
              {elem !== "" ? elem : "Pusty"}
            </MenuItem>
          ))}
        </Select>
      ) : (
        <Button
          name={name}
          value={value}
          variant="outlined"
          color={actualColor}
          onClick={handleClick}
        >
          Zmień
        </Button>
      )}
    </div>
  );
};

export default Setting;
