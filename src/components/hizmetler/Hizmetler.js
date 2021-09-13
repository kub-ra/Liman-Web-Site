import React, { Component } from 'react'
import Navi from '../navi/Navi'
import styles from './styles.module.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'

export default class Hizmetler extends Component {
    render() {
        return (
            <div>
                <Navi />
                <Container>
                    <Row>
                        <Col xs="3">
                            <p className={styles.baslık}>Hizmetler</p>
                            <ListGroup>
                                <Link><ListGroupItem className={styles.link}>Konteyner Hizmetleri</ListGroupItem></Link>
                                <Link><ListGroupItem className={styles.link}>Genel Kargo Hizmetleri</ListGroupItem></Link>
                                <Link><ListGroupItem className={styles.link}>Tarifeler</ListGroupItem></Link>
                                <Link><ListGroupItem className={styles.link}>Hizmet Talep Formları</ListGroupItem></Link>
                                
                              
                            </ListGroup>

                        </Col>
                        <Col  xs="9">
                            <div className={styles.sag}>
                            <h2>Konteyner Hizmetleri</h2>
                            <ul>
                                <li>Konteyner yükleme, boşaltma, shifting hizmetleri</li>
                                <li>Konteyner terminal hizmetleri</li>
                                <li>CFS hizmetleri (konteyner iç yükleme, iç boşaltma, numune, tam tespit vb.)</li>
                                <li>Soğutmalı konteyner hizmetleri</li>
                                <li>Tehlikeli konteyner hizmetleri</li>
                                <li>Konteyner sabitleme hizmetleri</li>
                            </ul>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>
        )
    }
}
