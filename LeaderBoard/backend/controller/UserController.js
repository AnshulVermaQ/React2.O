import User from "../model/UserModel.js";

export const getUser = async (req, res) => {
    try {
        const users = await User.find().sort({ points: -1 }); 
        res.json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const addUser = async (req, res) => {
    try {
        const { userName } = req.body;

        if (!userName) {
            return res.status(400).json({ message: "Username is required" });
        }

        const existingUser = await User.findOne({ userName });
        if (existingUser) {
            return res.status(400).json({ message: "Username already exists" });
        }

        const newUser = new User({ userName });
        await newUser.save();

        res.status(201).json({ message: "User added successfully", user: newUser });
    } catch (error) {
        console.error("Error adding user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const claimPoints = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const randomPoints = Math.floor(Math.random() * 10) + 1;

        user.points += randomPoints;
        user.history.push({ points: randomPoints, claimedAt: new Date() });

        await user.save();

        res.json({
            message: "Points claimed successfully",
            points: randomPoints,
            totalPoints: user.points,
            user,
        });
    } catch (error) {
        console.error("Error claiming points:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const claimedHistory = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({ history: user.history });
    } catch (error) {
        console.error("Error fetching claimed history:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
