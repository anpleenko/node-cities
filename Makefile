default: _requirements _settings db test end

_requirements:
	@echo "Installing requirements"
	docker pull node:8
	docker pull postgres:9
	npm i

_settings:
	@echo "Emitting local development settings module"
	@cp .env.example .env
	@cp docker-compose.yml.example docker-compose.yml

db:
	@echo "Download dump file"
	wget -O dump.sql https://raw.githubusercontent.com/Legostaev/contry_region_city/master/script.sql;

test:

end:
	@echo "You can now run development server using 'make run' command"

run:
	docker-compose down && docker-compose up

deploy:
	ssh qa@178.76.235.82 ' \
		cd /home/qa/cities; \
		git stash -u; \
		git pull; \
		npm i; \
		sudo docker-compose down && sudo docker-compose up -d; \
	'

dump:
	ssh qa@178.76.235.82 ' \
		rm -rf ~/.temp_dump; \
		mkdir ~/.temp_dump; \
		wget -O ~/.temp_dump/dump.sql https://raw.githubusercontent.com/Legostaev/contry_region_city/master/script.sql; \
		sudo docker cp ~/.temp_dump/dump.sql cities_db:/docker-entrypoint-initdb.d/dump.sql; \
		sudo docker exec -u postgres cities_db psql postgres postgres -f docker-entrypoint-initdb.d/dump.sql; \
		rm -rf ~/.temp_dump; \
	'

del:
	rm -rf .git
	git init
	git add .
	git commit -m 'init'
	git remote add origin git@github.com:vaeum/node-cities.git
	git push -u -f origin --all

.PHONY: db
