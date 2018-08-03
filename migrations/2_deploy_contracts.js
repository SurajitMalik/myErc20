/**
 * This method is similar to Node's require, 
 * but in our case it specifically returns a contract abstraction 
 * that we can use within the rest of our deployment script. 
 * The name specified should match the name of the contract definition within 
 * that source file.
 */

const myErc1 = artifacts.require('./myErc1.sol');

/**
 * Deployer is an api
 * @param {*} deployer 
 */
module.exports = function (deployer) {
  deployer.deploy(myErc1, 1000);
}
