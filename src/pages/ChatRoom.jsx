import ChatComment from "../../components/chat/ChatComment";
import TopChatNav from "../../components/chat/TopChatNav";
import "./ChatRoom.css";
export default function ChatRoom() {
    return (
        <>
            <TopChatNav />
            <main className="chatRoomMain">
                <div className="chatWrapper">
                    <p className="chat left">
                        옷을 인생을 그러므로 없으면 것은 이상의 것은 우리의 것을
                        위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와
                        약동하다 대고, 못할 넣는 풍부하게 뛰노는 인생의 힘이다.
                    </p>
                    <p className="chat left">안녕하세요. 완두콩 사고 싶어요!</p>
                    <p className="chat right">네 말씀하세요!</p>
                    <p className="chat right img"></p>
                </div>
            </main>
            <ChatComment />
        </>
    );
}
