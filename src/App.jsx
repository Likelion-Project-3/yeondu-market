import { upload } from "@testing-library/user-event/dist/upload";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ChatList from "./pages/ChatList";
import ChatRoom from "./pages/ChatRoom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyProfile from "./pages/MyProfile";
import Register from "./pages/Register";
import SetProfile from "./pages/SetProfile";
import Splash from "./pages/Splash";
import Post from "./pages/Post";
import UploadPost from "./pages/UploadPost";
import UploadProduct from "./pages/UploadProduct";
import EditPost from "./pages/EditPost";
import EditProfile from "./pages/EditProfile";
import "./reset.css";
import FollowingContainer from "./components/follow/FollowingContainer";
import FollowerList from "./pages/FollowerList";
import FollowingList from "./pages/FollowingList";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Route exact path="/" component={Splash} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/join" component={Register} />
                <Route exact path="/home" component={Home} />
                <Switch>
                    <Route exact path="/post/upload" component={UploadPost} />
                    <Route exact path="/post/:postId" component={Post} />
                </Switch>
                <Route exact path="/post/:postId/edit" component={EditPost} />
                <Route exact path="/product/upload" component={UploadProduct} />
                <Route exact path="/myprofile" component={MyProfile} />
                <Route exact path="/chat" component={ChatList} />
                <Route exact path="/chat/:accountId" component={ChatRoom} />
                <Route exact path="/setprofile" component={SetProfile} />
                <Route exact path="/editprofile" component={EditProfile} />
                <Route
                    exact
                    path="/:username/follower"
                    component={FollowerList}
                />
                <Route
                    exact
                    path="/:username/following"
                    component={FollowingList}
                />
            </BrowserRouter>
        </div>
    );
}

export default App;
