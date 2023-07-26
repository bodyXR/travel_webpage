import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

const Cards = () => {
  return (
    <Container className='d-lg-flex d-md-flex flex-wrap justify-content-center' fluid>
        <Row className='d-lg-flex d-md-flex flex-wrap justify-content-center'>
            <Col lg={5} md={5}>
                <Card style={{background:"#f1e0cd" , color : "#35333f"}} className="mt-2  text-center">
                    <Card.Body className='d-flex'>
                        <Card.Img variant="top" className='w-25' src="https://img.icons8.com/?size=1x&id=15137&format=png"/>
                        <Card.Title className='mt-lg-3 fs-lg-1 pt-4'>رحلات سياحية متخصصة</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={5} md={5}>
                <Card style={{background:"#f1e0cd" , color : "#35333f"}} className="mt-2  text-center">
                    <Card.Body className='d-flex'>
                        <Card.Img variant="top" className='w-25' src="https://img.icons8.com/?size=512&id=110285&format=png"/>
                        <Card.Title className='mt-lg-3 fs-lg-1 pt-4'>نقل العمال</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={5} md={5}>
                <Card style={{background:"#f1e0cd" , color : "#35333f"}} className="mt-2  text-center">
                    <Card.Body className='d-flex'>
                        <Card.Img variant="top" className='w-25' src="https://img.icons8.com/?size=512&id=16231&format=png"/>
                        <Card.Title className='mt-lg-3 fs-lg-1 pt-4'>السلامة والأمان</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={5} md={5}>
                <Card style={{background:"#f1e0cd" , color : "#35333f"}} className="mt-2  text-center mb-3">
                    <Card.Body className='d-flex'>
                        <Card.Img variant="top" className='w-25' src="https://img.icons8.com/?size=512&id=LXtbhK35S8Qp&format=png"/>
                        <Card.Title className='mt-lg-3 fs-lg-1 pt-4'>خدمة العملاء الممتازة</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  )
}

export default Cards