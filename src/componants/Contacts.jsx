import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const Contacts = () => {
  return (
    <Container fluid className='bg-dark' id='contacts'>
        <Container>

            <Row className='contact text-light'>
                <Col xs={12} className='mt-4 '>
                    <h1>تواصل معنا.</h1>
                    <p className='mt-4'>إذا كان لديك أي أسئلة أو استفسارات، أو إذا كنت ترغب في حجز خدمتنا أو الحصول على مزيد من المعلومات، فنحن هنا لمساعدتك.</p>
                </Col>
                <Col>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>البريد الاكتروني:</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>الرسالة:</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="اكتب رسالتك هنا..."/>
                        </Form.Group>
                        <Button type="submit" style={{backgroundColor:"#ffa49a" , border : "#ffa49a"}} className='mb-3'  >
                            ارسال
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    </Container>
  )
}

export default Contacts