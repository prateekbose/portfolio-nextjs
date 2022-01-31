import { useState } from 'react'
import dynamic from "next/dynamic"
const Highlight = dynamic(() => import('react-highlight'))
const HeroSection = dynamic(() => import("../components/heroSection/hero"))

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
        } else if(item.type == "link-text"){
            return (
                <p className="blog-text blog-section-text">{item.textback}<a href={item.url}><code className="code-text">{item.text}</code></a></p>
            )
        } else if(item.type == "code-text"){
            return (
                <p className="blog-text blog-section-text">{item.textback}<code className="code-text">{item.code}</code>{item.textfront}</p>
            )
        } else if(item.type == "code-text-mul"){
            return (
                <p className="blog-text blog-section-text">{
                    item.text.map((item, key) => {
                        if(item.type == "code") return (<code className="code-text" key={key}>{item.text}</code>)
                        else if(item.type == "link") return (<a href={item.url}><code className="code-text" key={key}>{item.text}</code></a>)
                        else return item.text
                    })
                }
                </p>
            )
        } else if(item.type == "section"){
            return ( 
                <div className="blog-section">
                    <BlogText project={item.content}/>
                </div>
            )
        } else if(item.type == "code-sandbox") {
            return (
                <iframe src={`${item.url}&codemirror=1`}
                    className="code-sandbox"
                    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                />
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