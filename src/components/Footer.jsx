
import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook
import './Footer.css';
const Footer = () => {
  const navigate = useNavigate();  // Initialize useNavigate hook

  const handleChatClick = () => {
    navigate('/chat');  // Navigate to the chat page
  };
  return (
    <div>
      <footer id="footer">
        <b>
          <p>2024-25</p>
          <p>Blood Bank & Donation Management</p>
          <p>ALL RIGHTS RESERVED.</p>
        </b>
      </footer>
      {/* Chat Icon */}
      <div
        style={{
          position: "fixed",
          bottom: "10px",
          right: "20px",
          zIndex: 1000,
        }}
      >
        <button
          onClick={handleChatClick}  // On click, redirect to chat page
          style={{
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
            fontSize: "24px",
          }}
          title="Chat with us"
        >
          💬
        </button>
      </div>
    </div>
  );
};
export default Footer;
