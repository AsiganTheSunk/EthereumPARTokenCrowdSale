REMOVE_OLD_CONTRACTS = rm -rf ./client/src/contracts
CREATE_NEW_CONTRACTS_DIR = mkdir ./client/src/contracts
CP_NEW_CONTRACTS = cp -r ./build/contracts/. ./client/src/contracts/.
COMPILE = truffle compile
TEST = truffle test
MIGRATE = truffle migrate
MIGRATE_RESET = --reset
NPM_START = npm start
APP_CLIENT = --prefix ./client
NPM_INSTALL = ./bin/install-travis.sh
GANACHE_LAUNCH = ganache-cli -d

launch_ganache:
	$(GANACHE_LAUNCH)

compile:
	$(COMPILE)

test_contracts:
	$(TEST)

soft_migrate:
	$(MIGRATE)

hard_migrate:
	$(MIGRATE) $(MIGRATE_RESET)

refresh_contracts:
	$(REMOVE_OLD_CONTRACTS)
	$(CREATE_NEW_CONTRACTS_DIR)
	$(CP_NEW_CONTRACTS)

launch_client:
	$(NPM_START) $(APP_CLIENT)

install:
	$(NPM_INSTALL)

all:
	make compile
	make hard_migrate
	make test_contracts
	make refresh_contracts
	make launch_client


