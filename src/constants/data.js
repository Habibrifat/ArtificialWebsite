import images from "./images";
import {
  FaPaperPlane,
  FaEdit,
  FaRocket,
  FaShoppingCart,
  FaFileAlt,
  FaPhoneAlt,
  FaEnvelopeOpen,
  FaMapMarkerAlt,
  FaPhoneVolume,
} from "react-icons/fa";
import { BiDollarCircle } from "react-icons/bi";
import { ImMagicWand } from "react-icons/im";
import { AiOutlineReload, AiFillDatabase } from "react-icons/ai";
import {
  GiRobotGolem,
  GiMachineGunMagazine,
  GiBrain,
  GiArtificialIntelligence,
  GiDeathSkull,
} from "react-icons/gi";
import { SiFuturelearn, SiMicrostrategy } from "react-icons/si";
import { GoMailRead } from "react-icons/go";
import { MdLocationOn } from "react-icons/md";

const gradient = "url(#blue-gradient)";

const services = [
  {
    id: 1,
    icon: <AiFillDatabase style={{ fill: gradient }} />,
    title: "Data Science",
    text: "Data science combines math and statistics, specialized programming, advanced analytics",
  },
  {
    id: 2,
    icon: <GiRobotGolem style={{ fill: gradient }} />,
    title: "Robotics",
    text: "Robotics develops machines that can substitute for humans and replicate human actions.",
  },
  {
    id: 3,
    icon: <GiArtificialIntelligence style={{ fill: gradient }} />,
    title: "Technology",
    text: "Technology is the way we apply scientific knowledge for practical purposes.",
  },
  {
    id: 4,
    icon: <GiMachineGunMagazine style={{ fill: gradient }} />,
    title: "Machine learning",
    text: "Machine learning enables systems to learn and improve from experience without being explicitly programmed.",
  },
  {
    id: 5,
    icon: <GiBrain style={{ fill: gradient }} />,
    title: "Neural Network",
    text: "Neural networks reflect the behavior of the human brain, allowing computer programs.",
  },
  {
    id: 6,
    icon: <SiFuturelearn style={{ fill: gradient }} />,
    title: "Deep Learning",
    text: "Deep learning utilizes both structured and unstructured data for training.",
  },
];

const about = [
  {
    id: 7,
    text: "Artificial intelligence (AI), the ability of a digital computer or computer-controlled robot to perform tasks commonly associated with intelligent beings. The term is frequently applied to the project of developing systems endowed with the intellectual processes characteristic of humans, such as the ability to reason,discover meaning, generalize, or learn from past experience.",
  },
  {
    id: 72,
    text: "An ontology is a set of concepts and categories in a subject area or domain that possesses the properties and relations between them. Ontological Modeling can help the cognitive AI or machine learning model by broadening its' scope. They can include any data type or variation and set each diver data to a specific task.",
  },
];

const qualities = [
  {
    id: 8,
    icon: <GiDeathSkull style={{ fill: gradient }} />,
    title: "Ideas & Plans",
    text: "Fuzzy Logic - a form of mathematical logic in which truth can assume a continuum of values between 0 and 1",
  },
  {
    id: 9,
    icon: <SiMicrostrategy style={{ fill: gradient }} />,
    title: "Prompt Strategies",
    text: "Psychophysics - the branch of psychology concerned with quantitative relations between physical stimuli and their psychological effects",
  },
];

