import { FaPaperPlane } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import "./header.css";
const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <div className="container">
        <div className="header-content">
          <h1 className="header-title">Marketing World Business</h1>
          <p className="header-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            suscipit facilis illum natus iure aliquam assumenda, omnis vitae
            maiores ea molestias hic doloribus porro quisquam eligendi cum modi
            rerum illo excepturi consequuntur rem!
          </p>
          <a href="/" className="btn header-btn">
            <FaPaperPlane />
            <span>get started</span>
          </a>
        </div>
      </div>
    </header>
    // <header className="header flex flex-center flex-column">
    //   <Navbar />
    //   <div className="container">
    //     <div className="header-content text-center flex flex-column">
    //       <h1 className="text-uppercase header-title">
    //         marketing solution agency
    //       </h1>
    //       <p className="text-lead">
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
    //         doloremque dolore quia omnis maxime corporis deserunt neque
    //         voluptatum.
    //       </p>
    //       <a href="/" className="btn header-btn btn-blue">
    //         <FaPaperPlane /> <span>get started</span>
    //       </a>
    //     </div>
    //   </div>
    // </header>
  );
};

export default Header;
