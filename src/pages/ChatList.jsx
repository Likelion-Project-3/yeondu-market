import { Link } from "react-router-dom";
import ChatItem from "../components/chat/ChatItem";
import TapMenu from "../components/common/TapMenu";
import TopBasicNav from "../components/common/TopBasicNav";

function ChatList() {
    return (
        <div className="chatListPage">
            <TopBasicNav />
            <div className="chatWrap">
                <Link to="/chat/1">
                    <ChatItem
                        sender="냠냐미"
                        content="사진을 보냈습니다."
                        date="2022.07.29"
                        read={false}
                    />
                </Link>
                <ChatItem
                    sender="고기좋아"
                    content="이번에는 진짜 다이어트 도전... 샐러드 정기배송 얼마죠?"
                    date="2022.06.29"
                />
                <ChatItem
                    sender="그린빈 친환경 완두콩"
                    content="(광고) 오픈 이벤트에 참가하시면 무료 완두콩 2kg 🍃 설문에 참여하시면 기프티콘의 행운이 찾아옵니다!"
                    date="2022.06.25"
                />
            </div>
            <TapMenu />
        </div>
    );
}
export default ChatList;
