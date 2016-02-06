# Devportal

Simple app made with Webpack, Babel, React & Redux

Whilst not feature complete, this a few hours work to look at, it was also the first time I've actually used Redux!

## Things of note

### Babel
Lots of latest ES6 stuff, it can polyfill easily for other browsers.
### Redux
First time using Redux properly, so I imagine I've done things wrong..
### CSS inline loading
(webpack feature to scope and load css, interesting)
### Auth timeout/cookie
I stored the auth token in the cookie, this is obviously stupid, but it does work for now, on an auth timout you should be able to log back in
### Loading indicators
There are actions for them, but no display atm

## Installing/Running

	npm install
  	npm run server

Then open a browser and go to [http://localhost:8080/](http://localhost:8080/)
