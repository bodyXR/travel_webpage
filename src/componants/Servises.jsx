import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const Servises = () => {
  return (
    <Container fluid className='services mt-4 pb-3 pt-5' id='services'>
        <Container>

 
            <Row className='d-flex flex-wrap justify-content-center'>
                <Col xs= {12}>
                    <h1 className='mt-4 text-light'>خدماتنا...</h1>
                </Col>
                <Col xs={12} className='d-flex d-lg-block text-center flex-wrap justify-content-center'>
                    <div style={{background:"transparent" , border : "2px solid #ffa49a"}} className='text-light p-2 mt-2 rounded '>
                        <h2 className='pt-3'>نقل العمال والموظفين</h2>
                        <p className='p-3 pb-0'>نحن نوفر خدمات نقل العمال والموظفين بمرونة وكفاءة. سواء كنت بحاجة إلى نقل الموظفين اليومي بين المكاتب أو نقل العمال إلى موقع العمل، فإننا نقدم حلولاً مخصصة تتناسب مع احتياجاتك وجدولك الزمني.</p>
                        <Button style={{backgroundColor:"#ffa49a" , border : "#ffa49a"}} className='rounded-pill'>احجز الأن </Button>
                    </div>
                </Col>
                <Col xs={12} className='d-flex d-lg-block text-center flex-wrap justify-content-center'>
                    <div style={{background:"transparent" , border : "2px solid #ffa49a"}} className='text-light p-2 mt-4 mb-3 rounded'>
                        <h2 className='pt-3'>رحلات سياحية</h2>
                        <p className='p-3 pb-0'>إذا كنت ترغب في استكشاف وجمال المعالم السياحية في البلاد، فنحن نقدم رحلات سياحية ممتعة ومصممة خصيصً</p>
                        <Button style={{backgroundColor:"#ffa49a" , border : "#ffa49a"}} className='rounded-pill'>احجز الأن </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    </Container>
  )
}

export default Servises