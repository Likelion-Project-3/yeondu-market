import { BrowserRouter, Route } from "react-router-dom";
import Logout from "./components/modal/LogoutModal";
import PostAlert from "./components/modal/PostAlert";
import PostModal from "./components/modal/PostModal";
import ProductAlert from "./components/modal/ProductAlert";
import ProductModal from "./components/modal/ProductModal";
import ProfileModal from "./components/modal/ProfileModal";
import FollowerList from "./pages/feed/FollowerList";
import MyProfile from "./pages/feed/MyProfile";
import ProductUpload from "./pages/feed/ProductUpload";
import Profile from "./pages/feed/Profile";
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
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/myprofile" component={MyProfile} />
                <Route exact path="/followerlist" component={FollowerList} />
                <Route exact path="/productupload" component={ProductUpload} />
            </BrowserRouter>
        </div>
    );
}

export default App;
