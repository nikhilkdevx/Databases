const mongoose = require("mongoose");
const chat = require("./models/chat");
main()
.then((res)=>{
    console.log("connection Succesful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let chats = [
    {
        from: "neha",
        to: "pallavi",
        msg: "Send me your notes",
        created_at: new Date()
    },
    {
        from: "rahul",
        to: "priya",
        msg: "Are you coming to class today?",
        created_at: new Date()
    },
    {
        from: "aman",
        to: "rohit",
        msg: "Let's meet at the gym",
        created_at: new Date()
    },
    {
        from: "sneha",
        to: "anjali",
        msg: "Happy Birthday!",
        created_at: new Date()
    },
    {
        from: "vikas",
        to: "arjun",
        msg: "Project submission done",
        created_at: new Date()
    },
    {
        from: "riya",
        to: "pooja",
        msg: "Call me when free",
        created_at: new Date()
    },
    {
        from: "karan",
        to: "aditya",
        msg: "Match starts at 6 PM",
        created_at: new Date()
    },
    {
        from: "simran",
        to: "mehak",
        msg: "Can you share the PDF?",
        created_at: new Date()
    },
    {
        from: "harsh",
        to: "yash",
        msg: "Let's practice DSA tonight",
        created_at: new Date()
    },
    {
        from: "muskan",
        to: "kriti",
        msg: "See you tomorrow",
        created_at: new Date()
    }
];

chat.insertMany(chats)
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});

