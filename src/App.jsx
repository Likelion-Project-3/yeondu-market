import { upload } from "@testing-library/user-event/dist/upload";
import { BrowserRouter, Route } from "react-router-dom";
import Logout from "./components/modal/LogoutModal";
import PostAlert from "./components/modal/PostAlert";
import PostModal from "./components/modal/PostModal";
import ProductAlert from "./components/modal/ProductAlert";
import ProductModal from "./components/modal/ProductModal";
import ProfileModal from "./components/modal/ProfileModal";
import Splash from "./components/Splash";
import ChatListPage from "./pages/chat/ChatListPage";
import FollowerList from "./pages/feed/FollowerList";
import FollowingList from "./pages/feed/FollowingList";
import MyProfile from "./pages/feed/MyProfile";
import ProductUpload from "./pages/feed/ProductUpload";
import Profile from "./pages/feed/Profile";
import UploadPost from "./pages/feed/UploadPost";
import HomePage from "./pages/HomePage";
import "./reset.css";
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Route exact path="/home" component={HomePage} />
                <Route exact path="/post/upload" component={UploadPost} />
                <Route exact path="/myprofile" component={MyProfile} />
                <Route exact path="/chat" component={ChatListPage} />
            </BrowserRouter>
        </div>
    );
}

export default App;
