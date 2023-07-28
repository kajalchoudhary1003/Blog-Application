import User from "../model/user.js";
// this dependency below is imported for the purpose of encryption of password so that others can't see it 
import bcrypt from 'bcrypt';


export const signupUser = async (req, res) => {
try {
    // const salt = await bcrypt.genSalt(); This was old cmd to add salt 
    // now using hash our password will look like ssffdffdddfd
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user={username: req.body.username, name:req.body.name, password: hashedPassword};

    const newUser = new User(user);
    await newUser.save();

    return res.status(200).json({msg:'signup successfully'});
    
} catch (error) {

    return res.status(500).json({msg:'Error while signup'})
    
}
}