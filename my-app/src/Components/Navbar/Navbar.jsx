import { Link } from "react-router-dom";


export const Navbar = () => {
  return (
    <>
     <nav style={{
       display:"flex",
       justifyContent:"center",
     }}>
       <div style={{
         width:"50%",
         display:"flex",
         gap:"10px",
         justifyContent:"space-evenly"
        
       }}>
         <Link to="/">Home</Link>
         <Link to="/mystery">Mystery</Link>
         <Link to="/technology">Technology</Link>
         <Link to="/mythology">Mythology</Link>
         <Link to="/history">History</Link>
       </div>
     </nav>
    </>
  );
};