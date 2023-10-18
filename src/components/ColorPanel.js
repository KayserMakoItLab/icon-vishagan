import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Alert from "./Alert"

const Color = ({ close }) => {
    const router = useRouter()
    const colors = ['#000000', '#0000ff', '#ff99ff','#ff3300','#ff9900','#996633','#ffff66','#006600','#A6ABAA','#FFFFFF']
    const [selectedColor, setSelectedColour] = useState({index:null, color:''})
    const [showSelectedColor, setShowSelectedColor] = useState(false)
    const [selectOldColor, setSelectedOldColour] = useState({ index: null, color:'' })
    const [colorsInMesh, setColorsInMesh] = useState(router?.query?.c && JSON.parse(router?.query?.c))
    const [showExitAlert, setShowExitAlert] = useState(false)

    let startValue;

    const handleCloseClick = () => {
        close()
    }

    const handleResetClick = () => {
        setShowExitAlert(true)
        setSelectedColour({ index: null, color: '' })
        setSelectedOldColour({ index: null, color: '' })
        setShowSelectedColor(false)
    }

    const handleColourClick = (index, color) => {
        setSelectedColour({ index: index, color: color })
        setShowSelectedColor(true)
        router.push({
            pathname: '/dashboard',
            query: { c: router?.query?.c, sc: router?.query?.sc, i: router?.query?.i, cc:color, change:true },
        })
    }
    
    const handleColorSelection = (index, color) => {
        setSelectedOldColour({ index: index, color: `#${color}` })
        setSelectedColour({ index: null, color: '' })
        router.push({
            pathname: '/dashboard',
            query: { c: router?.query?.c, sc: color, i:index },
        })
    }

    useEffect(()=>{
        router?.query?.c && setColorsInMesh(JSON.parse(router?.query?.c))
    }, [router?.query?.c, router?.query?.u])

    return <>
        {showExitAlert && <Alert text={'All Color Changes will be Discarded!'} closeAlert={setShowExitAlert} />}
        {colors.map((color, index)=>{
            return <>
                <button onClick={()=>handleColourClick(index, color)} className="color-button" style={{ transform: `rotate(${-81 + (index * 18)}deg)`, backgroundColor: `${color}`, overflow: 'hidden' }}>
                    {showSelectedColor && selectedColor.index === index && <span style={{ backgroundColor: `${color === '#FFFFFF' ? '#A6ABAA' : '#FFFFFF'}`}} className="selected-color"></span>}
                </button>
            </>
        }) }
        <div style={{
            display: 'flex',
            width: '8rem',
            position: 'fixed',
            justifyContent: 'space-between',
            bottom: '3rem',
            zIndex: 99 }}>
            <button className="color-back-btn" onClick={handleCloseClick}>{'<'}</button>
            <button className="color-back-btn" onClick={handleResetClick}>{'↻'}</button>
        </div>
        <div className="color-top">
            {
                colorsInMesh && colorsInMesh?.map((color, index)=>{
                    if (colorsInMesh.length % 2 === 0) {
                        let middleValue = -(colorsInMesh.length / 2) - 1
                        if (middleValue + index < -1){
                            startValue = middleValue + index
                        } else {
                            startValue = middleValue + index + 1
                        }
                    } else {
                        let middleValue = -Math.round(colorsInMesh.length / 2)
                        startValue = middleValue + index
                    }
                    startValue++;
                    return <span 
                        style={{ 
                            backgroundColor: `${color.includes('#') ? color : `#${color}`}`, 
                            marginTop: `${10 + (45 * (Math.sqrt(Math.abs(Math.abs(startValue) === 1 ? startValue : startValue * 2))))}px`,
                            border: selectOldColor && index === selectOldColor.index ? `2px solid ${color === 'ffffff' ? '#a6abaa' : 'white'}`: ''
                        }} 
                        className={`used-color color-${index}`} 
                        onClick={() => handleColorSelection(index, color)}
                        >
                    </span>
                })
            }
        </div>
    </>
}

export default Color;