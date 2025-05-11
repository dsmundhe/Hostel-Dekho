const userModel = require('../schema/userSchema');

//delete user 
const deleteUser = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await userModel.deleteOne({ email });
        res.json({ msg: "User Deleted Successful", deletedUser: email });
    } catch (error) {
        res.status(404).json({ msg: `Failed ${error.message}` });
    }
}

module.exports = { deleteUser };


