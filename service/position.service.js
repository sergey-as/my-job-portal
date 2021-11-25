const {Position} = require('../dataBase');

module.exports = {
    getAllPositions: (query = {}) => {
        const {...filters} = query;
        const findObject = {};

        Object.keys(filters)
            .forEach((filterParam) => {
                switch (filterParam) {
                    case 'category':
                        findObject.category = filters.category;
                        break;
                    case 'company':
                        findObject.company = {$regex: `${filters.company}`, $options: 'i'};
                        break;
                    case 'japaneseRequired':
                        findObject.japaneseRequired = filters.japaneseRequired;
                        break;
                    case 'level':
                        findObject.level = filters.level;
                        break;
                    case 'tag':
                        findObject.description = {$regex: `${filters.tag}`, $options: 'i'};
                        break;
                }
            });

        return Position.find(findObject);
    }
};
