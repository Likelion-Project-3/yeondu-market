import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import ChatList from "./pages/ChatList";
import ChatRoom from "./pages/ChatRoom";
import EditPost from "./pages/EditPost";
import EditProduct from "./pages/EditProduct";
import EditProfile from "./pages/EditProfile";
import FollowerList from "./pages/FollowerList";
import FollowingList from "./pages/FollowingList";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyProfile from "./pages/MyProfile";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Search from "./pages/Search";
import SetProfile from "./pages/SetProfile";
import Splash from "./pages/Splash";
import Post from "./pages/Post";
import UploadPost from "./pages/UploadPost";
import UploadProduct from "./pages/UploadProduct";
import { UserContextProvider } from "./context/UserContext";
import "./reset.css";

function App() {
    return (
        <div className="App">
            <UserContextProvider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Splash} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/join" component={Register} />
                        <Route
                            exact
                            path="/home"
                            render={() =>
                                localStorage.getItem("token") === null ? (
                                    <Redirect to="/" />
                                ) : (
                                    <Home />
                                )
                            }
                        />
                        <Route
                            exact
                            path="/post/upload"
                            component={UploadPost}
                        />
                        <Route exact path="/post/:postId" component={Post} />
                        <Route
                            exact
                            path="/post/:postId/edit"
                            component={EditPost}
                        />
                        <Route
                            exact
                            path="/product/upload"
                            component={UploadProduct}
                        />
                        <Route
                            exact
                            path="/product/:productId/edit"
                            component={EditProduct}
                        />
                        <Route
                            exact
                            path="/myprofile/:accountName"
                            component={MyProfile}
                        />
                        <Route
                            exact
                            path="/profile/:accountName"
                            component={MyProfile}
                        />
                        <Route exact path="/chat" component={ChatList} />
                        <Route
                            exact
                            path="/chat/:accountId"
                            component={ChatRoom}
                        />
                        <Route exact path="/search" component={Search} />
                        <Route
                            exact
                            path="/setprofile"
                            component={SetProfile}
                        />
                        <Route
                            exact
                            path="/editprofile"
                            component={EditProfile}
                        />
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
                        <Route path="/*" component={NotFound} />
                        <Route path="/404" component={NotFound} />
                    </Switch>
                </BrowserRouter>
            </UserContextProvider>
        </div>
    );
}

export default App;
