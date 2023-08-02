import express from 'express';
import hbs from 'hbs';

const app=express();
app.use(express.static('public'));
app.set('views','views');
app.set('view engine','hbs');

hbs.registerPartials('partials');

app.get("",(req,res)=>{
    res.render("index");
});
app.get("/about",(req,res)=>{
    res.render('about');
});
app.get("/weather",(req,res)=>{
    res.render('weather');
});
app.get("*",(req,res)=>{
    res.render("404error",
    {
        msg:"Opps! Page Not Found...",
    });
});
app.listen("9000",()=>{
    console.log("hello");
});
