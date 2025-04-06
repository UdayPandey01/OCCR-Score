import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { Alchemy, Network } from "alchemy-sdk";

const alchemy = new Alchemy({
  apiKey: "s0CXuwy0IO4aLKX-bSPLZO5Q704L5zYm",
  network: Network.ETH_MAINNET, 
});

export function useWalletActivity() {
  const { address } = useAccount();
  const [walletAge, setWalletAge] = useState(0);
  const [transactionVolume, setTransactionVolume] = useState(0);

  useEffect(() => {
    if (!address) return;

    async function fetchActivity() {
      const transactions = await alchemy.core.getAssetTransfers({
        fromBlock: "0x0",
        fromAddress: "0xd4d63cb0e661df7bd54b27d8ee38013d68e8cc8f",
        category: ["external", "erc20", "erc721"],
      });

      const totalVolume = transactions.transfers.reduce(
        (sum, tx) => sum + Number(tx.value || 0),
        0
      );

      const firstTxBlock = transactions.transfers[transactions.transfers.length - 1]?.blockNum || "0x0";
      const blockDetails = await alchemy.core.getBlock(Number(firstTxBlock));
      const walletAgeInDays = (Date.now() / 1000 - blockDetails.timestamp) / 86400;

      setTransactionVolume(totalVolume);
      setWalletAge(Math.floor(walletAgeInDays));
    }

    fetchActivity();
  }, [address]);

  return { walletAge, transactionVolume };
}
