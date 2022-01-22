import axios from "axios";
import Button from "@mui/material/Button";

const FileGetter = ({ setReload }) => {
  const downloadFile = () => {
    const formData = new FormData();
    const file = document.querySelector("#file");
    formData.append("file", file.files[0]);
    axios
      .create()
      .post("http://127.0.0.1:5000/file", formData)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err))
      .finally(() => setReload((prev) => !prev));
  };

  return (
    <div className="panel">
      <div className="center">
        <p>
          Dodaj własny film do naszego programu, po udanym pobraniu pojawi się
          on w "videoHandler"
        </p>
        <Button variant="contained" component="label" color="success">
          Dodaj film
          <input
            type="file"
            id="file"
            name="file"
            hidden
            onChange={downloadFile}
          />
        </Button>
      </div>
    </div>
  );
};

export default FileGetter;
