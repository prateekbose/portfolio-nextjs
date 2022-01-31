import { useEffect } from 'react'
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

  useEffect(() => {
    const URL = 'https://prateekbose.herokuapp.com/api/blogs'
    var data = new FormData()
    data.append('name', blog)

    var xhr = new XMLHttpRequest()
    xhr.open('POST', URL, true)
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
      console.log("Incrementing View Count")
    }
    setTimeout(() => xhr.send(`name=${blog}`), 30000)

  }, [blog])

  return [
    <Head key={-1}>
      <title>{`${(BlogHeads[blog])?BlogHeads[blog]:"Loading"} \u2014 `}Prateek Bose</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="full stack web developer" data-react-helmet="true"/>
      <meta property="og:title" content="home" data-react-helmet="true"/>
      <meta property="og:description" content="full stack web developer" data-react-helmet="true"/>
      <meta property="og:type" content="website" data-react-helmet="true"/>
      <meta name="twitter:card" content="summary" data-react-helmet="true"/>
      <meta name="twitter:creator" content="Prateek Bose" data-react-helmet="true"/>
      <meta name="twitter:title" content="home" data-react-helmet="true"/>
      <meta name="twitter:description" content="full stack web developer" data-react-helmet="true"/>
      <meta name="keywords" content="prateekbose, prateek, bose, portfolio, full-stack, javascript, react, nextjs" data-react-helmet="true"/>
      <meta name="google-site-verification" content="63_J1iLK9zgMyFUpLRav8VgAIxuUzuMh6VCus7Xb8aU" />
      
    </Head>,
    <NavBar key={0} page={"post"}/>,
    <BlogText project={BlogsData[String(blog)]} projectName={BlogNames[String(blog)]} date={BlogDates[String(blog)]} pre={BlogPre[String(blog)]} key={3}/>,
    <Footer key={4}/>
  ]
}



export default Project