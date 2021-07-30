import { useInView } from 'react-intersection-observer'
import RevealText from '../revealText/reveal'

export default function HomeSkills(){
    const { refHeader, entry } = useInView({ trackVisibility: true, delay: 100 });

    return (
        <section className="skills-section">
            <h1 ref={refHeader} className="skills-header"><RevealText text="My skills include" inView={entry}/></h1>
            <h1 ref={refHeader} className="skills-header skills-mobile-header"><RevealText text="Skills" inView={entry}/></h1>
            <div className="skills">
                <ul>
                    <li>Git</li>
                    <li>Bash</li>
                </ul>
                <ul>
                    <li>C++</li>
                    <li>C</li>
                    <li>Java</li>
                    <li>JavaScript(ES6)</li>
                    <li>TypeScript</li>
                    <li>PHP</li>
                </ul>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>React</li>
                    <li>React Spring</li>
                    <li>Next</li>
                    <li>Node</li>
                    <li>Express</li>
                </ul>
                <ul>
                    <li>MySQL</li>
                    <li>Oracle</li>
                    <li>MongoDB</li>
                </ul>
                <ul>
                    <li>Vercel</li>
                    <li>Heroku</li>
                    <li>Firebase</li>
                    <li>Azure</li>
                </ul>
            </div>
            <a className="skills-more" href="#">Read More</a>
        </section>
    )

}