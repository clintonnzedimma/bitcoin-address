const Bitcoin = require('./lib/bitcoin');

Bitcoin.createWalletAddress( response => {
    console.log(response);
});