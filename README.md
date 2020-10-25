# container-registry-playground
Trying out github's container registry and CI actions.

## Images
Individual images are automatically published to linked Github Container Registries:
- [service](https://github.com/users/rwakulszowa/packages/container/package/container-registry-playground-service)
- [client](https://github.com/users/rwakulszowa/packages/container/package/container-registry-playground-client)

## Development
Containers allow developers to separate the application's environment with the developer's environment.
The most common example is adding a database - in the old days, if a developer wanted to run an app
locally, they had to install and configure a database on their laptop. With docker, that's no longer
the case... as long as you dockerize all components.

This repo provides an example setup for a full stack web app that can be developed without ever installing
NodeJS on the host machine.

#### Starting a local instance.
```
docker-compose --file docker-compose.dev.yml up --build
```
You can access the app at localhost:8080.
Locally changes to the source files will be instantly* reflected in the app.

#### Running unit tests
- client/
```
docker-compose --file docker-compose.dev.yml exec client-dev npm test
```
- server/
```
docker-compose --file docker-compose.dev.yml exec server-dev npm test
```

#### Linting / formatting source code.
- client/
```
docker-compose --file docker-compose.dev.yml exec client-dev npm run lint
```
- server/
```
TODO
```

Note that under the hood, you're running [prettier.io](https://prettier.io) on code located on your host machine,
without ever explicitly installing prettier, Node, or any other tool but docker.

#### Any other command you wish to execute
```
docker-compose --file docker-compose.dev.yml exec [client,server]-dev <command>
```

## How to use
Refer to docker-compose files.

### Docker-compose files
Each docker-compose file contains a description on the very top.
Below is a short list of available files.

#### docker-compose.yml
The default file. Starts the app optimized for production use.

#### docker-compose.dev.yml
Spins up the app for local development. Tailored for quick builds and local code changes.

#### docker-compose.test.yml
Allows running end-to-end tests with a single command.
