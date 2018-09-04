const Bitcoin = require('./bitcoin');

Bitcoin.createWalletAddress( response => {
    console.log(response);
});