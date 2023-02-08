#  Travel search | Backend Challenge 🛫


![Demo](https://github.com/vkafkain/travel-search-backend/blob/main/docs/logoNode.png)

Application created for the classification of [Vueling Tech Hack](https://nuwe.io/dev/competitions/vueling-tech-hack) using Nodejs and MySQL.


## Challenge Goals
### About | Online Travel Agency Mission

It's your first day at work at an online travel agency (OTA), and your first mission is to build an MVP for a new travel finder feature. The product team sends us this list of requirements.

 - **Functional requirements:**

    - The application takes at least three letters from standard input to execute the search.
    - The app should search for trips with cities that match the text entered by the user anywhere in the city name.
    - We have two types of travel: "land travel" and "air travel". Each with some specific characteristics.
        - A "land trip" has two hotels with their names and categories.
        - An "air trip" has two flights with their departure city and departure time.

    - We are growing overseas, so your solution should support Middle East and Asian languages.

    - The application should return the result using the standard output view:

        - Trip Name.
        - Type of trip.
        - Duration.
        - Names of the cities.
        - Specific details (For hotels: name and category, for flights: departure city and time).

 - **Technical Requirements:**

    - Your system is growing, and restrictions may change. Also, further restrictions can be added. Prepare your system to be manageable to add new features.

    - Please don't use frameworks like Symphony, Laravel, etc. You can use any particular library or editor if you need to.

The output for the search for «Mad» should look like this:

Europe Popular Capitals; Land Trip; 3 days; Madrid, Paris, London; Hotel Best Madrid 3*, Hotel Worst Paris 4*
Europe laying out cities; Land Trip; 3 days; Berlín, Madrid; Hotel Best Madrid 3*, Hotel Worst Berlin 4*
Infinite Egipt; Air Trip; 4 days; Madrid, القاهرة‎, الأقصر‎; Madrid 09:00, الأقصر‎ 10:00
Incredible China; Air Trip; 10 dies; Barcelona, Madrid, 广州市, 北京市; Madrid 09:00, 北京市 10:00

## Requeriments

_For the application to function properly, it is recommended to have this programs installed and configured correctly:_

- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node.js y npm](https://nodejs.org/es/)
- [MySQL](https://www.mysql.com/downloads/)

## Install

_Clone this repository to your local repository, run the following command in terminal to install the dependencies and for the project to work correctly:_

```
npm install
```

## Enviroment variables

_In order for everything to work, we have to enable the environment variables. To do this, you have to create a file with the name `.env` and enter the data you have in the `.templates.env` file._

![Demo](https://github.com/vkafkain/travel-search-backend/blob/main/docs/envtemplate.png)

## Run the application

_Once we have the programs and dependencies installed, run the following command in terminal:_ 

```
npm start
```

## Project architecture

_Here we can see the project structure by folders:_

![Demo](https://github.com/vkafkain/travel-search-backend/blob/main/docs/projectStructure.png)


## App work

_The application is a small CLI for the node console in which the user inputs a city and the program prints out all the trips that pass through that specific city to the console._

_Here we can see an example of what it shows us when searching for Barcelona:_

![Demo](https://github.com/vkafkain/travel-search-backend/blob/main/docs/CLIexample.png)

## Database

### Entity-Relationship database model

_I have created the database in MySQL with the entity-relationship model, in large volumes of data having a structured database gives us stability, and allows it to grow without many headaches._

_Here we can see the model diagram:_

![Demo](https://github.com/vkafkain/travel-search-backend/blob/main/docs/MER-travel-search-diagram.png)

### Fake database

_I have created a fakeData.js file that inserts fake data into the database, I would have liked to do it a little better but I haven't had time.

## Technologies


* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Programming language used.
* [Node.js](https://nodejs.org/en/docs/) - Server-side JavaScript runtime environment.
* [MySQL](https://dev.mysql.com/doc/) - MySQL is a relational database management system based on SQL – Structured Query Language.
* [NPM](https://www.npmjs.com/) - Dependency manager.
* [dotenv](https://www.npmjs.com/package/dotenv) - Dotenv is a zero-dependency module that loads environment variables.
* [mysql2](https://www.npmjs.com/package/mysql2) - MySQL client for Node.js with focus on performance. Supports prepared statements, non-utf8 encodings, binary log protocol, compression, ssl much more.
* [sequelize](https://www.npmjs.com/package/sequelize) - Sequelize is an easy-to-use and promise-based Node.js ORM tool for Postgres, MySQL, MariaDB, SQLite, DB2, Microsoft SQL Server, and Snowflake. It features solid transaction support, relations, eager and lazy loading, read replication and more.
* [readline-sync](https://www.npmjs.com/package/readline-sync) - Synchronous Readline for interactively running to have a conversation with the user via a console(TTY).

## Author

[Víctor López](https://github.com/vkafkain)

## License

[MIT](LICENSE) © Victor López

