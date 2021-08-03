import RevealText from '../revealText/reveal'

export default function HeroSection({ header, sub, stack }){
    let stackElem = <div></div>
    if(stack.length > 0){
        stackElem = stack.map((item, index) => <h3 key={index}>{item}</h3>)
    }
    return(
        <section className="hero-section">
            <h3><RevealText text={sub} index={0}/></h3>
            <h1><RevealText text={header} index={1}/></h1>
            {stackElem}
        </section>
    )
}

HeroSection.defaultProps = {
    header: "",
    sub: "",
    stack: []
}