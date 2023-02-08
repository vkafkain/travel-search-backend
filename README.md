# ✈️   Travel search | Backend Challenge 

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

## Instructions

_Follow the instructions carefully for proper operation of the application._

## Requeriments

_For the application to function properly, it is recommended to have this programs installed and configured correctly:_

- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node.js y npm](https://nodejs.org/es/)
- [MySQL](https://www.mysql.com/downloads/)

## Install

_Clone this repository to your local repository, run the following command in terminal to install the dependencies and for the project to function correctly:_

```
npm install
```

## Enviroment variables

In order for everything to work, we have to enable the environment variables. To do this, you have to create a file with the name `.env` and enter the data you have in the `.templates.env` file.



## License

[MIT](LICENSE) © Victor López

