import Image from 'next/image'
import arrow from './arrow-right.svg'
import { animated, useSpring } from 'react-spring'
import * as easings from 'd3-ease'

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

    return (
        <section className="home-projects">
            
            <animated.a href={`./projects/travelaholic`} style={ProjectReveal(0)}>
                <div className="home-project">
                    <div className="project-image"></div>
                    <div className="project-nav">
                        <div className="project-details">
                            <h1>Blog 1</h1>
                            <h3>Blog Details</h3>
                        </div>
                        <button className="project-explore"><Image src={arrow} alt=""/></button>
                    </div>
                </div>
            </animated.a>
            
            <animated.a href={`./projects/travelaholic`} style={ProjectReveal(1)}>
                <div className="home-project">
                    <div className="project-image"></div>
                    <div className="project-nav">
                        <div className="project-details">
                            <h1>Blog 1</h1>
                            <h3>Blog Details</h3>
                        </div>
                        <button className="project-explore"><Image src={arrow} alt=""/></button>
                    </div>
                </div>
            </animated.a>
            
            <animated.a href={`./projects/travelaholic`} style={ProjectReveal(0)}>
                <div className="home-project">
                    <div className="project-image"></div>
                    <div className="project-nav">
                        <div className="project-details">
                            <h1>Blog 1</h1>
                            <h3>Blog Details</h3>
                        </div>
                        <button className="project-explore"><Image src={arrow} alt=""/></button>
                    </div>
                </div>
            </animated.a>
            
            <animated.a href={`./projects/travelaholic`} style={ProjectReveal(1)}>
                <div className="home-project">
                    <div className="project-image"></div>
                    <div className="project-nav">
                        <div className="project-details">
                            <h1>Blog 1</h1>
                            <h3>Blog Details</h3>
                        </div>
                        <button className="project-explore"><Image src={arrow} alt=""/></button>
                    </div>
                </div>
            </animated.a>
            
            
        </section>
    )
}