const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const {userSchema,User} = require ('./models/User.js');
const Group = require('./models/Group.js');


const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(`mongodb+srv://ravikanth9166:h9H8tToOXnslbXpZ@cluster0.spcs4b5.mongodb.net/tm1`);

app.post('/register', async (req, res)=>{

    const {Fullname, Email, Password, Confirmpassword} = req.body;
    User.findOne({Email: Email})
    .then(user => {
        if(user){
            res.json("Already registered")
        }
        else{
            const newUser = new User ({
                Fullname: Fullname,
                Email: Email, 
                Password:Password,
                Group:[]
             });
             newUser.save()
            .then(log_reg_form => res.json(log_reg_form))
            .catch(err => res.json(err))
        }
    })
    
})

app.post('/login', (req, res)=>{
    // To find record from the database
    const {Email, Password} = req.body;
    User.findOne({Email: Email})
    .then(user => {
        if(user){
            // If user found then these 2 cases
            if(user.Password === Password) {
                res.json("Success");
            }
            else{
                res.json("Wrong password");
            }
        }
        // If user not found then 
        else{
            res.json("No records found! ");
        }
    })
})


app.post('/Creategroup', async (req, res) => {
    const { Groupname, Email } = req.body;
  //  console.log(req.body);

    try {
        const group = await Group.findOne({ Groupname: Groupname });

        if (group) {
            
          //  console.log(group);
            return res.json("Group already registered");
        } else {
            const user = await User.findOne({Email: Email});
            if (!user) {
                return res.json("User not found");
            }

            const newGroup = new Group({
                Groupname: Groupname,
                users: [user._id] // Corrected users array
            });

            const savedGroup = await newGroup.save();
            return res.json(savedGroup);
        }
    } catch (err) {
        return res.status(500).json(err);
    }
});

app.post('/grouplogin', async (req, res) => {
    try {

        const { Groupname, Email } = req.body;
        console.log(req.body);
        const group = await Group.findOne({ Groupname });
        console.log(group);

        if (group) {
            const user = await User.findOne({Email: Email});
            console.log("user is-",user);
            if (!user) {
                return res.json("Wrong Credentials");
            }
                console.log(user);
            let userFound = false;
            for (let userId of group.users) {
                console.log("ids:-",user._id.toString(),"-",userId.toString())
                if (user._id.toString() === userId.toString()) {
                    userFound = true;
                    res.json("Success");
                    break;
                }
            }

            if (!userFound) {
                res.json("Wrong Credentials");
            }
        } else {
            res.json("No records found!");
        }
    } catch (error) {
        console.error(error);
        res.status(500).json("Server error");
    }
});



app.listen(3001, () => {
    console.log("Server listining on http://127.0.0.1:3001");

});