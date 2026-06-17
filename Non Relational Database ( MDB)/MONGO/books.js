const mongoose = require("mongoose");
main()
    .then(()=>{ 
     console.log("Connection Successful");

    })
    .catch((err) => console.log(err));
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const booksSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        maxlength : 20,

    },
    author :{
        type : String,
    },
    price : {
        type : Number,
        min : [1,"Price is Too Low for Selling"],

    },
    discount : {
        type : Number,
        default : 0,
    },
    category : {
        type : String,
        enum : ["fiction", "non-fiction"],

    },
    genre : [String]
        

});

const Book = mongoose.model("Book",booksSchema);

// let book1 = new Book({
//     title : "RD Maths",
//     author : "RD sharma",
//     price : 1200,
// });

// book1
// .save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// let book2 = new Book({
//     title : "Think and Grow Rich",
//     author : "Napolean Hill",
//     price : 220,
// });

// book2
// .save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// let book3 = new Book({
//     title : "Marvel ice",
//     author : "Walter Mitty",
//     price : 500,
//     category : "fiction",
//     genre : ["malai baraf", "ice cream", "paseto iceta"]


// });

// book3.save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

Book.findByIdAndUpdate("6a325d688d4de2733fe66f72",{price : -110},{runValidators : true})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err.errors.price.properties.message);
});