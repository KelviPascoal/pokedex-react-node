import mongoose from 'mongoose';

const TypeSchema = new mongoose.Schema({
    label: String,
    value: String,
})

export const TypeModel = mongoose.model("type", TypeSchema, "type")