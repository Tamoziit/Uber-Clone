import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const CaptainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'First name must be atleast 3 characters long']
        },
        lastname: {
            type: String,
            minlength: [3, 'Last name must be atleast 3 characters long']
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
        minlength: [5, 'Email must be atleast 5 characters long']
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    socketId: {
        type: String
    },
    // to check if the captain is available to take rides or not
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "inactive"
    },
    // vehicle desc.
    vehicle: {
        color: {
            type: String,
            required: true,
            minlength: [3, 'Colour must be at least 3 characters long']
        },
        plate: {
            type: String,
            required: true,
            minlength: [3, 'Plate no. must be at least 3 characters long']
        },
        capacity: {
            type: Number,
            required: true,
            minlength: [1, 'Capacity must be atleast 1']
        },
        vehicleType: {
            type: String,
            enum: ["car", "motorcycle", "auto"],
            required: true
        }
    },
    //to track the location of the captain
    location: {
        lat: {
            type: Number
        },
        lng: {
            type: Number
        }
    }
}, { timestamps: true });


CaptainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}

CaptainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

CaptainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

const CaptainModel = mongoose.model('Captain', CaptainSchema);
export default CaptainModel;