import "../pages/style/EditProfile.css";
import { useHistory } from "react-router-dom";
import ProfileForm from "../components/profile/ProfileForm";

export default function EditProfile() {
    let history = useHistory();

    return (
        <>
            <nav className="topBasicNav">
                <button
                    className="prevBtn"
                    onClick={() => {
                        history.goBack();
                    }}
                ></button>
                <button className="saveBtn">저장</button>
            </nav>
            <main className="editProfileWrap">
                <ProfileForm />
            </main>
        </>
    );
}
