import images from "./../../constants/images";
import "./about.css";
import sections from "./../../constants/data";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container ">
        <div className="about-content grid">
          <div className="content-left">
            <img src={images.about_main_img} alt="" />
          </div>
          <div className="content-right">
            <div className="section-t">
              <h3>About Us</h3>
            </div>
            <div className="paragraph">
              {sections.about.map((text) => {
                return (
                  <p className="text" key={text.id}>
                    {text.text}
                  </p>
                );
              })}
            </div>
            <p className="text">
              {/* Artificial intelligence (AI), the ability of a digital computer or
              computer-controlled robot to perform tasks commonly associated
              with intelligent beings. The term is frequently applied to the
              project of developing systems endowed with the intellectual
              processes characteristic of humans, such as the ability to reason,
              discover meaning, generalize, or learn from past experience. */}
            </p>
            <br />
            <p className="text">
              {/* An ontology is a set of concepts and categories in a subject area
              or domain that possesses the properties and relations between
              them. Ontological Modeling can help the cognitive AI or machine
              learning model by broadening its' scope. They can include any data
              type or variation and set each diver data to a specific task */}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
