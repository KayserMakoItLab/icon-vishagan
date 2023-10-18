import { useState } from "react";
import { storeDataInLocalStorage } from "../utilities/localStorage";
import Rotation from "./Rotation";
import Position from "./Position";
import Download from "./Download";
import { exportAsImage } from "../utilities/downloadImage";
import Color from "./ColorPanel";
import { data } from "../data/icons";
import Category from "./Category";

const ElementDetails = ({
  setIcons,
  fav,
  close,
  setActiveIcon,
  itemDetails,
  rotation,
  position,
  downloadRef,
  changeOptionElement,
  loadModelToEdit,
  modelRef,
}) => {
  const [favSelected, setfavSelected] = useState(fav);
  const [openElementDetailsOptions, setOpenElementDetailsOptions] =
    useState(false);
  const [elementDetailsOptions, setElementDetailsOptions] = useState();
  const [trackRotation, setTrackRotation] = useState(0);
  const [trackPosition, setTrackPosition] = useState(0);

  let categoryData = [];

  if (itemDetails.tags.includes(",")) {
    categoryData = itemDetails.tags.split(",");
  } else {
    categoryData.push(itemDetails.tags);
  }

  const handleCloseClick = () => {
    setActiveIcon(-1);
    loadModelToEdit(false);
    close();
  };

  const handleFavouritesClick = () => {
    setfavSelected(!favSelected);
    storeDataInLocalStorage(itemDetails.id);
  };

  const handleClose = () => {
    setOpenElementDetailsOptions(false);
  };

  const handleRotationCLick = () => {
    loadModelToEdit(true);
    setOpenElementDetailsOptions(true);
    setElementDetailsOptions(
      <Rotation close={handleClose} rotation={setTrackRotation} />
    );
  };

  const handlePositionClick = () => {
    loadModelToEdit(true);
    setOpenElementDetailsOptions(true);
    setElementDetailsOptions(
      <Position close={handleClose} changePosition={setTrackPosition} />
    );
  };

  const handleDownloadClick = async () => {
    setOpenElementDetailsOptions(true);
    setElementDetailsOptions(
      <Download
        close={handleClose}
        modelName={itemDetails.title}
        modelRef={modelRef}
      />
    );
  };

  const handleColorEditClick = () => {
    loadModelToEdit(true);
    setOpenElementDetailsOptions(true);
    setElementDetailsOptions(<Color close={handleClose} />);
  };

  const handleCategoryClick = (item) => {
    const sortedData = data.filter(({ tags }) => tags.includes(item));
    setIcons(sortedData);
    setActiveIcon(-1);
    changeOptionElement(<Category setIcons={setIcons} close={close} />);
  };

  rotation(trackRotation);
  position(trackPosition);

  return (
    <div className="icon-details-container">
      {!openElementDetailsOptions ? (
        <>
          <div>
            <p className="icon-category-text">{itemDetails.category}</p>
            <h1>{itemDetails.title}</h1>
          </div>
          <div className="btn-details-container">
            <button className="details-btn" onClick={handleFavouritesClick}>
              {favSelected ? "♥" : "♡"}
            </button>
            <button className="btn back-btn" onClick={handleCloseClick}>
              x
            </button>
            <button className="details-btn" onClick={handleDownloadClick}>
              Download
            </button>
          </div>
          <div className="btn-container">
            <button className="btn element-btn" onClick={handleColorEditClick}>
              Colors
            </button>
            <button className="btn element-btn" onClick={handlePositionClick}>
              Position
            </button>
            <button className="btn element-btn" onClick={handleRotationCLick}>
              Rotation
            </button>
          </div>
          <div className="btn-container">
            {categoryData.length > 0 &&
              categoryData.map((item) => {
                return (
                  <button
                    onClick={() => handleCategoryClick(item)}
                    className="btn element-category-btn"
                  >
                    {item}
                  </button>
                );
              })}
          </div>
        </>
      ) : (
        elementDetailsOptions
      )}
      <div id="screenshot-container"></div>
    </div>
  );
};

export default ElementDetails;