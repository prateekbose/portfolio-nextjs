import Image from 'next/image'
import arrow from './arrow-right.svg'
import { animated, useSpring } from 'react-spring'
import * as easings from 'd3-ease'
import ProjectsData from '../../../public/data'

export default function Projects(){

    const ProjectReveal = (index) => useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        },
        delay: 2000 + 500 * index,
        config: {
            duration: 900,
            easing: easings.easeCubic
        }
    })

    const Projects = () => {        
        let arr = Object.keys(ProjectsData)
        console.table(arr)
        return arr.map((item, index) => (
            <animated.a href={`./projects/${item}`} key={index} style={ProjectReveal(index%2)}>
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
            </animated.a>
        ))
    }

    return (
        <section className="home-projects">
            
            <Projects/>
            
            
        </section>
    )
}