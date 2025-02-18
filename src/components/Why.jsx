import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img from '../assets/image/10.png'
import "./Why-donate-blood.css";

const Why= () => {
  const [pageData, setPageData] = React.useState("");

  React.useEffect(() => {
    fetch("path_to_your_backend_endpoint")
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setPageData(data[0].page_data);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div id="page-container" className="mt-5 position-relative">
      <div className="container">
        <div id="content-wrap" className="pb-5">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="mt-4 mb-3">Why Should I Donate Blood?</h1>
              <p style={{textAlign:'justify'}}>{pageData || "Donating blood is a vital act that saves lives and supports the healthcare system. Blood donations are essential for surgeries, trauma care, cancer treatment, and managing chronic conditions. Each donation can help multiple patients by providing red cells, plasma, and platelets. Regular donations ensure a stable blood supply, which is crucial during emergencies and disasters. Donating blood also benefits the donor by promoting good health, as it can reduce the risk of certain diseases and improve cardiovascular health. Additionally, blood donation fosters a sense of community and altruism, as donors contribute to the well-being of others."}</p>
            </div>
            <div className="col-lg-6">
              <img
                 style={{marginTop:'60px'}}
                className="img-fluid rounded custom-image"
                src={img}
                alt="Blood Donation"
              />
            </div>
          </div>
        </div>
      </div>
      <footer className="footer mt-auto py-3">
        <div className="container text-center">
          <span className="text-muted">© 2024 Blood Donation Initiative</span>
        </div>
      </footer>
    </div>
  );
};

export default Why;