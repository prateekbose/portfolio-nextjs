import { useRouter } from 'next/router'
import Head from 'next/head'
import NavBar from '../components/navBar/nav'
import BlogText from './blogText'
import Footer from '../components/footer/footer'
import AltProjects from '../components/altProjects/altProjects'
import ProjectsData from '../../public/data'

const Project = () => {
  const router = useRouter()
  const { project } = router.query
  console.log(project)
  return [
    <Head key={-1}>
      <title>{`${(project)?project:"Loading"} \u2014 `}Prateek Bose</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={`${project}`} data-react-helmet="true"/>
      <meta property="og:title" content={`${project}`} data-react-helmet="true"/>
      <meta property="og:description" content={`${project}`} data-react-helmet="true"/>
      <meta property="og:type" content="website" data-react-helmet="true"/>
      <meta name="twitter:card" content={`${project}`} data-react-helmet="true"/>
      <meta name="twitter:creator" content="Prateek Bose" data-react-helmet="true"/>
      <meta name="twitter:title" content={`${project}`} data-react-helmet="true"/>
      <meta name="twitter:description" content={`${project}`} data-react-helmet="true"/>
      <meta name="keywords" content="prateekbose, prateek, bose, portfolio, full-stack, javascript, react, nextjs" data-react-helmet="true"/>
      <meta name="google-site-verification" content="63_J1iLK9zgMyFUpLRav8VgAIxuUzuMh6VCus7Xb8aU" />
    </Head>,
    <NavBar key={0} page={"post"}/>,
    <BlogText project={ProjectsData[project]} projectName={project} key={2}/>,
    <AltProjects project={ProjectsData} projectName={project} key={3}/>,
    <Footer key={4}/>
  ]
}

export default Project