import React from 'react'
import { Container, Navbar , Nav} from 'react-bootstrap'

const Header = () => {
  return ( 
        <Navbar style={{backgroundColor:"#f1e0cd"}} className='fixed-top'>
            <Container>
                <Container>
                    <Navbar.Brand href="#home" style={{color : "#35333f"}}>تنقل</Navbar.Brand>
                </Container>
                <Nav  className = "flex-shrink-0 " >
                    <Nav.Link href="#about" className = "flex-shrink-0" style={{color : "#35333f"}}>من نحن؟</Nav.Link>
                    <Nav.Link href="#services" style={{color : "#35333f"}}>الخدمات</Nav.Link>
                    <Nav.Link href="#contacts" className = "flex-shrink-0" style={{color : "#35333f"}}>تواصل معنا</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
  )
}

export default Header