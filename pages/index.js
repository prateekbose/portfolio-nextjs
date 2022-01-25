import Head from 'next/head'
import NavBar from './components/navBar/nav'
import HeroSection from './components/heroSection/hero'
import Projects from './components/homeProjects/projects'
import Blogs from './components/homeBlogs/blogs'
import Footer from './components/footer/footer'
import Cards from './components/pageCards/pages'

export default function Home() {
  return [
    <Head key={-1}>
      <title>Home &#8212; Prateek Bose</title>
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
    <NavBar key={0}/>,
    <HeroSection key={1} header={"I develop amazing experiences on Web and Mobile"} sub={"Hello"}/>,
    <Projects key={2}/>,
    // <Blogs key={3}/>,
    <Footer key={4}/>
  ]
}
