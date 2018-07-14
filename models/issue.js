import mongoose, { Schema } from 'mongoose';

const IssueSchema = new Schema({
    title: String,
    responsible: String,
    description: String,
    severity: String,
    status: { type: String, default: 'Open' }
});

export default mongoose.model('Issue', IssueSchema);