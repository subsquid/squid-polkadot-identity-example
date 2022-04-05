process: migrate
	@node -r dotenv/config lib/processor.js


serve:
	@npx squid-graphql-server


migrate:
	@npx sqd db:migrate


migration:
	@npx sqd db:create-migration Data


build:
	@npm run build


codegen:
	@npx sqd codegen


typegen: polkaVersions.json
	@npx squid-substrate-typegen typegen.json


polkaVersions.json:
	@make explore


explore:
	@npx squid-substrate-metadata-explorer \
		--chain wss://rpc.polkadot.io \
		--archive https://polkadot.indexer.gc.subsquid.io/v4/graphql \
		--out polkaVersions.json


up:
	@docker-compose up -d


down:
	@docker-compose down


.PHONY: process serve start codegen migration migrate up down
