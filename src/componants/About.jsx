import React from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'

const About = () => {
  return (
    <Container id='about' className='pt-5'>
        <Row>
            <Col xs={12} >
                <h1 className='mt-4'>من نحن...</h1>
                <Image className='w-100 mt-3 shadow bg-body rounded mb-3' src="https://blog-assets.busbud.com/wp-content/uploads/2013/05/busbud-coachbus1-745x513.jpg"/>
            </Col>
            <Col>
                <Card className='mb-2' style={{background:"#f1e0cd" , color : "#35333f"}}>
                    <Card.Body>
                        <Card.Title>أسطول متنوع من وسائل النقل</Card.Title>
                        <Card.Text>
                        نحن نمتلك أسطولًا متنوعًا من الحافلات والمركبات الخاصة بنقل العمال والرحلات. يتم صيانة وتجهيز مركباتنا بشكل منتظم لضمان الراحة والسلامة أثناء الرحلة 
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='mb-2' style={{background:"#f1e0cd" , color : "#35333f"}}>
                    <Card.Body>
                        <Card.Title>حلول مخصصة</Card.Title>
                        <Card.Text>
                        ندرك أن كل عميل لديه احتياجات فريدة. لذا، نحن نقدم حلولًا مخصصة تتناسب مع متطلباتك الخاصة. سواء كنت بحاجة إلى رحلة لفريق عملك أو تنقل للموظفين، يمكننا تلبية احتياجاتك بشكل دقيق.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='mb-2' style={{background:"#f1e0cd" , color : "#35333f"}}>
                    <Card.Body>
                        <Card.Title>حجز سهل ومريح</Card.Title>
                        <Card.Text>
                        نحن نوفر عملية حجز سهلة ومريحة لرحلاتك ونقل العمال. يمكنك التواصل معنا عبر الهاتف أو البريد الإلكتروني، وسيكون فريقنا مستعدًا لمساعدتك في ترتيب التفاصيل وتأكيد الحجز.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='mb-2' style={{background:"#f1e0cd" , color : "#35333f"}}>
                    <Card.Body>
                        <Card.Title>تنافسية في التسعير</Card.Title>
                        <Card.Text>
                        نحن نقدم أسعارًا تنافسية ومعقولة لخدماتنا. نحن نتعامل بشفافية ونلتزم بعرض تكاليف معقولة تناسب ميزانيتك، دون التخلي عن جودة الخدمة.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  )
}

export default About