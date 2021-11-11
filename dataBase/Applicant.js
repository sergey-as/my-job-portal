const {model, Schema} = require('mongoose');

const {positionCategories, positionLevels} = require("../configs");
const modelDefinition = require('./model.definition');

const applicantSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    categories: {
        type: Array,
        required: true,
        enum: Object.values(positionCategories)
    },
    japaneseKnowledge: {
        type: Boolean,
        required: true
    },
    level: {
        type: String,
        required: true,
        enum: Object.values(positionLevels)
    }
}, modelDefinition.schemaOptions);

applicantSchema.methods = {
    normalize() {
        const applicantToNormalize = this.toObject();
        const fieldsToRemove = [
            'createdAt',
            'updatedAt',
            '__v'
        ];

        fieldsToRemove.forEach((field) => {
            delete applicantToNormalize[field];
        });

        return applicantToNormalize;
    }
};

applicantSchema.statics = {
    async createApplicant(applicantObject) {
        return this.create({...applicantObject});
    }
};

applicantSchema.virtual('applicantInfo')
    .get(function () {
        return `Email: ${this.email} categories: ${this.categories.toString()} japaneseKnowledge: ${this.japaneseKnowledge} level: ${this.level}`;
    });

module.exports = model('applicant', applicantSchema);
