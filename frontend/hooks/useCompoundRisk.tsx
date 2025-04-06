import { useEffect, useState } from "react";
import { ethers } from "ethers";

const COMPOUND_CTOKEN_ABI = [
  "function borrowBalanceStored(address account) external view returns (uint256)",
];

export function useCompoundRisk(address: string) {
  const [borrowedAmount, setBorrowedAmount] = useState(0);

  useEffect(() => {
    if (!address) return;

    async function fetchCompound() {
      const provider = new ethers.JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/s0CXuwy0IO4aLKX-bSPLZO5Q704L5zYm");
      const cDaiContract = new ethers.Contract("0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643", COMPOUND_CTOKEN_ABI, provider);
      
      const debt = await cDaiContract.borrowBalanceStored(address);
      setBorrowedAmount(Number(debt) / 1e18);
    }

    fetchCompound();
  }, [address]);

  return { borrowedAmount };
}
