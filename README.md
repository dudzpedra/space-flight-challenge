# Space Flight News

My solution for the Front-end Challenge 🏅 2021 - Space Flight News.

> This is a challenge by [Coodesh](https://coodesh.com/).

## Introduction

Please checkout the presentational video [here](https://www.loom.com/embed/6952130348e74fe78da025afb10566da)

## Description

A simple app to fetch and display Space Flight articles from an external API.

## Stack

- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/)
- [Axios](https://axios-http.com/) 
- [Space Flight News API](https://spaceflightnewsapi.net/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Material UI](https://mui.com/pt/)
- [Docker](https://docs.docker.com/)
- [NGINX](https://www.nginx.com/)
  
## Setup

Clone the project in your local machine:

`git clone https://github.com/dudzpedra/space-flight-challenge.git`

Install the dependencies:

`npm i`

Run the app in the browser:

`npm start`

## Docker

The project already has a Dockerfile. You can build the image like:

`docker build . -t space-flight-news`

Then you can run the project with:

`docker run -p 8000:80 space-flight-news`

## Instructions

- Search for articles by titles using the search form
- Sort the articles by date with the sort selection menu
- View more details by clicking the 'View More' button
- Visit the source website by clicking the 'Go to news site' button
