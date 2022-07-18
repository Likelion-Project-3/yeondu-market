import TopMenuComponent from "../common/TopMenuComponent";
import "./TopSearchNav.css";

function TopSearchNav() {
    return(
        <>
            <TopMenuComponent topclassName="topSearchNav" rightclassName="unsettled"/>
            <input type="text" placeholder="계정 검색" maxLength="30" autoFocus />
        </>
    )
}
export default TopSearchNav;