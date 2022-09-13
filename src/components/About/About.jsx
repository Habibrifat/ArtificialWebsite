import images from "./../../constants/images";
import "./about.css";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="about-content grid">
          <div className="content-left">
            <img src={images.about_main_img} alt="" />
          </div>
          <div className="content-right">
            <div className="section-t">
              <h3>About Us</h3>
            </div>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              porro fugiat odio aut beatae deserunt eligendi vel dolorum
              reiciendis numquam esse alias unde pariatur eius amet vero eos
              officia quam dicta excepturi similique, hic voluptatibus vitae!
              Adipisci odio mollitia voluptatibus assumenda natus, aspernatur
              quod quasi? Veniam ipsa amet ex cupiditate recusandae ipsum
              nesciunt sequi eveniet? Porro aperiam perferendis beatae ratione?
            </p>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              itaque modi at ipsum nisi accusantium repellat, nesciunt
              voluptates obcaecati voluptatum nam. Et debitis amet ea libero
              rerum perferendis cum quasi!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
