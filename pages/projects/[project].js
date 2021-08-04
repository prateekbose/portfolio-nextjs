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
  return [
    <Head key={-1}>
      <title>Prateek Bose | {project}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>,
    <NavBar key={0} page={"post"}/>,
    <BlogText project={ProjectsData[project]} projectName={project} key={2}/>,
    <AltProjects project={ProjectsData} projectName={project} key={3}/>,
    <Footer key={4}/>
  ]
}

export default Project