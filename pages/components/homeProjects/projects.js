import Image from 'next/image'
import arrow from './arrow-right.svg'

export default function Projects(){
    return (
        <section className="home-projects">
            <div className="home-project">
                <div className="project-image"></div>
                <div className="project-nav">
                    <div className="project-details">
                        <h1>Project Name</h1>
                        <h3>Project Details</h3>
                    </div>
                    <button className="project-explore"><Image src={arrow} alt=""/></button>
                </div>
            </div>
            <div className="home-project">
                <div className="project-image"></div>
                <div className="project-nav">
                    <div className="project-details">
                        <h1>Project Name</h1>
                        <h3>Project Details</h3>
                    </div>
                    <button className="project-explore"><Image src={arrow} alt=""/></button>
                </div>
            </div>
            <div className="home-project">
                <div className="project-image"></div>
                <div className="project-nav">
                    <div className="project-details">
                        <h1>Project Name</h1>
                        <h3>Project Details</h3>
                    </div>
                    <button className="project-explore"><Image src={arrow} alt=""/></button>
                </div>
            </div>
            <div className="home-project">
                <div className="project-image"></div>
                <div className="project-nav">
                    <div className="project-details">
                        <h1>Project Name</h1>
                        <h3>Project Details</h3>
                    </div>
                    <button className="project-explore"><Image src={arrow} alt=""/></button>
                </div>
            </div>
        </section>
    )
}