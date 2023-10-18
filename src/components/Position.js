import { useState } from "react"
import Ruler from "@scena/react-ruler"

const Position = ({ close, changePosition }) => {
    

    const [position, setposition] = useState(0)
    const [mouseDrag, setMouseDrag] = useState(false)
    const [mousePosition, setMousePosition] = useState(0)

    const handleRotationClose = () => {
        close()
    }

    const handleRulerScroll = (event) => {
        if (position < 81 && mouseDrag && mousePosition - event.clientX > 0){
                setposition(position + 1)
        } else if (position > 0 && mousePosition - event.clientX <= 0 && mouseDrag){
            setposition(position - 1)
        }
        setMousePosition(event.clientX)
    }

    changePosition(position)

    return <>
        <div 
            className='ruler' 
            onMouseDown={() => setMouseDrag(true)}
            onMouseMove={(e) => handleRulerScroll(e)}
            onMouseUp={() => setMouseDrag(false)}
            onMouseLeave={() => setMouseDrag(false)}
        >
            <Ruler zoom={1.5} range={[0,360]}  height={30} backgroundColor="#30323C" scrollPos={position + 55} />
        </div>
        <div className="position-btn">
            <button className="rotaion-btn position-button-close" onClick={handleRotationClose}>{'<'}</button>
            {/* <button className="rotaion-btn position-button-close">{'o'}</button> */}
        </div>
    </>
}

export default Position;