import Image from 'next/image'
import RevealText from '../revealText/reveal'
import arrow from './arrow-right.svg'
import ProjectsData from '../../data'
export default function Cards({page}){

    const Projects = () => {        
        let arr = Object.keys(ProjectsData)
        console.table(arr)
        return arr.map((item, index) => (
            <a href={`./projects/${item}`} key={index}>
                <div className="home-project">
                    <div className="project-image"></div>
                    <div className="project-nav">
                        <div className="project-details">
                            <h1>{item}</h1>
                            <h3>{ProjectsData[item][0].text.split(' ').slice(0, 6).map((it, i) => <span key={i}>{`${it} `}</span>)}...</h3>
                        </div>
                        <button className="project-explore"><Image src={arrow} alt=""/></button>
                    </div>
                </div>
            </a>
        ))
    }

    return (
        <section className="page-cards">
            <Projects/>            
        </section>
    )
}

Cards.defaultProps = {
    page: ""
}