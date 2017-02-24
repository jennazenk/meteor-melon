// import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';

// import './main.html';

// Template.hello.onCreated(function helloOnCreated() {
//     // counter starts at 0
//     this.counter = new ReactiveVar(0);
// });

// Template.hello.helpers({
//     counter() {
//         return Template.instance().counter.get();
//     },
// });

// Template.hello.events({
//     'click button' (event, instance) {
//         // increment the counter when button is clicked
//         // instance.counter.set(instance.counter.get() + 1);

// var untitled_exchangeprotocolContract = web3.eth.contract([{ "constant": true, "inputs": [{ "name": "id", "type": "uint256" }], "name": "getOffer", "outputs": [{ "name": "", "type": "uint256" }, { "name": "", "type": "address" }, { "name": "", "type": "uint256" }, { "name": "", "type": "address" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "getLastOfferId", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "id", "type": "uint256" }], "name": "isActive", "outputs": [{ "name": "active", "type": "bool" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "id", "type": "uint256" }], "name": "getOwner", "outputs": [{ "name": "owner", "type": "address" }], "payable": false, "type": "function" }]);
// var untitled_exchangeprotocol = untitled_exchangeprotocolContract.new({
//     from: web3.eth.accounts[0],
//     data: '0x6060604052341561000c57fe5b5b61020d8061001c6000396000f30060606040526000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680634579268a1461005c57806359e148fc146100fd57806382afd23b14610123578063c41a360a1461015b575bfe5b341561006457fe5b61007a60048080359060200190919050506101bb565b604051808581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200194505050505060405180910390f35b341561010557fe5b61010d6101cb565b6040518082815260200191505060405180910390f35b341561012b57fe5b61014160048080359060200190919050506101d1565b604051808215151515815260200191505060405180910390f35b341561016357fe5b61017960048080359060200190919050506101d9565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60006000600060005b9193509193565b60005b90565b60005b919050565b60005b9190505600a165627a7a723058201f8461f70d67d9840b0bf1eb3c02c99531b3bb7b5b7895b461694b41e8a385280029',
//     gas: '4700000'
// }, function(e, contract) {
//     console.log(e, contract);
//     // if (typeof contract.address !== 'undefined') {
//     	instance.counter.set('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
//         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
//     // }
// })

//     },
// });




//instantiation of contract
var untitled_exchangeprotocolContract = web3.eth.contract([{ "constant": true, "inputs": [{ "name": "id", "type": "uint256" }], "name": "getOffer", "outputs": [{ "name": "", "type": "uint256" }, { "name": "", "type": "address" }, { "name": "", "type": "uint256" }, { "name": "", "type": "address" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "getLastOfferId", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "id", "type": "uint256" }], "name": "isActive", "outputs": [{ "name": "active", "type": "bool" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "id", "type": "uint256" }], "name": "getOwner", "outputs": [{ "name": "owner", "type": "address" }], "payable": false, "type": "function" }]);
var untitled_exchangeprotocol = untitled_exchangeprotocolContract.at("0x9646756721bf3eb9c46fdf8b19f59d9f6a29c614");

//calling get last offer id method on contract
untitled_exchangeprotocol.getLastOfferId(function(err, res) {
    if (!err) {
        console.log("Outside getlastofferid", res);
        Session.set('getLastOfferId', res);
    } else {
        console.log("error", err);
    }
});

//calling isActive method on contract
untitled_exchangeprotocol.isActive("555", function(err, res) {
    if (!err) {
        console.log("Outside isActive", res);
        Session.set('isActive', res);
    } else {
        console.log("error", err);
    }
});

// Template.test.onCreated(function() {
//     this.account = web3.eth.accounts;
// });

Template.test.helpers({
    'account': function() {
        // return web3.eth.accounts;
        return Template.instance().account;
    },
    'exchange': function() {
        console.log('Exchange protocol', untitled_exchangeprotocol);
        return untitled_exchangeprotocol;
    },
    'getLastOfferId': function() {
        console.log('Inside helpers GetLastOfferId with SET', Session.get('getLastOfferId'))
        return Session.get('getLastOfferId').c[0];
    },
    'isActive': function() {
         console.log('Inside helpers IsActive with SET', Session.get('isActive'))
         return Session.get('isActive');
    }
})
