// import React, { useState, useEffect } from "react";
// //import messageFeed from

// function messages() {
//   const [tempMessage, setTempMessage] = useState("");
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
    

//     fetch("./messages")
//       .then((response) => response.json())

//       .then((data) => setMessages(data.messages));
//   }, []);

//   const sendMessage = (event) => {
//     if (event.key === "Enter") {
//       publishMessage();
//     }
//   };

//   const publishMessage = async () => {
    
//     try {
//       const response = await fetch("/createMessages", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ message: tempMessage }),
//       });
//       const data = await response.json();
//       setMessages([...messages, data.message]);
//       setTempMessage("");
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="container">
//       <h1>Chat Room</h1>
//       <div className="log">
//         {messages.map((message, index) => (
//           <p key={index}>{message}</p>
//         ))}
//       </div>
//       <input
//         type="text"
//         value={tempMessage}
//         onChange={(event) => setTempMessage(event.target.value)}
//         onKeyDown={sendMessage}
//         placeholder="Enter a message"
//       />
//       <button onClick={publishMessage}>Send</button>
//     </div>
//   );
// }

// export default messages;