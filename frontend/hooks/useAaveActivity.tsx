import { useEffect, useState } from "react";

export function useAaveActivity(address: string) {
  const [aaveInteractions, setAaveInteractions] = useState(0);

  useEffect(() => {
    if (!address) return;

    async function fetchAave() {
      const query = `
        {
          users(where: {id: "${address.toLowerCase()}"}) {
            id
            borrowedReservesCount
            totalDeposited
            totalBorrowed
          }
        }
      `;
      
      const res = await fetch("https://api.thegraph.com/subgraphs/name/aave/protocol-v2", {
        method: "POST",
        body: JSON.stringify({ query }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      const user = data.data.users[0] || {};
      setAaveInteractions(user.borrowedReservesCount || 0);
    }

    fetchAave();
  }, [address]);

  return { aaveInteractions };
}
