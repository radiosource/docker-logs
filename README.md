# Docker containers logging system
Includes **watcher** daemon for collection logs, and http **server** for getting information.<br/>

**Watcher -**
collect all logs from running containers, which correspond by `attachFilters` in **config** file, and save it to the **storage** <br/>

**Storage -**
 defined in the **config** file. It had `read`,`write`, `remove` and `getList` methods.
 
**Server -**
  server starts up on `http://127.0.0.1:3000`.<br/>
    Routing:
  * `/list` - getting list of all containers, that having logs in the storage
  * `/container/:id` - getting logs from container by id. Supporting `offset` and `limit` querystring params 


### Getting started
To use `docker-logs` first you need to instantiate it from `sudoers` user:
```console
[user@group docker-logs]$ sudo npm run init 
```
It will build image for `docker-logs` and run 2 instance of `random-loggers` in case you do not have running containers<br/>

Then you just need to start it (from `sudoers` user also)
```console
[user@group docker-logs]$ sudo npm run start 
``` 
Now, if you check `http://127.0.0.1:3000/list` in your browser, you will see list with minimum 2 containers ids.

###Flow chart
![alt text](https://raw.githubusercontent.com/radiosource/docker-logs/master/flow-chart.jpeg)
