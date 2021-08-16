import Head from 'next/head'
import NavBar from '../components/navBar/nav'
import Footer from '../components/footer/footer'
import HeroSection from '../components/heroSection/hero'
import Cards from '../components/pageCards/pages'

export default function Projects() {
  return [
    <Head key={-1}>
      <title>Projects &#8212; Prateek Bose</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>,
    <NavBar key={0}/>,
    <HeroSection key={1} header={"A detailed look on projects I have worked on"} sub={"Projects"}/>,
    <Cards key={2} page={"projects"}/>,
    <Footer key={4}/>
  ]
}
