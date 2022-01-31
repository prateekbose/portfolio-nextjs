import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Helmet } from 'react-helmet'
import Head from 'next/head'
import NavBar from '../components/navBar/nav'
import BlogNames from '../../public/blogNames'
import BlogsData from '../../public/blogs'
import BlogHeads from '../../public/blogHead'
import BlogText from './blogText'
import BlogDates from '../../public/blogDates'
import BlogPre from '../../public/blogPre'
import Footer from '../components/footer/footer'


export const getStaticProps = async () => {
  
  const data = {
    "react-spring": ["Introduction to Animations in React using React Spring", "Learn to use React Spring to create simple to complex animations that look beautiful.", "https://prateekbose.tech/blogs/react-spring/head.jpg"]
  }

  return {
    props: {data: data}
  }
}

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: {blog: "react-spring"} }
    ],
    fallback: false
  }
}

const Project = ({ data }) => {

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
      <title>{`${(data[blog][0])?data[blog][0]:"Loading"} \u2014 `}Prateek Bose</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="full stack web developer" data-react-helmet="true"/>
      <meta property="og:title" content={data[blog][0]} data-react-helmet="true"/>
      <meta property="og:description" content={data[blog][1]} data-react-helmet="true"/>
      <meta property="og:image" content={data[blog][2]} data-react-helmet="true"/>
      <meta property="og:type" content="Website" data-react-helmet="true"/>
      <meta name="twitter:card" content="Blog" data-react-helmet="true"/>
      <meta name="twitter:creator" content="Prateek Bose" data-react-helmet="true"/>
      <meta name="twitter:title" content={data[blog][0]} data-react-helmet="true"/>
      <meta name="twitter:description" content={data[blog][1]} data-react-helmet="true"/>
      <meta name="keywords" content="prateekbose, prateek, bose, portfolio, full-stack, javascript, react, nextjs" data-react-helmet="true"/>
      <meta name="google-site-verification" content="63_J1iLK9zgMyFUpLRav8VgAIxuUzuMh6VCus7Xb8aU" />
    </Head>,
    <NavBar key={0} page={"post"}/>,
    <BlogText project={BlogsData[String(blog)]} projectName={BlogNames[String(blog)]} date={BlogDates[String(blog)]} pre={BlogPre[String(blog)]} key={3}/>,
    <Footer key={4}/>
  ]
}



export default Project