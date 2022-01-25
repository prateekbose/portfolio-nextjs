import { useRouter } from 'next/router'
import Head from 'next/head'
import NavBar from '../components/navBar/nav'
import BlogText from './blogText'
import Footer from '../components/footer/footer'
import BlogsData from '../../public/blogs'
import BlogHeads from '../../public/blogHead'

const Project = () => {
  const router = useRouter()
  const { blog } = router.query
  console.log(blog)
  return [
    <Head key={-1}>
      <title>{`${BlogHeads[blog]} \u2014 `}Prateek Bose</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>,
    <NavBar key={0} page={"post"}/>,
    <BlogText project={BlogsData[String(blog)]} projectName={"React Spring"} date={"26-05-2001"} pre={["React", "JavaScript", "CSS"]} key={3}/>,
    <Footer key={4}/>
  ]
}

export default Project