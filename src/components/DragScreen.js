import React, { useState, useRef } from 'react';

const DragScreen = ({children}) => {
    const [isDragging, setIsDragging] = useState(false);
    const startX = useRef(0);
    const startY = useRef(0);
    const scrollLeft = useRef(0);
    const scrollTop = useRef(0);

    const handleMouseDown = (event) => {
        setIsDragging(true);
        startX.current = event.clientX;
        startY.current = event.clientY;
        scrollLeft.current = window.pageXOffset || document.documentElement.scrollLeft;
        scrollTop.current = window.pageYOffset || document.documentElement.scrollTop;
    };

    const handleMouseMove = (event) => {
        if (!isDragging) return;
        const x = event.clientX - startX.current;
        const y = event.clientY - startY.current;
        window.scrollTo(scrollLeft.current - x, scrollTop.current - y);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <div
            style={{ cursor: isDragging ? 'grabbing' : 'grab', userSelect: 'none', overflow: 'hidden' }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
        >
            {children}
        </div>
    );
}

export default DragScreen;
