import { useEffect, useRef, useState } from "react";

const MyApp = () => {
  const [message, setMessage] = useState([]);
  const number = useRef(0);
  const chatBoxRef = useRef(null);

  function addMessage() {
    setMessage([...message, `Hi bro ${number.current}`]);
    number.current++;
  }

  useEffect(() => {
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  }, [message]);

  return (
    <div>
      <div
        ref={chatBoxRef}
        style={{
          height: "200px",
          overflowY: "scroll",
          border: "1px solid black",
        }}
      >
        {message.map((m) => {
          return <div key={message.indexOf(m)}>{m}</div>;
        })}
      </div>
      <button onClick={addMessage}>Add Message</button>
    </div>
  );
};

export default MyApp;
