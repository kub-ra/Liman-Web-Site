import React, { Component } from 'react'
import Navi from '../navi/Navi'
import logo2 from './AKDOİM.png'
import styles from './styles.module.css'
import { Button} from "@chakra-ui/react"
import {
    
  Link
} from "react-router-dom";

export default class Online extends Component {
    render() {
        return (
            <div>
                <Navi/>
                <div className={styles.container}>
            
           <img width="250px" height="250px" src={logo2} alt="logo2"/>
           <Link  to="/Gemi"> <Button
  size="md"
  height="45px"
  width="350px"
 
>Limanda İşlem Gören Araçlar</Button>
              </Link> 
           
<Button
  size="md"
  height="45px"
  width="350px"
  
>Konteynar Sorgulama</Button>
<Button
  size="md"
  height="45px"
  width="350px"
  
>Gümrük Sorgulama</Button>
<Button
  size="md"
  height="45px"
  width="350px"

>Tarife Hesaplama</Button>

           </div>
        </div>
    )
}
          
}