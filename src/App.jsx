import { BrowserRouter, Route } from "react-router-dom";
import Logout from "./components/modal/Logout";
import PostAlert from "./components/modal/PostAlert";
import PostModal from "./components/modal/PostModal";
import ProductAlert from "./components/modal/ProductAlert";
import ProductModal from "./components/modal/ProductModal";
import ProfileModal from "./components/modal/ProfileModal";
import MyProfile from "./components/profile/MyProfile";
import ProductUpload from "./components/uploads/ProductUpload";
import "./reset.css";
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Route exact path="/profilemodal" component={ProfileModal} />
                <Route exact path="/logout" component={Logout} />
                <Route exact path="/postmodal" component={PostModal} />
                <Route exact path="/postdelete" component={PostAlert} />
                <Route exact path="/productmodal" component={ProductModal} />
                <Route exact path="/productdelete" component={ProductAlert} />
                <Route exact path="/myprofile" component={MyProfile} />
                <Route exact path="/productupload" component={ProductUpload} />
            </BrowserRouter>
        </div>
    );
}

export default App;
