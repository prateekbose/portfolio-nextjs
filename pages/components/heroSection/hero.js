import RevealText from '../revealText/reveal'

export default function HeroSection({ header, sub }){
    return(
        <section className="hero-section">
            <h3><RevealText text={sub} index={0}/></h3>
            <h1><RevealText text={header} index={1}/></h1>
        </section>
    )
}