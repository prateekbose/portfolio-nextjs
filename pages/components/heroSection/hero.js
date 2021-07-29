import RevealText from '../revealText/reveal'

export default function HeroSection(){
    return(
        <section className="hero-section">
            <h3><RevealText text={"Hello"} index={0}/></h3>
            <h1><RevealText text={"I develop amazing experiences on Web and Mobile"} index={1}/></h1>
        </section>
    )
}