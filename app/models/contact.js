
import mongoose, { Schema } from 'mongoose';
const contactSchema = new Schema({
    application: {
        type: String,
        required: [false],
        trim: true,
    },
    clientName: {
        type: String,
        required: [false],
        trim: true,
    },
    url: {
        type: String,
        required: [false],
    },
    project: {
        type: String,
        required: [true, "userName is required"],
        trim: true,
        minLength: [2, "user name must  have atleast 2 character"],
        maxLenght: [50, "user name must be less than 50 characters"]
    },
    password: {
        type: String,
        required: [true, "Password is requird"],
        trim: true,
        minLength: [8, "Password must have atleast 8 character"],
        maxLenght: [150, "Password must be less than 50 characters"]
    },
    date: {
        type: Date,
        default: Date.now,
    },

})

// create schema if not present otherwise use the existed schema
const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema)
export default Contact;