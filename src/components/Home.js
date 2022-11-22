import React from 'react'
import Book from './Book'
import Discover from './Discover'
import Footer from './Footer'
import Footer1 from './Footer1'
import Group7 from './Group7'
import Group8 from './Group8'
import Menu from './Menu'
import Navbar from './Navbar'
import NewMenu from './NewMenu'
import Spoon2 from './Spoon2'
import Spooon from './Spooon'
import Traditional from './Traditional'

export default function Home() {
  return (
    <>
    <div className='home'>
        <div className='container'>
        <Navbar></Navbar>
      <div className='home-1'>
        <h2 className='home-heading-1'>Brunch</h2>
        <h1 className='home-heading-2'>FULL WEBSITE</h1>
        <div className='btn-home'><button className='btn-1'>READ MORE</button></div>
      </div>
        </div>
    </div>
    <Spooon/>
    <Spoon2/>
    <Menu/>
    <Traditional/>
    <NewMenu/>
    <Group7/>
    <Book/>
    <Group8/>
    <Discover/>
    <Footer1/>
    <Footer/>
    </>
  )
}
