import React, {useState, useEffect, useRef} from 'react'
import { Box, Alert } from '@mui/material'
import CalculateIcon from '@mui/icons-material/Calculate';
import OutputIcon from '@mui/icons-material/Output';
import eventBus from "../EventBus";

export interface Message {
  message: string;
  key: number;
  type: string
}

const OutputMessage = ({ message, onClose }: {message: Message, onClose : (key: number) => void}) => {
  if(message.type === 'fib'){
    return (
      <Alert icon={<CalculateIcon fontSize="inherit" />} onClose={() => onClose(message.key)}>{message.message}</Alert>
    );
  }
  return (
    <Alert icon={<OutputIcon fontSize="inherit" />} severity="info" onClose={() => onClose(message.key)}>{message.message}</Alert>
  );
}

const Output = () => {

  const [messages, setMessages] = useState<Message[]>([]);

  const addMessage = (data : {message: string, type:string}) => {
      const messageContent =  `${new Date().toLocaleTimeString()}: ${data?.message}`;
      let updatedMessages: Message[]=  new Array(...messages);
      const length = updatedMessages.push({ message: messageContent, key: new Date().getTime(), type: data.type});
      //limit size to 10
      if(length > 10) {
        updatedMessages = updatedMessages.filter((_message, index) => index !== 0);
      }
      setMessages(updatedMessages);
  };

  function useMessage(callback) {
    const savedCallback: any = useRef();
  
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick(data : {message: string}) {
        if(savedCallback.current !== undefined) {savedCallback.current(data)};
      }
        eventBus.on("addMessage", tick);
    }, []);
  }
  useMessage(addMessage)

  const handleClose = (key: number) => {
    setMessages(messages.filter(message => message.key !== key));
  };

  return (
    <Box sx={{ width: '100%' }}>
    {messages.map((message: Message) => (
      <OutputMessage key={message.key} message={message} onClose={handleClose}></OutputMessage>
    ))}
  </Box>
  )
}

export default Output
