import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import Login from "./components/login/Login";
import "./styles/index.css";
import Dashboard from "./components/dashboard/Dashboard";
import Comp from "./components/Comp";
import Manage from "./pages/manage/Manage";
import PostSession from "./pages/postsession/PostSession";
import AddPost from "./pages/addpost/AddPost";
import PostManagement from "./pages/postmanagement/PostManagement";
import PostUpdate from "./pages/postupdate/PostUpdate";
import PostDelete from "./pages/postdelete/PostDelete";
import TrendMode from "./pages/trendmode/TrendMode";
import TrendPosts from "./pages/trendposts/TrendPosts";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/testing">{user ? <Comp /> : <Login />}</Route>
        <Route path="/dashboard">{user ? <Dashboard /> : <Login />}</Route>
        <Route path="/manage">{user ? <Manage /> : <Login />}</Route>
        <Route path="/postsession">{user ? <PostSession /> : <Login />}</Route>
        <Route path="/addpost">{user ? <AddPost /> : <Login />}</Route>
        <Route path="/post-management">
          {user ? <PostManagement /> : <Login />}
        </Route>
        <Route path="/post-update">{user ? <PostUpdate /> : <Login />}</Route>
        <Route path="/post-delete">{user ? <PostDelete /> : <Login />}</Route>
        <Route path="/trend-mode">{user ? <TrendMode /> : <Login />}</Route>
        <Route path="/trend-posts">{user ? <TrendPosts /> : <Login />}</Route>
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
