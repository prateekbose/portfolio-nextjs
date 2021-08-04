import Image from 'next/image'
import arrow from './arrow-right.svg'
export default function AltProjects({ project, projectName }){
    const Projects = () => {        
        let arr = []
        Object.keys(project).forEach(item => {
            if(item != projectName){
                arr.push(item)
            }
        })
        //console.table(arr)
        return arr.map((item, index) => (
            <a href={`../projects/${item}`} key={index}>
                <div className="home-project">
                    <div className="project-image"></div>
                    <div className="project-nav">
                        <div className="project-details">
                            <h1>{item}</h1>
                            <h3>{project[item][0].text.split(' ').slice(0, 6).map((it, i) => <span key={i}>{`${it} `}</span>)}...</h3>
                        </div>
                        <button className="project-explore"><Image src={arrow} alt=""/></button>
                    </div>
                </div>
            </a>
        ))
    }
    return [
        <h1 key={0} className="add-project">Additional Projects</h1>,
        <section className="page-cards alt-projects" key={1}>
            <Projects/>
        </section>
    ]
}

AltProjects.defaultProps = {
    projects: {"": [{type: "", text: "", url: "", source: []}]},
    project: ""
}