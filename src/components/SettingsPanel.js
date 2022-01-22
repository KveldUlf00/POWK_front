import React, { useEffect, useState } from "react";
import Setting from "./Setting";
import { getSettings, getVideos, postSettings } from "../api/main.js";

const availableSettings = [
  "cameraHandler",
  "captureScreenHandler",
  "saveVideo",
  "videoHandler",
];

const SettingPanel = ({ reload }) => {
  const [settings, setSettings] = useState([]);
  const [videos, setVideos] = useState([]);
  const makeSettingsLayout = (config) => {
    const result = availableSettings.map((elem) => ({
      name: elem,
      value: config[elem],
    }));
    setSettings(result);
  };

  const handleClick = (e) => {
    const name = e.target.name;
    let param = e.target.value;
    if (e.target.value === "true") {
      param = "false";
    } else if (e.target.value === "false") {
      param = "true";
    }

    postSettings(`${name}-${param}`).then((res) => makeSettingsLayout(res));
  };

  useEffect(() => {
    getSettings().then((res) => makeSettingsLayout(res));
    getVideos().then((res) => setVideos([...res, "Brak"]));
  }, [reload]);

  return (
    <div className="settingsPanel">
      {settings.map((elem) => (
        <Setting
          key={elem.name}
          name={elem.name}
          value={elem.value}
          handleClick={handleClick}
          videos={videos}
        />
      ))}
    </div>
  );
};

export default SettingPanel;
