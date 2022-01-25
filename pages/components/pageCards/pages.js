import Image from 'next/image'
import arrow from './arrow-right.svg'
import ProjectsData from '../../../public/data'
import BlogsData from '../../../public/blogs'
import Cover from '../../../public/cover'
export default function Cards({page}){

    let Component = null

    if( page == "projects"){
        const Projects = () => {    
            let arr = Object.keys(ProjectsData)
            console.table(arr)
            return arr.map((item, index) => (
                <a href={`./projects/${item}`} key={index}>
                    <div className="home-project">
                    <div className="project-image" style={{ backgroundImage: `url('${Cover[item]}')` }}></div>
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

        Component = Projects
    }

    else {
        const Blogs = () => {    
            let arr = Object.keys(BlogsData)
            console.table(arr)
            return arr.map((item, index) => (
                <a href={`./blogs/${item}`} key={index}>
                    <div className="home-project">
                    <div className="project-image" style={{ backgroundImage: `url('${Cover[item]}')` }}></div>
                        <div className="project-nav">
                            <div className="project-details">
                                <h1>{BlogsData[item][0].text.split(' ').slice(0, 10).map((it, i) => <span key={i}>{`${it} `}</span>)}{(BlogsData[item][0].text.split(' ').length > 10)?'...':''}</h1>
                                <h3></h3>
                            </div>
                            <button className="project-explore"><Image src={arrow} alt=""/></button>
                        </div>
                    </div>
                </a>
            ))
        }

        Component = Blogs
    }

    return (
        <section className="page-cards">
            <Component/>            
        </section>
    )
}

Cards.defaultProps = {
    page: ""
}