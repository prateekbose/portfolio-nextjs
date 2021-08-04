import RevealText from '../revealText/reveal'

export default function HeroSection({ header, sub, stack, year, roles }){
    const Stacks = ({stack}) => {
        return stack.map((item, index) => <h3 className={(index == 0)?'header':''} key={index}><RevealText text={item} index={14+index*3}/></h3>)
    }
    return(
        <section className="hero-section">
            <h3><RevealText text={sub} index={0}/></h3>
            <h1><RevealText text={header} index={1}/></h1>
            <div className="hero-details">
                {(year !== -1)?(
                    <div className="hero-stack">
                        <h3><RevealText text={"Year"} index={12}/></h3>
                        <h3><RevealText text={`${year}`} index={14}/></h3>
                    </div>
                ): null}
                {(roles.length > 0)?(
                    <div className="hero-stack">
                        <h3><RevealText text={"Roles"} index={12}/></h3>
                        <Stacks stack={roles}/>
                    </div>
                ): null}
                {(stack.length > 0)?(
                    <div className="hero-stack">
                        <h3><RevealText text={"Stack"} index={12}/></h3>
                        <Stacks stack={stack}/>
                    </div>
                ): null}
            </div>
        </section>
    )
}

HeroSection.defaultProps = {
    header: "",
    sub: "",
    stack: [],
    year: -1,
    roles: []
}