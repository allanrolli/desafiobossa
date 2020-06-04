# desafiobossa

[![desafiobossa Documentation](https://img.shields.io/badge/desafiobossa-Documented-blue.svg)](https://desafiobossa.docs.apiary.io/) [![Heroku App Status](http://heroku-shields.herokuapp.com/bossachallengebackend)](https://bossachallengebackend.herokuapp.com) <img src="https://img.shields.io/github/last-commit/AllanRolli/desafiobossa"/> <img src="https://img.shields.io/github/repo-size/AllanRolli/desafiobossa?style=plastic"/> <img src="https://img.shields.io/github/license/AllanRolli/desafiobossa?style=plastic"/>

This project has the purpose of documentation to be inserted in my portfolio.

You can authenticate a user like a login, create users, list all of them, create, list and delete the tools.

## 👨🏾‍🏫 Documentation

When you access the http://localhost:3000/ has the documentation maked with aglio or you can access in

[![desafiobossa Documentation](https://img.shields.io/badge/desafiobossa-APIBluePrint-blue.svg)](https://desafiobossa.docs.apiary.io/)

## :rocket: Technologies

- [NodeJs](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)

<img src="https://www.luiztools.com.br/wp-content/uploads/2016/10/node-js-mongodb.png">

## :information_source: How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v12.17](https://nodejs.org/en/) or higher + [Npm v6.10.2](https://www.npmjs.com/get-npm) or higher installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/AllanRolli/desafiobossa.git

# Go into the repository
$ cd desafiobossa

# Install dependencies
$ npm install
```

## MongoDB

### MongoDB script

I create a script in mongo language to populate the database, inside the folder src/config you can check the code, need only to change the MONGO_URL to your connection string

### MongoDB config

You have to create an account in [MongoDB](https://www.mongodb.com/), after logged, create a free cluster, click in Collections and Create Database. Return in your cluster click in "connect" and in "Connect your application", copy the string and create a .env and a .env.test file inside the directory with a variable MONGO_URL=<<your_copy_string>>

```bash
# Run the app in Development Environment
$ npm run dev

# Run the app in Production Environment
$ npm start
```

## :warning: Running Tests

```bash
# Inside the directory desafiobossa
$ npm test
```

## Deploying

### Deploying on Heroku

Click the button below to automatically set up the desafiobossa API in an app
running on your Heroku account.

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/AllanRolli/desafiobossa)

Once you've deployed, you can easily clone the application and alter the
configuration to disable features:

```bash
$ heroku clone -a new-app-name
$ heroku config:set POLLS_CAN_VOTE_QUESTION=false
$ heroku config:set POLLS_CAN_CREATE_QUESTION=false
$ heroku config:set POLLS_CAN_DELETE_QUESTION=false
```

Remember that have to insert the MONGO_URL in heroku config vars to use your application.

### Deploying on Heroku using Docker

<img src="https://www.mundodocker.com.br/wp-content/uploads/2015/06/docker_facebook_share.png" width="100" height="100">

If you'd like to, you may use Docker on Heroku instead. I created a Dockerfile to build an image in the root of the repository.Refer to the [Heroku
Container Registry and Runtime
Guide](https://devcenter.heroku.com/articles/container-registry-and-runtime#getting-started)
for detailed instructions. Providing you have Docker installed you can follow
the following steps:

```bash
$ heroku container:login
$ heroku container:push web --app=<<name_of_your_app>>
$ heroku container:release web --app=<<name_of_your_app>>
```

## :memo: License

This project is under the MIT license. See the [LICENSE](https://github.com/AllanRolli/desafiobossa/blob/master/LICENSE) for more information.

---

## Author

👤 **Allan Rolli**

- Github: [@AllanRolli](https://github.com/AllanRolli)
- LinkedIn: [@AllanRolli](https://www.linkedin.com/in/allan-rolli-a66198106/)
