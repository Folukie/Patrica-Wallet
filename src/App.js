import "./App.css";
import Sidebar from "./components/sidebar/sidebar.component";
import WalletPage from "./pages/wallet/wallet.page";

import { Route, Switch } from "react-router-dom";
import { WALLET_ROUTE } from "./constants/routes";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

function App() {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (location.pathname !== WALLET_ROUTE) {
      history.push(WALLET_ROUTE);
    }
  }, [location, history]);

  return (
    <div>
      <div className="App">
        <Sidebar />
      </div>
      <Switch>
        <Route path={WALLET_ROUTE}>
          <WalletPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
