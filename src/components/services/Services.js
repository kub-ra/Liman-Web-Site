import { useState } from 'react';
import Navi from '../navi/Navi'
import styles from './styles.module.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'

import { Button, Popover, PopoverBody } from 'reactstrap';
import { Link } from 'react-router-dom'




   
        const Services=()=>{
            const [popoverOpen, setPopoverOpen] = useState(false);

            const toggle = () => setPopoverOpen(!popoverOpen);
    
    



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
                        <Col xs="9">
                            <div className={styles.sag}>
                                <h2 className={styles.baslık}>Konteyner Hizmetleri</h2>
                                <ul>
                                    <li>Konteyner yükleme, boşaltma, shifting hizmetleri</li>
                                    <li>Konteyner terminal hizmetleri</li>
                                    <li>CFS hizmetleri (konteyner iç yükleme, iç boşaltma, numune, tam tespit vb.)</li>
                                    <li>Soğutmalı konteyner hizmetleri</li>
                                    <li>Tehlikeli konteyner hizmetleri</li>
                                    <li>Konteyner sabitleme hizmetleri</li>
                                </ul>
                            </div>

                            <Button className={styles.Button} id="Popover1" type="button">
                                Konteyner Yükleme / Boşaltma Hizmetleri
                            </Button>
                            <Popover placement="left" isOpen={popoverOpen} target="Popover1" toggle={toggle}>

                                <PopoverBody>Asyaport'a gelen gemilere konteyner yüklemek veya boşaltmak amacıyla dolu ve boş konteynerlerin terminal sahasından, CFS sahasından veya kamyon üstünden alınarak rıhtımda gemiye yüklenmesi hizmeti “Yükleme”, gemide bulunan dolu ve boş konteynerlerin direkt kamyon üstüne, terminal sahasına veya CFS istasyonuna alınmaları “Boşaltma” hizmetidir.</PopoverBody>
                            </Popover>
                           
                        </Col>
                    </Row>

                </Container>
            </div>
        )
    }

export default Services;
