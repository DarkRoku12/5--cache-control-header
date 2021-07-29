import "./exceptionHandler.js";
import Env     from "./environment.js";
import Express from "express";
import Moment  from "moment";
import Path    from "path";

const app = Express();

app.get( "/" , function( req , res )
{
  res.sendFile( "index.html" , { root : Path.resolve() });
});

// Middleware to log requests that start with 'counter'.
app.all( "/counter*" , function( req , res , next )
{
  const path = `${req.baseUrl}${req.path}`;
  console.log( req.method , path , Moment().format( "HH:mm:ss" ) );
  next();
});

let counter = 0;

// Without cache.
app.get( "/counter" , function( req , res )
{
  res.json({ from : "counter" , counter : ++counter });
});

// With Cache-control.
app.get( "/counter-cache-control" , function( req , res )
{
  const seconds = 10;
  res.set( "Cache-control" , `private, max-age=${seconds}` );
  res.json({ from : "counter-cache-control" , counter : ++counter });
});

// Create the server.
app.listen( Env.PORT , () =>
{
  console.log( `Server running at: http://localhost:${Env.PORT}` );
});