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

## Testing file upload

### Local Server
To upload a file to the local server using `curl` use :

```
$ curl -F "foo=@$HOME/downloads/okasaki.pdf" localhost:3000/upload

{
    "file": {
        "destination": "/Users/abkedia/personal/experiments/multer_demo/public/uploads",
        "encoding": "7bit",
        "fieldname": "foo",
        "filename": "6cd4b17ddb5eae48abb843b0d8c057b0",
        "mimetype": "application/octet-stream",
        "originalname": "okasaki.pdf",
        "path": "/Users/abkedia/personal/experiments/multer_demo/public/uploads/6cd4b17ddb5eae48abb843b0d8c057b0",
        "size": 628877
    }
}
```
This uploads the file `okasaki.pdf` present in the downloads directory in home. The file is uploaded to the public directory of the webserver under `uploads/6cd4b17ddb5eae48abb843b0d8c057b0`

To test if the file has been actually uploaded simply download it using wget as follows :

```
$ wget localhost:3000/uploads/6cd4b17ddb5eae48abb843b0d8c057b0 -O okasaki_dl.pdf
```

### Heroku instance
I have also deployed a heroku instance at https://multer-demo.herokuapp.com

#### Upload
I have a file `kedia.jpg` in my downloads directory. I'll upload that to the heroku instance :

```
$ curl -F "foo=@$HOME/downloads/kedia.jpg" https://multer-demo.herokuapp.com/upload

{
    "file": {
        "destination": "/app/public/uploads",
        "encoding": "7bit",
        "fieldname": "foo",
        "filename": "28f5dccea9d93fb7b15b787921bd5ad8",
        "mimetype": "image/jpeg",
        "originalname": "kedia.jpg",
        "path": "/app/public/uploads/28f5dccea9d93fb7b15b787921bd5ad8",
        "size": 11197
    }
}
```

#### Download
To download the file just uploaded :

```
$ wget https://multer-demo.herokuapp.com/uploads/28f5dccea9d93fb7b15b787921bd5ad8 -O kedia_dl.jpg
```
And we can verify it is the same file as we uploaded (using `diff` or otherwise).

## Steps to build project from scratch
1. init project using express generator : 
	```
	$ express multer_demo -e
	```
	(`-e` to specify that we'll be using ejs as our template engine)
2. TODO


## Further reading & references
- [Multer Project & Documentation](https://github.com/expressjs/multer)
- [Another multer tutorial](https://scotch.io/tutorials/express-file-uploads-with-multer)
