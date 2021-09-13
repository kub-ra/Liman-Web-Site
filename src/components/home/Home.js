import React, { Component } from 'react'
import Footer from '../../footer/Footer'
import gemi_img from './gemi2.jpg'

import Navi from '../navi/Navi'


export default class Home extends Component {
    render() {
        return (
            <div>
                <Navi/>
                <img width="1500px" height="50px" src={gemi_img} alt="gemi_img"/>
                <Footer/>
             
            </div>
        )
    }
}
