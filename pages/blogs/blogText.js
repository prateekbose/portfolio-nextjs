import HeroSection from "../components/heroSection/hero"
import { useState } from 'react'
import Highlight from 'react-highlight'

export default function BlogText({ projectName, project, date, pre }){
    // console.log(project)
    const [copy, setCopy] = useState(-1)
    const Copy = (text, index) => {
        setCopy(index)
        navigator.clipboard.writeText(text)
        setTimeout(() => setCopy(-1), 1500)
    }

    return project.map((item, index) => {
        if(item.type === "header"){
            return (
                <HeroSection key={index} header={item.text} sub={projectName} stack={item.stack} year={item.year} roles={item.roles} date={date} pre={pre}/>
            )
        } else if (item.type === "text"){
            return (
                <p className="blog-text blog-section-text">{item.text}</p>
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
                            <a href={`https://${it.link}`} target="_blank" rel="noopener noreferrer">{it.name}</a>
                        </div>))}
                </div>
            )
        } else if(item.type == "code"){
            return (
                <div className="blog-code blog-section-code">
                    <Highlight language="javascript">{item.text}</Highlight>
                    <button className={`code-copy ${(copy === index)?'code-copied':''}`} onClick={() => Copy(item.text, index)}>{(copy === index)?"Copied":"Copy"}</button>
                </div>
            )
        } else if(item.type == "head"){
            return (
                <div className="blog-head blog-section-head">
                    <h1>{item.text}</h1>
                </div>
            )
        } else if(item.type == "code-text"){
            return (
                <p className="blog-text blog-section-text">{item.textback}<code>{item.code}</code>{item.textfront}</p>
            )
        } else if(item.type == "section"){
            return ( 
                <div className="blog-section">
                    <BlogText project={item.content}/>
                </div>
            )
        }
    })
}

BlogText.defaultProps = {
    project: [{type: "", text: "", url: "", source: []}],
    projectName: "",
    date: "",
    pre: ""
}