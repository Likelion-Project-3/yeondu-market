import "../pages/style/EditProfile.css";
import { useHistory } from "react-router-dom";
import ProfileForm from "../components/profile/ProfileForm";

function EditProfile() {
    let history = useHistory();
    return (
        <>
        <TopMenuComponent topclassName="topBasicNav" rightclassName="saveBtn" inputtype="notext" title="저장" type="submit"/>

            <main className="editProfileWrap">
                <ProfileForm />
            </main>
        </>
    );
}
export default EditProfile;