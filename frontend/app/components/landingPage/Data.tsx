"use client";
import { useWalletActivity } from "@/hooks/useWalletActivity";
import { useCompoundRisk } from "@/hooks/useCompoundRisk";
import { useWallet } from "@/context/WalletContext";

const Data = () => {
  const { walletAddress } = useWallet();
  const { walletAge, transactionVolume } = useWalletActivity(walletAddress);
  const { borrowedAmount } = useCompoundRisk(walletAddress);

  return (
    <div>
      <h2>Wallet Activity</h2>
      <p>Wallet Age: {walletAge} days</p>
      <p>Total Transaction Volume: {transactionVolume} ETH</p>
      <h2>Compound Risk</h2>
      <p>Borrowed Amount: {borrowedAmount} DAI</p>
    </div>
  );
};

export default Data;
