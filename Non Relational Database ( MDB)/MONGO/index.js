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

// User.insertMany([
//     { name : "Iron Man" , email : "Iron@33" , age : 50 },
//     { name : "Bat Man" , email : "Bat@33" , age : 30},
//     { name : "Lion Man" , email : "Lion@33" , age : 35},
// ]).then((res)=>{
//     console.log(res);
// });

// User.findById( "6a31f329a3153593d4c806be" ).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

// const User1 = new User({
//     name : "Adam",
//     email : "adam@123",
//     age : 34,
// });

// const User2 = new User({
//     name : "Eve",
//     email : "Eve@123",
//     age : 34,
// });

// User1.save();
// User2.save().then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console,log(err);
// });

// User.updateOne({name : "Iron Man"},{age : 15}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// User.updateMany({age : {$gt : 20}},{age : 15})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

// User.findOneAndUpdate({name : "Lion Man"},{age : 105},{new : true})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

// User.findByIdAndUpdate("6a31f317cd2c23d8e04a1b3d",{age : 105},{new : true})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

// User.findByIdAndDelete("6a31f317cd2c23d8e04a1b3d",{age : 105},{new : true})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

// User.deleteMany({age : 15})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

User.deleteMany({age : 15})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})