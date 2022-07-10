import "./EditProfile.css";
import ProfileForm from "../components/ProfileForm";
import { useHistory } from "react-router-dom";


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
                >
                </button>
                <button className="saveBtn">저장</button>
            </nav>
            <main className="editProfileWrap">
                <ProfileForm />
            </main>
        </>
    );
}