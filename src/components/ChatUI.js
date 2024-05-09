'use client';
import Select from 'react-select';
import { useState, useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Modal from 'src/components/Modal';
import styles from '/src/styles/chat.module.css';


const supabase = createClientComponentClient();

const ChatUI = () => {
              
  const [selectedItem, setSelectedItem] = useState('');
  const [displayedItem, setDisplayedItem] = useState([]);
  const [message, setMessage] = useState('');
  const [refreshStatus, setRefreshStatus] = useState(false);
  const webhookUrl = 'https://webhook-processor-production-908a.up.railway.app/webhook/goodwind-outgoing';


//   const [images, setImages] = useState([]);
//   const [errorMsg, setErrorMsg] = useState(null);
//   const [selectedImageIndex, setSelectedImageIndex] = useState(null);
const getConver = async () => {
  try {
    const { data: conv } = await supabase
      .from('conversations')
      .select('*')
      .eq('phone_no', selectedItem.value); // Use selectedItem instead of hardcoding the phone number
    const sortedConv = conv.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

    setDisplayedItem(sortedConv);
    console.log(conv);
    console.log("conversation msg set");
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  // Fetch initial messages
  const getPhonenumber = async () => {
    const { data } = await supabase
      .from('user_table')
      .select('*')
      .order('created_at', { ascending: true });

    setPhoneno(data);
    console.log("first function");
  };

  getPhonenumber();
}, []);

useEffect(() => {
  
  getConver();
}, [selectedItem]);

const renderMessages = () => {
  return displayedItem.map((message) => {
    const messageClass = message.msg_status === 'received' ? styles.received : styles.sent;
    const textColor = message.msg_status === 'delivered' ? styles.delivered : '';

     // Check if message starts with the specified URL
     if(message.msg && message.msg.startsWith('https://lingering-rain-d6ef.niyas-cloudflare-accounts.workers.dev')) {
      // Check if URL is an image
      const imagePattern = new RegExp("([/|.|\w|\s|-])*\.(?:jpg|png)");
      if(imagePattern.test(message.msg)) {
        return (
          <div className={`${styles.message} ${messageClass}`}>
            <img src={message.msg} alt="image" />
          </div>
        );
      }
    }

    return (
      <div className={`${styles.message} ${messageClass}`}>
        <span className={`${styles.text} ${textColor}`}>{message.msg}</span>
      </div>
    );
  });
};
const handleRefresh = () => {
  setRefreshStatus(!refreshStatus);
};

useEffect(() => {
  getConver();
}, [refreshStatus]);
const handleSendMessage = async () => {
  // Get the selected phone number and message
  const selectedPhone = selectedItem.value;
  const sendMessage = message;
  console.log('sendClicked');
  
  // Update the outgoing_messages table
  try {

    // 
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {
          wa_no: selectedPhone,
          message: sendMessage,
        }
      ),
    });
    //
    if (response.ok) {
      console.log('Data sent to workflow successfully');
    } else {
      console.error('Error sending data to workflow:', response.status);
    }


    // const { data, error } = await supabase
    //   .from('outgoing_messages')
    //   .update({ send_message: sendMessage })
    //   .eq('phone_number', selectedPhone);

    // if (error) {
    //   console.error('Error updating outgoing_messages:', error);
    // } else {
    //   console.log('Outgoing message updated successfully:', data);
    //   setMessage('');
    //   getConver();
    // }


  } catch (error) {
    console.error('Error updating outgoing_messages:', error);
  }
};

  return (
    <div className={styles.container}>
      <h2>Customer Chats</h2>
      <label htmlFor="dropdown">Select a phone number:</label>
      <select
        id="dropdown"
        onChange={(e) => setSelectedItem(e.target.value)}
        value={selectedItem}
      >
        <option value="" disabled>
          Select a phone number
        </option>
        {phoneno.map((item) => (
          <option key={item.id} value={item.phone_number}>
            {item.phone_number}
          </option>
        ))}
      </select>
      {/* Phone number dropdown */}
      <Select
        options={phoneno.map((item) => ({ value: item.phone_number, label: item.phone_number }))}
        placeholder="Select a phone number"
        value={selectedItem}
        onChange={(selectedOption) => setSelectedItem(selectedOption)}
        //onChange={(e) => setSelectedItem(e.target.value)}
      />

      {/* Display messages */}
      {/* <div className={styles.message}>
        {displayedItem.map((message) => (
          <p key={message.id}>{message.msg}</p>
        ))}
      </div> */}
      <div className={styles.container}>
    {renderMessages()}
  </div>

      {/* Message input and send button */}
      <div className={styles.messageinput}>
        <input type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)} />
        <button className={styles.sendButton} onClick={handleSendMessage}>Send</button>
        <button className={styles.refreshButton} onClick={handleRefresh}>Refresh</button>

      </div>
      
    </div>
  );
};

export default ChatUI;