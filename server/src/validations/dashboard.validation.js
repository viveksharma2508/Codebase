import Joi from 'joi';
import customValidation from './custom.validation.js';

const getDashboardData = {
	query: {
		student: Joi.required().custom(customValidation.objectId),
	},
};

export default { getDashboardData };
