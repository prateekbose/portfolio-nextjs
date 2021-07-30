import Head from 'next/head'
import NavBar from '../components/navBar/nav'
import Footer from '../components/footer/footer'
import HeroSection from '../components/heroSection/hero'
import Cards from '../components/pageCards/pages'

export default function Home() {
  return [
    <Head key={-1}>
      <title>Prateek Bose</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>,
    <NavBar key={0}/>,
    <HeroSection key={1} header={"My two cents on things I work with"} sub={"Blogs"}/>,
    <Cards key={2}/>,
    <Footer key={4}/>
  ]
}
