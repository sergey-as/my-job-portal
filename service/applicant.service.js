const {Applicant} = require('../dataBase');

module.exports = {
    getAllApplicants: (query = {}) => {
        const {...filters} = query;

        const findObject = {};

        Object.keys(filters)
            .forEach((filterParam) => {
                switch (filterParam) {
                    // case 'category':
                    //     findObject.category = filters.category;
                    //     break;
                    // case 'company':
                    //     findObject.company = {$regex: `${filters.company}`, $options: 'i'};
                    //     break;
                    case 'japaneseKnowledge':
                        findObject.japaneseKnowledge = filters.japaneseKnowledge;
                        break;
                    case 'level':
                        findObject.level = filters.level;
                        break;
                    // case 'tag':
                    //     findObject.description = {$regex: `${filters.tag}`, $options: 'i'};
                    //     break;
                }
            });

        return Applicant.find(findObject);
    }
};
