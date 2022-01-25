import Head from 'next/head'
import NavBar from '../components/navBar/nav'
import Footer from '../components/footer/footer'
import HeroSection from '../components/heroSection/hero'
import Cards from '../components/pageCards/pages'

export default function Blogs() {
  return [
    <Head key={-1}>
      <title>Prateek Bose {' \u2014 '} Blogs</title>
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
    <HeroSection key={1} header={"My two cents on things I find fascinating"} sub={"Blogs"}/>,
    <Cards key={2} page={"blogs"}/>,
    <Footer key={4}/>
  ]
}
