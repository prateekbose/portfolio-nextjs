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
    <HeroSection key={1} header={"A detailed look on projects I have worked on"} sub={"Projects"}/>,
    <Cards key={2} page={"projects"}/>,
    <Footer key={4}/>
  ]
}
