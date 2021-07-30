import { animated, useSpring } from 'react-spring'
import * as easings from 'd3-ease'

export default function RevealText({ text, index, inView }){
    const textSplit = text.split(" ")
    console.table(textSplit)
    console.log(inView)
    const RevealAnim = (i) => useSpring({
        from: {
            transform: 'translate(0%, 100%)'
        },
        to: {
            transform: (inView)?'translate(0%, 0%)':'translate(0%, 100%)'
        },
        delay: 150 + 100 * (index+i),
        config: {
            duration: 1000,
            easing: easings.easeCubicInOut
        }
    })
    return textSplit.map((item, index) => <span className="reveal" key={index}><animated.span style={RevealAnim(index*index/3)} key={index}>{item}&nbsp;</animated.span></span>)
}

RevealText.defaultProps = {
    text: "",
    index: 0,
    inView: true
}