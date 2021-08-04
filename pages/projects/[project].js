import { useRouter } from 'next/router'
import Head from 'next/head'
import NavBar from '../components/navBar/nav'
import BlogText from './blogText'
import Footer from '../components/footer/footer'

const projects = {
  "travelaholic": [
    {type: "header", text: "Recommending new places to visit for travellers", stack: ["PHP","MySQL"], year: 2020, roles: ["Web Design", "Development"]},
    {type: "text", text: "When you travel, you meet new people, and cultures, go through different experiences (for better or worse), and perhaps even change your perspective on things and life as a whole. You meet new people and visit new places, so you learn and gain information, this shapes you into a better person."},
    {type: "image", url: "https://images.unsplash.com/photo-1533850595620-7b1711221751?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80"},
    {type: "text", text: "So what I wanted to make was a place where I could get suggestions for places I could visit as per what I would prefer to do. After a place was suggested, I would like to see the details for reference like local places and also the flight fares."},
    {type: "image", url: "/projects/travelaholic/0.jpg"},
    {type: "image", url: "/projects/travelaholic/1.jpg"},
    {type: "image", url: "/projects/travelaholic/2.jpg"},
    {type: "links", source: [{text: "Visit the Live Website", link: "travelaholic.000webhostapp.com"}, {text: "View on Github", link: "github.com/prateekbose/travelaholic"}]},
  ]
}

const Project = () => {
  const router = useRouter()
  const { project } = router.query
  console.log(router)
  return [
    <Head key={-1}>
      <title>Prateek Bose | Projects</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>,
    <NavBar key={0} page={"post"}/>,
    <BlogText project={projects[project]} projectName={project} key={2}/>,
    <Footer key={3}/>
  ]
}

export default Project