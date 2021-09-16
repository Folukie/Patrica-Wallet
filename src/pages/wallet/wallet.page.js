import React from "react";
import Activity from "../../components/activity/activity.components";
import CardContent from "../../components/card-content/card-content.component";

import "./wallet.page.scss";

const WalletPage = () => {
  return (
    <div className="wallet-page">
      <CardContent />
      <Activity />
    </div>
  );
};

export default WalletPage;
