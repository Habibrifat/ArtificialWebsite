import { FaPaperPlane } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import "./header.css";
const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <div className="container">
        <div className="header-content">
          <h1 className="header-title">Artificial ontology world .</h1>
          <p className="header-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            suscipit facilis illum natus iure aliquam assumenda, omnis vitae
            maiores ea molestias hic doloribus porro quisquam eligendi cum modi
            rerum illo excepturi consequuntur rem!
          </p>
          <a href="/" className="btn header-btn ">
            <FaPaperPlane size={26} />
            <span>get started</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
