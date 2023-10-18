import { useEffect, useState } from "react";
import { downloadCanvas, loadPreview } from "../utilities/downloadImage";

const Download = ({ close, modelName, modelRef }) => {
  const [imageType, setImageType] = useState("png");
  const [imageSize, setImageSize] = useState(360);
  const [customCheck, setCustomCheck] = useState(false);
  const [url, setUrl] = useState("");

  const hanldeDownloadClose = () => {
    close();
  };

  const handleDownloadClick = () => {
    downloadCanvas(modelRef.current, imageSize, imageType, modelName);
    close();
  }

  const handleImageSizeCheck = (event) => {
    setImageSize(+event.target.value);
  };
  
  useEffect(()=>{
    const value = loadPreview(modelRef.current)
    !url && setUrl(value);
  },[url])

  return (
    <div className="download-page">
      <div className="download-container">
        <div className="customize-download">
          <div>
            <h4>Download</h4>
            <p>Formats</p>
            <div className="btn-group download-format-grp">
              <label className="file-type-projector" for="format">
                {imageType.toUpperCase()}
              </label>
              <select
                className="file-type-selector"
                id="format"
                defaultValue={""}
                value={""}
                onChange={(e) => setImageType(e.target.value)}
              >
                <option></option>
                <option value={"png"}>PNG</option>
                <option value={"jpg"}>JPG</option>
                <option value={"jpeg"}>JPEG</option>
              </select>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                paddingTop: "3px",
              }}
            >
              <div className="size-selector">
                <p>PNG Size</p>
                <div style={{ display: "flex", gap: "5px" }}>
                  <input
                    type="radio"
                    id="size1"
                    name="size"
                    value="480"
                    onChange={handleImageSizeCheck}
                  />
                  <label for="size1"> 480 x 480</label>
                  <br />
                </div>
                <div style={{ display: "flex", gap: "5px" }}>
                  <input
                    type="radio"
                    id="size2"
                    name="size"
                    value="960"
                    onChange={handleImageSizeCheck}
                  />
                  <label for="size2"> 960 x 960</label>
                  <br />
                </div>
                <div style={{ display: "flex", gap: "5px" }}>
                  <input
                    type="radio"
                    id="size3"
                    name="size"
                    value="1440"
                    onChange={handleImageSizeCheck}
                  />
                  <label for="size3"> 1440 x 1440</label>
                  <br />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  marginTop: "30px",
                  marginLeft: "20px",
                  width: "10rem",
                }}
              >
                <div style={{ display: "flex", gap: "5px" }}>
                  <input
                    type="radio"
                    id="size4"
                    name="size"
                    onChange={(e) => setCustomCheck(e.target.checked)}
                  />
                  <label for="size3"> Custom size</label>
                  <br />
                </div>
                {customCheck ? (
                  <input type="number" onChange={handleImageSizeCheck} />
                ) : null}
              </div>
            </div>
          </div>
          <hr
            style={{
              position: "absolute",
              display: "flex",
              borderLeft: "1px solid white",
              marginTop: 0,
              height: "200px",
              left: "50%",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: "auto",
              marginLeft: "4rem",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p>Preview</p>
              <img style={{position: 'absolute', width: '190px'}} width={96} src={url}/>
            </div>
          </div>
        </div>
        <div className="download-footer">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" for="flexSwitchCheckDefault">
              Remove Background
            </label>
          </div>
          <div className="btn-container">
            <button className="secondary-btn" onClick={hanldeDownloadClose}>
              Cancel
            </button>
            <button
              className="primary-btn"
              onClick={handleDownloadClick}
            >
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;