import Image from 'next/image'
import RevealText from '../revealText/reveal'
import arrow from './arrow-right.svg'

export default function Cards(){
    return (
        <section className="page-cards">
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
        </section>
    )
}