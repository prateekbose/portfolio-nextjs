import HeroSection from "../components/heroSection/hero"

export default function BlogText({ projectName, project }){
    return project.map((item, index) => {
        if(item.type === "header"){
            return (
                <HeroSection key={index} header={item.text} sub={projectName} stack={project.stack}/>
            )
        } else if (item.type === "text"){
            return (
                <p className="blog-text">{item.text}</p>
            )
        } else if (item.type === "image"){
            return (
                <div className="blog-image" style={{backgroundImage: `url(${item.url})`}}></div>
            )
        }
    })
}

BlogText.defaultProps = {
    project: [{type: "", text: "", url: ""}],
    projectName: ""
}