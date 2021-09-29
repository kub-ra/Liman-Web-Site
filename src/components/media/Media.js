import React, { Component } from 'react'
import { Container, Row,ListGroup,ListGroupItem,Col,Card, CardImg, CardText, CardBody,
    CardTitle,  Button } from 'reactstrap'
import Navi from '../navi/Navi'
import styles from './styles.module.css'
import card from './cart-image.jpg'

export default class Media extends Component {
    render() {
        return (
            <div>
                <Navi />
     <Container>
        <Row>
            <Col xs="3">
            <p className={styles.baslık}>Medya</p>
            <ListGroup>
            <ListGroupItem className={styles.link}>Basında AkdoimPort</ListGroupItem>
            <ListGroupItem className={styles.link}>Foto Galari</ListGroupItem>
            <ListGroupItem className={styles.link}>Duyurular</ListGroupItem>
            <ListGroupItem className={styles.link}>Video Galari</ListGroupItem>


            </ListGroup>

                        </Col>
                        <Col xs="9">
                        <p className={styles.baslık}>Basında AkdoimPort</p>

                            <Row>
                            <Col xs="4"> <Card>
        <CardImg top width="100%" src={card} alt="Card image cap" />
        <CardBody>
          <CardTitle className={styles.baslık2} tag="h6">KABOTAJ VE DENİZCİLİK YELKEN YARIŞLARI ÖDÜL TÖRENİ YAPILDI</CardTitle>
          
          <CardText className={styles.p}>1 Temmuz Kabotaj ve Denizcilik bayramı dolayısıyla 29 ve 30 haziran 1 Temmuz tarihleri arasında Tekirdağ yelken kulübünde yapılan yarışlarda dereceye girenlere kupa verildi.</CardText>
          <Button className={styles.buton} >Detay...</Button>
        </CardBody>
      </Card></Col>
                            <Col xs="4"> <Card>
        <CardImg top width="100%" src={card} alt="Card image cap" />
        <CardBody>
          <CardTitle className={styles.baslık2} tag="h6">KABOTAJ VE DENİZCİLİK YELKEN YARIŞLARI ÖDÜL TÖRENİ YAPILDI</CardTitle>
          
          <CardText className={styles.p}>1 Temmuz Kabotaj ve Denizcilik bayramı dolayısıyla 29 ve 30 haziran 1 Temmuz tarihleri arasında Tekirdağ yelken kulübünde yapılan yarışlarda dereceye girenlere kupa verildi.</CardText>
          <Button className={styles.buton} >Detay...</Button>
        </CardBody>
      </Card>
      </Col>
        <Col xs="4">
            <Card>
        <CardImg top width="100%" src={card} alt="Card image cap" />
        <CardBody>
          <CardTitle className={styles.baslık2} tag="h6">KABOTAJ VE DENİZCİLİK YELKEN YARIŞLARI ÖDÜL TÖRENİ YAPILDI</CardTitle>
          
          <CardText className={styles.p}>1 Temmuz Kabotaj ve Denizcilik bayramı dolayısıyla 29 ve 30 haziran 1 Temmuz tarihleri arasında Tekirdağ yelken kulübünde yapılan yarışlarda dereceye girenlere kupa verildi.</CardText>
          <Button className={styles.buton} >Detay...</Button>
        </CardBody>
      </Card>
      </Col>
      </Row>
 <p className={styles.baslık}>Foto Galari</p>

<Row>
<Col xs="4">
     <Card>
<CardImg top width="100%" src={card} alt="Card image cap" />

<Button className={styles.buton} >Detay...</Button>

</Card>
</Col>
<Col xs="4"> 
<Card>
<CardImg top width="100%" src={card} alt="Card image cap" />

<Button className={styles.buton} >Detay...</Button>

</Card>
</Col>
<Col xs="4">
<Card>
<CardImg top width="100%" src={card} alt="Card image cap" />

<Button className={styles.buton} >Detay...</Button>

</Card>
</Col></Row>
                        
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
