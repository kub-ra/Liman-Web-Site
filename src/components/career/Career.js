import React, { Component } from 'react'
import Navi from '../navi/Navi'
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col, ListGroupItem, ListGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import styles from './styles.module.css'
import Footer from '../footer/Footer';

export default class Career extends Component {
  render() {
    return (
      <div>
        <Navi />
        <Container>
          <Row>
            <Col xs="3">
              <ListGroup>
                <h1 className={styles.baslık}>Kariyer</h1>
                <Link><ListGroupItem className={styles.link}>İş İlanları</ListGroupItem></Link>
                <Link><ListGroupItem className={styles.link}>Başvuru Formu</ListGroupItem></Link>
             </ListGroup>
             </Col>
            <Col xs="9">
              <h1 className={styles.baslık2}>İş İlanları</h1>
              <ListGroup>
                
                <ListGroupItem className={styles.link2}>Teknik Departman</ListGroupItem>
                <ListGroupItem className={styles.link2}>Satınalma & Depo Departmanı</ListGroupItem>
                <ListGroupItem className={styles.link2}>Bilgi ve İletişim Teknolojileri Departmanı</ListGroupItem>
             </ListGroup><br/><br/>
             <h1 className={styles.baslık2}>Başvuru Formu</h1>
             
                <Form className={styles.form}>
                
             
                  <FormGroup>
                    <Label for="name">Adı Soyadı*</Label>
                    <Input type="text" name="name" id="name"  />
                  </FormGroup>
                  <br/>
                  <FormGroup>
                    <Label for="exampleEmail">Email*</Label>
                    <Input type="email" name="email" id="exampleEmail"  />
                  </FormGroup>
                  <br/>
                  <FormGroup>
                    <Label for="phone">Telefon Numarası*</Label>
                    <Input type="text" name="phone" id="phone"  />
                  </FormGroup>
                  <br/>
                  <FormGroup>
                    <Label for="exampleSelect">Başvurulan Pozisyon*</Label>
                    <Input type="select" name="select" id="exampleSelect">
                      <option>Teknik Departman</option>
                      <option>Satınalma & Depo Departmanı</option>
                      <option>Bilgi ve İletişim Teknolojileri Departmanı</option>
                      
                    </Input>
                  </FormGroup>
                  <br/>
                  
                  <FormGroup>
                    <Label for="exampleText">Sizi Neden İşe Alalım?</Label>
                    <Input type="textarea" name="text" id="exampleText" />
                  </FormGroup>
                  <br/>
                  <FormGroup>
                    <Label for="exampleFile">CV  </Label>
                    <Input type="file" name="file" id="exampleFile" />
                    
                  </FormGroup>
                  <FormGroup tag="fieldset">
                    <legend>İş Deneyiminiz</legend>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="radio1" />{' '}
                        5 yıldan fazla
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="radio1" />{' '}
                      3 yıl
                      </Label>
                    </FormGroup>
                    <FormGroup check disabled>
                      <Label check>
                        <Input type="radio" name="radio1" disabled />{' '}
                      1 yıl
                      </Label>
                    </FormGroup>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox" />{' '}
                      yok
                    </Label>
                  </FormGroup>
                  <br/>
                  <Button>Gönder</Button>
                </Form>
           
            </Col>
          </Row>
        </Container>
        <Footer />

      </div>
    )
  }
}
