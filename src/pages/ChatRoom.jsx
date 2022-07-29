import ChatComment from "../components/chat/ChatComment";
import TopChatNav from "../components/chat/TopChatNav";
import "../pages/style/ChatRoom.css";
function ChatRoom() {
    return (
        <>
            <TopChatNav />
            <main className="chatRoomMain">
                <div className="chatWrapper">
                    <p className="chat left">안녕하세요! 점메추님</p>
                    <p className="chat left">
                        방울 토마토 사용한 레시피 하나만 추천해주세여
                    </p>
                    <p className="chat right">그럼요!</p>
                    <p className="chat right">
                        새우나 닭가슴살 올린 샐러드 파스타 추천이요..🤤!
                    </p>
                    <p className="chat right img"></p>
                </div>
            </main>
            <ChatComment />
        </>
    );
}
export default ChatRoom;
