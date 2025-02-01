import mongoose from "mongoose";

const faqSchema = new mongoose.Schema({
    question: {
        default: {
            type: String,
            required: true
        },
        translations: {
            hi: { type: String },
            bn: { type: String }
        }
    },
    answer: {
        default: {
            type: String,
            required: true
        },
        translations: {
            hi: { type: String },
            bn: { type: String }
        }
    }
});

const FAQ = mongoose.model("FAQ", faqSchema);

export default FAQ
