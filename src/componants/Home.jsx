import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Cards from './Cards'

const Home = () => {
  return (
    <Container className='bg' fluid >
        <Container className='d-flex flex-wrap flex-column align-items-center'>
            <Row className='pt-4' style={{color : "#ffffff "}}>
                <Col lg={12}>
                    <p className='text-center fw-bold'>
                        مرحبًا بك في صفحتنا الإلكترونية المتخصصة في الرحلات ونقل العمال!
                    </p>
                </Col>
                <Col lg={12} xs={9} className='text-center me-5 me-lg-0'>
                    <p>نحن نفخر بتقديم خدمات نقل متميزة للرحلات ونقل العمال بمهنية وموثوقية عالية. إذا كنت تبحث عن شركة توفر لك تجربة رحلة مريحة وأمنة, فأنت في المكان المناسب</p>
                </Col>
            </Row>
            <Row className='d-flex justify-content-center'>
                <Col>
                    <Button style={{backgroundColor:"#ffa49a" , border : "#ffa49a"}} className="rounded-pill p-2 pe-4 ps-4 text-light">احجز الان!</Button>
                </Col>
            </Row>
            <Row>
                <Cards/>
            </Row>
        </Container>
    </Container>
  )
}

export default Home