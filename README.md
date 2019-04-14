## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

You need to have Node vesion >= 8.11.1 and yarn installed on your machine.

### Install

After you download or clone this project, you need to change into the project folder and run

```
yarn
```

in the commandline to install all dependencies.

### Usage

After you installed all dependencies, you need to run

```
yarn start
```

to start the react app. Then you can go to localhost:3000 in your browser to see the app running. 

### Test

To run the tests, you need to run

```
yarn test
```

### Build

You need to run

```
yarn build
```

And you can serve the `/build` folder for production


## Dockerize the app

### Prerequisites

You need to have [docker](https://www.docker.com/) installed and have Docker Daemon running.

### Create a docker image

In the root of the project folder, run

```
yarn build
```

Now run

```
docker build . -t recipe-recommender-docker
```

After building the docker image, run

```
docker images
```

to ensure the build is successful.

### Run docker

Run

```
docker run -p 8000:80 recipe-recommender-docker
```

And open your browser and go to localhost:8000. You should see the app running.

## Browser Compatibility

The app is compatible with IE 11+, Edge, Chrome and Firefox.