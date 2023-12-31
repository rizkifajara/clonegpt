import Chat from "@/app/components/Chat";
import ChatInput from "@/app/components/ChatInput";

type Props = {
  params: {
    id: string;
  };
};

function ChatPage({ params: { id } }: Props) {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Chat Window */}
      <Chat key={"chat" + id} chatId={id} />
      {/* Chat Input */}
      <ChatInput key={"chatinput" + id} chatId={id} />
    </div>
  );
}

export default ChatPage;
