import React, { useId, useState } from "react";
import { db,auth } from "../firebase";
import firebase from "firebase/compat/app";

function SendMessage() {
  const [message, setMessage] = useState("");
  
  function sendMessage(e) {
    e.preventDefault();

    const {uid,photoURl} = auth.currentUser;

db.collection("messages").add({
    text: message,
    photoURl,
    uid,
    createAt: firebase.firestore.FieldValue.serverTimestamp(),
});
  }

  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          <input
            placeholder="Please put in your message"
            type="text"
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default SendMessage;
