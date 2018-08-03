pragma solidity ^0.4.19;

contract myErc1{

    string public constant name = "MyErcToken";
    string public constant symbol = "MERC";
    uint public totalSupply = 0;
    mapping (address=> uint) balanceByAddress;

   constructor(uint initialSupply) public{
        totalSupply  = initialSupply;
   }
   
    function balanceOf(address _owner) public view returns(uint balance){
        return balanceByAddress[_owner];
    }
    
    event Transfer(address _from, address _to, uint _value);

    function transfer( 
        address _to,
        uint _value) public returns(bool flag){
            require(balanceByAddress[msg.sender] >= _value);
            balanceByAddress[msg.sender]-= _value;
            balanceByAddress[_to]+= _value;
            emit Transfer(msg.sender, _to, _value);
            return true;
    }

    /**
     * Fallback function is called when someone just sent Ether to the contract 
     * without providing any data or if someone messed up the types 
     * so that they tried to call a function that does not exist.
     * It must be declared as external.
     * The function consumes small amount of gas
     *
    **/

    function() external{
        require(true == false);
    }
}