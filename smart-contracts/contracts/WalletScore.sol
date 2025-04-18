// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract WalletScore {
    address public owner;

    mapping(address => bool) public scorers;
    mapping(address => uint256) private scores;

    event ScoreUpdated(address indexed wallet, uint256 score);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    modifier onlyScorer() {
        require(scorers[msg.sender], "Not authorized scorer");
        _;
    }

    function setScorer(address scorer, bool isAuthorized) external onlyOwner {
        scorers[scorer] = isAuthorized;
    }

    function setScore(address wallet, uint256 score) external onlyScorer {
        require(score <= 1000, "Score exceeds max");
        scores[wallet] = score;
        emit ScoreUpdated(wallet, score);
    }

    function getScore(address wallet) external view returns (uint256) {
        return scores[wallet];
    }
}
