import Nav from 'react-bootstrap/Nav';

function Navbar() {
  return (
    <Nav style={{padding:'30px 0 30px 0',background:'#EAE8FF',color:'#ADACB5'}} className="justify-content-center" activeKey="/">
        <Nav.Item style={{color:'#2D3142'}}>
          <Nav.Link href="/">About</Nav.Link>
        </Nav.Item>
        <Nav.Item style={{color:'#2D3142'}}>
          <Nav.Link href="/projects" eventKey="/project">Profilo</Nav.Link>
        </Nav.Item>
        <Nav.Item style={{color:'#2D3142'}}> 
          <Nav.Link href='/contact'>Contact</Nav.Link>
        </Nav.Item>
        <Nav.Item style={{color:'#2D3142'}}> 
          <Nav.Link href='/resume' eventKey="link-2">Resume</Nav.Link>
        </Nav.Item>
      </Nav>)
}

export default Navbar;