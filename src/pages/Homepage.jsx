import Navbar from "../components/nav.jsx"
import img from "../assets/img.png"
export const Homepage=()=>{
    return (
        <>
        <Navbar />
        <img style={{width:'250px',padding:'20px 0 0 25px '}} src={img} alt="" />
        <h1 style={{textAlign:'center',}}>About</h1>
        <div style={{textAlign:'center',width:'75%',margin:'0 auto'}}><p style={{fontSize:'20px'}}> I’m a dedicated web developer with a strong work ethic and a passion for learning. I thrive in dynamic environments and continuously seek to expand my skill set. Whether tackling front-end designs or back-end challenges, I approach each project with enthusiasm and a commitment to excellence.</p></div>
        </>

    )
}