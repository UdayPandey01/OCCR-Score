# On-Chain Wallet Scoring System

## Overview

The **On-Chain Wallet Scoring System** is a decentralized credit assessment tool designed to help DeFi protocols evaluate users' creditworthiness based on their on-chain activity. It provides a trustless, privacy-preserving scoring mechanism that empowers borrowers, lenders, and investors in the DeFi ecosystem.

## Features

- **Decentralized Credit Scoring:** Evaluates users based on transaction volume, wallet age, DeFi interactions, and repayment history.
- **Privacy-Preserving Mechanism:** Uses Zero-Knowledge Proofs (ZKP) to allow score verification without exposing sensitive wallet activity.
- **Smart Contract Integration:** Scores are stored on-chain and can be queried via smart contracts.
- **Developer API:** Seamless integration for lending protocols to fetch user scores.
- **User Dashboard:** View score breakdown, improvement tips, and share scores with protocols.

## Tech Stack

- **Frontend:** Next.js (React + Tailwind CSS + ethers.js)
- **Backend:** Node.js (Express.js + TypeScript + MongoDB)
- **Smart Contracts:** Solidity (Ethereum/Polygon)
- **Data Indexing:** The Graph (for querying wallet activity)