import React, { Component } from 'react'
import Navi from '../navi/Navi'
import Footer from '../footer/Footer'
import styles from './styles.module.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'

export default class About extends Component {
    render() {
        return (
            <div>
                <Navi />
 <Container className={styles.container}>
    <Row>
     <Col xs="3">
                            
    <p className={styles.anabaslık}>Hakkımızda</p>
        <ListGroup>
        <Link><ListGroupItem className={styles.link}>Politikalarımız</ListGroupItem></Link>
        <Link><ListGroupItem className={styles.link}>Teknik Özellikler</ListGroupItem></Link>
        <Link><ListGroupItem className={styles.link}>Ekipmanlarımız</ListGroupItem></Link>
</ListGroup>

    </Col>
    <Col xs="9">
    <h3 className={styles.baslık}>Hakkımızda</h3>
    <p>Akdoimport, Mediterranean Shipping Company (MSC) grubunun liman yatırımları yapan şirketi Global Terminal Limited (GTL) ile Soyuer ailesinin münhasıran konteyner limanı işletmesi amacı ile kurmuş oldukları Akdoimport Liman A.Ş. tarafından Barbaros / Tekirdağ’da inşa edilmiş olup 8 Temmuz 2015 tarihinde hizmete girmiştir.</p> <br />
    <p>Türkiye’nin ilk transit konteyner limanı (Hubport) olan Akdoimport, 18 metre derinliğe kadar toplam 2010 metre rıhtımı ve yıllık 2,5 milyon TEU’ya varacak kapasitesi ile dünya ölçeğinde bir liman konumundadır. Akdoimport, denizyolu, karayolu ve demiryolu bağlantıları ile bölgesinde bir lojistik merkez olarak gelişen Tekirdağ’ın iş ve çalışma yaşamına 1200 kişilik istihdam kapasitesi ile büyük bir katkı sağlayacaktır.</p>
    <h2 className={styles.baslık}>Politikalarımız</h2>
            <ListGroup>
      <ListGroupItem className={styles.link2}>Entegre Yönetim Sistemi Politikası</ListGroupItem>
      <ListGroupItem className={styles.link2}>İnsan Kaynakları Politikası</ListGroupItem>
      <ListGroupItem className={styles.link2}>Sosyal Sorumluluk Politikası</ListGroupItem>
      <ListGroupItem className={styles.link2}>Kişisel Verilerin Korunması ve İşlenmesi Politikası</ListGroupItem>
      <ListGroupItem className={styles.link2}>Bilgi Güvenliği Politikası</ListGroupItem>
      <ListGroupItem className={styles.link2}>Web Sitesi Üyelik Aydınlatma Metni</ListGroupItem>
      <ListGroupItem className={styles.link2}>Taciz Önleme Politikası</ListGroupItem>
    </ListGroup>
    <br/><br/>
    <Row>
    <h2 className={styles.baslık}>Teknik Özellikler</h2>
    <Col xs="8"><ListGroup >
      <ListGroupItem className={styles.link2}>Coğrafi Konum</ListGroupItem> 
      <ListGroupItem className={styles.link2}>Terminal Sahası</ListGroupItem>
      <ListGroupItem className={styles.link2}>Rıhtım Uzunluğu</ListGroupItem>
      <ListGroupItem className={styles.link2}>Maksimum Su Derinliği</ListGroupItem>
      <ListGroupItem className={styles.link2}>Kara Terminali</ListGroupItem>
      <ListGroupItem className={styles.link2}>Soğutmalı (Reefer ) Konteyner Kapasitesi</ListGroupItem>
      <ListGroupItem className={styles.link2}>İstifleme Kapasitesi</ListGroupItem></ListGroup></Col>
      <Col xs="4"><ListGroup>
      <ListGroupItem className={styles.link2}>40' 54'' Kuzey; 27' 28'' Doğu</ListGroupItem>
      <ListGroupItem className={styles.link2}>300.000 m²</ListGroupItem>
      <ListGroupItem className={styles.link2}>2010 m</ListGroupItem>
      <ListGroupItem className={styles.link2}>18 m</ListGroupItem>
      <ListGroupItem className={styles.link2}>100.000 m²</ListGroupItem>
      <ListGroupItem className={styles.link2}>1400</ListGroupItem>
      <ListGroupItem className={styles.link2}>33488 TEU</ListGroupItem></ListGroup></Col></Row>
            
      
    </Col>
     </Row>
        

                </Container>
                <Footer/>
            </div>
        )
    }
}
