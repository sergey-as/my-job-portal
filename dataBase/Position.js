const {model, Schema} = require('mongoose');

const {positionCategoriesEnum, positionLevelsEnum} = require('../configs');
const modelDefinition = require('./model.definition');

const positionSchema = new Schema({
    category: {
        type: String,
        required: true,
        enum: Object.values(positionCategoriesEnum)
    },
    level: {
        type: String,
        required: true,
        enum: Object.values(positionLevelsEnum)
    },
    japaneseRequired: {
        type: Boolean,
        required: true
    },
    company: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    }
}, modelDefinition.schemaOptions);

positionSchema.methods = {
    normalize() {
        const toNormalize = this.toObject();
        const fieldsToRemove = [
            'createdAt',
            'updatedAt',
            '__v'
        ];

        fieldsToRemove.forEach((field) => {
            delete toNormalize[field];
        });

        return toNormalize;
    }
};

positionSchema.virtual('positionInfo')
    .get(function() {
        return `Category: ${this.category} `+
            `level: ${this.level} `+
            `japaneseRequired: ${this.japaneseRequired}` +
            `company: ${this.company} `+
            `description: ${this.description}`;
    });

module.exports = model('position', positionSchema);
