import "./ProfileSettingPage.css";
import ProfileForm from "./ProfileForm";

export default function ProfileSetting() {
    return (
        <main className="profileSettingPage">
            <h1>프로필 설정</h1>
            <p>나중에 언제든지 변경할 수 있습니다.</p>
            <ProfileForm />
            <button className="goFeedBtn">연두마켓 시작하기</button>
            {/* button은 Link로 변경 예정 */}
        </main>
    );
}