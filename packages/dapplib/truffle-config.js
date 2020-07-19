require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy prize flee venture strong radar spider attitude hockey end army gas'; 
let testAccounts = [
"0x867fe39b43590236e36d8899891d26bbc931c60f12d60b0afa755162416d6102",
"0x512d02caaa975b053276029cfd07b9ab4d0cd131792bfaa812ed710354e41a30",
"0x747ceae45c8aba86d0e67053133733e1bbebb9b08cff66b7d9871a318fad4963",
"0x776eaf58647e14b00abc7deb5b3ba65e3f13b462be3b0b0ad3a9769d75bfdf34",
"0x8fb0f165d67d9509ecc1f6289851e09dd955eb30dad41b8c22b3f263bf209b61",
"0x0745c09f09d712069194bd65b49af58dd168eda677d426632f943c90107accf4",
"0xcc7ddc2efca2dada1a99bf49e3c4dfe9fbd13365419d4e628ebdc7eafcbe4c2a",
"0x4e4b4ec8636bff41749eb2868ec5955db48358f2d02590c9e08bf12814285b5a",
"0x3dc7b142846c7b0931ad587337096868a2a08b8122a3c50f7a14ac45612b151e",
"0xbc2445cdeea3b5ef7347a9039974ad38e195dd714e3ea0ff09539dc7331111ca"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
