import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const theme = {
  background: "#f5f8fb",
  fontFamily: "Helvetica Neue",
  headerBgColor: "#EF6C00",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#EF6C00",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};
const steps = [
  {
    id: "1",
    message: "What is your name?",
    trigger: "2",
  },
  {
    id: "2",
    user: true,
    trigger: "3",
  },
  {
    id: "3",
    message: "Hi {previousValue}, nice to meet you!",
    // user:true,
    // end: true,
    trigger: "4",
  },

  {
    id: "4",
    message: "How i can Help You ? {previousValue}",
    trigger: "5",
  },

  {
    id: "5",
    user: true,
    trigger: "6",
  },

  {
    id: "6",
    message: "Let me Check Your Problem please wait...!",
    trigger: "7",
  },
  {
    id: "7",
    user: true,
    // trigger: "8",
  },

  // {
  //   id: "5",
  //   message: "Goto Google and Find Your Answer!",
  //   // trigger: "5",
  //   // end:true,
  // },
];

const ThemedExample = () => (
  <ThemeProvider theme={theme}>
    <ChatBot steps={steps} floating={true} />;
  </ThemeProvider>
)
export default ThemedExample;
