// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7;
/**
 * Contract that exposes the needed erc20 token functions
 */

interface ERC20Interface {
  // Send _value amount of tokens to address _to
  function transfer(address _to, uint256 _value) external returns (bool success);
  // Get the account balance of another account with address _owner
  function balanceOf(address _owner) external view returns (uint256 balance);
}