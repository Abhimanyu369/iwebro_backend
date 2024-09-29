const mongoose = require('mongoose');

const companySchema = mongoose.Schema({
    company_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    pdf: {
        type: String,
        required: true
    }
}, { timestamps: true });

const company = mongoose.model('company', companySchema);

module.exports = company;