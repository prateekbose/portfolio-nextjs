import Head from 'next/head'
import NavBar from './components/navBar/nav'
import HeroSection from './components/heroSection/hero'
import Projects from './components/homeProjects/projects'

export default function Home() {
  return [
    <Head key={-1}>
      <title>Prateek Bose</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>,
    <NavBar key={0}/>,
    <HeroSection key={1}/>,
    <Projects key={2}/>
  ]
}
