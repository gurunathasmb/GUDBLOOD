
import React, { useState } from 'react';
import './Contact_us.css'; 
import Footer from './Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    contactno: '',
    email: '',
    message: '',
  });

  const [alertMessage, setAlertMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullname, contactno, email, message } = formData;

    try {
      const response = await fetch('http://localhost:5000/api/contact', { 
        method: 'POST',
        body: JSON.stringify({ fullname, contactno, email, message }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setAlertMessage('Query Sent, We will contact you shortly.');
        setFormData({
          fullname: '',
          contactno: '',
          email: '',
          message: '',})
      } else {
        setAlertMessage('Something went wrong. Please try again later.');
      }
    } catch (error) {
      setAlertMessage('Network error. Please try again later.');
    }
  };

  return (
    <div id="page-container" style={{ marginTop: '50px', position: 'relative', minHeight: '84vh' }}>
      <div className="container">
        <div id="content-wrap" style={{ paddingBottom: '50px' }}>
          <h1 className="mt-4 mb-3">Contact</h1>
          <div className="row">
            <div className="col-lg-8 mb-4">
              <h3>Send us a Message</h3>
              <form name="sentMessage" onSubmit={handleSubmit}>
                {alertMessage && (
                  <div className="alert alert-success alert-dismissible">
                    <button type="button" className="close" data-dismiss="alert">&times;</button>
                    <strong>{alertMessage}</strong>
                  </div>
                )}
                <div className="control-group form-group">
                  <div className="controls">
                    <label>Full Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="fullname"
                      value={formData.fullname}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="control-group form-group">
                  <div className="controls">
                    <label>Phone Number:</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="contactno"
                      value={formData.contactno}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="control-group form-group">
                  <div className="controls">
                    <label>Email Address:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="control-group form-group">
                  <div className="controls">
                    <label>Message:</label>
                    <textarea
                      rows="10"
                      cols="100"
                      className="form-control"
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      maxLength="999"
                      style={{ resize: 'none' }}
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
            <div className="col-lg-4 mb-4">
              <h2>Contact Details</h2>
              <br />
              <p><h4>Address:</h4> bangaluru</p>
              <p><h4>Contact Number:</h4> 8197736731</p>
              <p><h4>Email:</h4> <a href="mailto:gurunathagoudambiradar@gmail.com">gurunathagoudambiradar@gmail.com</a></p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
