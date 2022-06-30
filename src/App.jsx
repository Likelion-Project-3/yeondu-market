import { BrowserRouter, Route } from "react-router-dom";
import Logout from "./components/modal/Logout";
import ProfileModal from "./components/modal/ProfileModal";
import "./reset.css";
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Route exact path="/" component={ProfileModal} />
                <Route exact path="/logout" component={Logout} />
            </BrowserRouter>
        </div>
    );
}

export default App;
