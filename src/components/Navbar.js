import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"

const Navbar = () => {
  return ( <div className="ps-rel">
    <nav className="navbar navbar-expand-lg navbar-light bg-blacki">
  <div className="container">
    <Link className="navbar-brand text-warning" to="/">JEEHAND</Link>
    <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link text-white " to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <HashLink className="nav-link text-white" to='/#testimonial'>Testimonial</HashLink>
        </li>
        
        <li className="nav-item">
          <HashLink className="nav-link text-white" to='/#contact'>Contact</HashLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
  )
}

export default Navbar
