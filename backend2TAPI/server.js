import  express  from "express";

const app = express();

app.get('/data', (req, res)=>{
    const infoDta = [
        {
            id: 1,
            name:"Malav Patel",
            designation:"Developer",
            age:19
        },
        {
            id: 2,
            name:"Yash Patel",
            designation:"frontend",
            age:20
        },
        {
            id: 3,
            name:"Rajesh Patel",
            designation:"backend",
            age:21
        },
        {
            id: 4,
            name:"Meet Patel",
            designation:"marketing",
            age:22
        },
        {
            id: 5,
            name:"Ayush Patel",
            designation:"designer",
            age:23
        },
        {
            id: 6,
            name:"Kamlesh Patel",
            designation:"cleaner",
            age:24
        },
        {
            id: 7,
            name:"Tony Patel",
            designation:"manager",
            age:25
        },
        {
            id: 8,
            name:"Mony Patel",
            designation:"Employee",
            age:26
        }
    ];
    res.send(infoDta);
});

const port = process.env.PORT || 4000;

app.listen(port, ()=>{
    console.log(`App Served at http://localhost:${port}`)
});