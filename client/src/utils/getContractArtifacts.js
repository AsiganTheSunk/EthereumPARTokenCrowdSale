// Method for loading Contracts Deployed in the Network
import getWeb3 from "./getWeb3";
import crowdsaleArtifact from "../contracts/CustomCrowdsale";
import tokenArtifact from "../contracts/CustomToken";
import wethArtifact from "../contracts/WETH9";

async function loadCrowdsaleContract(web3, networkId) {
    try {
    const deployedNetworkCrowdsale = crowdsaleArtifact.networks[networkId];
    const deployedNetworkCrowdsaleAddr = deployedNetworkCrowdsale.address;
    const crowdsaleInstance = new web3.eth.Contract(
        crowdsaleArtifact.abi,
        deployedNetworkCrowdsale && deployedNetworkCrowdsaleAddr,
    );

    return { crowdsaleInstance, deployedNetworkCrowdsaleAddr };
    } catch (err) {
        console.log('Unable to load Crowdsale Contract Data');
    }
}

async function loadTokenContract(web3, networkId) {
    try {
    const deployedNetworkToken = tokenArtifact.networks[networkId];
    const deployedNetworkTokenAddr = deployedNetworkToken.address;
    const tokenInstance = new web3.eth.Contract(
        tokenArtifact.abi,
        deployedNetworkToken && deployedNetworkTokenAddr,
    );

    return { tokenInstance, deployedNetworkTokenAddr };
    } catch (err) {
        console.log('Unable to load Token Contract Data');
    }
}






async function loadWethContract(web3, networkId) {
    try {
        const deployedNetworkWeth = wethArtifact.networks[networkId];
        const deployedNetworkWethAddr = deployedNetworkWeth.address;

        const wethInstance = new web3.eth.Contract(
            wethArtifact.abi,
            deployedNetworkWeth && deployedNetworkWethAddr,
        );
    return { wethInstance, deployedNetworkWethAddr };
    } catch (err) {
        console.log('Unable to load Weth Contract Data');
    }
}

async function getContractArtifacts() {
    try {
        const web3 = await getWeb3();
        const accounts = await web3.eth.getAccounts();
        const networkId = await web3.eth.net.getId();

        const {crowdsaleInstance, crowdsaleAddr } = loadCrowdsaleContract(web3, networkId);
        const {tokenInstance, tokenAddr } = loadTokenContract(web3, networkId);
        const {wethInstance, wethAddr } = loadWethContract(web3, networkId);

        return {crowdsaleInstance, crowdsaleAddr, tokenInstance, tokenAddr, wethInstance, wethAddr};
    } catch (err) {
        // Catch any errors for any of the above operations.
        alert(`Failed to load web3, accounts, or contract. Check console for details.`);
        console.error(err);
    }
}


export default getContractArtifacts;