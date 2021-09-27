import {  useState, useEffect } from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import styles from './styles.module.css'
import gemi from './gemi2.jpg'
import ShipService from './ShipService'
export default function Boats() {

        const [ships, setShips] = useState([])
        useEffect(() => {
            let shipService=new ShipService();
            shipService
            .getShips()
            .then((result)=>setShips(result.data.data));
        },[])
      
           
       

        return (
            <div className={styles.container} >
                <Container >
                    <Row>
                        <Col xs="2">
                            <h6>IMO</h6>
                            <input type="text" placeholder=" select IMO" />
                            <h6>IMO</h6>
                            <input type="text" placeholder=" select IMO" />
                            <h6>IMO</h6>
                            <input type="text" placeholder=" select IMO" />
                            <h6>IMO</h6>
                            <input type="text" placeholder=" select IMO" />
                            <h6>Uzunluk</h6>

                        </Col>
                        <Col className={styles.col} xs="3">

                            {ships.map(ship => (
                                <ListGroup className={styles.ListGroup} key={ship.id}>
                                    <ListGroupItem className={styles.list_img}> <img src={gemi} alt="gemi" /></ListGroupItem>
                                    <ListGroupItem className={styles.list}>Name:  {ship.shipName}</ListGroupItem>
                                    <ListGroupItem className={styles.list}>IMO: {ship.imo}</ListGroupItem>

                                    <ListGroupItem className={styles.list}>ÜLKE: {ship.flag}</ListGroupItem>
                                    <ListGroupItem className={styles.list}>Sicil NO: {ship.registrationNumber}</ListGroupItem>
                                    <ListGroupItem className={styles.list}>Gemi Türü: {ship.shipTypeId}</ListGroupItem>

                                    <ListGroupItem className={styles.list}> Geminin Genişliği {ship.breadth}</ListGroupItem>
                                    <ListGroupItem className={styles.list}>Geminin Uzunluğu {ship.length}</ListGroupItem>
                                </ListGroup>

                            ))}

                        </Col>



                    </Row>


                </Container>
            </div>
        )
    }