import { Link } from "react-router-dom";
import { BsArrowRightCircle } from "react-icons/bs";
import "./services.css";
const SingleService = ({ service }) => {
  return (
    <div className="item bg-dark translate-effect">
      <span className="item-icon">{service.icon}</span>
      <h4 className="item-title">{service.title}</h4>
      <p className="text">{service.text}</p>
      <Link to={"/"} className="item-link text-grey">
        <BsArrowRightCircle size={30} />
      </Link>
    </div>
  );
};

export default SingleService;
