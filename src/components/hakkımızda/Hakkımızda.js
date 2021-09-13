import React, { Component } from 'react'
import Navi from '../navi/Navi'
import styles from './styles.module.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'

export default class Hakkımızda extends Component {
    render() {
        return (
            <div>
                <Navi/>
                <Container>
                    <Row>
                        <Col xs="3">
                            <p className={styles.baslık}>Hakkımızda</p>
                            <ListGroup>
                                <Link><ListGroupItem className={styles.link}>Politakalarımız</ListGroupItem></Link>
                                <Link><ListGroupItem className={styles.link}>Teknik Özellikler</ListGroupItem></Link>
                                <Link><ListGroupItem className={styles.link}>Ekipmanlarımız</ListGroupItem></Link>
                                
                                
                              
                            </ListGroup>

                        </Col>
                        <Col xs="9">
                            <h5>Hakkımızda</h5>
                            <p>Akdoimport, Mediterranean Shipping Company (MSC) grubunun liman yatırımları yapan şirketi Global Terminal Limited (GTL) ile Soyuer ailesinin münhasıran konteyner limanı işletmesi amacı ile kurmuş oldukları Asyaport Liman A.Ş. tarafından Barbaros / Tekirdağ’da inşa edilmiş olup 8 Temmuz 2015 tarihinde hizmete girmiştir.</p> <br/>
                            <p>Türkiye’nin ilk transit konteyner limanı (Hubport) olan Asyaport, 18 metre derinliğe kadar toplam 2010 metre rıhtımı ve yıllık 2,5 milyon TEU’ya varacak kapasitesi ile dünya ölçeğinde bir liman konumundadır. Asyaport, denizyolu, karayolu ve demiryolu bağlantıları ile bölgesinde bir lojistik merkez olarak gelişen Tekirdağ’ın iş ve çalışma yaşamına 1200 kişilik istihdam kapasitesi ile büyük bir katkı sağlayacaktır.</p>
                        </Col>
                    </Row>

                </Container>
            </div>
        )
    }
}
