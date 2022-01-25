import { useRouter } from 'next/router'
import Head from 'next/head'
import NavBar from '../components/navBar/nav'
import BlogNames from '../../public/blogNames'
import BlogsData from '../../public/blogs'
import BlogHeads from '../../public/blogHead'
import BlogText from './blogText'
import BlogDates from '../../public/blogDates'
import BlogPre from '../../public/blogPre'
import Footer from '../components/footer/footer'

const Project = () => {
  const router = useRouter()
  const { blog } = router.query
  console.log(blog)
  return [
    <Head key={-1}>
      <title>{`${(BlogHeads[blog])?BlogHeads[blog]:"Loading"} \u2014 `}Prateek Bose</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>,
    <NavBar key={0} page={"post"}/>,
    <BlogText project={BlogsData[String(blog)]} projectName={BlogNames[String(blog)]} date={BlogDates[String(blog)]} pre={BlogPre[String(blog)]} key={3}/>,
    <Footer key={4}/>
  ]
}



export default Project