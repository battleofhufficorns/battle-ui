import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Mint from "./pages/Minting";
import Create from "./pages/Creating";
import NFT from "./pages/MyNFT";
import Join from "./pages/Joining";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Mint} />
        <Route path="/create" component={Create} />
        <Route path="/nft" component={NFT} />
        <Route path="/join" component={Join} />
      </Switch>
    </Router>
  );
}

export default App;
