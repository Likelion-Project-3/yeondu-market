import { useEffect, useState } from "react";
import TopBasicNav from "../components/common/TopBasicNav";
import ProductContainer from "../components/product/ProductContainer";
import ProfileInfo from "../components/profile/ProfileInfo";
import "../pages/style/MyProfile.css";
import { BASE_URL } from "../components/constants/baseUrl";
import axios from "axios";

function MyProfile() {
    const token = localStorage.getItem("Token");
    const accountname = localStorage.getItem("accountname");
    const reqPath = `/profile/${accountname}`;

    const [profileInfo, setProfileInfo] = useState([]);

    useEffect(() => {
        // () => getProfile();
        const getProfile = () => {
            axios
                .get(BASE_URL + reqPath, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-type": "application/json",
                    },
                })
                .then((response) => {
                    setProfileInfo(response.data);
                    console.log("Info :", profileInfo);
                })
                .catch((err) => console.log(err));
        };
        getProfile();
    }, []);
    return (
        <div className="profileWrap">
            <TopBasicNav />
            <ProfileInfo />
            <ProductContainer />
        </div>
    );
}
export default MyProfile;
