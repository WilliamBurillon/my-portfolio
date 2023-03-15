# My portfolio with nuxt 3

A simple and design portfolio with nuxt 3. 

**Disclaimer**: I'm not a front end developer, so the code is not perfect. But as DevOps / Backend developer, I made some effort in order to make it look good. 
Feel free to contribute and open issues if you find something that can be improved. 

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

```

## Development Server

Start the development server on http://localhost:3000

```bash
yarn dev
```

## Production

Build the application for production. It will be generated in the `.ouput/public` directory and can be served with any static hosting service like Nginx.

```bash
yarn generate
```

## Production with Github actions

The project is configured to build and deploy the application on my personal server. The portfolio is hosted on [https://www.williamburillon.com](https://www.williamburillon.com).
There is an article on this portfolio which explains how to do it. 