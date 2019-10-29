export const CROWDSALE_CONTRACT_ADDRESS = '0xD833215cBcc3f914bD1C9ece3EE7BF8B14f841bb'

export const CROWDSALE_CONTRACT_ABI = [
    {
        "contractName": "CustomCrowdsale",
        "abi": [
            {
                "constant": true,
                "inputs": [],
                "name": "currentContribution",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "rate",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "cap",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "startingTime",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "contributions",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "closingTime",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "weth9",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "ICOGoalReached",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "ICOCompleted",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "renounceOwnership",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "owner",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "isOwner",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "contributionGoal",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "releaseTime",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "transferOwnership",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "token",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "name": "_rate",
                        "type": "uint256"
                    },
                    {
                        "name": "_cap",
                        "type": "uint256"
                    },
                    {
                        "name": "_contributionGoal",
                        "type": "uint256"
                    },
                    {
                        "name": "_wethAddr",
                        "type": "address"
                    },
                    {
                        "name": "_tokenAddr",
                        "type": "address"
                    },
                    {
                        "name": "_staringTime",
                        "type": "uint256"
                    },
                    {
                        "name": "_closingTime",
                        "type": "uint256"
                    },
                    {
                        "name": "_releaseTime",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_from",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "_amount",
                        "type": "uint256"
                    }
                ],
                "name": "Contribution",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_from",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "_amount",
                        "type": "uint256"
                    }
                ],
                "name": "ClaimContribution",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_from",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "time",
                        "type": "uint256"
                    }
                ],
                "name": "CloseCrowdsale",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_sender",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "_claimedTokens",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "name": "_balance",
                        "type": "uint256"
                    }
                ],
                "name": "claimContributionPreTx",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "previousOwner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "OwnershipTransferred",
                "type": "event"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "closeICO",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_contribution",
                        "type": "uint256"
                    }
                ],
                "name": "buyToken",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "claimContribution",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getTokenTotalSupply",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getWethTotalSupply",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getCurrentContribution",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getRate",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getCap",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getGoal",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "isCompleted",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getStartingTime",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getClosingTime",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getReleaseTime",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            }
        ],
        "metadata": "{\"compiler\":{\"version\":\"0.5.8+commit.23d335f2\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":false,\"inputs\":[],\"name\":\"claimContribution\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getStartingTime\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"currentContribution\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"rate\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_contribution\",\"type\":\"uint256\"}],\"name\":\"buyToken\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getClosingTime\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"cap\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"startingTime\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"contributions\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getWethTotalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"closingTime\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"weth9\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"ICOGoalReached\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getReleaseTime\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"closeICO\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getCap\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getTokenTotalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"ICOCompleted\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getRate\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"isOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"contributionGoal\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getCurrentContribution\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"releaseTime\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getGoal\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"isCompleted\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"token\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"name\":\"_rate\",\"type\":\"uint256\"},{\"name\":\"_cap\",\"type\":\"uint256\"},{\"name\":\"_contributionGoal\",\"type\":\"uint256\"},{\"name\":\"_wethAddr\",\"type\":\"address\"},{\"name\":\"_tokenAddr\",\"type\":\"address\"},{\"name\":\"_staringTime\",\"type\":\"uint256\"},{\"name\":\"_closingTime\",\"type\":\"uint256\"},{\"name\":\"_releaseTime\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"Contribution\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"ClaimContribution\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"time\",\"type\":\"uint256\"}],\"name\":\"CloseCrowdsale\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"_sender\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_claimedTokens\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"_balance\",\"type\":\"uint256\"}],\"name\":\"claimContributionPreTx\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"}],\"devdoc\":{\"methods\":{\"isOwner()\":{\"details\":\"Returns true if the caller is the current owner.\"},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner.     * > Note: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}},\"title\":\"CustomCrowdsale Params rate - Value Defining the Current Rate for the CustomCrowdsale cap - Value Defining the Current Cap for the CustomCrowdsale WETH9 - Value Defining the Current WETH9 Token for the CustomCrowdsale CustomToken - Value Defining the Current CustomToken for the CustomCrowdsale contributionGoal - Value Defining the Current Goal for the CustomCrowdsale currentContribution - Value Defining currentContribution status for the CustomCrowdsale startingTime - Value Defining the startingTime for the CustomCrowdsale closingTime - Value Defining the closingTime for CustomCrowdsale releaseTime - Value Defining the releaseTime for CustomCrowdsale ICOCompleted - Value Defining the Open/Close status for CustomCrowdsale ICOGoalReached - Value Defining the status for the contributionGoal in CustomCrowdsale contributions - Value Defining the every buy until claim in CustomCrowdsale\"},\"userdoc\":{\"methods\":{\"getTokenTotalSupply()\":{\"notice\":\"GETTERS\"}}}},\"settings\":{\"compilationTarget\":{\"/home/asigan/Github_Projects/EthereumPARTokenCrowdSale/contracts/CustomCrowdsale.sol\":\"CustomCrowdsale\"},\"evmVersion\":\"petersburg\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/home/asigan/Github_Projects/EthereumPARTokenCrowdSale/contracts/CustomCrowdsale.sol\":{\"keccak256\":\"0x5f6498a1d51b45dc815b4e6be70508134a252538354e88824905e5b2eb77f0ad\",\"urls\":[\"bzzr://3763e59e06d585999a3148ee854250346806d1f5135468b9cb8e5d903c1cc05d\"]},\"/home/asigan/Github_Projects/EthereumPARTokenCrowdSale/contracts/tokens/CustomToken.sol\":{\"keccak256\":\"0x46c332803b1ee5a0a6bd6ea12fa7698e5146e8a7b46243fca3837232485505e4\",\"urls\":[\"bzzr://f19034c9c8597d6d0029112f7b4387b350bdd29185c0e04f3e01f26579126c26\"]},\"canonical-weth/contracts/WETH9.sol\":{\"keccak256\":\"0x8f392bda1fce5c7106f32ffc911571669f8751d84dfad2f79b34256851e1a62f\",\"urls\":[\"bzzr://d160cc09f86f5a0f9a58a93dc322fb8adb6a055e27635e8b2dc8bb34c9ae25f4\"]},\"openzeppelin-solidity/contracts/math/SafeMath.sol\":{\"keccak256\":\"0x4ccf2d7b51873db1ccfd54ca2adae5eac3b184f9699911ed4490438419f1c690\",\"urls\":[\"bzzr://1604f5b6d6e916c154efd8c6720cda069e5ba32dfa0a9dedf2b42e5b02d07f89\"]},\"openzeppelin-solidity/contracts/ownership/Ownable.sol\":{\"keccak256\":\"0xf79fb10e8235770eb4aea7249034076a3cc9f9119ad944fc48705bae9c9d20dc\",\"urls\":[\"bzzr://d12a11272051eb6586de8f7e0a82c04a98c9984ce8b2a6cf1ee439f65aba29a9\"]},\"openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol\":{\"keccak256\":\"0xc61b3603089b09a730d8ca72e9133a496cc4405da40e9b87c12f073245d774bf\",\"urls\":[\"bzzr://f280f38d5ab6e1b89fd898ccd3901054a56572c141d91d30302e2db1db4cc6ff\"]},\"openzeppelin-solidity/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x90e8c2521653bbb1768b05889c5760031e688d9cd361f167489b89215e201b95\",\"urls\":[\"bzzr://aa8b45b57edafc3d67bc5d916327ea16807fae33f753ca163ae0c4061b789766\"]}},\"version\":1}",
        "bytecode": "0x60806040526000600a60006101000a81548160ff0219169083151502179055506000600a60016101000a81548160ff02191690831515021790555034801561004657600080fd5b5060405161010080611d11833981018060405261010081101561006857600080fd5b810190808051906020019092919080519060200190929190805190602001909291908051906020019092919080519060200190929190805190602001909291908051906020019092919080519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a387600381905550866004819055508560058190555084600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550826007819055508160088190555080600981905550426007541161029e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f53746172696e6754696d65206265666f7265204e6f770000000000000000000081525060200191505060405180910390fd5b600754600854116102fa576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180611cef6022913960400191505060405180910390fd5b600060045411610372576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f4361702056616c7565206d7573742062652061626f766520300000000000000081525060200191505060405180910390fd5b6000600554116103ea576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f476f616c2056616c7565206d7573742062652061626f7665203000000000000081525060200191505060405180910390fd5b60045460055411610446576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180611ccd6022913960400191505060405180910390fd5b50505050505050506118708061045d6000396000f3fe608060405234801561001057600080fd5b50600436106101cf5760003560e01c806354238645116101045780638f32d59b116100a2578063b97a7d2411610071578063b97a7d241461057c578063f2fde38b1461059a578063fa391c64146105de578063fc0c546a14610600576101cf565b80638f32d59b14610500578063ad477c4714610522578063b8623d5314610540578063b91d40011461055e576101cf565b806363a44262116100de57806363a442621461046c578063679aefce1461048e578063715018a6146104ac5780638da5cb5b146104b6576101cf565b8063542386451461040e578063554d578d1461043057806357df844b1461044e576101cf565b806339518b5e116101715780634b6753bc1161014b5780634b6753bc1461036657806350879c1c14610384578063529fc11e146103ce57806353462d6b146103f0576101cf565b806339518b5e146102d257806342e94c90146102f057806343a42c2f14610348576101cf565b80632c4e722e116101ad5780632c4e722e146102325780632d296bf1146102505780632f9cb9aa14610296578063355274ea146102b4576101cf565b80630114a690146101d45780630dc0c971146101f6578063111961f814610214575b600080fd5b6101dc61064a565b604051808215151515815260200191505060405180910390f35b6101fe610a76565b6040518082815260200191505060405180910390f35b61021c610a80565b6040518082815260200191505060405180910390f35b61023a610a86565b6040518082815260200191505060405180910390f35b61027c6004803603602081101561026657600080fd5b8101908080359060200190929190505050610a8c565b604051808215151515815260200191505060405180910390f35b61029e610ea0565b6040518082815260200191505060405180910390f35b6102bc610eaa565b6040518082815260200191505060405180910390f35b6102da610eb0565b6040518082815260200191505060405180910390f35b6103326004803603602081101561030657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610eb6565b6040518082815260200191505060405180910390f35b610350610ece565b6040518082815260200191505060405180910390f35b61036e610f78565b6040518082815260200191505060405180910390f35b61038c610f7e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103d6610fa4565b604051808215151515815260200191505060405180910390f35b6103f8610fb7565b6040518082815260200191505060405180910390f35b610416610fc1565b604051808215151515815260200191505060405180910390f35b6104386110ca565b6040518082815260200191505060405180910390f35b6104566110d4565b6040518082815260200191505060405180910390f35b61047461117e565b604051808215151515815260200191505060405180910390f35b610496611191565b6040518082815260200191505060405180910390f35b6104b461119b565b005b6104be6112d4565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6105086112fd565b604051808215151515815260200191505060405180910390f35b61052a611354565b6040518082815260200191505060405180910390f35b61054861135a565b6040518082815260200191505060405180910390f35b610566611364565b6040518082815260200191505060405180910390f35b61058461136a565b6040518082815260200191505060405180910390f35b6105dc600480360360208110156105b057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611374565b005b6105e66113fa565b604051808215151515815260200191505060405180910390f35b610608611411565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6000600a60009054906101000a900460ff166106ce576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f437573746f6d43726f776473616c65204e6f7420436f6d706c6574656400000081525060200191505060405180910390fd5b600954421015610729576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260348152602001806117ca6034913960400191505060405180910390fd5b600061077f600354600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461143790919063ffffffff16565b90507f01010b5d6c025d0c4cb16706a796168f588300bca2bac066816f536f2c4ceb0d3382600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838152602001828152602001935050505060405180910390a16000600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414610a6d57600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561092357600080fd5b505af1158015610937573d6000803e3d6000fd5b505050506040513d602081101561094d57600080fd5b81019080805190602001909291905050506109b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806117a86022913960400191505060405180910390fd5b7fe2cacd9696795caa2d3fe049b4533489e66bc98a6a944ae76bfbb2d1de4d07b73382604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a16000600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506001915050610a73565b60009150505b90565b6000600754905090565b60065481565b60035481565b60006004548210610ae8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180611754602e913960400191505060405180910390fd5b60055460065410610b44576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260418152602001806117136041913960600191505060405180910390fd5b6000821015610b9e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806117fe6026913960400191505060405180910390fd5b6000809050610bb683826114bd90919063ffffffff16565b50610bcc600654826114bd90919063ffffffff16565b50600554811115610bf157610bee60065460055461154590919063ffffffff16565b92505b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330866040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b158015610cce57600080fd5b505af1158015610ce2573d6000803e3d6000fd5b505050506040513d6020811015610cf857600080fd5b8101908080519060200190929190505050610d7b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f7472616e7366657246726f6d28292057657468657220686173204661696c656481525060200191505060405180910390fd5b610d90836006546114bd90919063ffffffff16565b600681905550610de883600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546114bd90919063ffffffff16565b600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507f4d154d4aae216bed6d0926db77c00df2b57c6b5ba4eee05775de20facede3a7b3384604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a16001915050919050565b6000600854905090565b60045481565b60075481565b600b6020528060005260406000206000915090505481565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b158015610f3857600080fd5b505afa158015610f4c573d6000803e3d6000fd5b505050506040513d6020811015610f6257600080fd5b8101908080519060200190929190505050905090565b60085481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600a60019054906101000a900460ff1681565b6000600954905090565b6000610fcb6112fd565b61103d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6001600a60006101000a81548160ff0219169083151502179055507fa335a1c1060ac25caf36b1623df502a6074f517189c942acb1a81176401ea9a13342604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a16001905090565b6000600454905090565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561113e57600080fd5b505afa158015611152573d6000803e3d6000fd5b505050506040513d602081101561116857600080fd5b8101908080519060200190929190505050905090565b600a60009054906101000a900460ff1681565b6000600354905090565b6111a36112fd565b611215576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b60055481565b6000600654905090565b60095481565b6000600554905090565b61137c6112fd565b6113ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6113f7816115ce565b50565b6000600a60009054906101000a900460ff16905090565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008083141561144a57600090506114b7565b600082840290508284828161145b57fe5b04146114b2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806118246021913960400191505060405180910390fd5b809150505b92915050565b60008082840190508381101561153b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b6000828211156115bd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525060200191505060405180910390fd5b600082840390508091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611654576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806117826026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505056fe437573746f6d43726f776473616c6520686173207375636365656420696e2074686520707572737565206f662074686520636f6e747269627574696f6e476f616c437573746f6d43726f776473616c656420627579546f6b656e2829206861732065786365656420746865206361704f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573737472616e73666572282920437573746f6d546f6b656e7320686173204661696c6564437573746f6d43726f776473616c652072656c65617365732074686520437573746f6d546f6b656e7320326d696e206166746572636f6e747269627574696f6e20706172616d65746572206d7573742062652061626f76652030536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a165627a7a7230582078137bd2d89716c9783ff969d8f29eee0542db16260d6d5c29520ef53c8ef3b60029476f616c2076616c7565206d7573742062652061626f7665206361702056616c756553746172696e6754696d652074696d6520616674657220436c6f73696e6754696d65",
        "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106101cf5760003560e01c806354238645116101045780638f32d59b116100a2578063b97a7d2411610071578063b97a7d241461057c578063f2fde38b1461059a578063fa391c64146105de578063fc0c546a14610600576101cf565b80638f32d59b14610500578063ad477c4714610522578063b8623d5314610540578063b91d40011461055e576101cf565b806363a44262116100de57806363a442621461046c578063679aefce1461048e578063715018a6146104ac5780638da5cb5b146104b6576101cf565b8063542386451461040e578063554d578d1461043057806357df844b1461044e576101cf565b806339518b5e116101715780634b6753bc1161014b5780634b6753bc1461036657806350879c1c14610384578063529fc11e146103ce57806353462d6b146103f0576101cf565b806339518b5e146102d257806342e94c90146102f057806343a42c2f14610348576101cf565b80632c4e722e116101ad5780632c4e722e146102325780632d296bf1146102505780632f9cb9aa14610296578063355274ea146102b4576101cf565b80630114a690146101d45780630dc0c971146101f6578063111961f814610214575b600080fd5b6101dc61064a565b604051808215151515815260200191505060405180910390f35b6101fe610a76565b6040518082815260200191505060405180910390f35b61021c610a80565b6040518082815260200191505060405180910390f35b61023a610a86565b6040518082815260200191505060405180910390f35b61027c6004803603602081101561026657600080fd5b8101908080359060200190929190505050610a8c565b604051808215151515815260200191505060405180910390f35b61029e610ea0565b6040518082815260200191505060405180910390f35b6102bc610eaa565b6040518082815260200191505060405180910390f35b6102da610eb0565b6040518082815260200191505060405180910390f35b6103326004803603602081101561030657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610eb6565b6040518082815260200191505060405180910390f35b610350610ece565b6040518082815260200191505060405180910390f35b61036e610f78565b6040518082815260200191505060405180910390f35b61038c610f7e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103d6610fa4565b604051808215151515815260200191505060405180910390f35b6103f8610fb7565b6040518082815260200191505060405180910390f35b610416610fc1565b604051808215151515815260200191505060405180910390f35b6104386110ca565b6040518082815260200191505060405180910390f35b6104566110d4565b6040518082815260200191505060405180910390f35b61047461117e565b604051808215151515815260200191505060405180910390f35b610496611191565b6040518082815260200191505060405180910390f35b6104b461119b565b005b6104be6112d4565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6105086112fd565b604051808215151515815260200191505060405180910390f35b61052a611354565b6040518082815260200191505060405180910390f35b61054861135a565b6040518082815260200191505060405180910390f35b610566611364565b6040518082815260200191505060405180910390f35b61058461136a565b6040518082815260200191505060405180910390f35b6105dc600480360360208110156105b057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611374565b005b6105e66113fa565b604051808215151515815260200191505060405180910390f35b610608611411565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6000600a60009054906101000a900460ff166106ce576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f437573746f6d43726f776473616c65204e6f7420436f6d706c6574656400000081525060200191505060405180910390fd5b600954421015610729576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260348152602001806117ca6034913960400191505060405180910390fd5b600061077f600354600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461143790919063ffffffff16565b90507f01010b5d6c025d0c4cb16706a796168f588300bca2bac066816f536f2c4ceb0d3382600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838152602001828152602001935050505060405180910390a16000600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414610a6d57600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561092357600080fd5b505af1158015610937573d6000803e3d6000fd5b505050506040513d602081101561094d57600080fd5b81019080805190602001909291905050506109b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806117a86022913960400191505060405180910390fd5b7fe2cacd9696795caa2d3fe049b4533489e66bc98a6a944ae76bfbb2d1de4d07b73382604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a16000600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506001915050610a73565b60009150505b90565b6000600754905090565b60065481565b60035481565b60006004548210610ae8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180611754602e913960400191505060405180910390fd5b60055460065410610b44576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260418152602001806117136041913960600191505060405180910390fd5b6000821015610b9e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806117fe6026913960400191505060405180910390fd5b6000809050610bb683826114bd90919063ffffffff16565b50610bcc600654826114bd90919063ffffffff16565b50600554811115610bf157610bee60065460055461154590919063ffffffff16565b92505b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330866040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b158015610cce57600080fd5b505af1158015610ce2573d6000803e3d6000fd5b505050506040513d6020811015610cf857600080fd5b8101908080519060200190929190505050610d7b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f7472616e7366657246726f6d28292057657468657220686173204661696c656481525060200191505060405180910390fd5b610d90836006546114bd90919063ffffffff16565b600681905550610de883600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546114bd90919063ffffffff16565b600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507f4d154d4aae216bed6d0926db77c00df2b57c6b5ba4eee05775de20facede3a7b3384604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a16001915050919050565b6000600854905090565b60045481565b60075481565b600b6020528060005260406000206000915090505481565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b158015610f3857600080fd5b505afa158015610f4c573d6000803e3d6000fd5b505050506040513d6020811015610f6257600080fd5b8101908080519060200190929190505050905090565b60085481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600a60019054906101000a900460ff1681565b6000600954905090565b6000610fcb6112fd565b61103d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6001600a60006101000a81548160ff0219169083151502179055507fa335a1c1060ac25caf36b1623df502a6074f517189c942acb1a81176401ea9a13342604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a16001905090565b6000600454905090565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561113e57600080fd5b505afa158015611152573d6000803e3d6000fd5b505050506040513d602081101561116857600080fd5b8101908080519060200190929190505050905090565b600a60009054906101000a900460ff1681565b6000600354905090565b6111a36112fd565b611215576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b60055481565b6000600654905090565b60095481565b6000600554905090565b61137c6112fd565b6113ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6113f7816115ce565b50565b6000600a60009054906101000a900460ff16905090565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008083141561144a57600090506114b7565b600082840290508284828161145b57fe5b04146114b2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806118246021913960400191505060405180910390fd5b809150505b92915050565b60008082840190508381101561153b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b6000828211156115bd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525060200191505060405180910390fd5b600082840390508091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611654576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806117826026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505056fe437573746f6d43726f776473616c6520686173207375636365656420696e2074686520707572737565206f662074686520636f6e747269627574696f6e476f616c437573746f6d43726f776473616c656420627579546f6b656e2829206861732065786365656420746865206361704f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573737472616e73666572282920437573746f6d546f6b656e7320686173204661696c6564437573746f6d43726f776473616c652072656c65617365732074686520437573746f6d546f6b656e7320326d696e206166746572636f6e747269627574696f6e20706172616d65746572206d7573742062652061626f76652030536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a165627a7a7230582078137bd2d89716c9783ff969d8f29eee0542db16260d6d5c29520ef53c8ef3b60029",
        "sourceMap": "1395:6810:0:-;;;1978:5;1951:32;;;;;;;;;;;;;;;;;;;;2018:5;1989:34;;;;;;;;;;;;;;;;;;;;3227:1247;8:9:-1;5:2;;;30:1;27;20:12;5:2;3227:1247:0;;;;;;;;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;3227:1247:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;666:10:5;657:6;;:19;;;;;;;;;;;;;;;;;;724:6;;;;;;;;;;;691:40;;720:1;691:40;;;;;;;;;;;;3432:5:0;3425:4;:12;;;;3453:4;3447:3;:10;;;;3486:17;3467:16;:36;;;;3527:9;3513:5;;:24;;;;;;;;;;;;;;;;;;3567:10;3547:5;;:31;;;;;;;;;;;;;;;;;;3603:12;3588;:27;;;;3639:12;3625:11;:26;;;;3675:12;3661:11;:26;;;;3913:3;3898:12;;:18;3890:53;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4037:12;;4023:11;;:26;4015:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4158:1;4152:3;;:7;4144:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4288:1;4269:16;;:20;4261:59;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4425:3;;4406:16;;:22;4398:69;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3227:1247;;;;;;;;1395:6810;;;;;;",
        "deployedSourceMap": "1395:6810:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1395:6810:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5956:781;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;7816:93;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1709:34;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1623:19;;;:::i;:::-;;;;;;;;;;;;;;;;;;;4523:1381;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4523:1381:0;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;7965:91;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1648:18;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1807:27;;;:::i;:::-;;;;;;;;;;;;;;;;;;;2090:49;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2090:49:0;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;6979:103;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1840:26;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1523:18;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1989:34;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;8112:91;;;:::i;:::-;;;;;;;;;;;;;;;;;;;2931:155;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;7398:75;;;:::i;:::-;;;;;;;;;;;;;;;;;;;6823:103;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1951:32;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;7273:77;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1599:137:5;;;:::i;:::-;;814:77;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1165:90;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1672:31:0;;;:::i;:::-;;;;;;;;;;;;;;;;;;;7117:107;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1872:26;;;:::i;:::-;;;;;;;;;;;;;;;;;;;7522:89;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1885:107:5;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1885:107:5;;;;;;;;;;;;;;;;;;;:::i;:::-;;7672:86:0;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1547:24;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;5956:781;6018:4;2684:12;;;;;;;;;;;2676:54;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2755:11;;2748:3;:18;;2740:83;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6073:21;6097:35;6127:4;;6097:13;:25;6111:10;6097:25;;;;;;;;;;;;;;;;:29;;:35;;;;:::i;:::-;6073:59;;6188:76;6211:10;6223:13;6238;:25;6252:10;6238:25;;;;;;;;;;;;;;;;6188:76;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6306:1;6277:13;:25;6291:10;6277:25;;;;;;;;;;;;;;;;:30;6274:435;;6386:5;;;;;;;;;;;:14;;;6401:10;6413:13;6386:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;6386:41:0;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;6386:41:0;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;6386:41:0;;;;;;;;;;;;;;;;6378:88;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6531:44;6549:10;6561:13;6531:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;6672:1;6644:13;:25;6658:10;6644:25;;;;;;;;;;;;;;;:29;;;;6694:4;6687:11;;;;;6274:435;6725:5;6718:12;;;2833:1;5956:781;:::o;7816:93::-;7864:7;7890:12;;7883:19;;7816:93;:::o;1709:34::-;;;;:::o;1623:19::-;;;;:::o;4523:1381::-;4580:4;4682:3;;4666:13;:19;4658:78;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4858:16;;4836:19;;:38;4828:116;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5060:1;5043:13;:18;;5035:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5114:11;5128:1;5114:15;;5139:22;5147:13;5139:3;:7;;:22;;;;:::i;:::-;;5171:28;5179:19;;5171:3;:7;;:28;;;;:::i;:::-;;5356:16;;5350:3;:22;5346:110;;;5404:41;5425:19;;5404:16;;:20;;:41;;;;:::i;:::-;5388:57;;5346:110;5528:5;;;;;;;;;;;:18;;;5547:10;5567:4;5574:13;5528:60;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;5528:60:0;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;5528:60:0;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;5528:60:0;;;;;;;;;;;;;;;;5520:105;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5657:38;5681:13;5657:19;;:23;;:38;;;;:::i;:::-;5635:19;:60;;;;5733:44;5763:13;5733;:25;5747:10;5733:25;;;;;;;;;;;;;;;;:29;;:44;;;;:::i;:::-;5705:13;:25;5719:10;5705:25;;;;;;;;;;;;;;;:72;;;;5837:39;5850:10;5862:13;5837:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;5893:4;5886:11;;;4523:1381;;;:::o;7965:91::-;8012:7;8038:11;;8031:18;;7965:91;:::o;1648:18::-;;;;:::o;1807:27::-;;;;:::o;2090:49::-;;;;;;;;;;;;;;;;;:::o;6979:103::-;7030:7;7056:5;;;;;;;;;;;:17;;;:19;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;7056:19:0;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;7056:19:0;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7056:19:0;;;;;;;;;;;;;;;;7049:26;;6979:103;:::o;1840:26::-;;;;:::o;1523:18::-;;;;;;;;;;;;;:::o;1989:34::-;;;;;;;;;;;;;:::o;8112:91::-;8159:7;8185:11;;8178:18;;8112:91;:::o;2931:155::-;2977:4;1018:9:5;:7;:9::i;:::-;1010:54;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3008:4:0;2993:12;;:19;;;;;;;;;;;;;;;;;;3027:31;3042:10;3054:3;3027:31;;;;;;;;;;;;;;;;;;;;;;;;;;;;3075:4;3068:11;;2931:155;:::o;7398:75::-;7437:7;7463:3;;7456:10;;7398:75;:::o;6823:103::-;6874:7;6900:5;;;;;;;;;;;:17;;;:19;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;6900:19:0;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;6900:19:0;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;6900:19:0;;;;;;;;;;;;;;;;6893:26;;6823:103;:::o;1951:32::-;;;;;;;;;;;;;:::o;7273:77::-;7313:7;7339:4;;7332:11;;7273:77;:::o;1599:137:5:-;1018:9;:7;:9::i;:::-;1010:54;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1697:1;1660:40;;1681:6;;;;;;;;;;;1660:40;;;;;;;;;;;;1727:1;1710:6;;:19;;;;;;;;;;;;;;;;;;1599:137::o;814:77::-;852:7;878:6;;;;;;;;;;;871:13;;814:77;:::o;1165:90::-;1205:4;1242:6;;;;;;;;;;;1228:20;;:10;:20;;;1221:27;;1165:90;:::o;1672:31:0:-;;;;:::o;7117:107::-;7172:7;7198:19;;7191:26;;7117:107;:::o;1872:26::-;;;;:::o;7522:89::-;7562:7;7588:16;;7581:23;;7522:89;:::o;1885:107:5:-;1018:9;:7;:9::i;:::-;1010:54;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1957:28;1976:8;1957:18;:28::i;:::-;1885:107;:::o;7672:86:0:-;7716:4;7739:12;;;;;;;;;;;7732:19;;7672:86;:::o;1547:24::-;;;;;;;;;;;;;:::o;1693:458:4:-;1751:7;1996:1;1991;:6;1987:45;;;2020:1;2013:8;;;;1987:45;2042:9;2058:1;2054;:5;2042:17;;2086:1;2081;2077;:5;;;;;;:10;2069:56;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2143:1;2136:8;;;1693:458;;;;;:::o;834:176::-;892:7;911:9;927:1;923;:5;911:17;;951:1;946;:6;;938:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1002:1;995:8;;;834:176;;;;:::o;1274:179::-;1332:7;1364:1;1359;:6;;1351:49;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1410:9;1426:1;1422;:5;1410:17;;1445:1;1438:8;;;1274:179;;;;:::o;2093:225:5:-;2186:1;2166:22;;:8;:22;;;;2158:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2275:8;2246:38;;2267:6;;;;;;;;;;;2246:38;;;;;;;;;;;;2303:8;2294:6;;:17;;;;;;;;;;;;;;;;;;2093:225;:::o",
        "source": "// Current Solidity Version\npragma solidity >=0.5.0 <0.6.0;\n\n/*\n * @title Imports\n * Import CustomToken Module from CustomToken.sol\n * Import Ownable Module from cannonical-weth Library\n * Import SafeMath Module from openzeppelin Library\n */\nimport \"./tokens/CustomToken.sol\";\nimport \"canonical-weth/contracts/WETH9.sol\";\nimport \"openzeppelin-solidity/contracts/ownership/Ownable.sol\";\nimport \"openzeppelin-solidity/contracts/math/SafeMath.sol\";\n\n/**\n * @title CustomCrowdsale Params\n * rate - Value Defining the Current Rate for the CustomCrowdsale\n * cap - Value Defining the Current Cap for the CustomCrowdsale\n * WETH9 - Value Defining the Current WETH9 Token for the CustomCrowdsale\n * CustomToken - Value Defining the Current CustomToken for the CustomCrowdsale\n * contributionGoal - Value Defining the Current Goal for the CustomCrowdsale\n * currentContribution - Value Defining currentContribution status for the CustomCrowdsale\n * startingTime - Value Defining the startingTime for the CustomCrowdsale\n * closingTime - Value Defining the closingTime for CustomCrowdsale\n * releaseTime - Value Defining the releaseTime for CustomCrowdsale\n * ICOCompleted - Value Defining the Open/Close status for CustomCrowdsale\n * ICOGoalReached - Value Defining the status for the contributionGoal in CustomCrowdsale\n * contributions - Value Defining the every buy until claim in CustomCrowdsale\n */\ncontract CustomCrowdsale is Ownable {\n    using SafeMath for uint256;\n\n    // Tokens To Exchange during the CustomCrowdsale\n    WETH9 public weth9;\n    CustomToken public token;\n\n    // Caracteristics of the CustomCrowdsale\n    uint256 public rate;\n    uint256 public cap;\n    uint256 public contributionGoal;\n    uint256 public currentContribution;\n\n    // Time Constraint Variables for the CustomCrowdsale\n    uint256 public startingTime;\n    uint256 public closingTime;\n    uint256 public releaseTime;\n\n    // Current Status for the CustomCrowdsale\n    bool public ICOCompleted = false;\n    bool public ICOGoalReached = false;\n\n    // Mapping of the Contributions for the CustomCrowdsale\n    mapping (address => uint256) public contributions;\n\n    /**\n      * Events to track during CustomCrowsale operations\n      */\n    event Contribution(address _from, uint256 _amount);\n    event ClaimContribution(address _from, uint256 _amount);\n    event CloseCrowdsale(address _from, uint256 time);\n    event claimContributionPreTx(address _sender, uint256 _claimedTokens, uint256 _balance);\n\n    //event claimContributionPostTx();\n    //event openCrowdsale();\n\n    // Setting Up Modifiers evaluating the status Open/Close for the CustomCrowdsale\n    modifier whenICOCompleted {\n        require(ICOCompleted, 'CustomCrowdsale Not Completed');\n        require(now >= releaseTime, 'CustomCrowdsale releases the CustomTokens 2min after');\n        _;\n    }\n\n    // Close function, only the owner of the CustomCrowdsale can call this function\n    function closeICO() public onlyOwner returns (bool) {\n        ICOCompleted = true;\n        emit CloseCrowdsale(msg.sender, now);\n        return true;\n    }\n\n    // Contract Constructor for CustomCrowdsale\n    // NOTE: Only a contracts with fallback function needs address playable. deposit()\n    constructor(uint256 _rate, uint256 _cap, uint256 _contributionGoal, address payable _wethAddr, address _tokenAddr, uint256 _staringTime, uint256 _closingTime, uint256 _releaseTime) public {\n        rate = _rate;\n        cap = _cap;\n        contributionGoal = _contributionGoal;\n        weth9 = WETH9(_wethAddr);\n        token = CustomToken(_tokenAddr);\n        startingTime = _staringTime;\n        closingTime = _closingTime;\n        releaseTime = _releaseTime;\n\n        /**\n          * Requirements Time constraints, cap, contributionGoal for the Constructor of the CustomCrowdsale\n          */\n        // Requirement startingTime must be after than Now\n        require(startingTime > now, 'StaringTime before Now');\n        // Requirement closingTime must be after startingTime\n        require(closingTime > startingTime, 'StaringTime time after ClosingTime');\n        // Requirement for the Cap constraint\n        require(cap > 0, 'Cap Value must be above 0');\n        // Requirement contributionGoal must be higher than 0\n        require(contributionGoal > 0, 'Goal Value must be above 0');\n        // Requirement contributionGoal must be higher than the Cap\n        require(contributionGoal > cap, 'Goal value must be above cap Value');\n    }\n\n    // Buy Funtion for the CustomCrowdsale\n    function buyToken(uint256 _contribution) public returns (bool) {\n        // Requirement contribution must be less than the Cap\n        require(_contribution < cap, 'CustomCrowdsaled buyToken() has exceed the cap');\n        // Requirement currentContribution must be less than the contributionGoal\n        require(currentContribution < contributionGoal, 'CustomCrowdsale has succeed in the pursue of the contributionGoal');\n        // Requirement contribution must be higher than 0 in the CustomCrowdsale\n        require(_contribution >= 0,'contribution parameter must be above 0');\n\n        uint256 aux = 0;\n        aux.add(_contribution);\n        aux.add(currentContribution);\n        // If the current buy does not exceed the cap but overreaches the actual contributionGoal, the tokens left would be sold instead\n        if (aux > contributionGoal) {\n            _contribution = contributionGoal.sub(currentContribution);\n        }\n        // Requirement transferForm must be successful\n        require(weth9.transferFrom(msg.sender, address(this), _contribution), \"transferFrom() Wether has Failed\");\n        currentContribution = currentContribution.add(_contribution);\n        contributions[msg.sender] = contributions[msg.sender].add(_contribution);\n        // Emit Current Status Post BuyToken\n        emit Contribution(msg.sender, _contribution);\n        return true;\n    }\n\n    // Claim Function for the CustomCrowdsale\n    function claimContribution() public whenICOCompleted returns (bool) {\n        // Calculate the Exchange Rate\n        uint256 claimedTokens = contributions[msg.sender].mul(rate);\n        // Emit Current Status Pre Claim\n        emit claimContributionPreTx(msg.sender, claimedTokens, contributions[msg.sender]);\n        if(contributions[msg.sender] != 0) {\n            // Requirement transfer must be successful\n            require(token.transfer(msg.sender, claimedTokens), \"transfer() CustomTokens has Failed\");\n            // Emit Current Status Post Claim\n            emit ClaimContribution(msg.sender, claimedTokens);\n            // Set the contribution of the sender to 0\n            contributions[msg.sender] = 0;\n            return true;\n        }\n        return false;\n    }\n\n    /**\n     * GETTERS\n     */\n\n    // Total Tokens held in the CustomCrowdsale\n    function getTokenTotalSupply() public view returns(uint256) {\n        return token.totalSupply();\n    }\n\n    // Total WETH9 held in the CustomCrowdsale\n    function getWethTotalSupply() public view returns (uint256) {\n        return weth9.totalSupply();\n    }\n\n    // Current Contributions\n    function getCurrentContribution() public view returns (uint256) {\n        return currentContribution;\n    }\n\n    // Current Rate in the CustomCrowdsale\n    function getRate() public view returns (uint256) {\n        return rate;\n    }\n\n    // Current Cap in the CustomCrowdsale\n    function getCap() public view returns (uint256) {\n        return cap;\n    }\n\n    // Current Goal in the CustomCrowdsale\n    function getGoal() public view returns (uint256) {\n        return contributionGoal;\n    }\n\n    // Current Completed Status in the CustomCrowdsale\n    function isCompleted() public view returns (bool) {\n        return ICOCompleted;\n    }\n\n    // Current Starting Time in the CustomCrowdsale\n    function getStartingTime() public view returns (uint256) {\n        return startingTime;\n    }\n\n    // Current ClosingTime in the CustomCrowdsale\n    function getClosingTime() public view returns (uint256) {\n        return closingTime;\n    }\n\n    // Current ReleaseTime in the CustomCrowdsale\n    function getReleaseTime() public view returns (uint256) {\n        return releaseTime;\n    }\n}\n",
        "sourcePath": "/home/asigan/Github_Projects/EthereumPARTokenCrowdSale/contracts/CustomCrowdsale.sol",
        "ast": {
            "absolutePath": "/home/asigan/Github_Projects/EthereumPARTokenCrowdSale/contracts/CustomCrowdsale.sol",
            "exportedSymbols": {
                "CustomCrowdsale": [
                    437
                ]
            },
            "id": 438,
            "nodeType": "SourceUnit",
            "nodes": [
                {
                    "id": 1,
                    "literals": [
                        "solidity",
                        ">=",
                        "0.5",
                        ".0",
                        "<",
                        "0.6",
                        ".0"
                    ],
                    "nodeType": "PragmaDirective",
                    "src": "28:31:0"
                },
                {
                    "absolutePath": "/home/asigan/Github_Projects/EthereumPARTokenCrowdSale/contracts/tokens/CustomToken.sol",
                    "file": "./tokens/CustomToken.sol",
                    "id": 2,
                    "nodeType": "ImportDirective",
                    "scope": 438,
                    "sourceUnit": 710,
                    "src": "242:34:0",
                    "symbolAliases": [],
                    "unitAlias": ""
                },
                {
                    "absolutePath": "canonical-weth/contracts/WETH9.sol",
                    "file": "canonical-weth/contracts/WETH9.sol",
                    "id": 3,
                    "nodeType": "ImportDirective",
                    "scope": 438,
                    "sourceUnit": 956,
                    "src": "277:44:0",
                    "symbolAliases": [],
                    "unitAlias": ""
                },
                {
                    "absolutePath": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
                    "file": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
                    "id": 4,
                    "nodeType": "ImportDirective",
                    "scope": 438,
                    "sourceUnit": 1200,
                    "src": "322:63:0",
                    "symbolAliases": [],
                    "unitAlias": ""
                },
                {
                    "absolutePath": "openzeppelin-solidity/contracts/math/SafeMath.sol",
                    "file": "openzeppelin-solidity/contracts/math/SafeMath.sol",
                    "id": 5,
                    "nodeType": "ImportDirective",
                    "scope": 438,
                    "sourceUnit": 1089,
                    "src": "386:59:0",
                    "symbolAliases": [],
                    "unitAlias": ""
                },
                {
                    "baseContracts": [
                        {
                            "arguments": null,
                            "baseName": {
                                "contractScope": null,
                                "id": 6,
                                "name": "Ownable",
                                "nodeType": "UserDefinedTypeName",
                                "referencedDeclaration": 1199,
                                "src": "1423:7:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_Ownable_$1199",
                                    "typeString": "contract Ownable"
                                }
                            },
                            "id": 7,
                            "nodeType": "InheritanceSpecifier",
                            "src": "1423:7:0"
                        }
                    ],
                    "contractDependencies": [
                        1199
                    ],
                    "contractKind": "contract",
                    "documentation": "@title CustomCrowdsale Params\nrate - Value Defining the Current Rate for the CustomCrowdsale\ncap - Value Defining the Current Cap for the CustomCrowdsale\nWETH9 - Value Defining the Current WETH9 Token for the CustomCrowdsale\nCustomToken - Value Defining the Current CustomToken for the CustomCrowdsale\ncontributionGoal - Value Defining the Current Goal for the CustomCrowdsale\ncurrentContribution - Value Defining currentContribution status for the CustomCrowdsale\nstartingTime - Value Defining the startingTime for the CustomCrowdsale\nclosingTime - Value Defining the closingTime for CustomCrowdsale\nreleaseTime - Value Defining the releaseTime for CustomCrowdsale\nICOCompleted - Value Defining the Open/Close status for CustomCrowdsale\nICOGoalReached - Value Defining the status for the contributionGoal in CustomCrowdsale\ncontributions - Value Defining the every buy until claim in CustomCrowdsale",
                    "fullyImplemented": true,
                    "id": 437,
                    "linearizedBaseContracts": [
                        437,
                        1199
                    ],
                    "name": "CustomCrowdsale",
                    "nodeType": "ContractDefinition",
                    "nodes": [
                        {
                            "id": 10,
                            "libraryName": {
                                "contractScope": null,
                                "id": 8,
                                "name": "SafeMath",
                                "nodeType": "UserDefinedTypeName",
                                "referencedDeclaration": 1088,
                                "src": "1443:8:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_SafeMath_$1088",
                                    "typeString": "library SafeMath"
                                }
                            },
                            "nodeType": "UsingForDirective",
                            "src": "1437:27:0",
                            "typeName": {
                                "id": 9,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "1456:7:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            }
                        },
                        {
                            "constant": false,
                            "id": 12,
                            "name": "weth9",
                            "nodeType": "VariableDeclaration",
                            "scope": 437,
                            "src": "1523:18:0",
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_WETH9_$955",
                                "typeString": "contract WETH9"
                            },
                            "typeName": {
                                "contractScope": null,
                                "id": 11,
                                "name": "WETH9",
                                "nodeType": "UserDefinedTypeName",
                                "referencedDeclaration": 955,
                                "src": "1523:5:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_WETH9_$955",
                                    "typeString": "contract WETH9"
                                }
                            },
                            "value": null,
                            "visibility": "public"
                        },
                        {
                            "constant": false,
                            "id": 14,
                            "name": "token",
                            "nodeType": "VariableDeclaration",
                            "scope": 437,
                            "src": "1547:24:0",
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_CustomToken_$709",
                                "typeString": "contract CustomToken"
                            },
                            "typeName": {
                                "contractScope": null,
                                "id": 13,
                                "name": "CustomToken",
                                "nodeType": "UserDefinedTypeName",
                                "referencedDeclaration": 709,
                                "src": "1547:11:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_CustomToken_$709",
                                    "typeString": "contract CustomToken"
                                }
                            },
                            "value": null,
                            "visibility": "public"
                        },
                        {
                            "constant": false,
                            "id": 16,
                            "name": "rate",
                            "nodeType": "VariableDeclaration",
                            "scope": 437,
                            "src": "1623:19:0",
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            },
                            "typeName": {
                                "id": 15,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "1623:7:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "value": null,
                            "visibility": "public"
                        },
                        {
                            "constant": false,
                            "id": 18,
                            "name": "cap",
                            "nodeType": "VariableDeclaration",
                            "scope": 437,
                            "src": "1648:18:0",
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            },
                            "typeName": {
                                "id": 17,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "1648:7:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "value": null,
                            "visibility": "public"
                        },
                        {
                            "constant": false,
                            "id": 20,
                            "name": "contributionGoal",
                            "nodeType": "VariableDeclaration",
                            "scope": 437,
                            "src": "1672:31:0",
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            },
                            "typeName": {
                                "id": 19,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "1672:7:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "value": null,
                            "visibility": "public"
                        },
                        {
                            "constant": false,
                            "id": 22,
                            "name": "currentContribution",
                            "nodeType": "VariableDeclaration",
                            "scope": 437,
                            "src": "1709:34:0",
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            },
                            "typeName": {
                                "id": 21,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "1709:7:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "value": null,
                            "visibility": "public"
                        },
                        {
                            "constant": false,
                            "id": 24,
                            "name": "startingTime",
                            "nodeType": "VariableDeclaration",
                            "scope": 437,
                            "src": "1807:27:0",
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            },
                            "typeName": {
                                "id": 23,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "1807:7:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "value": null,
                            "visibility": "public"
                        },
                        {
                            "constant": false,
                            "id": 26,
                            "name": "closingTime",
                            "nodeType": "VariableDeclaration",
                            "scope": 437,
                            "src": "1840:26:0",
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            },
                            "typeName": {
                                "id": 25,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "1840:7:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "value": null,
                            "visibility": "public"
                        },
                        {
                            "constant": false,
                            "id": 28,
                            "name": "releaseTime",
                            "nodeType": "VariableDeclaration",
                            "scope": 437,
                            "src": "1872:26:0",
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            },
                            "typeName": {
                                "id": 27,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "1872:7:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "value": null,
                            "visibility": "public"
                        },
                        {
                            "constant": false,
                            "id": 31,
                            "name": "ICOCompleted",
                            "nodeType": "VariableDeclaration",
                            "scope": 437,
                            "src": "1951:32:0",
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                            },
                            "typeName": {
                                "id": 29,
                                "name": "bool",
                                "nodeType": "ElementaryTypeName",
                                "src": "1951:4:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                }
                            },
                            "value": {
                                "argumentTypes": null,
                                "hexValue": "66616c7365",
                                "id": 30,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "bool",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1978:5:0",
                                "subdenomination": null,
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                },
                                "value": "false"
                            },
                            "visibility": "public"
                        },
                        {
                            "constant": false,
                            "id": 34,
                            "name": "ICOGoalReached",
                            "nodeType": "VariableDeclaration",
                            "scope": 437,
                            "src": "1989:34:0",
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                            },
                            "typeName": {
                                "id": 32,
                                "name": "bool",
                                "nodeType": "ElementaryTypeName",
                                "src": "1989:4:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                }
                            },
                            "value": {
                                "argumentTypes": null,
                                "hexValue": "66616c7365",
                                "id": 33,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "bool",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2018:5:0",
                                "subdenomination": null,
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                },
                                "value": "false"
                            },
                            "visibility": "public"
                        },
                        {
                            "constant": false,
                            "id": 38,
                            "name": "contributions",
                            "nodeType": "VariableDeclaration",
                            "scope": 437,
                            "src": "2090:49:0",
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                            },
                            "typeName": {
                                "id": 37,
                                "keyType": {
                                    "id": 35,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "2099:7:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    }
                                },
                                "nodeType": "Mapping",
                                "src": "2090:28:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                    "typeString": "mapping(address => uint256)"
                                },
                                "valueType": {
                                    "id": 36,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "2110:7:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    }
                                }
                            },
                            "value": null,
                            "visibility": "public"
                        },
                        {
                            "anonymous": false,
                            "documentation": "Events to track during CustomCrowsale operations",
                            "id": 44,
                            "name": "Contribution",
                            "nodeType": "EventDefinition",
                            "parameters": {
                                "id": 43,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 40,
                                        "indexed": false,
                                        "name": "_from",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 44,
                                        "src": "2239:13:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        },
                                        "typeName": {
                                            "id": 39,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2239:7:0",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    },
                                    {
                                        "constant": false,
                                        "id": 42,
                                        "indexed": false,
                                        "name": "_amount",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 44,
                                        "src": "2254:15:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 41,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2254:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "2238:32:0"
                            },
                            "src": "2220:51:0"
                        },
                        {
                            "anonymous": false,
                            "documentation": null,
                            "id": 50,
                            "name": "ClaimContribution",
                            "nodeType": "EventDefinition",
                            "parameters": {
                                "id": 49,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 46,
                                        "indexed": false,
                                        "name": "_from",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 50,
                                        "src": "2300:13:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        },
                                        "typeName": {
                                            "id": 45,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2300:7:0",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    },
                                    {
                                        "constant": false,
                                        "id": 48,
                                        "indexed": false,
                                        "name": "_amount",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 50,
                                        "src": "2315:15:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 47,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2315:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "2299:32:0"
                            },
                            "src": "2276:56:0"
                        },
                        {
                            "anonymous": false,
                            "documentation": null,
                            "id": 56,
                            "name": "CloseCrowdsale",
                            "nodeType": "EventDefinition",
                            "parameters": {
                                "id": 55,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 52,
                                        "indexed": false,
                                        "name": "_from",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 56,
                                        "src": "2358:13:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        },
                                        "typeName": {
                                            "id": 51,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2358:7:0",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    },
                                    {
                                        "constant": false,
                                        "id": 54,
                                        "indexed": false,
                                        "name": "time",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 56,
                                        "src": "2373:12:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 53,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2373:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "2357:29:0"
                            },
                            "src": "2337:50:0"
                        },
                        {
                            "anonymous": false,
                            "documentation": null,
                            "id": 64,
                            "name": "claimContributionPreTx",
                            "nodeType": "EventDefinition",
                            "parameters": {
                                "id": 63,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 58,
                                        "indexed": false,
                                        "name": "_sender",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 64,
                                        "src": "2421:15:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        },
                                        "typeName": {
                                            "id": 57,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2421:7:0",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    },
                                    {
                                        "constant": false,
                                        "id": 60,
                                        "indexed": false,
                                        "name": "_claimedTokens",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 64,
                                        "src": "2438:22:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 59,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2438:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    },
                                    {
                                        "constant": false,
                                        "id": 62,
                                        "indexed": false,
                                        "name": "_balance",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 64,
                                        "src": "2462:16:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 61,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2462:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "2420:59:0"
                            },
                            "src": "2392:88:0"
                        },
                        {
                            "body": {
                                "id": 79,
                                "nodeType": "Block",
                                "src": "2666:175:0",
                                "statements": [
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "id": 67,
                                                    "name": "ICOCompleted",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31,
                                                    "src": "2684:12:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                {
                                                    "argumentTypes": null,
                                                    "hexValue": "437573746f6d43726f776473616c65204e6f7420436f6d706c65746564",
                                                    "id": 68,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "string",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "2698:31:0",
                                                    "subdenomination": null,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_stringliteral_bc63a2cb799f16a5a71f5d83415ae23f1fbe584ced4a3da5e67d6815e1c33f8e",
                                                        "typeString": "literal_string \"CustomCrowdsale Not Completed\""
                                                    },
                                                    "value": "CustomCrowdsale Not Completed"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_stringliteral_bc63a2cb799f16a5a71f5d83415ae23f1fbe584ced4a3da5e67d6815e1c33f8e",
                                                        "typeString": "literal_string \"CustomCrowdsale Not Completed\""
                                                    }
                                                ],
                                                "id": 66,
                                                "name": "require",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [
                                                    1344,
                                                    1345
                                                ],
                                                "referencedDeclaration": 1345,
                                                "src": "2676:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                    "typeString": "function (bool,string memory) pure"
                                                }
                                            },
                                            "id": 69,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "2676:54:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$__$",
                                                "typeString": "tuple()"
                                            }
                                        },
                                        "id": 70,
                                        "nodeType": "ExpressionStatement",
                                        "src": "2676:54:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 74,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "argumentTypes": null,
                                                        "id": 72,
                                                        "name": "now",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1343,
                                                        "src": "2748:3:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": ">=",
                                                    "rightExpression": {
                                                        "argumentTypes": null,
                                                        "id": 73,
                                                        "name": "releaseTime",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 28,
                                                        "src": "2755:11:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "2748:18:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                {
                                                    "argumentTypes": null,
                                                    "hexValue": "437573746f6d43726f776473616c652072656c65617365732074686520437573746f6d546f6b656e7320326d696e206166746572",
                                                    "id": 75,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "string",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "2768:54:0",
                                                    "subdenomination": null,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_stringliteral_78396f686c201bda51e0794421d0bedb9d7bbe83bc52ddf421a499b6291261e8",
                                                        "typeString": "literal_string \"CustomCrowdsale releases the CustomTokens 2min after\""
                                                    },
                                                    "value": "CustomCrowdsale releases the CustomTokens 2min after"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_stringliteral_78396f686c201bda51e0794421d0bedb9d7bbe83bc52ddf421a499b6291261e8",
                                                        "typeString": "literal_string \"CustomCrowdsale releases the CustomTokens 2min after\""
                                                    }
                                                ],
                                                "id": 71,
                                                "name": "require",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [
                                                    1344,
                                                    1345
                                                ],
                                                "referencedDeclaration": 1345,
                                                "src": "2740:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                    "typeString": "function (bool,string memory) pure"
                                                }
                                            },
                                            "id": 76,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "2740:83:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$__$",
                                                "typeString": "tuple()"
                                            }
                                        },
                                        "id": 77,
                                        "nodeType": "ExpressionStatement",
                                        "src": "2740:83:0"
                                    },
                                    {
                                        "id": 78,
                                        "nodeType": "PlaceholderStatement",
                                        "src": "2833:1:0"
                                    }
                                ]
                            },
                            "documentation": null,
                            "id": 80,
                            "name": "whenICOCompleted",
                            "nodeType": "ModifierDefinition",
                            "parameters": {
                                "id": 65,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "2666:0:0"
                            },
                            "src": "2640:201:0",
                            "visibility": "internal"
                        },
                        {
                            "body": {
                                "id": 99,
                                "nodeType": "Block",
                                "src": "2983:103:0",
                                "statements": [
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 89,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftHandSide": {
                                                "argumentTypes": null,
                                                "id": 87,
                                                "name": "ICOCompleted",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31,
                                                "src": "2993:12:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "nodeType": "Assignment",
                                            "operator": "=",
                                            "rightHandSide": {
                                                "argumentTypes": null,
                                                "hexValue": "74727565",
                                                "id": 88,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "bool",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3008:4:0",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                "value": "true"
                                            },
                                            "src": "2993:19:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "id": 90,
                                        "nodeType": "ExpressionStatement",
                                        "src": "2993:19:0"
                                    },
                                    {
                                        "eventCall": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 92,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1341,
                                                        "src": "3042:3:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 93,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "sender",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": null,
                                                    "src": "3042:10:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address_payable",
                                                        "typeString": "address payable"
                                                    }
                                                },
                                                {
                                                    "argumentTypes": null,
                                                    "id": 94,
                                                    "name": "now",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 1343,
                                                    "src": "3054:3:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_address_payable",
                                                        "typeString": "address payable"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                ],
                                                "id": 91,
                                                "name": "CloseCrowdsale",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 56,
                                                "src": "3027:14:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                                    "typeString": "function (address,uint256)"
                                                }
                                            },
                                            "id": 95,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "3027:31:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$__$",
                                                "typeString": "tuple()"
                                            }
                                        },
                                        "id": 96,
                                        "nodeType": "EmitStatement",
                                        "src": "3022:36:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "hexValue": "74727565",
                                            "id": 97,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "bool",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "3075:4:0",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "value": "true"
                                        },
                                        "functionReturnParameters": 86,
                                        "id": 98,
                                        "nodeType": "Return",
                                        "src": "3068:11:0"
                                    }
                                ]
                            },
                            "documentation": null,
                            "id": 100,
                            "implemented": true,
                            "kind": "function",
                            "modifiers": [
                                {
                                    "arguments": null,
                                    "id": 83,
                                    "modifierName": {
                                        "argumentTypes": null,
                                        "id": 82,
                                        "name": "onlyOwner",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 1132,
                                        "src": "2958:9:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_modifier$__$",
                                            "typeString": "modifier ()"
                                        }
                                    },
                                    "nodeType": "ModifierInvocation",
                                    "src": "2958:9:0"
                                }
                            ],
                            "name": "closeICO",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 81,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "2948:2:0"
                            },
                            "returnParameters": {
                                "id": 86,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 85,
                                        "name": "",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 100,
                                        "src": "2977:4:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "typeName": {
                                            "id": 84,
                                            "name": "bool",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2977:4:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "2976:6:0"
                            },
                            "scope": 437,
                            "src": "2931:155:0",
                            "stateMutability": "nonpayable",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        {
                            "body": {
                                "id": 190,
                                "nodeType": "Block",
                                "src": "3415:1059:0",
                                "statements": [
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 121,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftHandSide": {
                                                "argumentTypes": null,
                                                "id": 119,
                                                "name": "rate",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 16,
                                                "src": "3425:4:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "Assignment",
                                            "operator": "=",
                                            "rightHandSide": {
                                                "argumentTypes": null,
                                                "id": 120,
                                                "name": "_rate",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 102,
                                                "src": "3432:5:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "3425:12:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 122,
                                        "nodeType": "ExpressionStatement",
                                        "src": "3425:12:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 125,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftHandSide": {
                                                "argumentTypes": null,
                                                "id": 123,
                                                "name": "cap",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18,
                                                "src": "3447:3:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "Assignment",
                                            "operator": "=",
                                            "rightHandSide": {
                                                "argumentTypes": null,
                                                "id": 124,
                                                "name": "_cap",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 104,
                                                "src": "3453:4:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "3447:10:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 126,
                                        "nodeType": "ExpressionStatement",
                                        "src": "3447:10:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 129,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftHandSide": {
                                                "argumentTypes": null,
                                                "id": 127,
                                                "name": "contributionGoal",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 20,
                                                "src": "3467:16:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "Assignment",
                                            "operator": "=",
                                            "rightHandSide": {
                                                "argumentTypes": null,
                                                "id": 128,
                                                "name": "_contributionGoal",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 106,
                                                "src": "3486:17:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "3467:36:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 130,
                                        "nodeType": "ExpressionStatement",
                                        "src": "3467:36:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 135,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftHandSide": {
                                                "argumentTypes": null,
                                                "id": 131,
                                                "name": "weth9",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 12,
                                                "src": "3513:5:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_WETH9_$955",
                                                    "typeString": "contract WETH9"
                                                }
                                            },
                                            "nodeType": "Assignment",
                                            "operator": "=",
                                            "rightHandSide": {
                                                "argumentTypes": null,
                                                "arguments": [
                                                    {
                                                        "argumentTypes": null,
                                                        "id": 133,
                                                        "name": "_wethAddr",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 108,
                                                        "src": "3527:9:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address_payable",
                                                            "typeString": "address payable"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_address_payable",
                                                            "typeString": "address payable"
                                                        }
                                                    ],
                                                    "id": 132,
                                                    "name": "WETH9",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 955,
                                                    "src": "3521:5:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_WETH9_$955_$",
                                                        "typeString": "type(contract WETH9)"
                                                    }
                                                },
                                                "id": 134,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3521:16:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_WETH9_$955",
                                                    "typeString": "contract WETH9"
                                                }
                                            },
                                            "src": "3513:24:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_WETH9_$955",
                                                "typeString": "contract WETH9"
                                            }
                                        },
                                        "id": 136,
                                        "nodeType": "ExpressionStatement",
                                        "src": "3513:24:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 141,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftHandSide": {
                                                "argumentTypes": null,
                                                "id": 137,
                                                "name": "token",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 14,
                                                "src": "3547:5:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_CustomToken_$709",
                                                    "typeString": "contract CustomToken"
                                                }
                                            },
                                            "nodeType": "Assignment",
                                            "operator": "=",
                                            "rightHandSide": {
                                                "argumentTypes": null,
                                                "arguments": [
                                                    {
                                                        "argumentTypes": null,
                                                        "id": 139,
                                                        "name": "_tokenAddr",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 110,
                                                        "src": "3567:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    ],
                                                    "id": 138,
                                                    "name": "CustomToken",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 709,
                                                    "src": "3555:11:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_CustomToken_$709_$",
                                                        "typeString": "type(contract CustomToken)"
                                                    }
                                                },
                                                "id": 140,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3555:23:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_CustomToken_$709",
                                                    "typeString": "contract CustomToken"
                                                }
                                            },
                                            "src": "3547:31:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_CustomToken_$709",
                                                "typeString": "contract CustomToken"
                                            }
                                        },
                                        "id": 142,
                                        "nodeType": "ExpressionStatement",
                                        "src": "3547:31:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 145,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftHandSide": {
                                                "argumentTypes": null,
                                                "id": 143,
                                                "name": "startingTime",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24,
                                                "src": "3588:12:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "Assignment",
                                            "operator": "=",
                                            "rightHandSide": {
                                                "argumentTypes": null,
                                                "id": 144,
                                                "name": "_staringTime",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 112,
                                                "src": "3603:12:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "3588:27:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 146,
                                        "nodeType": "ExpressionStatement",
                                        "src": "3588:27:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 149,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftHandSide": {
                                                "argumentTypes": null,
                                                "id": 147,
                                                "name": "closingTime",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26,
                                                "src": "3625:11:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "Assignment",
                                            "operator": "=",
                                            "rightHandSide": {
                                                "argumentTypes": null,
                                                "id": 148,
                                                "name": "_closingTime",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 114,
                                                "src": "3639:12:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "3625:26:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 150,
                                        "nodeType": "ExpressionStatement",
                                        "src": "3625:26:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 153,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftHandSide": {
                                                "argumentTypes": null,
                                                "id": 151,
                                                "name": "releaseTime",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 28,
                                                "src": "3661:11:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "Assignment",
                                            "operator": "=",
                                            "rightHandSide": {
                                                "argumentTypes": null,
                                                "id": 152,
                                                "name": "_releaseTime",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 116,
                                                "src": "3675:12:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "3661:26:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 154,
                                        "nodeType": "ExpressionStatement",
                                        "src": "3661:26:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 158,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "argumentTypes": null,
                                                        "id": 156,
                                                        "name": "startingTime",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24,
                                                        "src": "3898:12:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": ">",
                                                    "rightExpression": {
                                                        "argumentTypes": null,
                                                        "id": 157,
                                                        "name": "now",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1343,
                                                        "src": "3913:3:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "3898:18:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                {
                                                    "argumentTypes": null,
                                                    "hexValue": "53746172696e6754696d65206265666f7265204e6f77",
                                                    "id": 159,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "string",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "3918:24:0",
                                                    "subdenomination": null,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_stringliteral_4843e7d2fa9786eb7b775f3199000499883303e373c8fa36badcd2fe6face972",
                                                        "typeString": "literal_string \"StaringTime before Now\""
                                                    },
                                                    "value": "StaringTime before Now"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_stringliteral_4843e7d2fa9786eb7b775f3199000499883303e373c8fa36badcd2fe6face972",
                                                        "typeString": "literal_string \"StaringTime before Now\""
                                                    }
                                                ],
                                                "id": 155,
                                                "name": "require",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [
                                                    1344,
                                                    1345
                                                ],
                                                "referencedDeclaration": 1345,
                                                "src": "3890:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                    "typeString": "function (bool,string memory) pure"
                                                }
                                            },
                                            "id": 160,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "3890:53:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$__$",
                                                "typeString": "tuple()"
                                            }
                                        },
                                        "id": 161,
                                        "nodeType": "ExpressionStatement",
                                        "src": "3890:53:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 165,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "argumentTypes": null,
                                                        "id": 163,
                                                        "name": "closingTime",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 26,
                                                        "src": "4023:11:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": ">",
                                                    "rightExpression": {
                                                        "argumentTypes": null,
                                                        "id": 164,
                                                        "name": "startingTime",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24,
                                                        "src": "4037:12:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "4023:26:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                {
                                                    "argumentTypes": null,
                                                    "hexValue": "53746172696e6754696d652074696d6520616674657220436c6f73696e6754696d65",
                                                    "id": 166,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "string",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "4051:36:0",
                                                    "subdenomination": null,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_stringliteral_e5127699ceabc4a5a0a8e1fa6a728ee51f17250e34fb6cdbaa9ee689b155fcae",
                                                        "typeString": "literal_string \"StaringTime time after ClosingTime\""
                                                    },
                                                    "value": "StaringTime time after ClosingTime"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_stringliteral_e5127699ceabc4a5a0a8e1fa6a728ee51f17250e34fb6cdbaa9ee689b155fcae",
                                                        "typeString": "literal_string \"StaringTime time after ClosingTime\""
                                                    }
                                                ],
                                                "id": 162,
                                                "name": "require",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [
                                                    1344,
                                                    1345
                                                ],
                                                "referencedDeclaration": 1345,
                                                "src": "4015:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                    "typeString": "function (bool,string memory) pure"
                                                }
                                            },
                                            "id": 167,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "4015:73:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$__$",
                                                "typeString": "tuple()"
                                            }
                                        },
                                        "id": 168,
                                        "nodeType": "ExpressionStatement",
                                        "src": "4015:73:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 172,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "argumentTypes": null,
                                                        "id": 170,
                                                        "name": "cap",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 18,
                                                        "src": "4152:3:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": ">",
                                                    "rightExpression": {
                                                        "argumentTypes": null,
                                                        "hexValue": "30",
                                                        "id": 171,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "4158:1:0",
                                                        "subdenomination": null,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_0_by_1",
                                                            "typeString": "int_const 0"
                                                        },
                                                        "value": "0"
                                                    },
                                                    "src": "4152:7:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                {
                                                    "argumentTypes": null,
                                                    "hexValue": "4361702056616c7565206d7573742062652061626f76652030",
                                                    "id": 173,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "string",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "4161:27:0",
                                                    "subdenomination": null,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_stringliteral_d46d24c0cdda4b7b6eecd347e7f1ec4e3784ba9d8ebae62f165198db1d4cbd8b",
                                                        "typeString": "literal_string \"Cap Value must be above 0\""
                                                    },
                                                    "value": "Cap Value must be above 0"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_stringliteral_d46d24c0cdda4b7b6eecd347e7f1ec4e3784ba9d8ebae62f165198db1d4cbd8b",
                                                        "typeString": "literal_string \"Cap Value must be above 0\""
                                                    }
                                                ],
                                                "id": 169,
                                                "name": "require",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [
                                                    1344,
                                                    1345
                                                ],
                                                "referencedDeclaration": 1345,
                                                "src": "4144:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                    "typeString": "function (bool,string memory) pure"
                                                }
                                            },
                                            "id": 174,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "4144:45:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$__$",
                                                "typeString": "tuple()"
                                            }
                                        },
                                        "id": 175,
                                        "nodeType": "ExpressionStatement",
                                        "src": "4144:45:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 179,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "argumentTypes": null,
                                                        "id": 177,
                                                        "name": "contributionGoal",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 20,
                                                        "src": "4269:16:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": ">",
                                                    "rightExpression": {
                                                        "argumentTypes": null,
                                                        "hexValue": "30",
                                                        "id": 178,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "4288:1:0",
                                                        "subdenomination": null,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_0_by_1",
                                                            "typeString": "int_const 0"
                                                        },
                                                        "value": "0"
                                                    },
                                                    "src": "4269:20:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                {
                                                    "argumentTypes": null,
                                                    "hexValue": "476f616c2056616c7565206d7573742062652061626f76652030",
                                                    "id": 180,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "string",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "4291:28:0",
                                                    "subdenomination": null,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_stringliteral_3441328f8b3789097759bcc19eec1b29892c912f0f25337945decbd6c1ee3b92",
                                                        "typeString": "literal_string \"Goal Value must be above 0\""
                                                    },
                                                    "value": "Goal Value must be above 0"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_stringliteral_3441328f8b3789097759bcc19eec1b29892c912f0f25337945decbd6c1ee3b92",
                                                        "typeString": "literal_string \"Goal Value must be above 0\""
                                                    }
                                                ],
                                                "id": 176,
                                                "name": "require",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [
                                                    1344,
                                                    1345
                                                ],
                                                "referencedDeclaration": 1345,
                                                "src": "4261:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                    "typeString": "function (bool,string memory) pure"
                                                }
                                            },
                                            "id": 181,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "4261:59:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$__$",
                                                "typeString": "tuple()"
                                            }
                                        },
                                        "id": 182,
                                        "nodeType": "ExpressionStatement",
                                        "src": "4261:59:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 186,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "argumentTypes": null,
                                                        "id": 184,
                                                        "name": "contributionGoal",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 20,
                                                        "src": "4406:16:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": ">",
                                                    "rightExpression": {
                                                        "argumentTypes": null,
                                                        "id": 185,
                                                        "name": "cap",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 18,
                                                        "src": "4425:3:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "4406:22:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                {
                                                    "argumentTypes": null,
                                                    "hexValue": "476f616c2076616c7565206d7573742062652061626f7665206361702056616c7565",
                                                    "id": 187,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "string",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "4430:36:0",
                                                    "subdenomination": null,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_stringliteral_918a24d87cf24502cd87b1a92b43fe0cb0d8493759267a9a815f60de13a8109e",
                                                        "typeString": "literal_string \"Goal value must be above cap Value\""
                                                    },
                                                    "value": "Goal value must be above cap Value"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_stringliteral_918a24d87cf24502cd87b1a92b43fe0cb0d8493759267a9a815f60de13a8109e",
                                                        "typeString": "literal_string \"Goal value must be above cap Value\""
                                                    }
                                                ],
                                                "id": 183,
                                                "name": "require",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [
                                                    1344,
                                                    1345
                                                ],
                                                "referencedDeclaration": 1345,
                                                "src": "4398:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                    "typeString": "function (bool,string memory) pure"
                                                }
                                            },
                                            "id": 188,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "4398:69:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$__$",
                                                "typeString": "tuple()"
                                            }
                                        },
                                        "id": 189,
                                        "nodeType": "ExpressionStatement",
                                        "src": "4398:69:0"
                                    }
                                ]
                            },
                            "documentation": null,
                            "id": 191,
                            "implemented": true,
                            "kind": "constructor",
                            "modifiers": [],
                            "name": "",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 117,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 102,
                                        "name": "_rate",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 191,
                                        "src": "3239:13:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 101,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "3239:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    },
                                    {
                                        "constant": false,
                                        "id": 104,
                                        "name": "_cap",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 191,
                                        "src": "3254:12:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 103,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "3254:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    },
                                    {
                                        "constant": false,
                                        "id": 106,
                                        "name": "_contributionGoal",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 191,
                                        "src": "3268:25:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 105,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "3268:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    },
                                    {
                                        "constant": false,
                                        "id": 108,
                                        "name": "_wethAddr",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 191,
                                        "src": "3295:25:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address_payable",
                                            "typeString": "address payable"
                                        },
                                        "typeName": {
                                            "id": 107,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "3295:15:0",
                                            "stateMutability": "payable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address_payable",
                                                "typeString": "address payable"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    },
                                    {
                                        "constant": false,
                                        "id": 110,
                                        "name": "_tokenAddr",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 191,
                                        "src": "3322:18:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        },
                                        "typeName": {
                                            "id": 109,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "3322:7:0",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    },
                                    {
                                        "constant": false,
                                        "id": 112,
                                        "name": "_staringTime",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 191,
                                        "src": "3342:20:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 111,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "3342:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    },
                                    {
                                        "constant": false,
                                        "id": 114,
                                        "name": "_closingTime",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 191,
                                        "src": "3364:20:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 113,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "3364:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    },
                                    {
                                        "constant": false,
                                        "id": 116,
                                        "name": "_releaseTime",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 191,
                                        "src": "3386:20:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 115,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "3386:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "3238:169:0"
                            },
                            "returnParameters": {
                                "id": 118,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "3415:0:0"
                            },
                            "scope": 437,
                            "src": "3227:1247:0",
                            "stateMutability": "nonpayable",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        {
                            "body": {
                                "id": 288,
                                "nodeType": "Block",
                                "src": "4586:1318:0",
                                "statements": [
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 201,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "argumentTypes": null,
                                                        "id": 199,
                                                        "name": "_contribution",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 193,
                                                        "src": "4666:13:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "<",
                                                    "rightExpression": {
                                                        "argumentTypes": null,
                                                        "id": 200,
                                                        "name": "cap",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 18,
                                                        "src": "4682:3:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "4666:19:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                {
                                                    "argumentTypes": null,
                                                    "hexValue": "437573746f6d43726f776473616c656420627579546f6b656e282920686173206578636565642074686520636170",
                                                    "id": 202,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "string",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "4687:48:0",
                                                    "subdenomination": null,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_stringliteral_1acbaacaec23e83bbfb3ba0016bea4257fa177320029b37ad62e52bd0d3d9801",
                                                        "typeString": "literal_string \"CustomCrowdsaled buyToken() has exceed the cap\""
                                                    },
                                                    "value": "CustomCrowdsaled buyToken() has exceed the cap"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_stringliteral_1acbaacaec23e83bbfb3ba0016bea4257fa177320029b37ad62e52bd0d3d9801",
                                                        "typeString": "literal_string \"CustomCrowdsaled buyToken() has exceed the cap\""
                                                    }
                                                ],
                                                "id": 198,
                                                "name": "require",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [
                                                    1344,
                                                    1345
                                                ],
                                                "referencedDeclaration": 1345,
                                                "src": "4658:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                    "typeString": "function (bool,string memory) pure"
                                                }
                                            },
                                            "id": 203,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "4658:78:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$__$",
                                                "typeString": "tuple()"
                                            }
                                        },
                                        "id": 204,
                                        "nodeType": "ExpressionStatement",
                                        "src": "4658:78:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 208,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "argumentTypes": null,
                                                        "id": 206,
                                                        "name": "currentContribution",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 22,
                                                        "src": "4836:19:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "<",
                                                    "rightExpression": {
                                                        "argumentTypes": null,
                                                        "id": 207,
                                                        "name": "contributionGoal",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 20,
                                                        "src": "4858:16:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "4836:38:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                {
                                                    "argumentTypes": null,
                                                    "hexValue": "437573746f6d43726f776473616c6520686173207375636365656420696e2074686520707572737565206f662074686520636f6e747269627574696f6e476f616c",
                                                    "id": 209,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "string",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "4876:67:0",
                                                    "subdenomination": null,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_stringliteral_0a0b61fb208f630831051dbaba04adb1159a198cd4a4a4748a6ec0dc6811a1c2",
                                                        "typeString": "literal_string \"CustomCrowdsale has succeed in the pursue of the contributionGoal\""
                                                    },
                                                    "value": "CustomCrowdsale has succeed in the pursue of the contributionGoal"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_stringliteral_0a0b61fb208f630831051dbaba04adb1159a198cd4a4a4748a6ec0dc6811a1c2",
                                                        "typeString": "literal_string \"CustomCrowdsale has succeed in the pursue of the contributionGoal\""
                                                    }
                                                ],
                                                "id": 205,
                                                "name": "require",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [
                                                    1344,
                                                    1345
                                                ],
                                                "referencedDeclaration": 1345,
                                                "src": "4828:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                    "typeString": "function (bool,string memory) pure"
                                                }
                                            },
                                            "id": 210,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "4828:116:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$__$",
                                                "typeString": "tuple()"
                                            }
                                        },
                                        "id": 211,
                                        "nodeType": "ExpressionStatement",
                                        "src": "4828:116:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 215,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "argumentTypes": null,
                                                        "id": 213,
                                                        "name": "_contribution",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 193,
                                                        "src": "5043:13:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": ">=",
                                                    "rightExpression": {
                                                        "argumentTypes": null,
                                                        "hexValue": "30",
                                                        "id": 214,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "5060:1:0",
                                                        "subdenomination": null,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_0_by_1",
                                                            "typeString": "int_const 0"
                                                        },
                                                        "value": "0"
                                                    },
                                                    "src": "5043:18:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                {
                                                    "argumentTypes": null,
                                                    "hexValue": "636f6e747269627574696f6e20706172616d65746572206d7573742062652061626f76652030",
                                                    "id": 216,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "string",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "5062:40:0",
                                                    "subdenomination": null,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_stringliteral_87a8cdea2b41e32e04124c2e578e9687d8aef5991ebf718d0b7ed42a7dc0c879",
                                                        "typeString": "literal_string \"contribution parameter must be above 0\""
                                                    },
                                                    "value": "contribution parameter must be above 0"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_stringliteral_87a8cdea2b41e32e04124c2e578e9687d8aef5991ebf718d0b7ed42a7dc0c879",
                                                        "typeString": "literal_string \"contribution parameter must be above 0\""
                                                    }
                                                ],
                                                "id": 212,
                                                "name": "require",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [
                                                    1344,
                                                    1345
                                                ],
                                                "referencedDeclaration": 1345,
                                                "src": "5035:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                    "typeString": "function (bool,string memory) pure"
                                                }
                                            },
                                            "id": 217,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "5035:68:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$__$",
                                                "typeString": "tuple()"
                                            }
                                        },
                                        "id": 218,
                                        "nodeType": "ExpressionStatement",
                                        "src": "5035:68:0"
                                    },
                                    {
                                        "assignments": [
                                            220
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 220,
                                                "name": "aux",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 288,
                                                "src": "5114:11:0",
                                                "stateVariable": false,
                                                "storageLocation": "default",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "typeName": {
                                                    "id": 219,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "5114:7:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "value": null,
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 222,
                                        "initialValue": {
                                            "argumentTypes": null,
                                            "hexValue": "30",
                                            "id": 221,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "5128:1:0",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "5114:15:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "id": 226,
                                                    "name": "_contribution",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 193,
                                                    "src": "5147:13:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 223,
                                                    "name": "aux",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 220,
                                                    "src": "5139:3:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 225,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "add",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 982,
                                                "src": "5139:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 227,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "5139:22:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 228,
                                        "nodeType": "ExpressionStatement",
                                        "src": "5139:22:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "id": 232,
                                                    "name": "currentContribution",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22,
                                                    "src": "5179:19:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 229,
                                                    "name": "aux",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 220,
                                                    "src": "5171:3:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 231,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "add",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 982,
                                                "src": "5171:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 233,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "5171:28:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 234,
                                        "nodeType": "ExpressionStatement",
                                        "src": "5171:28:0"
                                    },
                                    {
                                        "condition": {
                                            "argumentTypes": null,
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 237,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "argumentTypes": null,
                                                "id": 235,
                                                "name": "aux",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 220,
                                                "src": "5350:3:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": ">",
                                            "rightExpression": {
                                                "argumentTypes": null,
                                                "id": 236,
                                                "name": "contributionGoal",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 20,
                                                "src": "5356:16:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "5350:22:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "falseBody": null,
                                        "id": 246,
                                        "nodeType": "IfStatement",
                                        "src": "5346:110:0",
                                        "trueBody": {
                                            "id": 245,
                                            "nodeType": "Block",
                                            "src": "5374:82:0",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 243,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftHandSide": {
                                                            "argumentTypes": null,
                                                            "id": 238,
                                                            "name": "_contribution",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 193,
                                                            "src": "5388:13:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "Assignment",
                                                        "operator": "=",
                                                        "rightHandSide": {
                                                            "argumentTypes": null,
                                                            "arguments": [
                                                                {
                                                                    "argumentTypes": null,
                                                                    "id": 241,
                                                                    "name": "currentContribution",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 22,
                                                                    "src": "5425:19:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "argumentTypes": null,
                                                                    "id": 239,
                                                                    "name": "contributionGoal",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 20,
                                                                    "src": "5404:16:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                "id": 240,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberName": "sub",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": 1007,
                                                                "src": "5404:20:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                                }
                                                            },
                                                            "id": 242,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "5404:41:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "5388:57:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "id": 244,
                                                    "nodeType": "ExpressionStatement",
                                                    "src": "5388:57:0"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "arguments": [
                                                        {
                                                            "argumentTypes": null,
                                                            "expression": {
                                                                "argumentTypes": null,
                                                                "id": 250,
                                                                "name": "msg",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 1341,
                                                                "src": "5547:3:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_message",
                                                                    "typeString": "msg"
                                                                }
                                                            },
                                                            "id": 251,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberName": "sender",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": null,
                                                            "src": "5547:10:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address_payable",
                                                                "typeString": "address payable"
                                                            }
                                                        },
                                                        {
                                                            "argumentTypes": null,
                                                            "arguments": [
                                                                {
                                                                    "argumentTypes": null,
                                                                    "id": 253,
                                                                    "name": "this",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 1367,
                                                                    "src": "5567:4:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_contract$_CustomCrowdsale_$437",
                                                                        "typeString": "contract CustomCrowdsale"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_contract$_CustomCrowdsale_$437",
                                                                        "typeString": "contract CustomCrowdsale"
                                                                    }
                                                                ],
                                                                "id": 252,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "5559:7:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_address_$",
                                                                    "typeString": "type(address)"
                                                                },
                                                                "typeName": "address"
                                                            },
                                                            "id": 254,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "5559:13:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        {
                                                            "argumentTypes": null,
                                                            "id": 255,
                                                            "name": "_contribution",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 193,
                                                            "src": "5574:13:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_address_payable",
                                                                "typeString": "address payable"
                                                            },
                                                            {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            },
                                                            {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "id": 248,
                                                            "name": "weth9",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 12,
                                                            "src": "5528:5:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_contract$_WETH9_$955",
                                                                "typeString": "contract WETH9"
                                                            }
                                                        },
                                                        "id": 249,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "transferFrom",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 954,
                                                        "src": "5528:18:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                                                            "typeString": "function (address,address,uint256) external returns (bool)"
                                                        }
                                                    },
                                                    "id": 256,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "5528:60:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                {
                                                    "argumentTypes": null,
                                                    "hexValue": "7472616e7366657246726f6d28292057657468657220686173204661696c6564",
                                                    "id": 257,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "string",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "5590:34:0",
                                                    "subdenomination": null,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_stringliteral_544afac978658e7a1ca8d3a1e463a69f3ea109b2803104396996325c5d44886d",
                                                        "typeString": "literal_string \"transferFrom() Wether has Failed\""
                                                    },
                                                    "value": "transferFrom() Wether has Failed"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_stringliteral_544afac978658e7a1ca8d3a1e463a69f3ea109b2803104396996325c5d44886d",
                                                        "typeString": "literal_string \"transferFrom() Wether has Failed\""
                                                    }
                                                ],
                                                "id": 247,
                                                "name": "require",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [
                                                    1344,
                                                    1345
                                                ],
                                                "referencedDeclaration": 1345,
                                                "src": "5520:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                    "typeString": "function (bool,string memory) pure"
                                                }
                                            },
                                            "id": 258,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "5520:105:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$__$",
                                                "typeString": "tuple()"
                                            }
                                        },
                                        "id": 259,
                                        "nodeType": "ExpressionStatement",
                                        "src": "5520:105:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 265,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftHandSide": {
                                                "argumentTypes": null,
                                                "id": 260,
                                                "name": "currentContribution",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22,
                                                "src": "5635:19:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "Assignment",
                                            "operator": "=",
                                            "rightHandSide": {
                                                "argumentTypes": null,
                                                "arguments": [
                                                    {
                                                        "argumentTypes": null,
                                                        "id": 263,
                                                        "name": "_contribution",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 193,
                                                        "src": "5681:13:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 261,
                                                        "name": "currentContribution",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 22,
                                                        "src": "5657:19:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "id": 262,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "add",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 982,
                                                    "src": "5657:23:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                    }
                                                },
                                                "id": 264,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "5657:38:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "5635:60:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 266,
                                        "nodeType": "ExpressionStatement",
                                        "src": "5635:60:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 278,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftHandSide": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 267,
                                                    "name": "contributions",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 38,
                                                    "src": "5705:13:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                        "typeString": "mapping(address => uint256)"
                                                    }
                                                },
                                                "id": 270,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 268,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1341,
                                                        "src": "5719:3:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 269,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "sender",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": null,
                                                    "src": "5719:10:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address_payable",
                                                        "typeString": "address payable"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": true,
                                                "nodeType": "IndexAccess",
                                                "src": "5705:25:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "Assignment",
                                            "operator": "=",
                                            "rightHandSide": {
                                                "argumentTypes": null,
                                                "arguments": [
                                                    {
                                                        "argumentTypes": null,
                                                        "id": 276,
                                                        "name": "_contribution",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 193,
                                                        "src": "5763:13:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "baseExpression": {
                                                            "argumentTypes": null,
                                                            "id": 271,
                                                            "name": "contributions",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 38,
                                                            "src": "5733:13:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                                "typeString": "mapping(address => uint256)"
                                                            }
                                                        },
                                                        "id": 274,
                                                        "indexExpression": {
                                                            "argumentTypes": null,
                                                            "expression": {
                                                                "argumentTypes": null,
                                                                "id": 272,
                                                                "name": "msg",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 1341,
                                                                "src": "5747:3:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_message",
                                                                    "typeString": "msg"
                                                                }
                                                            },
                                                            "id": 273,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberName": "sender",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": null,
                                                            "src": "5747:10:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address_payable",
                                                                "typeString": "address payable"
                                                            }
                                                        },
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "IndexAccess",
                                                        "src": "5733:25:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "id": 275,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "add",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 982,
                                                    "src": "5733:29:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                    }
                                                },
                                                "id": 277,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "5733:44:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "5705:72:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 279,
                                        "nodeType": "ExpressionStatement",
                                        "src": "5705:72:0"
                                    },
                                    {
                                        "eventCall": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 281,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1341,
                                                        "src": "5850:3:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 282,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "sender",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": null,
                                                    "src": "5850:10:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address_payable",
                                                        "typeString": "address payable"
                                                    }
                                                },
                                                {
                                                    "argumentTypes": null,
                                                    "id": 283,
                                                    "name": "_contribution",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 193,
                                                    "src": "5862:13:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_address_payable",
                                                        "typeString": "address payable"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                ],
                                                "id": 280,
                                                "name": "Contribution",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 44,
                                                "src": "5837:12:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                                    "typeString": "function (address,uint256)"
                                                }
                                            },
                                            "id": 284,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "5837:39:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$__$",
                                                "typeString": "tuple()"
                                            }
                                        },
                                        "id": 285,
                                        "nodeType": "EmitStatement",
                                        "src": "5832:44:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "hexValue": "74727565",
                                            "id": 286,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "bool",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "5893:4:0",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "value": "true"
                                        },
                                        "functionReturnParameters": 197,
                                        "id": 287,
                                        "nodeType": "Return",
                                        "src": "5886:11:0"
                                    }
                                ]
                            },
                            "documentation": null,
                            "id": 289,
                            "implemented": true,
                            "kind": "function",
                            "modifiers": [],
                            "name": "buyToken",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 194,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 193,
                                        "name": "_contribution",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 289,
                                        "src": "4541:21:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 192,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "4541:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "4540:23:0"
                            },
                            "returnParameters": {
                                "id": 197,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 196,
                                        "name": "",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 289,
                                        "src": "4580:4:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "typeName": {
                                            "id": 195,
                                            "name": "bool",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "4580:4:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "4579:6:0"
                            },
                            "scope": 437,
                            "src": "4523:1381:0",
                            "stateMutability": "nonpayable",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        {
                            "body": {
                                "id": 351,
                                "nodeType": "Block",
                                "src": "6024:713:0",
                                "statements": [
                                    {
                                        "assignments": [
                                            297
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 297,
                                                "name": "claimedTokens",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 351,
                                                "src": "6073:21:0",
                                                "stateVariable": false,
                                                "storageLocation": "default",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "typeName": {
                                                    "id": 296,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "6073:7:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "value": null,
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 305,
                                        "initialValue": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "id": 303,
                                                    "name": "rate",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 16,
                                                    "src": "6127:4:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 298,
                                                        "name": "contributions",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38,
                                                        "src": "6097:13:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                            "typeString": "mapping(address => uint256)"
                                                        }
                                                    },
                                                    "id": 301,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "id": 299,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 1341,
                                                            "src": "6111:3:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 300,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": null,
                                                        "src": "6111:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address_payable",
                                                            "typeString": "address payable"
                                                        }
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "IndexAccess",
                                                    "src": "6097:25:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 302,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "mul",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 1041,
                                                "src": "6097:29:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 304,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "6097:35:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "6073:59:0"
                                    },
                                    {
                                        "eventCall": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 307,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1341,
                                                        "src": "6211:3:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 308,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "sender",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": null,
                                                    "src": "6211:10:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address_payable",
                                                        "typeString": "address payable"
                                                    }
                                                },
                                                {
                                                    "argumentTypes": null,
                                                    "id": 309,
                                                    "name": "claimedTokens",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 297,
                                                    "src": "6223:13:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 310,
                                                        "name": "contributions",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38,
                                                        "src": "6238:13:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                            "typeString": "mapping(address => uint256)"
                                                        }
                                                    },
                                                    "id": 313,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "id": 311,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 1341,
                                                            "src": "6252:3:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 312,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": null,
                                                        "src": "6252:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address_payable",
                                                            "typeString": "address payable"
                                                        }
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "IndexAccess",
                                                    "src": "6238:25:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_address_payable",
                                                        "typeString": "address payable"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                ],
                                                "id": 306,
                                                "name": "claimContributionPreTx",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 64,
                                                "src": "6188:22:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                                                    "typeString": "function (address,uint256,uint256)"
                                                }
                                            },
                                            "id": 314,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "6188:76:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$__$",
                                                "typeString": "tuple()"
                                            }
                                        },
                                        "id": 315,
                                        "nodeType": "EmitStatement",
                                        "src": "6183:81:0"
                                    },
                                    {
                                        "condition": {
                                            "argumentTypes": null,
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 321,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 316,
                                                    "name": "contributions",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 38,
                                                    "src": "6277:13:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                        "typeString": "mapping(address => uint256)"
                                                    }
                                                },
                                                "id": 319,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 317,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1341,
                                                        "src": "6291:3:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 318,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "sender",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": null,
                                                    "src": "6291:10:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address_payable",
                                                        "typeString": "address payable"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "6277:25:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "!=",
                                            "rightExpression": {
                                                "argumentTypes": null,
                                                "hexValue": "30",
                                                "id": 320,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "6306:1:0",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "6277:30:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "falseBody": null,
                                        "id": 348,
                                        "nodeType": "IfStatement",
                                        "src": "6274:435:0",
                                        "trueBody": {
                                            "id": 347,
                                            "nodeType": "Block",
                                            "src": "6309:400:0",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "arguments": [
                                                            {
                                                                "argumentTypes": null,
                                                                "arguments": [
                                                                    {
                                                                        "argumentTypes": null,
                                                                        "expression": {
                                                                            "argumentTypes": null,
                                                                            "id": 325,
                                                                            "name": "msg",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 1341,
                                                                            "src": "6401:3:0",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_magic_message",
                                                                                "typeString": "msg"
                                                                            }
                                                                        },
                                                                        "id": 326,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "memberName": "sender",
                                                                        "nodeType": "MemberAccess",
                                                                        "referencedDeclaration": null,
                                                                        "src": "6401:10:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_address_payable",
                                                                            "typeString": "address payable"
                                                                        }
                                                                    },
                                                                    {
                                                                        "argumentTypes": null,
                                                                        "id": 327,
                                                                        "name": "claimedTokens",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 297,
                                                                        "src": "6413:13:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_address_payable",
                                                                            "typeString": "address payable"
                                                                        },
                                                                        {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    ],
                                                                    "expression": {
                                                                        "argumentTypes": null,
                                                                        "id": 323,
                                                                        "name": "token",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 14,
                                                                        "src": "6386:5:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_contract$_CustomToken_$709",
                                                                            "typeString": "contract CustomToken"
                                                                        }
                                                                    },
                                                                    "id": 324,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberName": "transfer",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 598,
                                                                    "src": "6386:14:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                                                        "typeString": "function (address,uint256) external returns (bool)"
                                                                    }
                                                                },
                                                                "id": 328,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "6386:41:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bool",
                                                                    "typeString": "bool"
                                                                }
                                                            },
                                                            {
                                                                "argumentTypes": null,
                                                                "hexValue": "7472616e73666572282920437573746f6d546f6b656e7320686173204661696c6564",
                                                                "id": 329,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "string",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "6429:36:0",
                                                                "subdenomination": null,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_stringliteral_62fbf00381c2ba5a4612c9b16de0307ad6ec578ef0c8fb15f55dcb683e6157f6",
                                                                    "typeString": "literal_string \"transfer() CustomTokens has Failed\""
                                                                },
                                                                "value": "transfer() CustomTokens has Failed"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_bool",
                                                                    "typeString": "bool"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_stringliteral_62fbf00381c2ba5a4612c9b16de0307ad6ec578ef0c8fb15f55dcb683e6157f6",
                                                                    "typeString": "literal_string \"transfer() CustomTokens has Failed\""
                                                                }
                                                            ],
                                                            "id": 322,
                                                            "name": "require",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [
                                                                1344,
                                                                1345
                                                            ],
                                                            "referencedDeclaration": 1345,
                                                            "src": "6378:7:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                                "typeString": "function (bool,string memory) pure"
                                                            }
                                                        },
                                                        "id": 330,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "6378:88:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_tuple$__$",
                                                            "typeString": "tuple()"
                                                        }
                                                    },
                                                    "id": 331,
                                                    "nodeType": "ExpressionStatement",
                                                    "src": "6378:88:0"
                                                },
                                                {
                                                    "eventCall": {
                                                        "argumentTypes": null,
                                                        "arguments": [
                                                            {
                                                                "argumentTypes": null,
                                                                "expression": {
                                                                    "argumentTypes": null,
                                                                    "id": 333,
                                                                    "name": "msg",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 1341,
                                                                    "src": "6549:3:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_magic_message",
                                                                        "typeString": "msg"
                                                                    }
                                                                },
                                                                "id": 334,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberName": "sender",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": null,
                                                                "src": "6549:10:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address_payable",
                                                                    "typeString": "address payable"
                                                                }
                                                            },
                                                            {
                                                                "argumentTypes": null,
                                                                "id": 335,
                                                                "name": "claimedTokens",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 297,
                                                                "src": "6561:13:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_address_payable",
                                                                    "typeString": "address payable"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            ],
                                                            "id": 332,
                                                            "name": "ClaimContribution",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 50,
                                                            "src": "6531:17:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                                                "typeString": "function (address,uint256)"
                                                            }
                                                        },
                                                        "id": 336,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "6531:44:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_tuple$__$",
                                                            "typeString": "tuple()"
                                                        }
                                                    },
                                                    "id": 337,
                                                    "nodeType": "EmitStatement",
                                                    "src": "6526:49:0"
                                                },
                                                {
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 343,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftHandSide": {
                                                            "argumentTypes": null,
                                                            "baseExpression": {
                                                                "argumentTypes": null,
                                                                "id": 338,
                                                                "name": "contributions",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 38,
                                                                "src": "6644:13:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                                    "typeString": "mapping(address => uint256)"
                                                                }
                                                            },
                                                            "id": 341,
                                                            "indexExpression": {
                                                                "argumentTypes": null,
                                                                "expression": {
                                                                    "argumentTypes": null,
                                                                    "id": 339,
                                                                    "name": "msg",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 1341,
                                                                    "src": "6658:3:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_magic_message",
                                                                        "typeString": "msg"
                                                                    }
                                                                },
                                                                "id": 340,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberName": "sender",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": null,
                                                                "src": "6658:10:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address_payable",
                                                                    "typeString": "address payable"
                                                                }
                                                            },
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": true,
                                                            "nodeType": "IndexAccess",
                                                            "src": "6644:25:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "Assignment",
                                                        "operator": "=",
                                                        "rightHandSide": {
                                                            "argumentTypes": null,
                                                            "hexValue": "30",
                                                            "id": 342,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "6672:1:0",
                                                            "subdenomination": null,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            },
                                                            "value": "0"
                                                        },
                                                        "src": "6644:29:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "id": 344,
                                                    "nodeType": "ExpressionStatement",
                                                    "src": "6644:29:0"
                                                },
                                                {
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "hexValue": "74727565",
                                                        "id": 345,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "bool",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "6694:4:0",
                                                        "subdenomination": null,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        },
                                                        "value": "true"
                                                    },
                                                    "functionReturnParameters": 295,
                                                    "id": 346,
                                                    "nodeType": "Return",
                                                    "src": "6687:11:0"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "hexValue": "66616c7365",
                                            "id": 349,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "bool",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "6725:5:0",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "value": "false"
                                        },
                                        "functionReturnParameters": 295,
                                        "id": 350,
                                        "nodeType": "Return",
                                        "src": "6718:12:0"
                                    }
                                ]
                            },
                            "documentation": null,
                            "id": 352,
                            "implemented": true,
                            "kind": "function",
                            "modifiers": [
                                {
                                    "arguments": null,
                                    "id": 292,
                                    "modifierName": {
                                        "argumentTypes": null,
                                        "id": 291,
                                        "name": "whenICOCompleted",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 80,
                                        "src": "5992:16:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_modifier$__$",
                                            "typeString": "modifier ()"
                                        }
                                    },
                                    "nodeType": "ModifierInvocation",
                                    "src": "5992:16:0"
                                }
                            ],
                            "name": "claimContribution",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 290,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "5982:2:0"
                            },
                            "returnParameters": {
                                "id": 295,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 294,
                                        "name": "",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 352,
                                        "src": "6018:4:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "typeName": {
                                            "id": 293,
                                            "name": "bool",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "6018:4:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "6017:6:0"
                            },
                            "scope": 437,
                            "src": "5956:781:0",
                            "stateMutability": "nonpayable",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        {
                            "body": {
                                "id": 361,
                                "nodeType": "Block",
                                "src": "6883:43:0",
                                "statements": [
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "arguments": [],
                                            "expression": {
                                                "argumentTypes": [],
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 357,
                                                    "name": "token",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 14,
                                                    "src": "6900:5:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_contract$_CustomToken_$709",
                                                        "typeString": "contract CustomToken"
                                                    }
                                                },
                                                "id": 358,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "totalSupply",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 553,
                                                "src": "6900:17:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_external_view$__$returns$_t_uint256_$",
                                                    "typeString": "function () view external returns (uint256)"
                                                }
                                            },
                                            "id": 359,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "6900:19:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "functionReturnParameters": 356,
                                        "id": 360,
                                        "nodeType": "Return",
                                        "src": "6893:26:0"
                                    }
                                ]
                            },
                            "documentation": "GETTERS",
                            "id": 362,
                            "implemented": true,
                            "kind": "function",
                            "modifiers": [],
                            "name": "getTokenTotalSupply",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 353,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "6851:2:0"
                            },
                            "returnParameters": {
                                "id": 356,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 355,
                                        "name": "",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 362,
                                        "src": "6874:7:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 354,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "6874:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "6873:9:0"
                            },
                            "scope": 437,
                            "src": "6823:103:0",
                            "stateMutability": "view",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        {
                            "body": {
                                "id": 371,
                                "nodeType": "Block",
                                "src": "7039:43:0",
                                "statements": [
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "arguments": [],
                                            "expression": {
                                                "argumentTypes": [],
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 367,
                                                    "name": "weth9",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 12,
                                                    "src": "7056:5:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_contract$_WETH9_$955",
                                                        "typeString": "contract WETH9"
                                                    }
                                                },
                                                "id": 368,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "totalSupply",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 831,
                                                "src": "7056:17:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_external_view$__$returns$_t_uint256_$",
                                                    "typeString": "function () view external returns (uint256)"
                                                }
                                            },
                                            "id": 369,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "7056:19:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "functionReturnParameters": 366,
                                        "id": 370,
                                        "nodeType": "Return",
                                        "src": "7049:26:0"
                                    }
                                ]
                            },
                            "documentation": null,
                            "id": 372,
                            "implemented": true,
                            "kind": "function",
                            "modifiers": [],
                            "name": "getWethTotalSupply",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 363,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "7006:2:0"
                            },
                            "returnParameters": {
                                "id": 366,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 365,
                                        "name": "",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 372,
                                        "src": "7030:7:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 364,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "7030:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "7029:9:0"
                            },
                            "scope": 437,
                            "src": "6979:103:0",
                            "stateMutability": "view",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        {
                            "body": {
                                "id": 379,
                                "nodeType": "Block",
                                "src": "7181:43:0",
                                "statements": [
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 377,
                                            "name": "currentContribution",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22,
                                            "src": "7198:19:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "functionReturnParameters": 376,
                                        "id": 378,
                                        "nodeType": "Return",
                                        "src": "7191:26:0"
                                    }
                                ]
                            },
                            "documentation": null,
                            "id": 380,
                            "implemented": true,
                            "kind": "function",
                            "modifiers": [],
                            "name": "getCurrentContribution",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 373,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "7148:2:0"
                            },
                            "returnParameters": {
                                "id": 376,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 375,
                                        "name": "",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 380,
                                        "src": "7172:7:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 374,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "7172:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "7171:9:0"
                            },
                            "scope": 437,
                            "src": "7117:107:0",
                            "stateMutability": "view",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        {
                            "body": {
                                "id": 387,
                                "nodeType": "Block",
                                "src": "7322:28:0",
                                "statements": [
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 385,
                                            "name": "rate",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 16,
                                            "src": "7339:4:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "functionReturnParameters": 384,
                                        "id": 386,
                                        "nodeType": "Return",
                                        "src": "7332:11:0"
                                    }
                                ]
                            },
                            "documentation": null,
                            "id": 388,
                            "implemented": true,
                            "kind": "function",
                            "modifiers": [],
                            "name": "getRate",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 381,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "7289:2:0"
                            },
                            "returnParameters": {
                                "id": 384,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 383,
                                        "name": "",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 388,
                                        "src": "7313:7:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 382,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "7313:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "7312:9:0"
                            },
                            "scope": 437,
                            "src": "7273:77:0",
                            "stateMutability": "view",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        {
                            "body": {
                                "id": 395,
                                "nodeType": "Block",
                                "src": "7446:27:0",
                                "statements": [
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 393,
                                            "name": "cap",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18,
                                            "src": "7463:3:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "functionReturnParameters": 392,
                                        "id": 394,
                                        "nodeType": "Return",
                                        "src": "7456:10:0"
                                    }
                                ]
                            },
                            "documentation": null,
                            "id": 396,
                            "implemented": true,
                            "kind": "function",
                            "modifiers": [],
                            "name": "getCap",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 389,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "7413:2:0"
                            },
                            "returnParameters": {
                                "id": 392,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 391,
                                        "name": "",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 396,
                                        "src": "7437:7:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 390,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "7437:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "7436:9:0"
                            },
                            "scope": 437,
                            "src": "7398:75:0",
                            "stateMutability": "view",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        {
                            "body": {
                                "id": 403,
                                "nodeType": "Block",
                                "src": "7571:40:0",
                                "statements": [
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 401,
                                            "name": "contributionGoal",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 20,
                                            "src": "7588:16:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "functionReturnParameters": 400,
                                        "id": 402,
                                        "nodeType": "Return",
                                        "src": "7581:23:0"
                                    }
                                ]
                            },
                            "documentation": null,
                            "id": 404,
                            "implemented": true,
                            "kind": "function",
                            "modifiers": [],
                            "name": "getGoal",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 397,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "7538:2:0"
                            },
                            "returnParameters": {
                                "id": 400,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 399,
                                        "name": "",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 404,
                                        "src": "7562:7:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 398,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "7562:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "7561:9:0"
                            },
                            "scope": 437,
                            "src": "7522:89:0",
                            "stateMutability": "view",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        {
                            "body": {
                                "id": 411,
                                "nodeType": "Block",
                                "src": "7722:36:0",
                                "statements": [
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 409,
                                            "name": "ICOCompleted",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31,
                                            "src": "7739:12:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "functionReturnParameters": 408,
                                        "id": 410,
                                        "nodeType": "Return",
                                        "src": "7732:19:0"
                                    }
                                ]
                            },
                            "documentation": null,
                            "id": 412,
                            "implemented": true,
                            "kind": "function",
                            "modifiers": [],
                            "name": "isCompleted",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 405,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "7692:2:0"
                            },
                            "returnParameters": {
                                "id": 408,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 407,
                                        "name": "",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 412,
                                        "src": "7716:4:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "typeName": {
                                            "id": 406,
                                            "name": "bool",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "7716:4:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "7715:6:0"
                            },
                            "scope": 437,
                            "src": "7672:86:0",
                            "stateMutability": "view",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        {
                            "body": {
                                "id": 419,
                                "nodeType": "Block",
                                "src": "7873:36:0",
                                "statements": [
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 417,
                                            "name": "startingTime",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 24,
                                            "src": "7890:12:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "functionReturnParameters": 416,
                                        "id": 418,
                                        "nodeType": "Return",
                                        "src": "7883:19:0"
                                    }
                                ]
                            },
                            "documentation": null,
                            "id": 420,
                            "implemented": true,
                            "kind": "function",
                            "modifiers": [],
                            "name": "getStartingTime",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 413,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "7840:2:0"
                            },
                            "returnParameters": {
                                "id": 416,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 415,
                                        "name": "",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 420,
                                        "src": "7864:7:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 414,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "7864:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "7863:9:0"
                            },
                            "scope": 437,
                            "src": "7816:93:0",
                            "stateMutability": "view",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        {
                            "body": {
                                "id": 427,
                                "nodeType": "Block",
                                "src": "8021:35:0",
                                "statements": [
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 425,
                                            "name": "closingTime",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26,
                                            "src": "8038:11:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "functionReturnParameters": 424,
                                        "id": 426,
                                        "nodeType": "Return",
                                        "src": "8031:18:0"
                                    }
                                ]
                            },
                            "documentation": null,
                            "id": 428,
                            "implemented": true,
                            "kind": "function",
                            "modifiers": [],
                            "name": "getClosingTime",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 421,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "7988:2:0"
                            },
                            "returnParameters": {
                                "id": 424,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 423,
                                        "name": "",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 428,
                                        "src": "8012:7:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 422,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "8012:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "8011:9:0"
                            },
                            "scope": 437,
                            "src": "7965:91:0",
                            "stateMutability": "view",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        {
                            "body": {
                                "id": 435,
                                "nodeType": "Block",
                                "src": "8168:35:0",
                                "statements": [
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 433,
                                            "name": "releaseTime",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 28,
                                            "src": "8185:11:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "functionReturnParameters": 432,
                                        "id": 434,
                                        "nodeType": "Return",
                                        "src": "8178:18:0"
                                    }
                                ]
                            },
                            "documentation": null,
                            "id": 436,
                            "implemented": true,
                            "kind": "function",
                            "modifiers": [],
                            "name": "getReleaseTime",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 429,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "8135:2:0"
                            },
                            "returnParameters": {
                                "id": 432,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 431,
                                        "name": "",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 436,
                                        "src": "8159:7:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 430,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "8159:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "8158:9:0"
                            },
                            "scope": 437,
                            "src": "8112:91:0",
                            "stateMutability": "view",
                            "superFunction": null,
                            "visibility": "public"
                        }
                    ],
                    "scope": 438,
                    "src": "1395:6810:0"
                }
            ],
            "src": "28:8178:0"
        },
        "legacyAST": {
            "absolutePath": "/home/asigan/Github_Projects/EthereumPARTokenCrowdSale/contracts/CustomCrowdsale.sol",
            "exportedSymbols": {
                "CustomCrowdsale": [
                    437
                ]
            },
            "id": 438,
            "nodeType": "SourceUnit",
            "nodes": [
                {
                    "id": 1,
                    "literals": [
                        "solidity",
                        ">=",
                        "0.5",
                        ".0",
                        "<",
                        "0.6",
                        ".0"
                    ],
                    "nodeType": "PragmaDirective",
                    "src": "28:31:0"
                },
                {
                    "absolutePath": "/home/asigan/Github_Projects/EthereumPARTokenCrowdSale/contracts/tokens/CustomToken.sol",
                    "file": "./tokens/CustomToken.sol",
                    "id": 2,
                    "nodeType": "ImportDirective",
                    "scope": 438,
                    "sourceUnit": 710,
                    "src": "242:34:0",
                    "symbolAliases": [],
                    "unitAlias": ""
                },
                {
                    "absolutePath": "canonical-weth/contracts/WETH9.sol",
                    "file": "canonical-weth/contracts/WETH9.sol",
                    "id": 3,
                    "nodeType": "ImportDirective",
                    "scope": 438,
                    "sourceUnit": 956,
                    "src": "277:44:0",
                    "symbolAliases": [],
                    "unitAlias": ""
                },
                {
                    "absolutePath": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
                    "file": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
                    "id": 4,
                    "nodeType": "ImportDirective",
                    "scope": 438,
                    "sourceUnit": 1200,
                    "src": "322:63:0",
                    "symbolAliases": [],
                    "unitAlias": ""
                },
                {
                    "absolutePath": "openzeppelin-solidity/contracts/math/SafeMath.sol",
                    "file": "openzeppelin-solidity/contracts/math/SafeMath.sol",
                    "id": 5,
                    "nodeType": "ImportDirective",
                    "scope": 438,
                    "sourceUnit": 1089,
                    "src": "386:59:0",
                    "symbolAliases": [],
                    "unitAlias": ""
                },
                {
                    "baseContracts": [
                        {
                            "arguments": null,
                            "baseName": {
                                "contractScope": null,
                                "id": 6,
                                "name": "Ownable",
                                "nodeType": "UserDefinedTypeName",
                                "referencedDeclaration": 1199,
                                "src": "1423:7:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_Ownable_$1199",
                                    "typeString": "contract Ownable"
                                }
                            },
                            "id": 7,
                            "nodeType": "InheritanceSpecifier",
                            "src": "1423:7:0"
                        }
                    ],
                    "contractDependencies": [
                        1199
                    ],
                    "contractKind": "contract",
                    "documentation": "@title CustomCrowdsale Params\nrate - Value Defining the Current Rate for the CustomCrowdsale\ncap - Value Defining the Current Cap for the CustomCrowdsale\nWETH9 - Value Defining the Current WETH9 Token for the CustomCrowdsale\nCustomToken - Value Defining the Current CustomToken for the CustomCrowdsale\ncontributionGoal - Value Defining the Current Goal for the CustomCrowdsale\ncurrentContribution - Value Defining currentContribution status for the CustomCrowdsale\nstartingTime - Value Defining the startingTime for the CustomCrowdsale\nclosingTime - Value Defining the closingTime for CustomCrowdsale\nreleaseTime - Value Defining the releaseTime for CustomCrowdsale\nICOCompleted - Value Defining the Open/Close status for CustomCrowdsale\nICOGoalReached - Value Defining the status for the contributionGoal in CustomCrowdsale\ncontributions - Value Defining the every buy until claim in CustomCrowdsale",
                    "fullyImplemented": true,
                    "id": 437,
                    "linearizedBaseContracts": [
                        437,
                        1199
                    ],
                    "name": "CustomCrowdsale",
                    "nodeType": "ContractDefinition",
                    "nodes": [
                        {
                            "id": 10,
                            "libraryName": {
                                "contractScope": null,
                                "id": 8,
                                "name": "SafeMath",
                                "nodeType": "UserDefinedTypeName",
                                "referencedDeclaration": 1088,
                                "src": "1443:8:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_SafeMath_$1088",
                                    "typeString": "library SafeMath"
                                }
                            },
                            "nodeType": "UsingForDirective",
                            "src": "1437:27:0",
                            "typeName": {
                                "id": 9,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "1456:7:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            }
                        },
                        {
                            "constant": false,
                            "id": 12,
                            "name": "weth9",
                            "nodeType": "VariableDeclaration",
                            "scope": 437,
                            "src": "1523:18:0",
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_WETH9_$955",
                                "typeString": "contract WETH9"
                            },
                            "typeName": {
                                "contractScope": null,
                                "id": 11,
                                "name": "WETH9",
                                "nodeType": "UserDefinedTypeName",
                                "referencedDeclaration": 955,
                                "src": "1523:5:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_WETH9_$955",
                                    "typeString": "contract WETH9"
                                }
                            },
                            "value": null,
                            "visibility": "public"
                        },
                        {
                            "constant": false,
                            "id": 14,
                            "name": "token",
                            "nodeType": "VariableDeclaration",
                            "scope": 437,
                            "src": "1547:24:0",
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_CustomToken_$709",
                                "typeString": "contract CustomToken"
                            },
                            "typeName": {
                                "contractScope": null,
                                "id": 13,
                                "name": "CustomToken",
                                "nodeType": "UserDefinedTypeName",
                                "referencedDeclaration": 709,
                                "src": "1547:11:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_CustomToken_$709",
                                    "typeString": "contract CustomToken"
                                }
                            },
                            "value": null,
                            "visibility": "public"
                        },
                        {
                            "constant": false,
                            "id": 16,
                            "name": "rate",
                            "nodeType": "VariableDeclaration",
                            "scope": 437,
                            "src": "1623:19:0",
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            },
                            "typeName": {
                                "id": 15,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "1623:7:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "value": null,
                            "visibility": "public"
                        },
                        {
                            "constant": false,
                            "id": 18,
                            "name": "cap",
                            "nodeType": "VariableDeclaration",
                            "scope": 437,
                            "src": "1648:18:0",
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            },
                            "typeName": {
                                "id": 17,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "1648:7:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "value": null,
                            "visibility": "public"
                        },
                        {
                            "constant": false,
                            "id": 20,
                            "name": "contributionGoal",
                            "nodeType": "VariableDeclaration",
                            "scope": 437,
                            "src": "1672:31:0",
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            },
                            "typeName": {
                                "id": 19,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "1672:7:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "value": null,
                            "visibility": "public"
                        },
                        {
                            "constant": false,
                            "id": 22,
                            "name": "currentContribution",
                            "nodeType": "VariableDeclaration",
                            "scope": 437,
                            "src": "1709:34:0",
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            },
                            "typeName": {
                                "id": 21,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "1709:7:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "value": null,
                            "visibility": "public"
                        },
                        {
                            "constant": false,
                            "id": 24,
                            "name": "startingTime",
                            "nodeType": "VariableDeclaration",
                            "scope": 437,
                            "src": "1807:27:0",
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            },
                            "typeName": {
                                "id": 23,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "1807:7:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "value": null,
                            "visibility": "public"
                        },
                        {
                            "constant": false,
                            "id": 26,
                            "name": "closingTime",
                            "nodeType": "VariableDeclaration",
                            "scope": 437,
                            "src": "1840:26:0",
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            },
                            "typeName": {
                                "id": 25,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "1840:7:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "value": null,
                            "visibility": "public"
                        },
                        {
                            "constant": false,
                            "id": 28,
                            "name": "releaseTime",
                            "nodeType": "VariableDeclaration",
                            "scope": 437,
                            "src": "1872:26:0",
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            },
                            "typeName": {
                                "id": 27,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "1872:7:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "value": null,
                            "visibility": "public"
                        },
                        {
                            "constant": false,
                            "id": 31,
                            "name": "ICOCompleted",
                            "nodeType": "VariableDeclaration",
                            "scope": 437,
                            "src": "1951:32:0",
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                            },
                            "typeName": {
                                "id": 29,
                                "name": "bool",
                                "nodeType": "ElementaryTypeName",
                                "src": "1951:4:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                }
                            },
                            "value": {
                                "argumentTypes": null,
                                "hexValue": "66616c7365",
                                "id": 30,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "bool",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1978:5:0",
                                "subdenomination": null,
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                },
                                "value": "false"
                            },
                            "visibility": "public"
                        },
                        {
                            "constant": false,
                            "id": 34,
                            "name": "ICOGoalReached",
                            "nodeType": "VariableDeclaration",
                            "scope": 437,
                            "src": "1989:34:0",
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                            },
                            "typeName": {
                                "id": 32,
                                "name": "bool",
                                "nodeType": "ElementaryTypeName",
                                "src": "1989:4:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                }
                            },
                            "value": {
                                "argumentTypes": null,
                                "hexValue": "66616c7365",
                                "id": 33,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "bool",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2018:5:0",
                                "subdenomination": null,
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                },
                                "value": "false"
                            },
                            "visibility": "public"
                        },
                        {
                            "constant": false,
                            "id": 38,
                            "name": "contributions",
                            "nodeType": "VariableDeclaration",
                            "scope": 437,
                            "src": "2090:49:0",
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                            },
                            "typeName": {
                                "id": 37,
                                "keyType": {
                                    "id": 35,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "2099:7:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    }
                                },
                                "nodeType": "Mapping",
                                "src": "2090:28:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                    "typeString": "mapping(address => uint256)"
                                },
                                "valueType": {
                                    "id": 36,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "2110:7:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    }
                                }
                            },
                            "value": null,
                            "visibility": "public"
                        },
                        {
                            "anonymous": false,
                            "documentation": "Events to track during CustomCrowsale operations",
                            "id": 44,
                            "name": "Contribution",
                            "nodeType": "EventDefinition",
                            "parameters": {
                                "id": 43,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 40,
                                        "indexed": false,
                                        "name": "_from",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 44,
                                        "src": "2239:13:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        },
                                        "typeName": {
                                            "id": 39,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2239:7:0",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    },
                                    {
                                        "constant": false,
                                        "id": 42,
                                        "indexed": false,
                                        "name": "_amount",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 44,
                                        "src": "2254:15:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 41,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2254:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "2238:32:0"
                            },
                            "src": "2220:51:0"
                        },
                        {
                            "anonymous": false,
                            "documentation": null,
                            "id": 50,
                            "name": "ClaimContribution",
                            "nodeType": "EventDefinition",
                            "parameters": {
                                "id": 49,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 46,
                                        "indexed": false,
                                        "name": "_from",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 50,
                                        "src": "2300:13:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        },
                                        "typeName": {
                                            "id": 45,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2300:7:0",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    },
                                    {
                                        "constant": false,
                                        "id": 48,
                                        "indexed": false,
                                        "name": "_amount",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 50,
                                        "src": "2315:15:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 47,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2315:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "2299:32:0"
                            },
                            "src": "2276:56:0"
                        },
                        {
                            "anonymous": false,
                            "documentation": null,
                            "id": 56,
                            "name": "CloseCrowdsale",
                            "nodeType": "EventDefinition",
                            "parameters": {
                                "id": 55,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 52,
                                        "indexed": false,
                                        "name": "_from",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 56,
                                        "src": "2358:13:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        },
                                        "typeName": {
                                            "id": 51,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2358:7:0",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    },
                                    {
                                        "constant": false,
                                        "id": 54,
                                        "indexed": false,
                                        "name": "time",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 56,
                                        "src": "2373:12:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 53,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2373:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "2357:29:0"
                            },
                            "src": "2337:50:0"
                        },
                        {
                            "anonymous": false,
                            "documentation": null,
                            "id": 64,
                            "name": "claimContributionPreTx",
                            "nodeType": "EventDefinition",
                            "parameters": {
                                "id": 63,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 58,
                                        "indexed": false,
                                        "name": "_sender",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 64,
                                        "src": "2421:15:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        },
                                        "typeName": {
                                            "id": 57,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2421:7:0",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    },
                                    {
                                        "constant": false,
                                        "id": 60,
                                        "indexed": false,
                                        "name": "_claimedTokens",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 64,
                                        "src": "2438:22:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 59,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2438:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    },
                                    {
                                        "constant": false,
                                        "id": 62,
                                        "indexed": false,
                                        "name": "_balance",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 64,
                                        "src": "2462:16:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 61,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2462:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "2420:59:0"
                            },
                            "src": "2392:88:0"
                        },
                        {
                            "body": {
                                "id": 79,
                                "nodeType": "Block",
                                "src": "2666:175:0",
                                "statements": [
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "id": 67,
                                                    "name": "ICOCompleted",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31,
                                                    "src": "2684:12:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                {
                                                    "argumentTypes": null,
                                                    "hexValue": "437573746f6d43726f776473616c65204e6f7420436f6d706c65746564",
                                                    "id": 68,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "string",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "2698:31:0",
                                                    "subdenomination": null,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_stringliteral_bc63a2cb799f16a5a71f5d83415ae23f1fbe584ced4a3da5e67d6815e1c33f8e",
                                                        "typeString": "literal_string \"CustomCrowdsale Not Completed\""
                                                    },
                                                    "value": "CustomCrowdsale Not Completed"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_stringliteral_bc63a2cb799f16a5a71f5d83415ae23f1fbe584ced4a3da5e67d6815e1c33f8e",
                                                        "typeString": "literal_string \"CustomCrowdsale Not Completed\""
                                                    }
                                                ],
                                                "id": 66,
                                                "name": "require",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [
                                                    1344,
                                                    1345
                                                ],
                                                "referencedDeclaration": 1345,
                                                "src": "2676:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                    "typeString": "function (bool,string memory) pure"
                                                }
                                            },
                                            "id": 69,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "2676:54:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$__$",
                                                "typeString": "tuple()"
                                            }
                                        },
                                        "id": 70,
                                        "nodeType": "ExpressionStatement",
                                        "src": "2676:54:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 74,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "argumentTypes": null,
                                                        "id": 72,
                                                        "name": "now",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1343,
                                                        "src": "2748:3:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": ">=",
                                                    "rightExpression": {
                                                        "argumentTypes": null,
                                                        "id": 73,
                                                        "name": "releaseTime",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 28,
                                                        "src": "2755:11:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "2748:18:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                {
                                                    "argumentTypes": null,
                                                    "hexValue": "437573746f6d43726f776473616c652072656c65617365732074686520437573746f6d546f6b656e7320326d696e206166746572",
                                                    "id": 75,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "string",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "2768:54:0",
                                                    "subdenomination": null,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_stringliteral_78396f686c201bda51e0794421d0bedb9d7bbe83bc52ddf421a499b6291261e8",
                                                        "typeString": "literal_string \"CustomCrowdsale releases the CustomTokens 2min after\""
                                                    },
                                                    "value": "CustomCrowdsale releases the CustomTokens 2min after"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_stringliteral_78396f686c201bda51e0794421d0bedb9d7bbe83bc52ddf421a499b6291261e8",
                                                        "typeString": "literal_string \"CustomCrowdsale releases the CustomTokens 2min after\""
                                                    }
                                                ],
                                                "id": 71,
                                                "name": "require",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [
                                                    1344,
                                                    1345
                                                ],
                                                "referencedDeclaration": 1345,
                                                "src": "2740:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                    "typeString": "function (bool,string memory) pure"
                                                }
                                            },
                                            "id": 76,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "2740:83:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$__$",
                                                "typeString": "tuple()"
                                            }
                                        },
                                        "id": 77,
                                        "nodeType": "ExpressionStatement",
                                        "src": "2740:83:0"
                                    },
                                    {
                                        "id": 78,
                                        "nodeType": "PlaceholderStatement",
                                        "src": "2833:1:0"
                                    }
                                ]
                            },
                            "documentation": null,
                            "id": 80,
                            "name": "whenICOCompleted",
                            "nodeType": "ModifierDefinition",
                            "parameters": {
                                "id": 65,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "2666:0:0"
                            },
                            "src": "2640:201:0",
                            "visibility": "internal"
                        },
                        {
                            "body": {
                                "id": 99,
                                "nodeType": "Block",
                                "src": "2983:103:0",
                                "statements": [
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 89,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftHandSide": {
                                                "argumentTypes": null,
                                                "id": 87,
                                                "name": "ICOCompleted",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31,
                                                "src": "2993:12:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "nodeType": "Assignment",
                                            "operator": "=",
                                            "rightHandSide": {
                                                "argumentTypes": null,
                                                "hexValue": "74727565",
                                                "id": 88,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "bool",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3008:4:0",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                "value": "true"
                                            },
                                            "src": "2993:19:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "id": 90,
                                        "nodeType": "ExpressionStatement",
                                        "src": "2993:19:0"
                                    },
                                    {
                                        "eventCall": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 92,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1341,
                                                        "src": "3042:3:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 93,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "sender",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": null,
                                                    "src": "3042:10:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address_payable",
                                                        "typeString": "address payable"
                                                    }
                                                },
                                                {
                                                    "argumentTypes": null,
                                                    "id": 94,
                                                    "name": "now",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 1343,
                                                    "src": "3054:3:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_address_payable",
                                                        "typeString": "address payable"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                ],
                                                "id": 91,
                                                "name": "CloseCrowdsale",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 56,
                                                "src": "3027:14:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                                    "typeString": "function (address,uint256)"
                                                }
                                            },
                                            "id": 95,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "3027:31:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$__$",
                                                "typeString": "tuple()"
                                            }
                                        },
                                        "id": 96,
                                        "nodeType": "EmitStatement",
                                        "src": "3022:36:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "hexValue": "74727565",
                                            "id": 97,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "bool",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "3075:4:0",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "value": "true"
                                        },
                                        "functionReturnParameters": 86,
                                        "id": 98,
                                        "nodeType": "Return",
                                        "src": "3068:11:0"
                                    }
                                ]
                            },
                            "documentation": null,
                            "id": 100,
                            "implemented": true,
                            "kind": "function",
                            "modifiers": [
                                {
                                    "arguments": null,
                                    "id": 83,
                                    "modifierName": {
                                        "argumentTypes": null,
                                        "id": 82,
                                        "name": "onlyOwner",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 1132,
                                        "src": "2958:9:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_modifier$__$",
                                            "typeString": "modifier ()"
                                        }
                                    },
                                    "nodeType": "ModifierInvocation",
                                    "src": "2958:9:0"
                                }
                            ],
                            "name": "closeICO",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 81,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "2948:2:0"
                            },
                            "returnParameters": {
                                "id": 86,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 85,
                                        "name": "",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 100,
                                        "src": "2977:4:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "typeName": {
                                            "id": 84,
                                            "name": "bool",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2977:4:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "2976:6:0"
                            },
                            "scope": 437,
                            "src": "2931:155:0",
                            "stateMutability": "nonpayable",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        {
                            "body": {
                                "id": 190,
                                "nodeType": "Block",
                                "src": "3415:1059:0",
                                "statements": [
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 121,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftHandSide": {
                                                "argumentTypes": null,
                                                "id": 119,
                                                "name": "rate",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 16,
                                                "src": "3425:4:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "Assignment",
                                            "operator": "=",
                                            "rightHandSide": {
                                                "argumentTypes": null,
                                                "id": 120,
                                                "name": "_rate",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 102,
                                                "src": "3432:5:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "3425:12:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 122,
                                        "nodeType": "ExpressionStatement",
                                        "src": "3425:12:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 125,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftHandSide": {
                                                "argumentTypes": null,
                                                "id": 123,
                                                "name": "cap",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 18,
                                                "src": "3447:3:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "Assignment",
                                            "operator": "=",
                                            "rightHandSide": {
                                                "argumentTypes": null,
                                                "id": 124,
                                                "name": "_cap",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 104,
                                                "src": "3453:4:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "3447:10:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 126,
                                        "nodeType": "ExpressionStatement",
                                        "src": "3447:10:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 129,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftHandSide": {
                                                "argumentTypes": null,
                                                "id": 127,
                                                "name": "contributionGoal",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 20,
                                                "src": "3467:16:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "Assignment",
                                            "operator": "=",
                                            "rightHandSide": {
                                                "argumentTypes": null,
                                                "id": 128,
                                                "name": "_contributionGoal",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 106,
                                                "src": "3486:17:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "3467:36:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 130,
                                        "nodeType": "ExpressionStatement",
                                        "src": "3467:36:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 135,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftHandSide": {
                                                "argumentTypes": null,
                                                "id": 131,
                                                "name": "weth9",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 12,
                                                "src": "3513:5:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_WETH9_$955",
                                                    "typeString": "contract WETH9"
                                                }
                                            },
                                            "nodeType": "Assignment",
                                            "operator": "=",
                                            "rightHandSide": {
                                                "argumentTypes": null,
                                                "arguments": [
                                                    {
                                                        "argumentTypes": null,
                                                        "id": 133,
                                                        "name": "_wethAddr",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 108,
                                                        "src": "3527:9:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address_payable",
                                                            "typeString": "address payable"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_address_payable",
                                                            "typeString": "address payable"
                                                        }
                                                    ],
                                                    "id": 132,
                                                    "name": "WETH9",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 955,
                                                    "src": "3521:5:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_WETH9_$955_$",
                                                        "typeString": "type(contract WETH9)"
                                                    }
                                                },
                                                "id": 134,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3521:16:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_WETH9_$955",
                                                    "typeString": "contract WETH9"
                                                }
                                            },
                                            "src": "3513:24:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_WETH9_$955",
                                                "typeString": "contract WETH9"
                                            }
                                        },
                                        "id": 136,
                                        "nodeType": "ExpressionStatement",
                                        "src": "3513:24:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 141,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftHandSide": {
                                                "argumentTypes": null,
                                                "id": 137,
                                                "name": "token",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 14,
                                                "src": "3547:5:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_CustomToken_$709",
                                                    "typeString": "contract CustomToken"
                                                }
                                            },
                                            "nodeType": "Assignment",
                                            "operator": "=",
                                            "rightHandSide": {
                                                "argumentTypes": null,
                                                "arguments": [
                                                    {
                                                        "argumentTypes": null,
                                                        "id": 139,
                                                        "name": "_tokenAddr",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 110,
                                                        "src": "3567:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    ],
                                                    "id": 138,
                                                    "name": "CustomToken",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 709,
                                                    "src": "3555:11:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_contract$_CustomToken_$709_$",
                                                        "typeString": "type(contract CustomToken)"
                                                    }
                                                },
                                                "id": 140,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3555:23:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_CustomToken_$709",
                                                    "typeString": "contract CustomToken"
                                                }
                                            },
                                            "src": "3547:31:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_CustomToken_$709",
                                                "typeString": "contract CustomToken"
                                            }
                                        },
                                        "id": 142,
                                        "nodeType": "ExpressionStatement",
                                        "src": "3547:31:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 145,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftHandSide": {
                                                "argumentTypes": null,
                                                "id": 143,
                                                "name": "startingTime",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 24,
                                                "src": "3588:12:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "Assignment",
                                            "operator": "=",
                                            "rightHandSide": {
                                                "argumentTypes": null,
                                                "id": 144,
                                                "name": "_staringTime",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 112,
                                                "src": "3603:12:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "3588:27:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 146,
                                        "nodeType": "ExpressionStatement",
                                        "src": "3588:27:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 149,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftHandSide": {
                                                "argumentTypes": null,
                                                "id": 147,
                                                "name": "closingTime",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26,
                                                "src": "3625:11:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "Assignment",
                                            "operator": "=",
                                            "rightHandSide": {
                                                "argumentTypes": null,
                                                "id": 148,
                                                "name": "_closingTime",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 114,
                                                "src": "3639:12:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "3625:26:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 150,
                                        "nodeType": "ExpressionStatement",
                                        "src": "3625:26:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 153,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftHandSide": {
                                                "argumentTypes": null,
                                                "id": 151,
                                                "name": "releaseTime",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 28,
                                                "src": "3661:11:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "Assignment",
                                            "operator": "=",
                                            "rightHandSide": {
                                                "argumentTypes": null,
                                                "id": 152,
                                                "name": "_releaseTime",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 116,
                                                "src": "3675:12:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "3661:26:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 154,
                                        "nodeType": "ExpressionStatement",
                                        "src": "3661:26:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 158,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "argumentTypes": null,
                                                        "id": 156,
                                                        "name": "startingTime",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24,
                                                        "src": "3898:12:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": ">",
                                                    "rightExpression": {
                                                        "argumentTypes": null,
                                                        "id": 157,
                                                        "name": "now",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1343,
                                                        "src": "3913:3:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "3898:18:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                {
                                                    "argumentTypes": null,
                                                    "hexValue": "53746172696e6754696d65206265666f7265204e6f77",
                                                    "id": 159,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "string",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "3918:24:0",
                                                    "subdenomination": null,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_stringliteral_4843e7d2fa9786eb7b775f3199000499883303e373c8fa36badcd2fe6face972",
                                                        "typeString": "literal_string \"StaringTime before Now\""
                                                    },
                                                    "value": "StaringTime before Now"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_stringliteral_4843e7d2fa9786eb7b775f3199000499883303e373c8fa36badcd2fe6face972",
                                                        "typeString": "literal_string \"StaringTime before Now\""
                                                    }
                                                ],
                                                "id": 155,
                                                "name": "require",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [
                                                    1344,
                                                    1345
                                                ],
                                                "referencedDeclaration": 1345,
                                                "src": "3890:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                    "typeString": "function (bool,string memory) pure"
                                                }
                                            },
                                            "id": 160,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "3890:53:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$__$",
                                                "typeString": "tuple()"
                                            }
                                        },
                                        "id": 161,
                                        "nodeType": "ExpressionStatement",
                                        "src": "3890:53:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 165,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "argumentTypes": null,
                                                        "id": 163,
                                                        "name": "closingTime",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 26,
                                                        "src": "4023:11:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": ">",
                                                    "rightExpression": {
                                                        "argumentTypes": null,
                                                        "id": 164,
                                                        "name": "startingTime",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 24,
                                                        "src": "4037:12:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "4023:26:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                {
                                                    "argumentTypes": null,
                                                    "hexValue": "53746172696e6754696d652074696d6520616674657220436c6f73696e6754696d65",
                                                    "id": 166,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "string",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "4051:36:0",
                                                    "subdenomination": null,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_stringliteral_e5127699ceabc4a5a0a8e1fa6a728ee51f17250e34fb6cdbaa9ee689b155fcae",
                                                        "typeString": "literal_string \"StaringTime time after ClosingTime\""
                                                    },
                                                    "value": "StaringTime time after ClosingTime"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_stringliteral_e5127699ceabc4a5a0a8e1fa6a728ee51f17250e34fb6cdbaa9ee689b155fcae",
                                                        "typeString": "literal_string \"StaringTime time after ClosingTime\""
                                                    }
                                                ],
                                                "id": 162,
                                                "name": "require",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [
                                                    1344,
                                                    1345
                                                ],
                                                "referencedDeclaration": 1345,
                                                "src": "4015:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                    "typeString": "function (bool,string memory) pure"
                                                }
                                            },
                                            "id": 167,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "4015:73:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$__$",
                                                "typeString": "tuple()"
                                            }
                                        },
                                        "id": 168,
                                        "nodeType": "ExpressionStatement",
                                        "src": "4015:73:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 172,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "argumentTypes": null,
                                                        "id": 170,
                                                        "name": "cap",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 18,
                                                        "src": "4152:3:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": ">",
                                                    "rightExpression": {
                                                        "argumentTypes": null,
                                                        "hexValue": "30",
                                                        "id": 171,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "4158:1:0",
                                                        "subdenomination": null,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_0_by_1",
                                                            "typeString": "int_const 0"
                                                        },
                                                        "value": "0"
                                                    },
                                                    "src": "4152:7:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                {
                                                    "argumentTypes": null,
                                                    "hexValue": "4361702056616c7565206d7573742062652061626f76652030",
                                                    "id": 173,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "string",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "4161:27:0",
                                                    "subdenomination": null,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_stringliteral_d46d24c0cdda4b7b6eecd347e7f1ec4e3784ba9d8ebae62f165198db1d4cbd8b",
                                                        "typeString": "literal_string \"Cap Value must be above 0\""
                                                    },
                                                    "value": "Cap Value must be above 0"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_stringliteral_d46d24c0cdda4b7b6eecd347e7f1ec4e3784ba9d8ebae62f165198db1d4cbd8b",
                                                        "typeString": "literal_string \"Cap Value must be above 0\""
                                                    }
                                                ],
                                                "id": 169,
                                                "name": "require",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [
                                                    1344,
                                                    1345
                                                ],
                                                "referencedDeclaration": 1345,
                                                "src": "4144:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                    "typeString": "function (bool,string memory) pure"
                                                }
                                            },
                                            "id": 174,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "4144:45:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$__$",
                                                "typeString": "tuple()"
                                            }
                                        },
                                        "id": 175,
                                        "nodeType": "ExpressionStatement",
                                        "src": "4144:45:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 179,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "argumentTypes": null,
                                                        "id": 177,
                                                        "name": "contributionGoal",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 20,
                                                        "src": "4269:16:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": ">",
                                                    "rightExpression": {
                                                        "argumentTypes": null,
                                                        "hexValue": "30",
                                                        "id": 178,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "4288:1:0",
                                                        "subdenomination": null,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_0_by_1",
                                                            "typeString": "int_const 0"
                                                        },
                                                        "value": "0"
                                                    },
                                                    "src": "4269:20:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                {
                                                    "argumentTypes": null,
                                                    "hexValue": "476f616c2056616c7565206d7573742062652061626f76652030",
                                                    "id": 180,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "string",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "4291:28:0",
                                                    "subdenomination": null,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_stringliteral_3441328f8b3789097759bcc19eec1b29892c912f0f25337945decbd6c1ee3b92",
                                                        "typeString": "literal_string \"Goal Value must be above 0\""
                                                    },
                                                    "value": "Goal Value must be above 0"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_stringliteral_3441328f8b3789097759bcc19eec1b29892c912f0f25337945decbd6c1ee3b92",
                                                        "typeString": "literal_string \"Goal Value must be above 0\""
                                                    }
                                                ],
                                                "id": 176,
                                                "name": "require",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [
                                                    1344,
                                                    1345
                                                ],
                                                "referencedDeclaration": 1345,
                                                "src": "4261:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                    "typeString": "function (bool,string memory) pure"
                                                }
                                            },
                                            "id": 181,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "4261:59:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$__$",
                                                "typeString": "tuple()"
                                            }
                                        },
                                        "id": 182,
                                        "nodeType": "ExpressionStatement",
                                        "src": "4261:59:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 186,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "argumentTypes": null,
                                                        "id": 184,
                                                        "name": "contributionGoal",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 20,
                                                        "src": "4406:16:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": ">",
                                                    "rightExpression": {
                                                        "argumentTypes": null,
                                                        "id": 185,
                                                        "name": "cap",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 18,
                                                        "src": "4425:3:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "4406:22:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                {
                                                    "argumentTypes": null,
                                                    "hexValue": "476f616c2076616c7565206d7573742062652061626f7665206361702056616c7565",
                                                    "id": 187,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "string",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "4430:36:0",
                                                    "subdenomination": null,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_stringliteral_918a24d87cf24502cd87b1a92b43fe0cb0d8493759267a9a815f60de13a8109e",
                                                        "typeString": "literal_string \"Goal value must be above cap Value\""
                                                    },
                                                    "value": "Goal value must be above cap Value"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_stringliteral_918a24d87cf24502cd87b1a92b43fe0cb0d8493759267a9a815f60de13a8109e",
                                                        "typeString": "literal_string \"Goal value must be above cap Value\""
                                                    }
                                                ],
                                                "id": 183,
                                                "name": "require",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [
                                                    1344,
                                                    1345
                                                ],
                                                "referencedDeclaration": 1345,
                                                "src": "4398:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                    "typeString": "function (bool,string memory) pure"
                                                }
                                            },
                                            "id": 188,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "4398:69:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$__$",
                                                "typeString": "tuple()"
                                            }
                                        },
                                        "id": 189,
                                        "nodeType": "ExpressionStatement",
                                        "src": "4398:69:0"
                                    }
                                ]
                            },
                            "documentation": null,
                            "id": 191,
                            "implemented": true,
                            "kind": "constructor",
                            "modifiers": [],
                            "name": "",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 117,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 102,
                                        "name": "_rate",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 191,
                                        "src": "3239:13:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 101,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "3239:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    },
                                    {
                                        "constant": false,
                                        "id": 104,
                                        "name": "_cap",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 191,
                                        "src": "3254:12:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 103,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "3254:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    },
                                    {
                                        "constant": false,
                                        "id": 106,
                                        "name": "_contributionGoal",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 191,
                                        "src": "3268:25:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 105,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "3268:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    },
                                    {
                                        "constant": false,
                                        "id": 108,
                                        "name": "_wethAddr",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 191,
                                        "src": "3295:25:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address_payable",
                                            "typeString": "address payable"
                                        },
                                        "typeName": {
                                            "id": 107,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "3295:15:0",
                                            "stateMutability": "payable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address_payable",
                                                "typeString": "address payable"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    },
                                    {
                                        "constant": false,
                                        "id": 110,
                                        "name": "_tokenAddr",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 191,
                                        "src": "3322:18:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        },
                                        "typeName": {
                                            "id": 109,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "3322:7:0",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    },
                                    {
                                        "constant": false,
                                        "id": 112,
                                        "name": "_staringTime",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 191,
                                        "src": "3342:20:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 111,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "3342:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    },
                                    {
                                        "constant": false,
                                        "id": 114,
                                        "name": "_closingTime",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 191,
                                        "src": "3364:20:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 113,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "3364:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    },
                                    {
                                        "constant": false,
                                        "id": 116,
                                        "name": "_releaseTime",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 191,
                                        "src": "3386:20:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 115,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "3386:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "3238:169:0"
                            },
                            "returnParameters": {
                                "id": 118,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "3415:0:0"
                            },
                            "scope": 437,
                            "src": "3227:1247:0",
                            "stateMutability": "nonpayable",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        {
                            "body": {
                                "id": 288,
                                "nodeType": "Block",
                                "src": "4586:1318:0",
                                "statements": [
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 201,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "argumentTypes": null,
                                                        "id": 199,
                                                        "name": "_contribution",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 193,
                                                        "src": "4666:13:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "<",
                                                    "rightExpression": {
                                                        "argumentTypes": null,
                                                        "id": 200,
                                                        "name": "cap",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 18,
                                                        "src": "4682:3:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "4666:19:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                {
                                                    "argumentTypes": null,
                                                    "hexValue": "437573746f6d43726f776473616c656420627579546f6b656e282920686173206578636565642074686520636170",
                                                    "id": 202,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "string",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "4687:48:0",
                                                    "subdenomination": null,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_stringliteral_1acbaacaec23e83bbfb3ba0016bea4257fa177320029b37ad62e52bd0d3d9801",
                                                        "typeString": "literal_string \"CustomCrowdsaled buyToken() has exceed the cap\""
                                                    },
                                                    "value": "CustomCrowdsaled buyToken() has exceed the cap"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_stringliteral_1acbaacaec23e83bbfb3ba0016bea4257fa177320029b37ad62e52bd0d3d9801",
                                                        "typeString": "literal_string \"CustomCrowdsaled buyToken() has exceed the cap\""
                                                    }
                                                ],
                                                "id": 198,
                                                "name": "require",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [
                                                    1344,
                                                    1345
                                                ],
                                                "referencedDeclaration": 1345,
                                                "src": "4658:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                    "typeString": "function (bool,string memory) pure"
                                                }
                                            },
                                            "id": 203,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "4658:78:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$__$",
                                                "typeString": "tuple()"
                                            }
                                        },
                                        "id": 204,
                                        "nodeType": "ExpressionStatement",
                                        "src": "4658:78:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 208,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "argumentTypes": null,
                                                        "id": 206,
                                                        "name": "currentContribution",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 22,
                                                        "src": "4836:19:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "<",
                                                    "rightExpression": {
                                                        "argumentTypes": null,
                                                        "id": 207,
                                                        "name": "contributionGoal",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 20,
                                                        "src": "4858:16:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "4836:38:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                {
                                                    "argumentTypes": null,
                                                    "hexValue": "437573746f6d43726f776473616c6520686173207375636365656420696e2074686520707572737565206f662074686520636f6e747269627574696f6e476f616c",
                                                    "id": 209,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "string",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "4876:67:0",
                                                    "subdenomination": null,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_stringliteral_0a0b61fb208f630831051dbaba04adb1159a198cd4a4a4748a6ec0dc6811a1c2",
                                                        "typeString": "literal_string \"CustomCrowdsale has succeed in the pursue of the contributionGoal\""
                                                    },
                                                    "value": "CustomCrowdsale has succeed in the pursue of the contributionGoal"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_stringliteral_0a0b61fb208f630831051dbaba04adb1159a198cd4a4a4748a6ec0dc6811a1c2",
                                                        "typeString": "literal_string \"CustomCrowdsale has succeed in the pursue of the contributionGoal\""
                                                    }
                                                ],
                                                "id": 205,
                                                "name": "require",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [
                                                    1344,
                                                    1345
                                                ],
                                                "referencedDeclaration": 1345,
                                                "src": "4828:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                    "typeString": "function (bool,string memory) pure"
                                                }
                                            },
                                            "id": 210,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "4828:116:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$__$",
                                                "typeString": "tuple()"
                                            }
                                        },
                                        "id": 211,
                                        "nodeType": "ExpressionStatement",
                                        "src": "4828:116:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 215,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "argumentTypes": null,
                                                        "id": 213,
                                                        "name": "_contribution",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 193,
                                                        "src": "5043:13:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": ">=",
                                                    "rightExpression": {
                                                        "argumentTypes": null,
                                                        "hexValue": "30",
                                                        "id": 214,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "5060:1:0",
                                                        "subdenomination": null,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_0_by_1",
                                                            "typeString": "int_const 0"
                                                        },
                                                        "value": "0"
                                                    },
                                                    "src": "5043:18:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                {
                                                    "argumentTypes": null,
                                                    "hexValue": "636f6e747269627574696f6e20706172616d65746572206d7573742062652061626f76652030",
                                                    "id": 216,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "string",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "5062:40:0",
                                                    "subdenomination": null,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_stringliteral_87a8cdea2b41e32e04124c2e578e9687d8aef5991ebf718d0b7ed42a7dc0c879",
                                                        "typeString": "literal_string \"contribution parameter must be above 0\""
                                                    },
                                                    "value": "contribution parameter must be above 0"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_stringliteral_87a8cdea2b41e32e04124c2e578e9687d8aef5991ebf718d0b7ed42a7dc0c879",
                                                        "typeString": "literal_string \"contribution parameter must be above 0\""
                                                    }
                                                ],
                                                "id": 212,
                                                "name": "require",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [
                                                    1344,
                                                    1345
                                                ],
                                                "referencedDeclaration": 1345,
                                                "src": "5035:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                    "typeString": "function (bool,string memory) pure"
                                                }
                                            },
                                            "id": 217,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "5035:68:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$__$",
                                                "typeString": "tuple()"
                                            }
                                        },
                                        "id": 218,
                                        "nodeType": "ExpressionStatement",
                                        "src": "5035:68:0"
                                    },
                                    {
                                        "assignments": [
                                            220
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 220,
                                                "name": "aux",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 288,
                                                "src": "5114:11:0",
                                                "stateVariable": false,
                                                "storageLocation": "default",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "typeName": {
                                                    "id": 219,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "5114:7:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "value": null,
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 222,
                                        "initialValue": {
                                            "argumentTypes": null,
                                            "hexValue": "30",
                                            "id": 221,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "5128:1:0",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "5114:15:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "id": 226,
                                                    "name": "_contribution",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 193,
                                                    "src": "5147:13:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 223,
                                                    "name": "aux",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 220,
                                                    "src": "5139:3:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 225,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "add",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 982,
                                                "src": "5139:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 227,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "5139:22:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 228,
                                        "nodeType": "ExpressionStatement",
                                        "src": "5139:22:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "id": 232,
                                                    "name": "currentContribution",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 22,
                                                    "src": "5179:19:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 229,
                                                    "name": "aux",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 220,
                                                    "src": "5171:3:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 231,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "add",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 982,
                                                "src": "5171:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 233,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "5171:28:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 234,
                                        "nodeType": "ExpressionStatement",
                                        "src": "5171:28:0"
                                    },
                                    {
                                        "condition": {
                                            "argumentTypes": null,
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 237,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "argumentTypes": null,
                                                "id": 235,
                                                "name": "aux",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 220,
                                                "src": "5350:3:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": ">",
                                            "rightExpression": {
                                                "argumentTypes": null,
                                                "id": 236,
                                                "name": "contributionGoal",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 20,
                                                "src": "5356:16:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "5350:22:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "falseBody": null,
                                        "id": 246,
                                        "nodeType": "IfStatement",
                                        "src": "5346:110:0",
                                        "trueBody": {
                                            "id": 245,
                                            "nodeType": "Block",
                                            "src": "5374:82:0",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 243,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftHandSide": {
                                                            "argumentTypes": null,
                                                            "id": 238,
                                                            "name": "_contribution",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 193,
                                                            "src": "5388:13:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "Assignment",
                                                        "operator": "=",
                                                        "rightHandSide": {
                                                            "argumentTypes": null,
                                                            "arguments": [
                                                                {
                                                                    "argumentTypes": null,
                                                                    "id": 241,
                                                                    "name": "currentContribution",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 22,
                                                                    "src": "5425:19:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "argumentTypes": null,
                                                                    "id": 239,
                                                                    "name": "contributionGoal",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 20,
                                                                    "src": "5404:16:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                "id": 240,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberName": "sub",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": 1007,
                                                                "src": "5404:20:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                                }
                                                            },
                                                            "id": 242,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "5404:41:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "5388:57:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "id": 244,
                                                    "nodeType": "ExpressionStatement",
                                                    "src": "5388:57:0"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "arguments": [
                                                        {
                                                            "argumentTypes": null,
                                                            "expression": {
                                                                "argumentTypes": null,
                                                                "id": 250,
                                                                "name": "msg",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 1341,
                                                                "src": "5547:3:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_message",
                                                                    "typeString": "msg"
                                                                }
                                                            },
                                                            "id": 251,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberName": "sender",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": null,
                                                            "src": "5547:10:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address_payable",
                                                                "typeString": "address payable"
                                                            }
                                                        },
                                                        {
                                                            "argumentTypes": null,
                                                            "arguments": [
                                                                {
                                                                    "argumentTypes": null,
                                                                    "id": 253,
                                                                    "name": "this",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 1367,
                                                                    "src": "5567:4:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_contract$_CustomCrowdsale_$437",
                                                                        "typeString": "contract CustomCrowdsale"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_contract$_CustomCrowdsale_$437",
                                                                        "typeString": "contract CustomCrowdsale"
                                                                    }
                                                                ],
                                                                "id": 252,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "5559:7:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_address_$",
                                                                    "typeString": "type(address)"
                                                                },
                                                                "typeName": "address"
                                                            },
                                                            "id": 254,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "5559:13:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        {
                                                            "argumentTypes": null,
                                                            "id": 255,
                                                            "name": "_contribution",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 193,
                                                            "src": "5574:13:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_address_payable",
                                                                "typeString": "address payable"
                                                            },
                                                            {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            },
                                                            {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "id": 248,
                                                            "name": "weth9",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 12,
                                                            "src": "5528:5:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_contract$_WETH9_$955",
                                                                "typeString": "contract WETH9"
                                                            }
                                                        },
                                                        "id": 249,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "transferFrom",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 954,
                                                        "src": "5528:18:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                                                            "typeString": "function (address,address,uint256) external returns (bool)"
                                                        }
                                                    },
                                                    "id": 256,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "5528:60:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                {
                                                    "argumentTypes": null,
                                                    "hexValue": "7472616e7366657246726f6d28292057657468657220686173204661696c6564",
                                                    "id": 257,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "string",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "5590:34:0",
                                                    "subdenomination": null,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_stringliteral_544afac978658e7a1ca8d3a1e463a69f3ea109b2803104396996325c5d44886d",
                                                        "typeString": "literal_string \"transferFrom() Wether has Failed\""
                                                    },
                                                    "value": "transferFrom() Wether has Failed"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_stringliteral_544afac978658e7a1ca8d3a1e463a69f3ea109b2803104396996325c5d44886d",
                                                        "typeString": "literal_string \"transferFrom() Wether has Failed\""
                                                    }
                                                ],
                                                "id": 247,
                                                "name": "require",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [
                                                    1344,
                                                    1345
                                                ],
                                                "referencedDeclaration": 1345,
                                                "src": "5520:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                    "typeString": "function (bool,string memory) pure"
                                                }
                                            },
                                            "id": 258,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "5520:105:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$__$",
                                                "typeString": "tuple()"
                                            }
                                        },
                                        "id": 259,
                                        "nodeType": "ExpressionStatement",
                                        "src": "5520:105:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 265,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftHandSide": {
                                                "argumentTypes": null,
                                                "id": 260,
                                                "name": "currentContribution",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 22,
                                                "src": "5635:19:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "Assignment",
                                            "operator": "=",
                                            "rightHandSide": {
                                                "argumentTypes": null,
                                                "arguments": [
                                                    {
                                                        "argumentTypes": null,
                                                        "id": 263,
                                                        "name": "_contribution",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 193,
                                                        "src": "5681:13:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 261,
                                                        "name": "currentContribution",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 22,
                                                        "src": "5657:19:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "id": 262,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "add",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 982,
                                                    "src": "5657:23:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                    }
                                                },
                                                "id": 264,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "5657:38:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "5635:60:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 266,
                                        "nodeType": "ExpressionStatement",
                                        "src": "5635:60:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 278,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftHandSide": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 267,
                                                    "name": "contributions",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 38,
                                                    "src": "5705:13:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                        "typeString": "mapping(address => uint256)"
                                                    }
                                                },
                                                "id": 270,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 268,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1341,
                                                        "src": "5719:3:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 269,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "sender",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": null,
                                                    "src": "5719:10:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address_payable",
                                                        "typeString": "address payable"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": true,
                                                "nodeType": "IndexAccess",
                                                "src": "5705:25:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "Assignment",
                                            "operator": "=",
                                            "rightHandSide": {
                                                "argumentTypes": null,
                                                "arguments": [
                                                    {
                                                        "argumentTypes": null,
                                                        "id": 276,
                                                        "name": "_contribution",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 193,
                                                        "src": "5763:13:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "baseExpression": {
                                                            "argumentTypes": null,
                                                            "id": 271,
                                                            "name": "contributions",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 38,
                                                            "src": "5733:13:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                                "typeString": "mapping(address => uint256)"
                                                            }
                                                        },
                                                        "id": 274,
                                                        "indexExpression": {
                                                            "argumentTypes": null,
                                                            "expression": {
                                                                "argumentTypes": null,
                                                                "id": 272,
                                                                "name": "msg",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 1341,
                                                                "src": "5747:3:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_message",
                                                                    "typeString": "msg"
                                                                }
                                                            },
                                                            "id": 273,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberName": "sender",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": null,
                                                            "src": "5747:10:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address_payable",
                                                                "typeString": "address payable"
                                                            }
                                                        },
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "IndexAccess",
                                                        "src": "5733:25:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "id": 275,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "add",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 982,
                                                    "src": "5733:29:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                    }
                                                },
                                                "id": 277,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "5733:44:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "5705:72:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 279,
                                        "nodeType": "ExpressionStatement",
                                        "src": "5705:72:0"
                                    },
                                    {
                                        "eventCall": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 281,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1341,
                                                        "src": "5850:3:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 282,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "sender",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": null,
                                                    "src": "5850:10:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address_payable",
                                                        "typeString": "address payable"
                                                    }
                                                },
                                                {
                                                    "argumentTypes": null,
                                                    "id": 283,
                                                    "name": "_contribution",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 193,
                                                    "src": "5862:13:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_address_payable",
                                                        "typeString": "address payable"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                ],
                                                "id": 280,
                                                "name": "Contribution",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 44,
                                                "src": "5837:12:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                                    "typeString": "function (address,uint256)"
                                                }
                                            },
                                            "id": 284,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "5837:39:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$__$",
                                                "typeString": "tuple()"
                                            }
                                        },
                                        "id": 285,
                                        "nodeType": "EmitStatement",
                                        "src": "5832:44:0"
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "hexValue": "74727565",
                                            "id": 286,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "bool",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "5893:4:0",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "value": "true"
                                        },
                                        "functionReturnParameters": 197,
                                        "id": 287,
                                        "nodeType": "Return",
                                        "src": "5886:11:0"
                                    }
                                ]
                            },
                            "documentation": null,
                            "id": 289,
                            "implemented": true,
                            "kind": "function",
                            "modifiers": [],
                            "name": "buyToken",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 194,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 193,
                                        "name": "_contribution",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 289,
                                        "src": "4541:21:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 192,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "4541:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "4540:23:0"
                            },
                            "returnParameters": {
                                "id": 197,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 196,
                                        "name": "",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 289,
                                        "src": "4580:4:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "typeName": {
                                            "id": 195,
                                            "name": "bool",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "4580:4:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "4579:6:0"
                            },
                            "scope": 437,
                            "src": "4523:1381:0",
                            "stateMutability": "nonpayable",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        {
                            "body": {
                                "id": 351,
                                "nodeType": "Block",
                                "src": "6024:713:0",
                                "statements": [
                                    {
                                        "assignments": [
                                            297
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 297,
                                                "name": "claimedTokens",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 351,
                                                "src": "6073:21:0",
                                                "stateVariable": false,
                                                "storageLocation": "default",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "typeName": {
                                                    "id": 296,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "6073:7:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "value": null,
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 305,
                                        "initialValue": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "id": 303,
                                                    "name": "rate",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 16,
                                                    "src": "6127:4:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 298,
                                                        "name": "contributions",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38,
                                                        "src": "6097:13:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                            "typeString": "mapping(address => uint256)"
                                                        }
                                                    },
                                                    "id": 301,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "id": 299,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 1341,
                                                            "src": "6111:3:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 300,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": null,
                                                        "src": "6111:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address_payable",
                                                            "typeString": "address payable"
                                                        }
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "IndexAccess",
                                                    "src": "6097:25:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 302,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "mul",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 1041,
                                                "src": "6097:29:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 304,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "6097:35:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "6073:59:0"
                                    },
                                    {
                                        "eventCall": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 307,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1341,
                                                        "src": "6211:3:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 308,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "sender",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": null,
                                                    "src": "6211:10:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address_payable",
                                                        "typeString": "address payable"
                                                    }
                                                },
                                                {
                                                    "argumentTypes": null,
                                                    "id": 309,
                                                    "name": "claimedTokens",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 297,
                                                    "src": "6223:13:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 310,
                                                        "name": "contributions",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38,
                                                        "src": "6238:13:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                            "typeString": "mapping(address => uint256)"
                                                        }
                                                    },
                                                    "id": 313,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "id": 311,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 1341,
                                                            "src": "6252:3:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 312,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": null,
                                                        "src": "6252:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address_payable",
                                                            "typeString": "address payable"
                                                        }
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "IndexAccess",
                                                    "src": "6238:25:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_address_payable",
                                                        "typeString": "address payable"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                ],
                                                "id": 306,
                                                "name": "claimContributionPreTx",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 64,
                                                "src": "6188:22:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                                                    "typeString": "function (address,uint256,uint256)"
                                                }
                                            },
                                            "id": 314,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "6188:76:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$__$",
                                                "typeString": "tuple()"
                                            }
                                        },
                                        "id": 315,
                                        "nodeType": "EmitStatement",
                                        "src": "6183:81:0"
                                    },
                                    {
                                        "condition": {
                                            "argumentTypes": null,
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 321,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 316,
                                                    "name": "contributions",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 38,
                                                    "src": "6277:13:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                        "typeString": "mapping(address => uint256)"
                                                    }
                                                },
                                                "id": 319,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 317,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 1341,
                                                        "src": "6291:3:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 318,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "sender",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": null,
                                                    "src": "6291:10:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address_payable",
                                                        "typeString": "address payable"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "6277:25:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "!=",
                                            "rightExpression": {
                                                "argumentTypes": null,
                                                "hexValue": "30",
                                                "id": 320,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "6306:1:0",
                                                "subdenomination": null,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "6277:30:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "falseBody": null,
                                        "id": 348,
                                        "nodeType": "IfStatement",
                                        "src": "6274:435:0",
                                        "trueBody": {
                                            "id": 347,
                                            "nodeType": "Block",
                                            "src": "6309:400:0",
                                            "statements": [
                                                {
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "arguments": [
                                                            {
                                                                "argumentTypes": null,
                                                                "arguments": [
                                                                    {
                                                                        "argumentTypes": null,
                                                                        "expression": {
                                                                            "argumentTypes": null,
                                                                            "id": 325,
                                                                            "name": "msg",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 1341,
                                                                            "src": "6401:3:0",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_magic_message",
                                                                                "typeString": "msg"
                                                                            }
                                                                        },
                                                                        "id": 326,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "memberName": "sender",
                                                                        "nodeType": "MemberAccess",
                                                                        "referencedDeclaration": null,
                                                                        "src": "6401:10:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_address_payable",
                                                                            "typeString": "address payable"
                                                                        }
                                                                    },
                                                                    {
                                                                        "argumentTypes": null,
                                                                        "id": 327,
                                                                        "name": "claimedTokens",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 297,
                                                                        "src": "6413:13:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_address_payable",
                                                                            "typeString": "address payable"
                                                                        },
                                                                        {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    ],
                                                                    "expression": {
                                                                        "argumentTypes": null,
                                                                        "id": 323,
                                                                        "name": "token",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 14,
                                                                        "src": "6386:5:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_contract$_CustomToken_$709",
                                                                            "typeString": "contract CustomToken"
                                                                        }
                                                                    },
                                                                    "id": 324,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberName": "transfer",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 598,
                                                                    "src": "6386:14:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                                                        "typeString": "function (address,uint256) external returns (bool)"
                                                                    }
                                                                },
                                                                "id": 328,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "6386:41:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bool",
                                                                    "typeString": "bool"
                                                                }
                                                            },
                                                            {
                                                                "argumentTypes": null,
                                                                "hexValue": "7472616e73666572282920437573746f6d546f6b656e7320686173204661696c6564",
                                                                "id": 329,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "string",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "6429:36:0",
                                                                "subdenomination": null,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_stringliteral_62fbf00381c2ba5a4612c9b16de0307ad6ec578ef0c8fb15f55dcb683e6157f6",
                                                                    "typeString": "literal_string \"transfer() CustomTokens has Failed\""
                                                                },
                                                                "value": "transfer() CustomTokens has Failed"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_bool",
                                                                    "typeString": "bool"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_stringliteral_62fbf00381c2ba5a4612c9b16de0307ad6ec578ef0c8fb15f55dcb683e6157f6",
                                                                    "typeString": "literal_string \"transfer() CustomTokens has Failed\""
                                                                }
                                                            ],
                                                            "id": 322,
                                                            "name": "require",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [
                                                                1344,
                                                                1345
                                                            ],
                                                            "referencedDeclaration": 1345,
                                                            "src": "6378:7:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                                "typeString": "function (bool,string memory) pure"
                                                            }
                                                        },
                                                        "id": 330,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "6378:88:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_tuple$__$",
                                                            "typeString": "tuple()"
                                                        }
                                                    },
                                                    "id": 331,
                                                    "nodeType": "ExpressionStatement",
                                                    "src": "6378:88:0"
                                                },
                                                {
                                                    "eventCall": {
                                                        "argumentTypes": null,
                                                        "arguments": [
                                                            {
                                                                "argumentTypes": null,
                                                                "expression": {
                                                                    "argumentTypes": null,
                                                                    "id": 333,
                                                                    "name": "msg",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 1341,
                                                                    "src": "6549:3:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_magic_message",
                                                                        "typeString": "msg"
                                                                    }
                                                                },
                                                                "id": 334,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberName": "sender",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": null,
                                                                "src": "6549:10:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address_payable",
                                                                    "typeString": "address payable"
                                                                }
                                                            },
                                                            {
                                                                "argumentTypes": null,
                                                                "id": 335,
                                                                "name": "claimedTokens",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 297,
                                                                "src": "6561:13:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_address_payable",
                                                                    "typeString": "address payable"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            ],
                                                            "id": 332,
                                                            "name": "ClaimContribution",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 50,
                                                            "src": "6531:17:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                                                "typeString": "function (address,uint256)"
                                                            }
                                                        },
                                                        "id": 336,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "6531:44:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_tuple$__$",
                                                            "typeString": "tuple()"
                                                        }
                                                    },
                                                    "id": 337,
                                                    "nodeType": "EmitStatement",
                                                    "src": "6526:49:0"
                                                },
                                                {
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "id": 343,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftHandSide": {
                                                            "argumentTypes": null,
                                                            "baseExpression": {
                                                                "argumentTypes": null,
                                                                "id": 338,
                                                                "name": "contributions",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 38,
                                                                "src": "6644:13:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                                    "typeString": "mapping(address => uint256)"
                                                                }
                                                            },
                                                            "id": 341,
                                                            "indexExpression": {
                                                                "argumentTypes": null,
                                                                "expression": {
                                                                    "argumentTypes": null,
                                                                    "id": 339,
                                                                    "name": "msg",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 1341,
                                                                    "src": "6658:3:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_magic_message",
                                                                        "typeString": "msg"
                                                                    }
                                                                },
                                                                "id": 340,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberName": "sender",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": null,
                                                                "src": "6658:10:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address_payable",
                                                                    "typeString": "address payable"
                                                                }
                                                            },
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": true,
                                                            "nodeType": "IndexAccess",
                                                            "src": "6644:25:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "Assignment",
                                                        "operator": "=",
                                                        "rightHandSide": {
                                                            "argumentTypes": null,
                                                            "hexValue": "30",
                                                            "id": 342,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "6672:1:0",
                                                            "subdenomination": null,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            },
                                                            "value": "0"
                                                        },
                                                        "src": "6644:29:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "id": 344,
                                                    "nodeType": "ExpressionStatement",
                                                    "src": "6644:29:0"
                                                },
                                                {
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "hexValue": "74727565",
                                                        "id": 345,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "bool",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "6694:4:0",
                                                        "subdenomination": null,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        },
                                                        "value": "true"
                                                    },
                                                    "functionReturnParameters": 295,
                                                    "id": 346,
                                                    "nodeType": "Return",
                                                    "src": "6687:11:0"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "hexValue": "66616c7365",
                                            "id": 349,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "bool",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "6725:5:0",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "value": "false"
                                        },
                                        "functionReturnParameters": 295,
                                        "id": 350,
                                        "nodeType": "Return",
                                        "src": "6718:12:0"
                                    }
                                ]
                            },
                            "documentation": null,
                            "id": 352,
                            "implemented": true,
                            "kind": "function",
                            "modifiers": [
                                {
                                    "arguments": null,
                                    "id": 292,
                                    "modifierName": {
                                        "argumentTypes": null,
                                        "id": 291,
                                        "name": "whenICOCompleted",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 80,
                                        "src": "5992:16:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_modifier$__$",
                                            "typeString": "modifier ()"
                                        }
                                    },
                                    "nodeType": "ModifierInvocation",
                                    "src": "5992:16:0"
                                }
                            ],
                            "name": "claimContribution",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 290,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "5982:2:0"
                            },
                            "returnParameters": {
                                "id": 295,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 294,
                                        "name": "",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 352,
                                        "src": "6018:4:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "typeName": {
                                            "id": 293,
                                            "name": "bool",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "6018:4:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "6017:6:0"
                            },
                            "scope": 437,
                            "src": "5956:781:0",
                            "stateMutability": "nonpayable",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        {
                            "body": {
                                "id": 361,
                                "nodeType": "Block",
                                "src": "6883:43:0",
                                "statements": [
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "arguments": [],
                                            "expression": {
                                                "argumentTypes": [],
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 357,
                                                    "name": "token",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 14,
                                                    "src": "6900:5:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_contract$_CustomToken_$709",
                                                        "typeString": "contract CustomToken"
                                                    }
                                                },
                                                "id": 358,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "totalSupply",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 553,
                                                "src": "6900:17:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_external_view$__$returns$_t_uint256_$",
                                                    "typeString": "function () view external returns (uint256)"
                                                }
                                            },
                                            "id": 359,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "6900:19:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "functionReturnParameters": 356,
                                        "id": 360,
                                        "nodeType": "Return",
                                        "src": "6893:26:0"
                                    }
                                ]
                            },
                            "documentation": "GETTERS",
                            "id": 362,
                            "implemented": true,
                            "kind": "function",
                            "modifiers": [],
                            "name": "getTokenTotalSupply",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 353,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "6851:2:0"
                            },
                            "returnParameters": {
                                "id": 356,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 355,
                                        "name": "",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 362,
                                        "src": "6874:7:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 354,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "6874:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "6873:9:0"
                            },
                            "scope": 437,
                            "src": "6823:103:0",
                            "stateMutability": "view",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        {
                            "body": {
                                "id": 371,
                                "nodeType": "Block",
                                "src": "7039:43:0",
                                "statements": [
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "arguments": [],
                                            "expression": {
                                                "argumentTypes": [],
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 367,
                                                    "name": "weth9",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 12,
                                                    "src": "7056:5:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_contract$_WETH9_$955",
                                                        "typeString": "contract WETH9"
                                                    }
                                                },
                                                "id": 368,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "totalSupply",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 831,
                                                "src": "7056:17:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_external_view$__$returns$_t_uint256_$",
                                                    "typeString": "function () view external returns (uint256)"
                                                }
                                            },
                                            "id": 369,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "7056:19:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "functionReturnParameters": 366,
                                        "id": 370,
                                        "nodeType": "Return",
                                        "src": "7049:26:0"
                                    }
                                ]
                            },
                            "documentation": null,
                            "id": 372,
                            "implemented": true,
                            "kind": "function",
                            "modifiers": [],
                            "name": "getWethTotalSupply",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 363,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "7006:2:0"
                            },
                            "returnParameters": {
                                "id": 366,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 365,
                                        "name": "",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 372,
                                        "src": "7030:7:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 364,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "7030:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "7029:9:0"
                            },
                            "scope": 437,
                            "src": "6979:103:0",
                            "stateMutability": "view",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        {
                            "body": {
                                "id": 379,
                                "nodeType": "Block",
                                "src": "7181:43:0",
                                "statements": [
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 377,
                                            "name": "currentContribution",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 22,
                                            "src": "7198:19:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "functionReturnParameters": 376,
                                        "id": 378,
                                        "nodeType": "Return",
                                        "src": "7191:26:0"
                                    }
                                ]
                            },
                            "documentation": null,
                            "id": 380,
                            "implemented": true,
                            "kind": "function",
                            "modifiers": [],
                            "name": "getCurrentContribution",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 373,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "7148:2:0"
                            },
                            "returnParameters": {
                                "id": 376,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 375,
                                        "name": "",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 380,
                                        "src": "7172:7:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 374,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "7172:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "7171:9:0"
                            },
                            "scope": 437,
                            "src": "7117:107:0",
                            "stateMutability": "view",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        {
                            "body": {
                                "id": 387,
                                "nodeType": "Block",
                                "src": "7322:28:0",
                                "statements": [
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 385,
                                            "name": "rate",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 16,
                                            "src": "7339:4:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "functionReturnParameters": 384,
                                        "id": 386,
                                        "nodeType": "Return",
                                        "src": "7332:11:0"
                                    }
                                ]
                            },
                            "documentation": null,
                            "id": 388,
                            "implemented": true,
                            "kind": "function",
                            "modifiers": [],
                            "name": "getRate",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 381,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "7289:2:0"
                            },
                            "returnParameters": {
                                "id": 384,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 383,
                                        "name": "",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 388,
                                        "src": "7313:7:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 382,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "7313:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "7312:9:0"
                            },
                            "scope": 437,
                            "src": "7273:77:0",
                            "stateMutability": "view",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        {
                            "body": {
                                "id": 395,
                                "nodeType": "Block",
                                "src": "7446:27:0",
                                "statements": [
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 393,
                                            "name": "cap",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 18,
                                            "src": "7463:3:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "functionReturnParameters": 392,
                                        "id": 394,
                                        "nodeType": "Return",
                                        "src": "7456:10:0"
                                    }
                                ]
                            },
                            "documentation": null,
                            "id": 396,
                            "implemented": true,
                            "kind": "function",
                            "modifiers": [],
                            "name": "getCap",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 389,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "7413:2:0"
                            },
                            "returnParameters": {
                                "id": 392,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 391,
                                        "name": "",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 396,
                                        "src": "7437:7:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 390,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "7437:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "7436:9:0"
                            },
                            "scope": 437,
                            "src": "7398:75:0",
                            "stateMutability": "view",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        {
                            "body": {
                                "id": 403,
                                "nodeType": "Block",
                                "src": "7571:40:0",
                                "statements": [
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 401,
                                            "name": "contributionGoal",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 20,
                                            "src": "7588:16:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "functionReturnParameters": 400,
                                        "id": 402,
                                        "nodeType": "Return",
                                        "src": "7581:23:0"
                                    }
                                ]
                            },
                            "documentation": null,
                            "id": 404,
                            "implemented": true,
                            "kind": "function",
                            "modifiers": [],
                            "name": "getGoal",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 397,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "7538:2:0"
                            },
                            "returnParameters": {
                                "id": 400,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 399,
                                        "name": "",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 404,
                                        "src": "7562:7:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 398,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "7562:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "7561:9:0"
                            },
                            "scope": 437,
                            "src": "7522:89:0",
                            "stateMutability": "view",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        {
                            "body": {
                                "id": 411,
                                "nodeType": "Block",
                                "src": "7722:36:0",
                                "statements": [
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 409,
                                            "name": "ICOCompleted",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31,
                                            "src": "7739:12:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "functionReturnParameters": 408,
                                        "id": 410,
                                        "nodeType": "Return",
                                        "src": "7732:19:0"
                                    }
                                ]
                            },
                            "documentation": null,
                            "id": 412,
                            "implemented": true,
                            "kind": "function",
                            "modifiers": [],
                            "name": "isCompleted",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 405,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "7692:2:0"
                            },
                            "returnParameters": {
                                "id": 408,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 407,
                                        "name": "",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 412,
                                        "src": "7716:4:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "typeName": {
                                            "id": 406,
                                            "name": "bool",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "7716:4:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "7715:6:0"
                            },
                            "scope": 437,
                            "src": "7672:86:0",
                            "stateMutability": "view",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        {
                            "body": {
                                "id": 419,
                                "nodeType": "Block",
                                "src": "7873:36:0",
                                "statements": [
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 417,
                                            "name": "startingTime",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 24,
                                            "src": "7890:12:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "functionReturnParameters": 416,
                                        "id": 418,
                                        "nodeType": "Return",
                                        "src": "7883:19:0"
                                    }
                                ]
                            },
                            "documentation": null,
                            "id": 420,
                            "implemented": true,
                            "kind": "function",
                            "modifiers": [],
                            "name": "getStartingTime",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 413,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "7840:2:0"
                            },
                            "returnParameters": {
                                "id": 416,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 415,
                                        "name": "",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 420,
                                        "src": "7864:7:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 414,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "7864:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "7863:9:0"
                            },
                            "scope": 437,
                            "src": "7816:93:0",
                            "stateMutability": "view",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        {
                            "body": {
                                "id": 427,
                                "nodeType": "Block",
                                "src": "8021:35:0",
                                "statements": [
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 425,
                                            "name": "closingTime",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26,
                                            "src": "8038:11:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "functionReturnParameters": 424,
                                        "id": 426,
                                        "nodeType": "Return",
                                        "src": "8031:18:0"
                                    }
                                ]
                            },
                            "documentation": null,
                            "id": 428,
                            "implemented": true,
                            "kind": "function",
                            "modifiers": [],
                            "name": "getClosingTime",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 421,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "7988:2:0"
                            },
                            "returnParameters": {
                                "id": 424,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 423,
                                        "name": "",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 428,
                                        "src": "8012:7:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 422,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "8012:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "8011:9:0"
                            },
                            "scope": 437,
                            "src": "7965:91:0",
                            "stateMutability": "view",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        {
                            "body": {
                                "id": 435,
                                "nodeType": "Block",
                                "src": "8168:35:0",
                                "statements": [
                                    {
                                        "expression": {
                                            "argumentTypes": null,
                                            "id": 433,
                                            "name": "releaseTime",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 28,
                                            "src": "8185:11:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "functionReturnParameters": 432,
                                        "id": 434,
                                        "nodeType": "Return",
                                        "src": "8178:18:0"
                                    }
                                ]
                            },
                            "documentation": null,
                            "id": 436,
                            "implemented": true,
                            "kind": "function",
                            "modifiers": [],
                            "name": "getReleaseTime",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 429,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "8135:2:0"
                            },
                            "returnParameters": {
                                "id": 432,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 431,
                                        "name": "",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 436,
                                        "src": "8159:7:0",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 430,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "8159:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "8158:9:0"
                            },
                            "scope": 437,
                            "src": "8112:91:0",
                            "stateMutability": "view",
                            "superFunction": null,
                            "visibility": "public"
                        }
                    ],
                    "scope": 438,
                    "src": "1395:6810:0"
                }
            ],
            "src": "28:8178:0"
        },
        "compiler": {
            "name": "solc",
            "version": "0.5.8+commit.23d335f2.Emscripten.clang"
        },
        "networks": {
            "5777": {
                "events": {
                    "0x4d154d4aae216bed6d0926db77c00df2b57c6b5ba4eee05775de20facede3a7b": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "name": "_from",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "name": "_amount",
                                "type": "uint256"
                            }
                        ],
                        "name": "Contribution",
                        "type": "event",
                        "signature": "0x4d154d4aae216bed6d0926db77c00df2b57c6b5ba4eee05775de20facede3a7b"
                    },
                    "0xe2cacd9696795caa2d3fe049b4533489e66bc98a6a944ae76bfbb2d1de4d07b7": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "name": "_from",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "name": "_amount",
                                "type": "uint256"
                            }
                        ],
                        "name": "ClaimContribution",
                        "type": "event",
                        "signature": "0xe2cacd9696795caa2d3fe049b4533489e66bc98a6a944ae76bfbb2d1de4d07b7"
                    },
                    "0xa335a1c1060ac25caf36b1623df502a6074f517189c942acb1a81176401ea9a1": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "name": "_from",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "name": "time",
                                "type": "uint256"
                            }
                        ],
                        "name": "CloseCrowdsale",
                        "type": "event",
                        "signature": "0xa335a1c1060ac25caf36b1623df502a6074f517189c942acb1a81176401ea9a1"
                    },
                    "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "name": "previousOwner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnershipTransferred",
                        "type": "event",
                        "signature": "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"
                    }
                },
                "links": {},
                "address": "0x76d70c5b8404159F55704B3F2944eaF9c0F22570",
                "transactionHash": "0x7a7b8319be52077909d514285bed08042228c7ccf9f5cb23b9e5ee1cb8642e8f"
            },
            "1571740730296": {
                "events": {
                    "0x4d154d4aae216bed6d0926db77c00df2b57c6b5ba4eee05775de20facede3a7b": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "name": "_from",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "name": "_amount",
                                "type": "uint256"
                            }
                        ],
                        "name": "Contribution",
                        "type": "event",
                        "signature": "0x4d154d4aae216bed6d0926db77c00df2b57c6b5ba4eee05775de20facede3a7b"
                    },
                    "0xe2cacd9696795caa2d3fe049b4533489e66bc98a6a944ae76bfbb2d1de4d07b7": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "name": "_from",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "name": "_amount",
                                "type": "uint256"
                            }
                        ],
                        "name": "ClaimContribution",
                        "type": "event",
                        "signature": "0xe2cacd9696795caa2d3fe049b4533489e66bc98a6a944ae76bfbb2d1de4d07b7"
                    },
                    "0xa335a1c1060ac25caf36b1623df502a6074f517189c942acb1a81176401ea9a1": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "name": "_from",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "name": "time",
                                "type": "uint256"
                            }
                        ],
                        "name": "CloseCrowdsale",
                        "type": "event",
                        "signature": "0xa335a1c1060ac25caf36b1623df502a6074f517189c942acb1a81176401ea9a1"
                    },
                    "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "name": "previousOwner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnershipTransferred",
                        "type": "event",
                        "signature": "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"
                    }
                },
                "links": {},
                "address": "0x72E89C1EBdA4409A86AbC9ce0F4224F90bE35e36",
                "transactionHash": "0x94676bce2370896939ff79391835939b2f263654b4836b5ec28076e956df3390"
            },
            "1571751582511": {
                "events": {
                    "0x4d154d4aae216bed6d0926db77c00df2b57c6b5ba4eee05775de20facede3a7b": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "name": "_from",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "name": "_amount",
                                "type": "uint256"
                            }
                        ],
                        "name": "Contribution",
                        "type": "event",
                        "signature": "0x4d154d4aae216bed6d0926db77c00df2b57c6b5ba4eee05775de20facede3a7b"
                    },
                    "0xe2cacd9696795caa2d3fe049b4533489e66bc98a6a944ae76bfbb2d1de4d07b7": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "name": "_from",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "name": "_amount",
                                "type": "uint256"
                            }
                        ],
                        "name": "ClaimContribution",
                        "type": "event",
                        "signature": "0xe2cacd9696795caa2d3fe049b4533489e66bc98a6a944ae76bfbb2d1de4d07b7"
                    },
                    "0xa335a1c1060ac25caf36b1623df502a6074f517189c942acb1a81176401ea9a1": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "name": "_from",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "name": "time",
                                "type": "uint256"
                            }
                        ],
                        "name": "CloseCrowdsale",
                        "type": "event",
                        "signature": "0xa335a1c1060ac25caf36b1623df502a6074f517189c942acb1a81176401ea9a1"
                    },
                    "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "name": "previousOwner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnershipTransferred",
                        "type": "event",
                        "signature": "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"
                    }
                },
                "links": {},
                "address": "0x00f80551bda76FC677E0E62e1E12e38E2E162E6B",
                "transactionHash": "0xf851ff877a1f8dc28856dee6adf248b322e522dee49e23cef8b065553fb84dbb"
            },
            "1571827054877": {
                "events": {
                    "0x4d154d4aae216bed6d0926db77c00df2b57c6b5ba4eee05775de20facede3a7b": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "name": "_from",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "name": "_amount",
                                "type": "uint256"
                            }
                        ],
                        "name": "Contribution",
                        "type": "event",
                        "signature": "0x4d154d4aae216bed6d0926db77c00df2b57c6b5ba4eee05775de20facede3a7b"
                    },
                    "0xe2cacd9696795caa2d3fe049b4533489e66bc98a6a944ae76bfbb2d1de4d07b7": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "name": "_from",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "name": "_amount",
                                "type": "uint256"
                            }
                        ],
                        "name": "ClaimContribution",
                        "type": "event",
                        "signature": "0xe2cacd9696795caa2d3fe049b4533489e66bc98a6a944ae76bfbb2d1de4d07b7"
                    },
                    "0xa335a1c1060ac25caf36b1623df502a6074f517189c942acb1a81176401ea9a1": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "name": "_from",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "name": "time",
                                "type": "uint256"
                            }
                        ],
                        "name": "CloseCrowdsale",
                        "type": "event",
                        "signature": "0xa335a1c1060ac25caf36b1623df502a6074f517189c942acb1a81176401ea9a1"
                    },
                    "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "name": "previousOwner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnershipTransferred",
                        "type": "event",
                        "signature": "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"
                    }
                },
                "links": {},
                "address": "0xCc0c272Ef08744c66bed54EDf7e76D6Cc3fbBC85",
                "transactionHash": "0x2ad4632a8cac7a4d3e3f12aa41baf4a2ad556f549df439b1b602af82518e534b"
            },
            "1571827962572": {
                "events": {
                    "0x4d154d4aae216bed6d0926db77c00df2b57c6b5ba4eee05775de20facede3a7b": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "name": "_from",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "name": "_amount",
                                "type": "uint256"
                            }
                        ],
                        "name": "Contribution",
                        "type": "event",
                        "signature": "0x4d154d4aae216bed6d0926db77c00df2b57c6b5ba4eee05775de20facede3a7b"
                    },
                    "0xe2cacd9696795caa2d3fe049b4533489e66bc98a6a944ae76bfbb2d1de4d07b7": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "name": "_from",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "name": "_amount",
                                "type": "uint256"
                            }
                        ],
                        "name": "ClaimContribution",
                        "type": "event",
                        "signature": "0xe2cacd9696795caa2d3fe049b4533489e66bc98a6a944ae76bfbb2d1de4d07b7"
                    },
                    "0xa335a1c1060ac25caf36b1623df502a6074f517189c942acb1a81176401ea9a1": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "name": "_from",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "name": "time",
                                "type": "uint256"
                            }
                        ],
                        "name": "CloseCrowdsale",
                        "type": "event",
                        "signature": "0xa335a1c1060ac25caf36b1623df502a6074f517189c942acb1a81176401ea9a1"
                    },
                    "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "name": "previousOwner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnershipTransferred",
                        "type": "event",
                        "signature": "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"
                    }
                },
                "links": {},
                "address": "0xA9f369c8bCB65b8d33057A3fc4093D7Dbd6e4CD2",
                "transactionHash": "0x3970e2982f5e9dd8699074483beee71ec6e77449c1436c55fd7fcb948287d2db"
            },
            "1571837651296": {
                "events": {
                    "0x4d154d4aae216bed6d0926db77c00df2b57c6b5ba4eee05775de20facede3a7b": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "name": "_from",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "name": "_amount",
                                "type": "uint256"
                            }
                        ],
                        "name": "Contribution",
                        "type": "event",
                        "signature": "0x4d154d4aae216bed6d0926db77c00df2b57c6b5ba4eee05775de20facede3a7b"
                    },
                    "0xe2cacd9696795caa2d3fe049b4533489e66bc98a6a944ae76bfbb2d1de4d07b7": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "name": "_from",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "name": "_amount",
                                "type": "uint256"
                            }
                        ],
                        "name": "ClaimContribution",
                        "type": "event",
                        "signature": "0xe2cacd9696795caa2d3fe049b4533489e66bc98a6a944ae76bfbb2d1de4d07b7"
                    },
                    "0xa335a1c1060ac25caf36b1623df502a6074f517189c942acb1a81176401ea9a1": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "name": "_from",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "name": "time",
                                "type": "uint256"
                            }
                        ],
                        "name": "CloseCrowdsale",
                        "type": "event",
                        "signature": "0xa335a1c1060ac25caf36b1623df502a6074f517189c942acb1a81176401ea9a1"
                    },
                    "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "name": "previousOwner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnershipTransferred",
                        "type": "event",
                        "signature": "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"
                    }
                },
                "links": {},
                "address": "0x5B8D1E1789F34B6e91696f019Ad727f6B7dAa219",
                "transactionHash": "0xaeaae6d36ea27272de3257ed59a22afac15a43e2a1b099fe13436b00fc5b6f21"
            },
            "1571838229864": {
                "events": {
                    "0x4d154d4aae216bed6d0926db77c00df2b57c6b5ba4eee05775de20facede3a7b": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "name": "_from",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "name": "_amount",
                                "type": "uint256"
                            }
                        ],
                        "name": "Contribution",
                        "type": "event",
                        "signature": "0x4d154d4aae216bed6d0926db77c00df2b57c6b5ba4eee05775de20facede3a7b"
                    },
                    "0xe2cacd9696795caa2d3fe049b4533489e66bc98a6a944ae76bfbb2d1de4d07b7": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "name": "_from",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "name": "_amount",
                                "type": "uint256"
                            }
                        ],
                        "name": "ClaimContribution",
                        "type": "event",
                        "signature": "0xe2cacd9696795caa2d3fe049b4533489e66bc98a6a944ae76bfbb2d1de4d07b7"
                    },
                    "0xa335a1c1060ac25caf36b1623df502a6074f517189c942acb1a81176401ea9a1": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "name": "_from",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "name": "time",
                                "type": "uint256"
                            }
                        ],
                        "name": "CloseCrowdsale",
                        "type": "event",
                        "signature": "0xa335a1c1060ac25caf36b1623df502a6074f517189c942acb1a81176401ea9a1"
                    },
                    "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "name": "previousOwner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnershipTransferred",
                        "type": "event",
                        "signature": "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"
                    }
                },
                "links": {},
                "address": "0x9d2BbF9d3D55CA72c184843f631b00A1d824D737",
                "transactionHash": "0xe0876b7fa285df0cf1786890e56621fe692012a161ba2f9f7cb1f881d349fbe0"
            },
            "1571839134351": {
                "events": {
                    "0x4d154d4aae216bed6d0926db77c00df2b57c6b5ba4eee05775de20facede3a7b": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "name": "_from",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "name": "_amount",
                                "type": "uint256"
                            }
                        ],
                        "name": "Contribution",
                        "type": "event",
                        "signature": "0x4d154d4aae216bed6d0926db77c00df2b57c6b5ba4eee05775de20facede3a7b"
                    },
                    "0xe2cacd9696795caa2d3fe049b4533489e66bc98a6a944ae76bfbb2d1de4d07b7": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "name": "_from",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "name": "_amount",
                                "type": "uint256"
                            }
                        ],
                        "name": "ClaimContribution",
                        "type": "event",
                        "signature": "0xe2cacd9696795caa2d3fe049b4533489e66bc98a6a944ae76bfbb2d1de4d07b7"
                    },
                    "0xa335a1c1060ac25caf36b1623df502a6074f517189c942acb1a81176401ea9a1": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "name": "_from",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "name": "time",
                                "type": "uint256"
                            }
                        ],
                        "name": "CloseCrowdsale",
                        "type": "event",
                        "signature": "0xa335a1c1060ac25caf36b1623df502a6074f517189c942acb1a81176401ea9a1"
                    },
                    "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "name": "previousOwner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnershipTransferred",
                        "type": "event",
                        "signature": "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"
                    }
                },
                "links": {},
                "address": "0xFCb41c185e8c3356F6407fF1ec937B1f8a573922",
                "transactionHash": "0xf037717e2b7bb4e92cf80e18406f7b7389dc41893ffd7d5cbc083637b61626dc"
            },
            "1571841666417": {
                "events": {
                    "0x4d154d4aae216bed6d0926db77c00df2b57c6b5ba4eee05775de20facede3a7b": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "name": "_from",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "name": "_amount",
                                "type": "uint256"
                            }
                        ],
                        "name": "Contribution",
                        "type": "event",
                        "signature": "0x4d154d4aae216bed6d0926db77c00df2b57c6b5ba4eee05775de20facede3a7b"
                    },
                    "0xe2cacd9696795caa2d3fe049b4533489e66bc98a6a944ae76bfbb2d1de4d07b7": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "name": "_from",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "name": "_amount",
                                "type": "uint256"
                            }
                        ],
                        "name": "ClaimContribution",
                        "type": "event",
                        "signature": "0xe2cacd9696795caa2d3fe049b4533489e66bc98a6a944ae76bfbb2d1de4d07b7"
                    },
                    "0xa335a1c1060ac25caf36b1623df502a6074f517189c942acb1a81176401ea9a1": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "name": "_from",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "name": "time",
                                "type": "uint256"
                            }
                        ],
                        "name": "CloseCrowdsale",
                        "type": "event",
                        "signature": "0xa335a1c1060ac25caf36b1623df502a6074f517189c942acb1a81176401ea9a1"
                    },
                    "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "name": "previousOwner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnershipTransferred",
                        "type": "event",
                        "signature": "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"
                    }
                },
                "links": {},
                "address": "0x5FdCe4131E07257Df84b2c3b0d2f1457b9F8b816",
                "transactionHash": "0x7c5595aa3581f36ef9029a4478e30ff96f0b549520eeb3e660a4cc12d40fb7d0"
            },
            "1571915857057": {
                "events": {
                    "0x4d154d4aae216bed6d0926db77c00df2b57c6b5ba4eee05775de20facede3a7b": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "name": "_from",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "name": "_amount",
                                "type": "uint256"
                            }
                        ],
                        "name": "Contribution",
                        "type": "event",
                        "signature": "0x4d154d4aae216bed6d0926db77c00df2b57c6b5ba4eee05775de20facede3a7b"
                    },
                    "0xe2cacd9696795caa2d3fe049b4533489e66bc98a6a944ae76bfbb2d1de4d07b7": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "name": "_from",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "name": "_amount",
                                "type": "uint256"
                            }
                        ],
                        "name": "ClaimContribution",
                        "type": "event",
                        "signature": "0xe2cacd9696795caa2d3fe049b4533489e66bc98a6a944ae76bfbb2d1de4d07b7"
                    },
                    "0xa335a1c1060ac25caf36b1623df502a6074f517189c942acb1a81176401ea9a1": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "name": "_from",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "name": "time",
                                "type": "uint256"
                            }
                        ],
                        "name": "CloseCrowdsale",
                        "type": "event",
                        "signature": "0xa335a1c1060ac25caf36b1623df502a6074f517189c942acb1a81176401ea9a1"
                    },
                    "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "name": "previousOwner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnershipTransferred",
                        "type": "event",
                        "signature": "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"
                    }
                },
                "links": {},
                "address": "0x029C15e219FE051BED4D0337024b80aa7BDa839E",
                "transactionHash": "0xbdfea354cfec0b6cb63228750f041b51b334bac1e8aaff54e1c4c30f88bc8040"
            },
            "1571989487371": {
                "events": {
                    "0x4d154d4aae216bed6d0926db77c00df2b57c6b5ba4eee05775de20facede3a7b": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "name": "_from",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "name": "_amount",
                                "type": "uint256"
                            }
                        ],
                        "name": "Contribution",
                        "type": "event",
                        "signature": "0x4d154d4aae216bed6d0926db77c00df2b57c6b5ba4eee05775de20facede3a7b"
                    },
                    "0xe2cacd9696795caa2d3fe049b4533489e66bc98a6a944ae76bfbb2d1de4d07b7": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "name": "_from",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "name": "_amount",
                                "type": "uint256"
                            }
                        ],
                        "name": "ClaimContribution",
                        "type": "event",
                        "signature": "0xe2cacd9696795caa2d3fe049b4533489e66bc98a6a944ae76bfbb2d1de4d07b7"
                    },
                    "0xa335a1c1060ac25caf36b1623df502a6074f517189c942acb1a81176401ea9a1": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "name": "_from",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "name": "time",
                                "type": "uint256"
                            }
                        ],
                        "name": "CloseCrowdsale",
                        "type": "event",
                        "signature": "0xa335a1c1060ac25caf36b1623df502a6074f517189c942acb1a81176401ea9a1"
                    },
                    "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "name": "previousOwner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnershipTransferred",
                        "type": "event",
                        "signature": "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"
                    }
                },
                "links": {},
                "address": "0x8DbFEFF407D37167385fB268e4F6b2cCE9EA2bc4",
                "transactionHash": "0x0de6e6de993a3d6b8f9f99eca1a5d6a1440868abfb46e5a2d6e034679fc77177"
            },
            "1571997786472": {
                "events": {
                    "0x4d154d4aae216bed6d0926db77c00df2b57c6b5ba4eee05775de20facede3a7b": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "name": "_from",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "name": "_amount",
                                "type": "uint256"
                            }
                        ],
                        "name": "Contribution",
                        "type": "event",
                        "signature": "0x4d154d4aae216bed6d0926db77c00df2b57c6b5ba4eee05775de20facede3a7b"
                    },
                    "0xe2cacd9696795caa2d3fe049b4533489e66bc98a6a944ae76bfbb2d1de4d07b7": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "name": "_from",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "name": "_amount",
                                "type": "uint256"
                            }
                        ],
                        "name": "ClaimContribution",
                        "type": "event",
                        "signature": "0xe2cacd9696795caa2d3fe049b4533489e66bc98a6a944ae76bfbb2d1de4d07b7"
                    },
                    "0xa335a1c1060ac25caf36b1623df502a6074f517189c942acb1a81176401ea9a1": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "name": "_from",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "name": "time",
                                "type": "uint256"
                            }
                        ],
                        "name": "CloseCrowdsale",
                        "type": "event",
                        "signature": "0xa335a1c1060ac25caf36b1623df502a6074f517189c942acb1a81176401ea9a1"
                    },
                    "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "name": "previousOwner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnershipTransferred",
                        "type": "event",
                        "signature": "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"
                    }
                },
                "links": {},
                "address": "0x5dE3c8dCcC0A9A2162593e35561c630aC3F0b424",
                "transactionHash": "0xf40afacd9cd9d7af0626518c196a5ce71f6a1b0c8bb3925cac2351d79a72230e"
            },
            "1571999592710": {
                "events": {
                    "0x4d154d4aae216bed6d0926db77c00df2b57c6b5ba4eee05775de20facede3a7b": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "name": "_from",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "name": "_amount",
                                "type": "uint256"
                            }
                        ],
                        "name": "Contribution",
                        "type": "event",
                        "signature": "0x4d154d4aae216bed6d0926db77c00df2b57c6b5ba4eee05775de20facede3a7b"
                    },
                    "0xe2cacd9696795caa2d3fe049b4533489e66bc98a6a944ae76bfbb2d1de4d07b7": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "name": "_from",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "name": "_amount",
                                "type": "uint256"
                            }
                        ],
                        "name": "ClaimContribution",
                        "type": "event",
                        "signature": "0xe2cacd9696795caa2d3fe049b4533489e66bc98a6a944ae76bfbb2d1de4d07b7"
                    },
                    "0xa335a1c1060ac25caf36b1623df502a6074f517189c942acb1a81176401ea9a1": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "name": "_from",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "name": "time",
                                "type": "uint256"
                            }
                        ],
                        "name": "CloseCrowdsale",
                        "type": "event",
                        "signature": "0xa335a1c1060ac25caf36b1623df502a6074f517189c942acb1a81176401ea9a1"
                    },
                    "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "name": "previousOwner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnershipTransferred",
                        "type": "event",
                        "signature": "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"
                    },
                    "0x7616f61945da43720327121ec537691d4584890e9e33a6aa6f911ba78bff7234": {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "name": "_sender",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "name": "_claimedTokens",
                                "type": "uint256"
                            }
                        ],
                        "name": "ValorAddress",
                        "type": "event",
                        "signature": "0x7616f61945da43720327121ec537691d4584890e9e33a6aa6f911ba78bff7234"
                    }
                },
                "links": {},
                "address": "0xdC78afe9cFDe0576Ff236667DC8c380615c24Ca9",
                "transactionHash": "0x9be59f12f144a1225e03cc63e9055b39a659754ba49417a5e5eb37a488de3c6a"
            }
        },
        "schemaVersion": "3.0.16",
        "updatedAt": "2019-10-28T09:54:08.561Z",
        "devdoc": {
            "methods": {
                "isOwner()": {
                    "details": "Returns true if the caller is the current owner."
                },
                "owner()": {
                    "details": "Returns the address of the current owner."
                },
                "renounceOwnership()": {
                    "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner.     * > Note: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner."
                },
                "transferOwnership(address)": {
                    "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
                }
            },
            "title": "CustomCrowdsale Params rate - Value Defining the Current Rate for the CustomCrowdsale cap - Value Defining the Current Cap for the CustomCrowdsale WETH9 - Value Defining the Current WETH9 Token for the CustomCrowdsale CustomToken - Value Defining the Current CustomToken for the CustomCrowdsale contributionGoal - Value Defining the Current Goal for the CustomCrowdsale currentContribution - Value Defining currentContribution status for the CustomCrowdsale startingTime - Value Defining the startingTime for the CustomCrowdsale closingTime - Value Defining the closingTime for CustomCrowdsale releaseTime - Value Defining the releaseTime for CustomCrowdsale ICOCompleted - Value Defining the Open/Close status for CustomCrowdsale ICOGoalReached - Value Defining the status for the contributionGoal in CustomCrowdsale contributions - Value Defining the every buy until claim in CustomCrowdsale"
        },
        "userdoc": {
            "methods": {
                "getTokenTotalSupply()": {
                    "notice": "GETTERS"
                }
            }
        }
    }
]