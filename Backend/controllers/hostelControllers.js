const { hostelModel } = require('../schema/hostelsSchema');


//register hostel
const registerHostel = async (req, res) => {

    try {
        const { name, city, college, imageLink, contact } = req.body;
        if (!name || !city || !college || !contact) {
            res.json({ msg: "Please Provide data!" });
            return;
        }
        const isPresent = await hostelModel.findOne({ name, city, contact });
        if (isPresent) {
            res.json({ msg: "Already present!" });
            return;
        }
        const hostel = new hostelModel({ name, city, college, imageLink, contact });
        hostel.save();
        res.json({ msg: "Hostel register successful!", hostel });

    } catch (error) {
        res.status(404).json({ msg: `Failed ${error.message}` });
    }
}

const getData = async (req, res) => {
    try {
        const hostels=await hostelModel.find();
        res.json({ hostel: "Hostels List!", hostels });
    } catch (error) {
        res.json({ msg: `Failed! ${error.message}` });
    }
}

module.exports = { getData, registerHostel };