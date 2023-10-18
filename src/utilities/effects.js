import { TweenLite } from "gsap/dist/gsap";
import { Power4, gsap } from "gsap/dist/gsap";
// import { Tween } from "gsap/gsap-core";

const mouseHoverMagnifyEffect = (e, id, playEffect) => {
    gsap.config({ nullTargetWarn: false });
    TweenLite.to(`.icon-${id}`, 0.3, {
        x: -(e.nativeEvent.offsetX) / 30,
        y: -(e.nativeEvent.offsetY) / 30,
        ease: Power4.easeOut
    })
    TweenLite.to(`.icon-${(+(id) + 10)}`, 0.3, {
        x: -(e.nativeEvent.offsetX )/50,
        y: -(e.nativeEvent.offsetY )/50,
        ease: Power4.easeOut
    })
    TweenLite.to(`.icon-${(+(id) - 10)}`, 0.3, {
        x: -(e.nativeEvent.offsetX) / 50,
        y: -(e.nativeEvent.offsetY) / 50,
        ease: Power4.easeOut
    })
    
    
    if (playEffect) {
        

        gsap.to(`.icon-${id}`, {
            scale: 1.4,
            duration: 0.5
        })
        gsap.to(`.icon-${(+(id) + 10)}`, {
            scale: 1.1,
            duration: 0.5
        })
        gsap.to(`.icon-${(+(id) - 10)}`, {
            scale: 1.1,
            duration: 0.5
        })
        if (id % 10 !== 0) {
            gsap.to(`.icon-${(+(id) + 1)}`, {
                scale: 1.1,
                duration: 0.5
            })
            gsap.to(`.icon-${(+(id) + 11)}`, {
                scale: 1.1,
                duration: 0.5
            })
            gsap.to(`.icon-${(+(id) - 9)}`, {
                scale: 1.1,
                duration: 0.5
            })

            TweenLite.to(`.icon-${(+(id) + 1)}`, 0.3, {
                x: -(e.nativeEvent.offsetX) / 50,
                y: -(e.nativeEvent.offsetY) / 50,
                ease: Power4.easeOut
            })
        }
        if (id % 10 !== 1) {
            gsap.to(`.icon-${(+(id) - 1)}`, {
                scale: 1.1,
                duration: 0.5
            })
            gsap.to(`.icon-${(+(id) + 9)}`, {
                scale: 1.1,
                duration: 0.5
            })
            gsap.to(`.icon-${(+(id) - 11)}`, {
                scale: 1.1,
                duration: 0.5
            })
            TweenLite.to(`.icon-${(+(id) - 1)}`, 0.3, {
                x: -(e.nativeEvent.offsetX) / 50,
                y: -(e.nativeEvent.offsetY) / 50,
                ease: Power4.easeOut
            })
        }
    }
}

const removeMouseHoverMagnifyEffect = (e, id, playEffect) => {
    TweenLite.to(`.icon-${id}`, 0.3, {
        x: (e.nativeEvent.offsetX)/30,
        y: (e.nativeEvent.offsetY)/30,
        ease: Power4.easeOut
    })
    TweenLite.to(`.icon-${(+(id) + 10)}`, 0.3, {
        x: (e.nativeEvent.offsetX) / 50,
        y: (e.nativeEvent.offsetY) / 50,
        ease: Power4.easeOut
    })
    TweenLite.to(`.icon-${(+(id) - 10)}`, 0.3, {
        x: (e.nativeEvent.offsetX) / 50,
        y: (e.nativeEvent.offsetY) / 50,
        ease: Power4.easeOut
    })
    TweenLite.to(`.icon-${(+(id) + 1)}`, 0.3, {
        x: (e.nativeEvent.offsetX) / 50,
        y: (e.nativeEvent.offsetY) / 50,
        ease: Power4.easeOut
    })
    TweenLite.to(`.icon-${(+(id) - 1)}`, 0.3, {
        x: (e.nativeEvent.offsetX) / 50,
        y: (e.nativeEvent.offsetY) / 50,
        ease: Power4.easeOut
    })
    if (playEffect) {
        gsap.to(`.icon-${id}`, {
            scale: 1,
            duration: 0.5
        })
        gsap.to(`.icon-${(+(id) + 10)}`, {
            scale: 1,
            duration: 0.5
        })
        gsap.to(`.icon-${(+(id) - 10)}`, {
            scale: 1,
            duration: 0.5
        })
        gsap.to(`.icon-${(+(id) + 1)}`, {
            scale: 1,
            duration: 0.5
        })
        gsap.to(`.icon-${(+(id) - 1)}`, {
            scale: 1,
            duration: 0.5
        })
        gsap.to(`.icon-${(+(id) + 11)}`, {
            scale: 1,
            duration: 0.5
        })
        gsap.to(`.icon-${(+(id) + 9)}`, {
            scale: 1,
            duration: 0.5
        })
        gsap.to(`.icon-${(+(id) - 11)}`, {
            scale: 1,
            duration: 0.5
        })
        gsap.to(`.icon-${(+(id) - 9)}`, {
            scale: 1,
            duration: 0.5
        })
    }
}

export { mouseHoverMagnifyEffect, removeMouseHoverMagnifyEffect }