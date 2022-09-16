import { MdStar } from "react-icons/md";
import "./testimonials.css";
import sections from "./../../constants/data";

const Testimonials = () => {
  const gradient = "url(#blue-gradient)";

  let startList;
  const showRating = (startCount) => {
    startList = new Array(startCount);
    for (let i = 0; i < startList.length; i++) {
      startList[i] = <MdStar size={25} style={{ fill: gradient }} />;
    }
    return startList;
  };
  return (
    <section className="testimonials section-p " id="testimonials">
      <div className="container">
        <div className="testimonials-content">
          <div className="section-t test-center">
            <h3>Customer Testimonials</h3>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              pariatur asperiores architecto aliquam nemo repudiandae sequi
              nostrum facere error tenetur?
            </p>
          </div>
          <div className="item-list grid text-white text-center">
            {sections.testimonials.map((testimonial) => {
              showRating(testimonial.rating);
              return (
                <div
                  className="item translate-effect bg-dark"
                  key={testimonial.id}
                >
                  <div className="item-img">
                    <img src={testimonial.image} alt="" />
                  </div>
                  <h4 className="item-name">{testimonial.name}</h4>
                  <p className="item-text text">{testimonial.text}</p>
                  <ul className="item-rating flex flex-center">
                    {startList.map((start, index) => {
                      return <li key={index}>{start}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
