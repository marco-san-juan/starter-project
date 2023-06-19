import express, {Express,Request,Response} from 'express';



const app: Express = express();

const port = 5555;


app.get('/',(re:Request,resp:Response)=>{
    resp.send('Express + TypeScript Project');
})

app.listen(port, ()=>{
    console.log(`[server]: is running at http://localhost:${port}`);
})