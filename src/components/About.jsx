import React, { useEffect, useState } from 'react';
import './About.css';

import Header from './Head'; 
import Footer from './Footer'; 
import img from '../assets/image/banner_590x300.jpg';
import img1 from '../assets/image/4.png';

const About = () => {
  const [pageContent, setPageContent] = useState('');

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch('/api/about');
        const data = await response.json();
        setPageConten(data.page_data);
      } catch (error) {
        console.error('Error fetching page content:', error);
      }
    };

    fetchContent();
  }, []);

  return (
    <div id="page-container" className="page-container">
      <div className="container">
        <div id="content-wrap" className="content-wrap">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="mt-4 mb-3">About Us</h1>
              <p style={{textAlign:'justify'}}>{pageContent || 'Blood bank management involves the collection, testing, processing, storage, and distribution of blood and blood products to ensure a safe and adequate supply for medical use. It includes donor recruitment and retention, blood collection through whole blood donation and apheresis, and screening for infectious diseases. Blood is processed into components like red cells, plasma, and platelets, which are stored under specific conditions. Inventory management tracks blood supply levels, and distribution ensures safe transportation to hospitals and clinics. Regulatory compliance and accurate documentation are essential. Technologies like database management systems, automated testing equipment, and cold chain logistics are used to manage donor information and blood inventory. Challenges include donor shortages, logistical issues, and evolving standards. An example system is e-RaktKosh in India, which digitizes and streamlines blood bank workflows.'}</p>
            </div>
            <div className="col-lg-6">
              <img
                className="img-fluid rounded"
                src={img1}
                style={{marginTop:'120px', height: '400px' }}
                alt="About Us"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;