import './TopMenuComponent.css'
import { useHistory } from "react-router-dom";

function TopMenuComponent(props){
    const history = useHistory();
    
    return(
        <nav className={props.topclassName}>
            <button type="button" className="prevBtn" onClick={history.goBack}></button>
            <h2 className={props.h2className}>{props.h2title}</h2>
            <button type={props.type} className={props.rightclassName}>{props.title}</button>
        </nav>
    );
}

export default TopMenuComponent;