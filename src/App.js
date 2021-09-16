import { useEffect } from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import { WALLET_ROUTE } from "./constants/routes";

import Sidebar from "./components/sidebar/sidebar.component";
import WalletPage from "./pages/wallet/wallet.page";

function App() {
  const location = useLocation();
  const history = useHistory();

  // Automatically redirects all route to wallet page

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
      <main>
        <Switch>
          <Route path={WALLET_ROUTE}>
            <WalletPage />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
