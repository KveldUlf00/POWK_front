import React, { useEffect, useState } from "react";
import Slider from "@mui/material/Slider";
import { getSettings, postSettings } from "../api/main.js";

const SliderPanel = () => {
  const [sliderValue, setSliderValue] = useState(0);

  const handleChange = (e) => {
    const name = e.target.name;
    let param = e.target.value;

    postSettings(`${name}-${param}`).then((res) =>
      setSliderValue(parseInt(res.predictValue))
    );
  };

  useEffect(() => {
    getSettings().then((res) => setSliderValue(parseInt(res.predictValue)));
  }, []);

  return (
    <div className="sliderPanel">
      <p>Skuteczność odczytania danej emocji</p>
      <div className="sliderBox">
        <Slider
          name="predictValue"
          defaultValue={40}
          value={sliderValue}
          onChange={handleChange}
          aria-label="Default"
          valueLabelDisplay="auto"
          color="success"
        />
      </div>
    </div>
  );
};

export default SliderPanel;
