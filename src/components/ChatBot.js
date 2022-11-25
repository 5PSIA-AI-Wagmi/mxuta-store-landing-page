import { useEffect, useState } from "react";
import { Launcher } from "react-chat-window";

export default function ChatBot(props) {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    sendMessage(
      "Hai, selamat datang di Mxuta Store! Ada yang bisa kami bantu?"
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendMessage = (text) => {
    if (text.length > 0) {
      setMessageList([
        ...messageList,
        {
          author: "them",
          type: "text",
          data: { text },
        },
      ]);
    }
  };

  const onMessageWasSent = (message) => {
    setMessageList([...messageList, message]);
  };

  return (
    <div style={{ position: "absolute", zIndex: 9999 }}>
      <Launcher
        agentProfile={{
          teamName: "Mxuta Store Chat Bot",
          imageUrl:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Ft%2Frobot-icon-chat-bot-sign-support-service-concept-chatbot-character-flat-style-robot-icon-chat-bot-sign-support-service-124978456.jpg&f=1&nofb=1&ipt=2f0f273aa056b5172afa11b34024deb7b47fe786a05097ee14d06dc460225bc3&ipo=images",
        }}
        onMessageWasSent={onMessageWasSent}
        messageList={messageList}
        showEmoji={false}
      />
    </div>
  );
}
