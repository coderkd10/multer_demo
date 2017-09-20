# Multer Demo Project

A very simple demo website for file-upload using `multer` and `express`.

## Runnging locally

```
$ npm start
```
The webserver will start in port `3000` by default (can be overidden by `PORT` environment variable).

Or to run in debug mode use
```
$ DEBUG=multer-demo:* npm start
```

## Steps to build project from scratch
1. init project using express generator : 
	```
	$ express multer_demo -e
	```
	(`-e` to specify that we'll be using ejs as our template engine)

