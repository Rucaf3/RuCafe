import React from 'react'
import style from './Home.module.scss'
import Header from './Sections/Header/Header'
import Carousel from './Sections/Carousel/Carousel'
import ButtonMenu from './Sections/ButtonMenu/ButtonMenu'
import Footer from './Sections/Footer/Footer'


export default function Home() {
    return (
        <div>
          <div className="">
            <Header/>
          </div>
          <div>
            <Carousel/>
          </div>
          <div className={style.buttonMenu}>
            <ButtonMenu/>
          </div>
          <div className={style.footer}>
            <Footer/>
          </div>
        </div>
    )
}
