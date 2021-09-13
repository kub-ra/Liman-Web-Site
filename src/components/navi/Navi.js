import React, { Component } from 'react'

import styles from './styles.module.css'
import { Button } from "@chakra-ui/react"

import logo from './logo1.jpeg'


import {
    
    Link
  } from "react-router-dom";

export default class Navi extends Component {
    render() {
        return (
            <div>
                 <nav className={styles.nav}>
        <div className={styles.left}>
            <div className={styles.logo}>
               <img width="100px" height="50px" src={logo} alt="logo"/>
               
              </div>
              <ul className={styles.menu}> 
              <Link className={styles.Link} to="/"> Anasayfa
              </Link> 
              <Link className={styles.Link} to="/Hizmetler"> Hizmetler
              </Link> 
              <Link className={styles.Link} to="/Hakkımızda"> Hakkımızda
              </Link> 
              <Link className={styles.Link} to="/Kariyer"> Kariyer
              </Link> 
              <Link className={styles.Link} to="/Medya"> Medya
              </Link> 
              <Link className={styles.Link} to="/Contact"> İletişim
              </Link> 
               </ul>

        </div>
        <div > 
       
            <Link className={styles.right} to="/Online"><Button
  size="md"
  height="50px"
  width="180px"
 
  
>
  Online İşlemler
</Button></Link>
     
        </div>
        </nav>
        
                
            </div>
        )
    }
}
