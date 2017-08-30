default: _requirements _settings db test end

req: _requirements

_requirements: node_packages docker_images

node_packages:
	@echo "==> Installing Node packages"
	npm i

docker_images:
	@echo "==> Installing Docker images"
	docker pull node:8
	docker pull postgres:9

_settings:
	@echo "==> Emitting local development settings module"
	@cp .env.example .env
	@cp docker-compose.yml.example docker-compose.yml

db:
	@echo "==> Download dump file"
	curl https://raw.githubusercontent.com/Legostaev/contry_region_city/master/script.sql --output dump.sql

test:

end:
	@echo "==> You can now run development server using 'make run' command"

run:
	docker-compose down && docker-compose up

deploy:
	ssh qa@178.76.235.82 ' \
		cd /home/qa/cities; \
		git stash -u; \
		git pull; \
		make node_packages; \
		make _settings; \
		make db; \
		docker-compose down; \
		docker-compose -f ~/docker-compose.yml up -d --force-recreate; \
	'
del:
	rm -rf .git
	git init
	git add .
	git commit -m 'init'
	git remote add origin git@github.com:vaeum/node-cities.git
	git push -u -f origin --all

run_api_container:
	sleep 5s
	node node_modules/db-migrate/bin/db-migrate down --count 30
	node node_modules/db-migrate/bin/db-migrate up
	./node_modules/.bin/nodemon server

.PHONY: db test
