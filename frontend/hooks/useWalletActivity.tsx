import { useEffect, useState } from "react";
import { Alchemy, Network } from "alchemy-sdk";

const alchemy = new Alchemy({
  apiKey: "s0CXuwy0IO4aLKX-bSPLZO5Q704L5zYm",
  network: Network.ETH_MAINNET,
});

export function useWalletActivity(walletAddress: string | undefined) {
  const [walletAge, setWalletAge] = useState(0);
  const [transactionVolume, setTransactionVolume] = useState(0);
  console.log("Wallet Address:", walletAddress);  

  useEffect(() => {
    if (!walletAddress) return;

    const fetchActivity = async () => {
      try {
        const transactions = await alchemy.core.getAssetTransfers({
          fromBlock: "0x0",
          fromAddress: walletAddress,
          category: ["external", "erc20", "erc721"],
        });

        const totalVolume = transactions.transfers.reduce(
          (sum, tx) => sum + Number(tx.value || 0),
          0
        );

        const firstTxBlock = transactions.transfers.at(-1)?.blockNum || "0x0";
        const blockDetails = await alchemy.core.getBlock(Number(firstTxBlock));
        const walletAgeInDays = (Date.now() / 1000 - blockDetails.timestamp) / 86400;

        setTransactionVolume(totalVolume);
        setWalletAge(Math.floor(walletAgeInDays));
      } catch (error) {
        console.error("Error fetching wallet activity:", error);
      }
    };

    fetchActivity();
  }, [walletAddress]);

  return { walletAge, transactionVolume };
}
