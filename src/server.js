import express from 'express';
const app = express();
const port = 3000;
// this only possible in express version 4.16.0 onwards
// it is used to get the parsed data
app.use(express.json());
app.use( (req, res, next)=>{
  res.status(404);
  if (req.accepts('json')) {
    res.send({error: true, message: 'Route Not found' });
    return;
   }
});
app.listen(port, ()=>{
  console.log('app is listening on port 3000');
});