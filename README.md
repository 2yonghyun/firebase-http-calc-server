# firebase-http-calc-server
## Description
This is a HTTP calculator server.<br/>

## How to use a calculator
Paramater name|Value
---|---
num1|Any number
num2|Any number
operator|add, sub, mul, div

Operators:  
[add - For addition]  
[sub - For subtraction ]  
[mul - For multiplication ]  
[div - For Division ] 

Copy and paste the follow link in your browser.
```url
https://us-central1-my-firebase-playground.cloudfunctions.net/app/calc?num1=4&num2=3&operator=add
```
And you can get a calculation result from the response.
```response
{"response":{"status":"OK","code":2000,"result":7}}
```

## How to install your own
To install this app with Firebase. You need nodejs and Firebase CLI.

After the clone this project and run the following command in your terminal.
```zsh
$ firebase use --add
```
Then select which firebase project you link in the terminal.

```zsh
$ firebase init
```
Then select functions and hosting in the terminal.  

And finally deploy app to firebase.
```zsh
$ firebase deploy
```

For more detail, please refer to the following documents:  
https://firebase.google.com/docs/functions/http-events  
https://firebase.google.com/docs/hosting/functions
