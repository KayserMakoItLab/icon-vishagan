import { useState } from "react";

const Rotation = ({ close, rotation }) => {
    const [rotate, setRotate] = useState(0)
    const [mouseDrag, setMouseDrag] = useState(false)
    const [mousePosition, setMousePosition] = useState(0)

    const handleRotationPlus = () => {
        setRotate(rotate + 1)
    }

    const handleRotationMinus = () => {
        setRotate(rotate - 1)
    }

    const handleRotationClose = () => {
        close()
    }

    const handleRotorScroll = (event) => {
        if (mouseDrag && mousePosition - event.clientX > 0) {
            setRotate(rotate - 1)
        } else if (mousePosition - event.clientX <= 0 && mouseDrag) {
            setRotate(rotate + 1)
        }
        setMousePosition(event.clientX)
    }

    rotation(rotate)

    return <div className="rotation-container" onMouseDown={() => setMouseDrag(true)}
        onMouseMove={(e) => handleRotorScroll(e)}
        onMouseUp={() => setMouseDrag(false)}
        onMouseLeave={() => setMouseDrag(false)}>
        {/* <button className="rotaion-btn rotation-button-minus" onClick={handleRotationPlus}>+</button>
        <button className="rotaion-btn rotation-button-plus" onClick={handleRotationMinus}>-</button> */}
        <button className="rotaion-btn rotation-button-close" onClick={handleRotationClose}>x</button>
        <img className='rotor' style={{ transform: `rotate(${rotate}deg)`, userDrag: 'none'}} src="assets/rotor-image.png" alt='rotot-image'/>
    </div>
}

export default Rotation;