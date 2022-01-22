import { useState } from "react";
import LogoPanel from "./LogoPanel";
import SettingPanel from "./SettingsPanel";
import RunControl from "./RunControl";
import FileGetter from "./FileGetter";
import SliderPanel from "./SliderPanel";

const App = () => {
  const [reload, setReload] = useState(false);

  return (
    <div className="container">
      <div className="container__left">
        <LogoPanel />
        <SettingPanel reload={reload} />
      </div>
      <div className="container__right">
        <RunControl />
        <FileGetter setReload={setReload} />
        <SliderPanel />
      </div>
    </div>
  );
};

export default App;
