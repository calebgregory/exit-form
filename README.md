# exit-form
### A little form for exit interviews

This app simply accepts submissions for exit interviews and sends them to a relational database.

# Usage

## Set up

Clone the repo:
```
$ git clone https://github.com/calebgregory/exit-form.git
```

and begin by installing the dependencies:
```
$ npm install
$ bower install
```

Next create a database:
```
$ psql
```
and in psql,
```
psql=# CREATE DATABASE interviews;
psql=# \q
```

Then, to set up the table we'll use to store our submissions, run:
```
$ node app/models/database.js
```

Check to make sure the table was created by opening
```
$ psql interviews
```
and check out the schema:
```
interviews=# \d+ submissions
```

## Run
Now, run the app with:
```
$ nodemon
```
and the app should be served on `http://localhost:3000/`.

From the app, add a submission, and see that it is in the database:
```
$ psql interviews

interviews=# select * from submissions;
```

And that's pretty much it!

# LICENSE
The MIT License (MIT)

Copyright (c) 2015 Caleb Gregory

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
