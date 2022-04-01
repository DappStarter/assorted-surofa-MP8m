require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture oppose swift top edge rare remind huge include kite obscure giggle'; 
let testAccounts = [
"0x244cdca0a43ced861ab3fa6a00924b590bccea52bed7b1b1bb18dad4c0fe11e0",
"0x44c7c41278251133e538d845a7ac65cbe1c7e843781553c9fe5b337c705db3ec",
"0xb3fb3e62bc27c8ba2ebd18190924be0db0c039a93be51812f4d73f8735013e06",
"0x0dc9aa162a9512bd4c226c19fd034aaff6ba96a5c674e8dd9e357b980d22c11e",
"0x2e5b344b52da342a8620c65e1e58b749b950e1f32a24e10f0461a25e8d95d355",
"0xc18e7f62f3cb4ebcf1c3014ec0924758bb80871be9bb1d2865b3948198aa9e7f",
"0xe4bd2606219e3d1895333928508ce35547cd250338c90c88a548150c46ddc318",
"0x9640b9317567364c8ebb9bab5e0816cbc4b1fb9ac8abf5635ee9a49a750ef525",
"0xcd3d4590856fa8321ab94d316a7e3e62c298899edcd4bb78dec623c8acc1a62c",
"0xc232421ac5cc04f21e1144aac02bf802e8a32d92473b73d3f625dd9202c3f9fe"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

