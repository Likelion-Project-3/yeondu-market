import ChatItem from "../../components/chat/ChatItem";
import TopBasicNav from "../../components/TopBasicNav";
import TapMenu from "../../components/TapMenu";
import { Link } from "react-router-dom";
import ChatRoom from "./ChatRoom";
import "./ChatList.css";

export default function ChatListPage() {
    return (
        <div className="chatListPage">
            <TopBasicNav />
            <div className="chatWrap">
                <Link to="/chat/1">
                    <ChatItem
                        sender="애월읍 위니브 유기농 마켓"
                        content="이번에 정정 언제하맨마씸?"
                        date="2022.06.29"
                        read={false}
                    />
                </Link>
                <ChatItem
                    sender="제주 채소 마을"
                    content="깊은 어둠의 존재감, 롤스로이스 뉴 블랙 배지"
                    date="2022.06.29"
                />
                <ChatItem
                    sender="친환경 완두콩"
                    content="오픈 이벤트에 참가하시면 무료 완두콩 2kg"
                    date="2022.06.29"
                />
            </div>
            <TapMenu />
        </div>
    );
}
