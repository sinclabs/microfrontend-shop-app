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

run:
```bash
docker-compose up
```

To see the app, go to: `http://localhost:8080`
