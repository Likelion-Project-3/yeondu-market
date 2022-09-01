import { useHistory } from "react-router-dom";
import "./TopMenuComponent.css";

function TopMenuComponent(props) {
    const history = useHistory();
    return (
        <nav className={props.topclassName}>
            <button
                type="button"
                className="prevBtn"
                onClick={history.goBack}
            ><span className="ir">뒤로가기 버튼</span></button>
            <h2 className={props.h2className}>{props.h2title}</h2>
            <label htmlFor="searchUser" className="ir"></label>
            <input
                id="searchUser"
                type={props.inputtype}
                onChange={props.onChange}
                placeholder="계정 검색"
                maxLength="30"
                autoFocus
            />
            <button
                type={props.type}
                className={props.rightclassName}
                onClick={props.handlerRightBtn}
                disabled={props.disabled}
            >
                {props.title}
            </button>
        </nav>
    );
}

export default TopMenuComponent;
