import Profile from "./components/Profile";
import { connect } from "react-redux";

const App = () => {
  return <Profile />;
};

const mapStateToProps = state => {
  return {
    username: state.username,
    userprofile: state.userprofile,
    repos: state.repos
  };
};

export default connect(mapStateToProps)(App);
