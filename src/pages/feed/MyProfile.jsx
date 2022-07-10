import TopBasicNav from "../../components/TopBasicNav";
import "./MyProfile.css";
import ProfileInfo from "../../components/profile/ProfileInfo";
import ProductContainer from "../../components/product/ProductContainer";

export default function MyProfile() {
    return (
        <div className="profileWrap">
            <TopBasicNav />
            <ProfileInfo />
            <ProductContainer />
        </div>
    );
}
