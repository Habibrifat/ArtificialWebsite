import sections from "./../../constants/data";
import SingleFeatures from "./singleFeatures";
import "./features.css";

const Features = () => {
  return (
    <sections className="features section-p bg-black" id="features">
      <div className="container">
        <div className="features-content">
          <div className="item-list text-white">
            {sections.features.map((feature) => {
              return <SingleFeatures key={feature.id} {...feature} />;
            })}
          </div>
        </div>
      </div>
    </sections>
  );
};

export default Features;
