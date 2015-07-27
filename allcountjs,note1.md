
## allccountjs

2015-07-24 10:52PM -- 7/26 Ver 05

Summary:
This is a node.js mongodb based full stack javascript framework for creating web apps.


Purpose: Install on Windows my 'redek' computer to test this out.
    

See [https://github.com/dgleba/toptal-community-allcount](https://github.com/dgleba/toptal-community-allcount) for the code.

---

[http://www.toptal.com/nodejs/rapid-application-development-with-allcountjs](http://www.toptal.com/nodejs/rapid-application-development-with-allcountjs)

by:
Pavel Tiunov 
@paveltiunov

---
####  Install these software

```
node.js  
mongodb
git
```

C:\n\01software\mongodb-win32-x86_64-2008plus-ssl-3.0.4-signed.msi  
C:\n\01software\node-v0.12.7-x64.msi  
C:\Users\dg\Downloads\Git-1.9.5-preview20150319.exe

---
  
	mkdir toptal-community-allcount  
	cd toptal-community-allcount  
	npm install allcountjs  


> cd C:\n\nodeprj\toptal-community-allcount

	mkdir toptal-community-repo
	cd toptal-community-repo

---

Create `main.js` in


> C:\n\nodeprj\toptal-community-allcount\toptal-community-repo


---

#### start mongodb


> C:\p2\MongoDB\Server\3.0\bin\mongod.exe   --dbpath C:\n\nodeprj\mongodata

ref:

[http://blog.ajduke.in/2013/04/10/install-setup-and-start-mongodb-on-windows/](http://blog.ajduke.in/2013/04/10/install-setup-and-start-mongodb-on-windows/)

---

### start the app

cd ..  
which is...  

> cd C:\n\nodeprj\toptal-community-allcount  

> "C:\n\nodeprj\toptal-community-allcount\node_modules\.bin\allcountjs.cmd" --git toptal-community-repo --db mongodb://localhost:27017/toptal-community


---
http://localhost:9080/

visit this address and sign in with admin admin.

works!

---
## import data ##

> cd C:\n\nodeprj\toptal-community-allcount  

	npm install xml2js
	npm install request
	npm install q
	npm install moment

create   
C:\n\nodeprj\toptal-community-allcount\toptal-community.js  


---

start app again as before.

> "C:\n\nodeprj\toptal-community-allcount\node_modules\.bin\allcountjs.cmd" --git toptal-community-repo --db mongodb://localhost:27017/toptal-community



## got error:

This is system is fantastic!!!!

I am getting an error with the import feature.

	C:\n\nodeprj\toptal-community-allcount\node_modules\allcountjs\node_modules\q\q.
	js:126
	throw e;
	      ^
	Error: toptal-community.js:1
	var request = require('request');
	              ^
	ReferenceError: require is not defined
	at toptal-community.js:1:15

The app starts and works before I add the toptal-community.js file. The file to add the import feature.

I am new to js frameworks.  
Can someone help?

---

Answer:

toptal-community.js was in wrong folder.

create   
C:\n\nodeprj\toptal-community-allcount\toptal-community.js  

edit main.js to call the import feature.

> cd C:\n\nodeprj\toptal-community-allcount  


> node toptal-community.js

works!

---
Add

cards feature per article.

create events.js

edit main.js to call that view.

Works!

---

This is a great system!!

---

## end.




