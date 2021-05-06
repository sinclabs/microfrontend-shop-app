# Microfrontend app demo
This is a demo of a mini e-commerce application that is built as using Micro-Frontends. This code base is intended to explore different techniques and technologies.

The app is comprised of 6 Micro-services containing pieces of the application. They are all composed together by one of the services: `container-app`

This is still a WIP and will change a lot.

## Installing and Running
Only pre-requisite is Docker and Docker-Compose. Once you have both of them installed follow:

clone the repo:
```bash
git clone https://github.com/sinclabs/microfrontend-shop-app.git
```

To run in dev mode (i.e. with file watches for changes):
```bash
docker-compose up
```
(If you just wanna start it and not have file watches for dev, then use `docker-compose -f docker-compose-start.yml up`)

To see the app, go to: `http://localhost:8080`. (Dev mode only sets file watch to hot recompile and not hot reload. So chnges to the components will be rebuilt but you still need to reload the page in the browser manually to see the changes)

For changes that might need the docker images to be rebuilt, use: `docker-compose up --build` or `docker-compose -f docker-compose-start.yml up --build` or simply `docker-compose build` (This will just build and not start the services)
