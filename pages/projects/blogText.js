import HeroSection from "../components/heroSection/hero"

export default function BlogText({ projectName, project }){
    // console.log(project)
    return project.map((item, index) => {
        if(item.type === "header"){
            return (
                <HeroSection key={index} header={item.text} sub={projectName} stack={item.stack} year={item.year} roles={item.roles}/>
            )
        } else if (item.type === "text"){
            return (
                <p className="blog-text">{item.text}</p>
            )
        } else if (item.type === "image"){
            return (
                <div className="blog-image" style={{backgroundImage: `url(${item.url})`}}></div>
            )
        } else if (item.type === "links"){
            return (
                <div className="blog-links">
                    {item.source.map((it, i) => (<div className="blog-link" key={i}>
                            <h3>{it.text}</h3>
                            <a href={`https://${it.link}`} target="_blank" rel="noopener noreferrer">{it.link}</a>
                        </div>))}
                </div>
            )
        }
    })
}

BlogText.defaultProps = {
    project: [{type: "", text: "", url: "", source: []}],
    projectName: ""
}