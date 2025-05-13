const userModel = require('../schema/userSchema');
const bcrypt = require('bcrypt');

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

//edit name
const editName = async (req, res) => {
    try {
        const { email, newName } = req.body;
        if (!newName || !email) {
            res.json({ msg: "Please Provide data!" });
            return;
        }
        const user = await userModel.findOneAndUpdate({ email }, { $set: { name: newName } }, { new: true });

        res.json({ msg: "Name change Successful!", user });

    } catch (error) {
        res.status(404).json({ msg: `Failed ${error.message}` });
    }
}

//edit Email
const editEmail = async (req, res) => {
    try {
        const { email, newEmail } = req.body;
        if (!email || !newEmail) {
            res.json({ msg: "Please provide data!" });
            return;
        }
        const user = await userModel.findOneAndUpdate({ email }, { $set: { email: newEmail } }, { new: true });
        if (!user) {
            res.json({ msg: "User not found!" });
            return;
        }
        res.json({ msg: "Email changed Successful!", user });

    } catch (error) {
        res.status(404).json({ msg: `Failed ${error.message}` });
    }
}

const editPassword = async (req, res) => {
    try {
        const { email, newPassword } = req.body;
        if (!email || !newPassword) {
            res.json({ msg: "Please Provide data!" });
            return;
        }
        const hashPassword = await bcrypt.hash(newPassword, 10);
        const user = await userModel.findOneAndUpdate({ email }, { $set: { hashPassword: hashPassword } });
        if (!user) {
            res.json({ msg: "User not found!" });
            return;
        }
        res.json({ msg: "Password changed successful!", user });

    } catch (error) {
        res.status(404).json({ msg: `Failed ${error.message}` });
    }
}

module.exports = { deleteUser, editName, editEmail, editPassword };


