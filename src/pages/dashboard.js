import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { data } from "../data/icons";
import Image from "next/image";
import Header from "../components/Header";
import Category from "../components/Category";
import Search from "../components/Search";
import ElementDetails from "../components/ElementDetails";
import { mouseHoverMagnifyEffect, removeMouseHoverMagnifyEffect } from "../utilities/effects";
import LoadModel from "../components/LoadModel";
import { useRouter } from "next/router";

const Dashboard = () => {

  const [icons, setIcons] = useState(data);
  const [iconSize, setIconSize] = useState({
    width: 100, 
    height: 100,
  })
  const [position,setPosition] = useState([]);
  const [activeIcon, setActiveIcon] = useState(-1);
  const [openOptions, setOpenOptions] = useState(false)
  const [optionElement, setOptionElement] = useState()
  const [favIcon, setFavIcon] = useState(false);
  const [playEffect, setPlayEffect] = useState(true);
  const [modelRotate, setModelRotate] = useState(0)
  const [modelPosition, setModelPosition] = useState(0)
  const [load3dModel, setLoad3DModel] = useState(false)
  const [disableIconClick, setDisableIconClick] = useState(false)

  const ref = useRef(null);
  const exportRef = useRef([]);
  const router = useRouter()
  const modelRef = useRef(null)
  
  useEffect(() => {
    const gridWidth = ref?.current?.offsetWidth;
    const gridColumn = 10;
    const gridRow = icons.length / gridColumn;
    const gridItem = gridWidth / gridColumn;
    setIconSize({
      width: gridItem,
      height: gridItem,
    });
    setPosition(generateTransfromAxis(gridRow,gridColumn))
  },[])


  const generateTransfromAxis = (row,col) => {
    let axis = []
    for(let i=0; i < row; i++) {
      for(let j=0; j < col; j++) {
        axis.push({ 
            x : i,
            y : j,
        })
      }
    }
    return axis;
  }

  const handleCloseOption = () => {
    setOpenOptions(false)
    setFavIcon(false)
    setIcons(data)
    setPlayEffect(true)
    router.push({
      pathname: '/dashboard',
    })
  }

  const handleCategoryClick = () => {
    setOpenOptions(true)
    setFavIcon(false)
    setOptionElement(<Category setIcons={setIcons} close={handleCloseOption} />)
  }

  const handleSearchClick = () => {
    setOpenOptions(true)
    setFavIcon(false)
    setOptionElement(<Search setIcons={setIcons} close={handleCloseOption} />)
  }

  const handleIconClick = (index, itemDetails) => {
    setPlayEffect(false)
    setOpenOptions(true)
    setActiveIcon(index)
    setFavIcon(false)
    const findAllSavedIds = JSON.parse(localStorage.getItem('icons'))
    const findSelectedFav = findAllSavedIds?.includes(itemDetails.id)
    setOptionElement(
      <ElementDetails
        setIcons={setIcons}
        fav={findSelectedFav}
        close={handleCloseOption}
        setActiveIcon={setActiveIcon}
        itemDetails={itemDetails}
        rotation={setModelRotate}
        position={setModelPosition}
        downloadRef={exportRef.current[index]}
        changeOptionElement={setOptionElement}
        loadModelToEdit={setLoad3DModel}
        modelRef={modelRef}
      />
    );

  }


  const handleFavouritesElementClick = () => {
    setFavIcon(!favIcon)
    if (!favIcon){
      const findAllSavedIds = JSON.parse(localStorage.getItem('icons'))
      const findAllFavIcons = data.filter((items) => findAllSavedIds.includes(items?.id) )
      setIcons(findAllFavIcons)
    } else {
      setIcons(data)
    }
  }

  if (load3dModel) {
    console.log('here');
    const elements = document.getElementsByClassName('icon-wrapper')
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.pointerEvents = "none";
    }
  } else if (disableIconClick) {
    const elements = document.getElementsByClassName('icon-wrapper')
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.pointerEvents = "";
    }
  }

  return (
    <>
      <Head>
        <title>Vertex</title>
      </Head>
      <Header />
      <section id="showCase" ref={ref}>
        {icons.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className={`icon-wrapper icon-${item.id} ${
              activeIcon >= 0 && activeIcon == index ? "selected-icon" : ""
            }`}
            style={{
              width: `${iconSize.width}px`,
              height: `${iconSize.height}px`,
              top: `${position?.[index]?.x * iconSize.width + 50}px`,
              left:
                activeIcon >= 0
                  ? `${
                      position?.[index]?.y * iconSize.height +
                      (position?.[index]?.y <= 4
                        ? iconSize.height * -2
                        : iconSize.height * 2)
                    }px`
                  : `${position?.[index]?.y * iconSize.height}px`,
              transition: activeIcon != -1 ? "all 1s ease" : null,
            }}
            data-position={`${position?.[index]?.x}-${position?.[index]?.y}`}
            onClick={() => handleIconClick(index, item)}
            onMouseEnter={(e) =>
              mouseHoverMagnifyEffect(e, item.id, playEffect)
            }
            onMouseLeave={(e) =>
              removeMouseHoverMagnifyEffect(e, item.id, playEffect)
            }
          >
            {activeIcon >= 0 && activeIcon == index && load3dModel ? (
              <LoadModel
                modelpath={item.model}
                positionModel={modelPosition}
                rotateModel={modelRotate}
                setDisableIconClick={setDisableIconClick}
                modelRef={modelRef}
              />
            ) : (
              <Image
                priority={true}
                src={item.icon}
                width={80}
                height={80}
                alt="image"
                ref={(el) => (exportRef.current[index] = el)}
              />
            )}
          </div>
        ))}
      </section>
      {!openOptions ? (
        <ul className="panel d-flex">
          <li onClick={handleCategoryClick}>Categories</li>
          <li onClick={() => console.log("Upload")}>Upload your file</li>
          <li onClick={handleSearchClick}>Search</li>
          <li onClick={handleFavouritesElementClick}>{favIcon ? "♥" : "♡"}</li>
        </ul>
      ) : (
        optionElement
      )}
    </>
  );
};

export default Dashboard;