import React, { Component } from 'react'
import { Col, Container, Row,ListGroupItem,ListGroup } from 'reactstrap'
import Navi from '../navi/Navi'
import styles from './styles.module.css'
import faks from './image/faks.png'
import adres from './image/adres.png'
import mail from './image/mail.png'
import telefon from './image/telefon.png'
import Footer from '../footer/Footer'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <Navi/>
                <Container className={styles.container}>
                    <Row>
                        <Col xs="3">
                        <p className={styles.baslık}>İletişim</p>
            <ListGroup>
            <ListGroupItem className={styles.link}>İletişim Bilgileri</ListGroupItem>
            <ListGroupItem className={styles.link}>Banka Hesap Bilgileri</ListGroupItem>
            <ListGroupItem className={styles.link}>Öneri ve Şikayet</ListGroupItem>
            


            </ListGroup>

                        </Col>
                        <Col xs="9">
                        <p className={styles.baslık}>İletişim Bilgileri</p> 
                        <div><img className={styles.icon} src={adres}></img>
                         <p className={styles.p2}>Seyhan - Süleymanpaşa, 59020 / ADANA</p></div>
                         <br/><br/>
                         <div><img className={styles.icon} src={telefon}></img>
                         <p className={styles.p2}>+ 90 (222) 222  (2222) (Pbx)</p>
                         </div>
                         <br/><br/>
                         <div><img className={styles.icon} src={faks}></img>
                         <p className={styles.p2}>+ 90 (222) 222  (2222) </p>
                         </div>
                         <br/><br/>
                         <div><img className={styles.icon} src={mail}></img>
                         <p className={styles.p2}>AkdoimPort@gmail.com </p>
                         </div>
                         <br/>
                        
                       
                       

                        </Col>
                    </Row>
                </Container>
                <Footer></Footer>
            </div>
        )
    }
}
