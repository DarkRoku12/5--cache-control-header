## Caching part #1: Cache-Control header ##

This repo contains the full code of my [blog entry](https://code.darkroku12.ovh/5-caching-part-1/).

## Install instructions:

1) Run `npm install`. (This is a NodeJS app).
2) Create a file named `.env` in the root folder.

The `.env` file content:
```c++
PORT=4010 # Desired port to run the NodeJS app.
```

## Running instructions:

Just open the console and run: `node index.js`.

If you want to use NGINX/OpenResty, be sure to use the provided `nginx.conf` at the root folder.

## Notes:

`Environment: PORT` --> The desired port to run the NodeJS server. Take into account that if you use the NGINX web server you'll need to change `nginx.conf` to match the new port.

## Setup info:
- Windows 10 (20H2)
- Node version: v16.5.0
- NGINX/OpenResty: openresty/1.19.3.2

## Author:
#### Enmanuel Reynoso | DarkRoku12 | enmarey2012@hotmail.com