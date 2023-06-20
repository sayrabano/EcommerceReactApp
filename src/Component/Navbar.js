// required library
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import '../css/index.css'

// Navbar function
export default function Navbar() {
  const navigate = useNavigate();
  let total = useSelector((state) => state.totalCart);
return (
  // navelemnt
    <nav
      className="navbar navbar-expand-lg p-1 align-items-center mt-1"
      
    >
      <div className="container-fluid">
        <a className="navbar-brand fs-3" href="/">
          E-commerce App
        </a>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active text-light" href="#">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/addproducts" className="nav-link active text-light">
                Add Product
              </Link>
            </li>
          </ul>
          <div className="d-flex gap-5 position-relative">
            {/* img tag for cart */}
            <img
              src="https://cdn-icons-png.flaticon.com/128/10004/10004076.png"
              alt="error"
              width={"40rem"}
            onClick={() => navigate("/cart")}
            style={{cursor:"pointer"}}
            />
            
            {total ? (
              <p
                className="bg-white rounded-circle position-absolute d-flex align-items-center justify-content-center"
               
              >
                {total}
              </p>
            ) : (
              ""
            )}
             {/* img tag for show profile */}
            <img
            
              src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
              alt="error"
              width={"40rem"}
            />
           
          </div>
          <span style={{marginLeft:'-3rem',marginTop:'3rem',color:'saddlebrown'}}>Sayra Bano</span>
        </div>
      </div>
    </nav>
  );
}

