import { upload } from "@testing-library/user-event/dist/upload";
import { BrowserRouter, Route } from "react-router-dom";
import ChatList from "./pages/ChatList";
import ChatRoom from "./pages/ChatRoom";
import Home from "./pages/Home";
import Join from "./pages/Join";
import Login from "./pages/Login";
import MyProfile from "./pages/MyProfile";
import Splash from "./pages/Splash";
import UploadPost from "./pages/UploadPost";

import "./reset.css";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Route exact path="/" component={Splash} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/join" component={Join} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/post/upload" component={UploadPost} />
                <Route exact path="/myprofile" component={MyProfile} />
                <Route exact path="/chat" component={ChatList} />
                <Route exact path="/chat/:accountId" component={ChatRoom} />
            </BrowserRouter>
        </div>
    );
}

export default App;
