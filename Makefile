deploy:
	ssh qa@178.76.235.82 ' \
		cd /home/qa/cities; \
		git pull; npm i; \
		sudo docker-compose down && sudo docker-compose up -d;\
	'

dump:
	ssh qa@178.76.235.82 ' \
		cd /home/qa/temp;\
		wget -O dump.sql https://raw.githubusercontent.com/Legostaev/contry_region_city/master/script.sql;\
		sudo docker cp ~/temp/dump.sql cities_db:/docker-entrypoint-initdb.d/dump.sql;\
		sudo docker exec -u postgres cities_db psql postgres postgres -f docker-entrypoint-initdb.d/dump.sql;\
	'

del:
	rm -rf .git
	git init
	git add .
	git commit -m 'init'
	git remote add origin git@github.com:vaeum/node-cities.git
	git push -u -f origin --all
