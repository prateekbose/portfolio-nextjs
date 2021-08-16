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
    </Head>,
    <NavBar key={0}/>,
    <HeroSection key={1} header={"I develop amazing experiences on Web and Mobile"} sub={"Hello"}/>,
    <Cards key={2} page={"projects"}/>,
    // <Blogs key={3}/>,
    <Footer key={4}/>
  ]
}
