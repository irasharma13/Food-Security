import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Chat.css";

const CoPilot = () => {
  const [inputText, setInputText] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isSending, setIsSending] = useState(false); 


  useEffect(() => {
    const chatContainer = document.getElementById("chat-container");
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }, [chatHistory]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userMessage = { text: inputText, isUser: true };
    setChatHistory([...chatHistory, userMessage]);
    setIsSending(true);

    try {
      const response = await fetch("http://localhost:3001/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: inputText }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      const botMessage = {
        text: responseData.responseData.content,
        isUser: false
      };
      setChatHistory((prevChat) => [...prevChat, botMessage]);
    } catch (error) {
      console.error("Error sending/receiving data:", error.message);
    }
    setIsSending(false);
    setInputText("");
  };

  const handleBack = () => {
    navigate("/home");
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        backgroundColor: "#F0F2F5",
        flexDirection: "column",
        fontFamily: "'Roboto', sans-serif",
        alignItems: "center",
        paddingTop: "20px",
        paddingBottom: "20px",
      }}
    >
      
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h4 style={{ fontWeight: "bold", color: "#333" }}>
        Economic and Social Sustainability of Marginalized and Highly Vulnerable communities
        </h4>
        <h5 style={{ color: "#555" }}>
        Got questions? Let our chatbot be your guide to answers.        </h5>
      </div>

      <div
        id="chat-container"
        style={{
          flex: "1",
          overflowY: "auto",
          padding: "20px",
          borderRadius: "15px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          backgroundColor: "#FFFFFF",
          width: "90%",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        {chatHistory.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: item.isUser ? "flex-end" : "flex-start",
              marginBottom: "10px",
              animation: isSending && !item.isUser ? "bubble 0.5s ease-out" : "none", 

            }}
          >
            <div
              style={{
                maxWidth: "60%",
                padding: "12px",
                borderRadius: "20px",
                backgroundColor: item.isUser ? "#007BFF" : "#E7E7E8",
                color: item.isUser ? "#fff" : "#000",
                fontSize: "16px",
                lineHeight: "20px",
              }}
            >
              {item.text}
            </div>
          </div>
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px",
          width: "90%",
          maxWidth: "600px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          borderRadius: "15px",
          backgroundColor: "#E7E7E8",
          margin: "20px auto",
        }}
      >
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type your message here..."
          style={{
            width: "75%",
            padding: "10px",
            border: "2px solid #ddd",
            borderRadius: "20px",
            marginRight: "10px",
            outline: "none",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 15px",
            backgroundColor: "#28A745",
            color: "#fff",
            border: "none",
            borderRadius: "20px",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </form>
    </div>
  );

};

export default CoPilot;
