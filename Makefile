setup:
	npm install
	make build

build:
	rm -rf dist
	NODE_ENV=production npx webpack

build-dev:
	rm -rf dist
	NODE_ENV=development npx webpack

watch:
	npm run watch

serve:
	npx webpack serve --open

lint:
	npx eslint ./src

lint-fix:
	npx eslint --fix ./src
