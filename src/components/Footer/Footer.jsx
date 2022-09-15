import "./footer.css";

const Footer = () => {
  let date = new Date();

  return (
    <footer className="footer bg-black flex flex-center" id="footer">
      <div className="container flex flex-center w-100">
        <div className="grid footer-content text-center">
          <p className="text speech">Freedom or Death by Emmeline Pankhurst.</p>
          <span className="text">
            &copy; {date.getFullYear().toString()} OntologyLTD.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