const features = [
  {
    id: 10,
    title: "Data Science",
    text: "Data science is an essential part of many industries today, given the massive amounts of data that are produced, and is one of the most debated topics in IT circles. Its popularity has grown over the years, and companies have started implementing data science techniques to grow their business and increase customer satisfaction. In this article, we’ll learn what data science is, and how you can become a data scientist.",
  },
  {
    id: 11,
    title: "Robotics",
    text: "Robots consist of some sort of mechanical construction. The mechanical aspect of a robot helps it complete tasks in the environment for which it’s designed. For example, the Mars 2020 Rover’s wheels are individually motorized and made of titanium tubing that help it firmly grip the harsh terrain of the red planet.",
  },
  {
    id: 12,
    title: "Technology",
    text: "Technology is a broad concept that deals with a species' usage and knowledge of tools and crafts, and how it affects a species' ability to control and adapt to its environment. In human society, it is a consequence of science and engineering, although several technological advances predate the two concepts.",
  },
  {
    id: 13,
    title: "Machine learning",
    text: "Machine learning (ML) is a type of artificial intelligence (AI) that allows software applications to become more accurate at predicting outcomes without being explicitly programmed to do so. Machine learning algorithms use historical data as input to predict new output values.Machine learning is important because it gives enterprises a view of trends in customer behavior and business operational patterns, as well as supports the development of new products. Many of today's leading companies, such as Facebook, Google and Uber, make machine learning a central part of their operations. Machine learning has become a significant competitive differentiator for many companies.",
  },
  {
    id: 14,
    title: "Neural Network",
    text: "A neural network is a series of algorithms that endeavors to recognize underlying relationships in a set of data through a process that mimics the way the human brain operates. In this sense, neural networks refer to systems of neurons, either organic or artificial in nature. Neural networks can adapt to changing input; so the network generates the best possible result without needing to redesign the output criteria. The concept of neural networks, which has its roots in artificial intelligence, is swiftly gaining popularity in the development of trading systems. ",
  },
  {
    id: 15,
    title: "Deep Learning",
    text: "Deep Learning is a subfield of machine learning concerned with algorithms inspired by the structure and function of the brain called artificial neural networks.While machine learning uses simpler concepts, deep learning works with artificial neural networks, which are designed to imitate how humans think and learn. Until recently, neural networks were limited by computing power and thus were limited in complexity. However, advancements in Big Data analytics have permitted larger, sophisticated neural networks, allowing computers to observe, learn, and react to complex situations faster than humans. ",
  },
];

const portfolio = [
  {
    id: 16,
    title: "Robotics",
    text: "Robotics develops machines that can substitute for humans and replicate human actions.",
    image: images.portfolio_img_1,
  },
  {
    id: 17,
    title: "Machine learning",
    text: "Machine learning enables systems to learn and improve from experience without being explicitly programmed.",
    image: images.portfolio_img_2,
  },
  {
    id: 18,
    title: "Neural Network",
    text: "Neural networks reflect the behavior of the human brain, allowing computer programs.",
    image: images.portfolio_img_3,
  },
];

const testimonials = [
  {
    id: 19,
    name: "Marie Jordan",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    image: images.customer_img_1,
    rating: 3,
  },
  {
    id: 20,
    name: "Ann Brown",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    image: images.customer_img_2,
    rating: 5,
  },
  {
    id: 21,
    name: "Andrew Bill",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    image: images.customer_img_3,
    rating: 2,
  },
  {
    id: 22,
    name: "Jason Stawer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    image: images.customer_img_4,
    rating: 4,
  },
  {
    id: 23,
    name: "Lisa Green",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    image: images.customer_img_5,
    rating: 2,
  },
  {
    id: 24,
    name: "Anna Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    image: images.customer_img_6,
    rating: 4,
  },
];

const contact = [
  {
    id: 25,
    icon: <FaPhoneVolume style={{ fill: gradient }} />,
    info: "+425 235 712",
    text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing",
  },
  {
    id: 26,
    icon: <GoMailRead style={{ fill: gradient }} />,
    info: "ontology@info.com",
    text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing",
  },
  {
    id: 27,
    icon: <MdLocationOn style={{ fill: gradient }} />,
    info: "United Kingdom, New Street",
    text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing",
  },
];

const sections = {
  services,
  about,
  qualities,
  features,
  portfolio,
  testimonials,
  contact,
};

export default sections;
