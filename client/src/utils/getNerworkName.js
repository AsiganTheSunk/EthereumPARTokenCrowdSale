
// Based on the Network Id Provided by
function setNetwork (networkId) {
    var currentNetworkName = "";
    switch (networkId) {
        case "1":
            currentNetworkName = " Main";
            break;
        case "2":
            currentNetworkName = " Morden ";
            break;
        case "3":
            currentNetworkName = " Ropsten ";
            break;
        case "4":
            currentNetworkName = " Rinkeby ";
            break;
        case "42":
            currentNetworkName = " Kovan ";
            break;
        default:
            currentNetworkName = " Ganache ";
    }
    return(currentNetworkName);
};

export default setNetwork;
