import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'
import styles from './styles.module.css'
import adres from './adres.png'
import mail from './mail.png'
import dunya from './dunya.png'
import facebook from './f-facebook.png'
import telefon from './telefon.png'
import instagram from './f-instagram.png'
import youtube from './f-youtube.png'
import linkedn from './f-linkedin.png'
import twitter from './f-twitter.png'

export default class Footer extends Component {
    render() {
        return (
          <div className={styles.footer}>
            <Row>
              <Col className={styles.col} xs="3">
                <img className={styles.img} src={adres}></img>
                <h6 className={styles.h}>ADRES</h6>
                <p className={styles.p2}>Seyhan - Süleymanpaşa, 59020 / Adana</p>
                <p className={styles.alt}>.......................</p>
              </Col>
              <Col className={styles.col} xs="3">
              <img className={styles.img} src={mail}></img>
                <h6  className={styles.h2} >MAİL</h6>
                <p className={styles.p22}>AkdoimPort@gmail.com</p>
                <p className={styles.alt2}>......................</p>
              </Col>
              <Col className={styles.col} xs="3">
              <img className={styles.img} src={telefon}></img>
                <h6  className={styles.h}>TELEFON</h6>
                <p className={styles.p22}>+ 90 (222) 222  (2222)</p>
                <p className={styles.alt2}>....................</p>
              </Col>
              <Col className={styles.col} xs="3">
              <img className={styles.img} src={dunya}></img>
                <h6  className={styles.p23}> BİLGİ TOPLUMU HİZMETLERİ</h6>
                
                <p className={styles.alt2}>....................</p>
              </Col>
              <hr className={styles.hr}/>
            </Row>
            <Row>
              <Col className={styles.col} xs="4">
                <h6 className={styles.h6}>Akdoimport 2021 © Tüm Hakları Saklıdır.</h6>
              </Col>
              <Col  xs="4">
                <div className={styles.imgs}>
                <img className={styles.img2} src={linkedn}></img>
                <img className={styles.img2} src={youtube}></img>
                <img className={styles.img2} src={instagram}></img>
                <img className={styles.img2} src={facebook}></img>
                <img className={styles.img2} src={twitter}></img>
                </div>
                
              </Col>
              <Col className={styles.col} xs="4">
                <h6 className={styles.h6}>web tasarım K.Menziletoğlu</h6>
              </Col>
            </Row>
          </div>
           
                


        )
      }
    }