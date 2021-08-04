import Image from 'next/image'
import arrow from './arrow-right.svg'

export default function AltProjects({ projects, project }){
    let arr = []
    projects.forEach(item => {
        if(item !== project){
            arr.push(item)
        }
    })
    return [
        <h1 key={0} className="add-project">Additional Projects</h1>,
        <section className="page-cards alt-projects" key={1}>
            <a href={`./projects/travelaholic`}>
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
            </a>
            
            <a href={`./projects/travelaholic`}>
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
            </a>
            <a href={`./projects/travelaholic`}>
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
            </a>

        </section>
    ]
}

AltProjects.defaultProps = {
    projects: [],
    project: ""
}