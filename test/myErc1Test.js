const myErc1 = artifacts.require('./myErc1.sol');

contract(myErc1, (accounts) => {
  var address1 = "0xec38fe3510e938dfcc80f997deb5626a97af4ca3";
  var address2 = "0xeea528c877a97637b05d31474b09332e3e06ef04";
  var address3 = accounts[3];

  it("should assert true", () => {
    var myErcInstance;
    myErc1.deployed()
      .then((instance) => {
        myErcInstance = instance;
        return instance.totalSupply.call();
      }).then((result) => {
        console.log('Initial supply...', result.valueOf());
        assert.equal(result.valueOf(), 1000, "Token contract initial with value not equal to 1000");
        myErcInstance.transfer(address2, 200, {
          from: address1,
          gas: 21000,
          gasLimit: 100000
        });
        return myErcInstance.balanceOf.call(address1);
      }).then((result2) => {
        console.log("Balance of Address1....", result2);
        assert.equal(result2.valueOf(), 800, "After sending transaction the balance of address1 is not equal to 800");
        return myErcInstance.balanceOf.call(address2);
      }).then((result3) => {
        console.log("Balance of Address2...", result3);
        assert.equal(result3.valueOf(), 200, "After sending transaction the balance of address1 is not equal to 800");
      })
  })

})
