import Cards from "../components/project"
import Navbar from "../components/nav"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// const style = {
//     parent:{
//         display: 'grid',
//         gridTemplateColumns: 'repeat(5, 1fr)',
//         gridTemplateRows: 'repeat(5, 1fr)',
//         gridColumnGap: '0px',
//         gridRowGap: '0px'
//         },
        
//         div1: { gridArea: '1 / 1 / 2 / 2' },
//         div2:{ gridArea: '1 / 2 / 2 / 3'},
//         div3:{ gridArea: '2 / 1 / 3 / 2'},
//         div4:{ gridArea: '2 / 2 / 3 / 3'}
// }
// function Projectgrid(){
//     return (
//         <>
//         <Navbar/>
//             <div style={{display:"flex",justifyContent:"center"}}>
//             <div style={style.parent}>
//                 <div style={style.div1}>{Cards(`src/assets/projectImg1.png`) }</div>
//                 <div style={style.div2}>{Cards(`src/assets/projectImg1.png`) }</div>
//                 <div style={style.div3}>{Cards(`src/assets/projectImg1.png`) }</div>
//                 <div style={style.div4}>{Cards(`src/assets/projectImg1.png`) }</div>
//             </div>
//             </div>
//         </>
//     )

// }

function Projectgrid() {
  return (
    
    <>
    
    <Navbar/>
    <h1 style={{background:"#D8D5DB",textAlign:'center',margin:0,padding:'25px 0 25px 0',fontSize:'30px'}}>Profilo</h1>
    <div style={{display:'flex',justifyContent:'center',background:"#D8D5DB", padding:'25px 0 0 0'}}>
        
    <Container>
        
      <Row>
        <Col lg={3} xs={'auto'}>{Cards(`src/assets/projectImg1.png`)}</Col>
        <Col lg={3} xs={'auto'}>{Cards(`src/assets/projectImg1.png`) }</Col>
        <Col lg={3} xs={'auto'}>{Cards(`src/assets/projectImg1.png`) }</Col>
      </Row>
      <Row style={{marginTop:'20px'}}>
        
        <Col lg={3} xs={'auto'}>{Cards(`src/assets/projectImg1.png`) }</Col>
      </Row>
     
    </Container>
    </div>
    </>
  );
}



export default Projectgrid