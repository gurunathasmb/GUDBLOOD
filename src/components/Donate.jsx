import React, { useState } from "react";
import './donate-blood.css';
import Footer from "./Footer";

const Donate = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    mobileno: "",
    emailid: "",
    age: "",
    gender: "",
    blood: "",
    address: "",
  });

  const bloodGroups = [
    { blood_id: 1, blood_group: "A+" },
    { blood_id: 2, blood_group: "A-" },
    { blood_id: 3, blood_group: "B+" },
    { blood_id: 4, blood_group: "B-" },
    { blood_id: 5, blood_group: "O+" },
    { blood_id: 6, blood_group: "O-" },
    { blood_id: 7, blood_group: "AB+" },
    { blood_id: 8, blood_group: "AB-" },
  ];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch("http://localhost:5000/api/donors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const data = await response.json();
        alert(data.message);
        setFormData({
          fullname: "",
          mobileno: "",
          emailid: "",
          age: "",
          gender: "",
          blood: "",
          address: "",
        });
      } else {
        const error = await response.json();
        alert(`Error: ${error.error}`);
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Failed to submit form. Please try again.");
    }
  };
  

  return (
    <div id="page-container" style={{ marginTop: "50px", minHeight: "84vh" }}>
      <div className="container">
        <div id="content-wrap" style={{ paddingBottom: "50px" }}>
          <div className="row">
            <div className="col-lg-6">
              <h1 className="mt-4 mb-3">Donate Blood</h1>
            </div>
          </div>
          <form name="donor" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-4 mb-4">
                <div className="font-italic">
                  Full Name<span style={{ color: "red" }}>*</span>
                </div>
                <div>
                  <input type="text" name="fullname" className="form-control" value={formData.fullname} onChange={handleInputChange} required/>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="font-italic">
                  Mobile Number<span style={{ color: "red" }}>*</span>
                </div>
                <div>
                  <input  type="text" name="mobileno" className="form-control" value={formData.mobileno} onChange={handleInputChange} required/>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="font-italic">Email Id</div>
                <div>
                  <input
                    type="email"
                    name="emailid"
                    className="form-control"
                    value={formData.emailid}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 mb-4">
                <div className="font-italic">
                  Age<span style={{ color: "red" }}>*</span>
                </div>
                <div>
                  <input
                    type="text"
                    name="age"
                    className="form-control"
                    value={formData.age}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="font-italic">
                  Gender<span style={{ color: "red" }}>*</span>
                </div>
                <div>
                  <select name="gender" className="form-control" value={formData.gender} onChange={handleInputChange} required>
                    <option value="" disabled>
                      Select
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="font-italic">
                  Blood Group<span style={{ color: "red" }}>*</span>
                </div>
                <div>
                  <select
                    name="blood"
                    className="form-control"
                    value={formData.blood}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    {bloodGroups.map((group) => (
                      <option key={group.blood_id} value={group.blood_id}>
                        {group.blood_group}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 mb-4">
                <div className="font-italic">
                  Address<span style={{ color: "red" }}>*</span>
                </div>
                <div>
                  <textarea
                    className="form-control"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 mb-4">
                <div>
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Submit"
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Donate;
