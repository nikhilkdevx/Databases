const mongoose = require("mongoose");
main()
    .then(()=>{ 
     console.log("Connection Successful");

    })
    .catch((err) => console.log(err));
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
} 

const UserSchema = new mongoose.Schema(
    {
        name : String,
        email : String,
        age : Number,
    }
);

const User = mongoose.model("User",UserSchema);

const User1 = new User({
    name : "Adam",
    email : "adam@123",
    age : 34,
});

const User2 = new User({
    name : "Eve",
    email : "Eve@123",
    age : 34,
});


User1.save();
User2.save().then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console,log(err);
});