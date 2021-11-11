const {model, Schema} = require('mongoose');

const {positionCategories, positionLevels} = require("../configs");
const modelDefinition = require('./model.definition');

const positionSchema = new Schema({
    category: {
        type: String,
        required: true,
        enum: Object.values(positionCategories)
    },
    level: {
        type: String,
        required: true,
        enum: Object.values(positionLevels)
    },
    company: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    japaneseRequired: {
        type: Boolean,
        required: true
    }
}, modelDefinition.schemaOptions);

positionSchema.virtual('positionInfo')
    .get(function () {
        return `Category: ${this.category} level: ${this.level} company: ${this.company} description: ${this.description} japaneseRequired: ${this.japaneseRequired}`;
    });

module.exports = model('position', positionSchema);
