"use client";
import { useCompoundRisk } from "@/hooks/useCompoundRisk";
// import { useAaveActivity } from "@/hooks/useAaveActivity";
import { useWalletActivity } from "@/hooks/useWalletActivity";
import { useAccount } from "wagmi";

export default function Data() {
  // const { address } = useAccount();
  const { walletAge, transactionVolume } = useWalletActivity();
  const {borrowedAmount} = useCompoundRisk("0xd4d63cb0e661df7bd54b27d8ee38013d68e8cc8f");

  return (
    <div>
      <h2>Wallet Activity</h2>
      <p>Wallet Age: {walletAge} days</p>
      <p>Total Transaction Volume: {transactionVolume} ETH</p>
      <h2>Compound Risk</h2>
      <p>Borrowed Amount: {borrowedAmount} DAI</p>
    </div>
  );
}
