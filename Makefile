ifeq ($(CICD_MODE),true)
	ENVFILE_BASE=.env.cicd
else
	ENVFILE_BASE=.env.example
endif

.env:
	cp $(ENVFILE_BASE) .env

.PHONY: deps
deps: .env
	docker-compose run --rm node npm install

.PHONY: lint
lint: .env node_modules
	docker-compose run --rm node npm run lint:fix

.PHONY: test
test: .env node_modules
	docker-compose run --rm node npm test

.PHONY: build
build: .env node_modules
	docker-compose run --rm node npm run build

.PHONY: deploy
deploy: .env node_modules dist
	docker-compose run --rm serverless sls deploy
