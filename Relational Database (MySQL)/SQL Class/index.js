const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");
const express = require("express");
let app = express();
const path = require("path");
const methodOverride = require("method-override");

app.set("view engine","ejs");
app.set("views",path.join(__dirname ,"/views"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));
const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  database : 'demo',
  password : 'Nik@12345'

});

let  getRandomUser = () => {
  return[
     faker.string.uuid(),
     faker.internet.username(),
     faker.internet.email(),
     faker.internet.password()
    
  ];
}

// Inserting Data 
// let q = "insert into user (id , username, email, password ) values ?";

// let data = [];
// for(let i = 1;i<=100;i++){
//   data.push(getRandomUser());
// }

app.get("/",(req,res)=>{
  let q = `select count(*) from user`;

  try{
    connection.query(q,(err,result)=>{
    if(err) throw err;
    let count = result[0]["count(*)"];
    res.render("home.ejs",{count});
  
});
} catch(err){
  console.log(err);
  res.send("some error in Database");
}

});

app.listen("8080" , ()=>{
  console.log("Port is listening successfully !");
});
 
app.get("/users",(req,res)=>{
  let q = `select id,username,email from user;`
  try{
    connection.query(q,(err,users)=>{
      if (err) throw err;
      // res.send(result);
      res.render("users",{users});
    });
  } catch(err){
    console.log(err);
  res.send("some error in Database");
  }
  
});

app.get("/users/:id/edit",(req,res)=>{
  let id = req.params.id;
  let q = `select * from user where id = '${id}' `;
  try{
    connection.query(q,(err,result)=>{
      if (err) throw err;
      let user = result[0];
      res.render("edit.ejs",{user});
    });
  } catch(err){
    console.log(err);
  res.send("some error in Database");
  }
  
});


app.patch("/users/:id",(req,res)=>{
   let id = req.params.id;
   let {password : formpass , username : newusername} = req.body;
   let q = `select * from user where id = '${id}' `;
  try{
    connection.query(q,(err,result)=>{
      if (err) throw err;
      let user = result[0];
      if(formpass  != user.password){
        res.send("Wrong Password");
      } else{
        let q2 = `update user set username = '${newusername}' where id='${id}' `;
        connection.query(q2,(err,result)=>{
          if(err) throw err;
          // res.send(result);
          res.redirect("/users");
        });
      }
      
    });
  } catch(err){
    console.log(err);
  res.send("some error in Database");
  }
});


// try{
// connection.query(q,[data],(err,result)=>{
//   if(err) throw err;
//   console.log(result);
  
// })
// } catch(err){
//   console.log(err);
// }

// connection.end();
