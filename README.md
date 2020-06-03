## Executando client

`docker-compose -f client/docker-compose.yml up -d`

## Executando server

`docker-compose -f server/docker-compose.yml up -d`
`docker-compose -f server/docker-compose.yml exec api python manage.py migrate`

## Resultado

Client: `http://localhost:3000`
API: `http://localhost:8000/api/`
