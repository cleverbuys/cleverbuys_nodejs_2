
const app = require('../../../app.js');
const db_Cleverbuys_db = require('../../../db/Cleverbuys_db_schema.js');
const logger = require('../../../logger.js');
const handleError = require('../../../security/util.js').handleError;
const properties = require('../../../properties.js');


// start documentation
/*
 * SCHEMA DB dealership
 * 
	{
		email: {
			type: 'String', 
			required : true
		},
		name: {
			type: 'String', 
			required : true
		},
		telephone: {
			type: 'Number'
		},
		town: {
			type: 'String', 
			required : true
		},
		website: {
			type: 'String'
		},
		//RELATIONS
		
		
		//EXTERNAL RELATIONS
		
		brands: {
			type: Schema.ObjectId,
			ref : "dealership"
		},
		
	}
 * 
 * 
 * 
 * Custom APIs
 *
 */
// end documentation

// INSERT HERE YOURS CUSTOM METHODS


