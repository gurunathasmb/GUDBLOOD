
import React, { useState, useEffect, useRef } from "react";
const Chat=({ user })=> {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatContainerRef = useRef(null);
  

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    console.log("Sending message:", input);

    const userMessage = {
      user,
      text: input,
      id: Date.now(), // Unique ID using timestamp
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput(""); // Clear input field

    try {
      const responseMessage = await getApiResponse(input);
      if (responseMessage) {
        const botMessage = {
          user: "Bot",
          text: responseMessage,
          id: Date.now() + 1, // Ensure unique ID for bot message
        };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };
  const getApiResponse = async (message) => {
  console.log("Fetching response from backend for message:", message);

  try {
    const response = await fetch("http://localhost:5000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Backend error occurred.");
    }

    console.log("Backend response received:", data);
    return data.reply;
  } catch (error) {
    console.error("Error fetching response from backend:", error);
    return "Sorry, I couldn't get a response from the server.";
  }
};

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div>
      <h1>GUD AI Room</h1>
      {/* <button onClick={onLogout}>Logout</button> */}
      <div
        ref={chatContainerRef}
        style={{
          height: "400px",
          overflowY: "auto",
          border: "1px solid #ccc",
          padding: "10px",
          marginBottom: "10px",
        }}
      >
        {messages.map((message) => (
          <div key={message.id} style={{
            margin: "5px 0",
            padding: "10px",
            borderRadius: "5px",
            backgroundColor: message.user === "Bot" ? "#e3f2fd" : "#fff",
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
          }}>
            <strong>{message.user}:</strong> {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
          style={{ width: "80%", padding: "10px" }}
        />
       <button
          type="submit"
          style={{
            padding: "10px 15px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Chat;
