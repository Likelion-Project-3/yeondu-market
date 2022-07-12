import TopBasicNav from "../components/common/TopBasicNav";
import ProductContainer from "../components/product/ProductContainer";
import ProfileInfo from "../components/profile/ProfileInfo";
import "../pages/style/MyProfile.css";

export default function MyProfile() {
    return (
        <div className="profileWrap">
            <TopBasicNav />
            <ProfileInfo />
            <ProductContainer />
        </div>
    );
}
