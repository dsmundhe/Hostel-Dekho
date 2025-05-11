const userModel = require('../schema/userSchema');

const getData = async (req, res) => {
    try {
        res.json({ hostel: "Hostels List!" });
    } catch (error) {
        res.json({ msg: `Failed! ${error.message}` });
    }
}

module.exports={getData};