/**
 * 
 * 
  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
 
 * DO NOT EDIT THIS FILE!! 
 * 
 *  TO CUSTOMIZE brands.js PLEASE EDIT ../custom/brandsCustom.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
const app = require('../../app.js');
const db_Cleverbuys_db = require('../../db/Cleverbuys_db_schema.js')
const properties = require('../../properties.js');
const handleError = require('../../security/util.js').handleError;
require('./custom/brandsCustom.js');

/*
 * SCHEMA DB brands
 * 
	{
		name: {
			type: 'String', 
			required : true
		},
		//RELATIONS
		
		
		//EXTERNAL RELATIONS
		
		brands: {
			type: Schema.ObjectId,
			ref : "dealership"
		},
		
	}
 * 
 */



//CRUD METHODS


/**
 * brandsService.create
 *   @description CRUD ACTION create
 *
 */
app.post(properties.api + '/brands', function (req, res) {
	obj = new db_Cleverbuys_db.brands(req.body);
	obj.save(function (err) {
		if (err) return handleError(err, res);
		res.send(obj);
	});
});

/**
 * brandsService.delete
 *   @description CRUD ACTION delete
 *   @param ObjectId id Id
 *
 */
app['delete'](properties.api + '/brands/:id', function (req, res) {
	db_Cleverbuys_db.brands.findByIdAndRemove(req.params.id, function (err) {
		  if (err) return handleError(err, res);
		  res.send(err);
	});
});

/**
 * brandsService.get
 *   @description CRUD ACTION get
 *   @param ObjectId id Id resource
 *
 */
app.get(properties.api + '/brands/:id', function (req, res) {
	db_Cleverbuys_db.brands.findOne({_id:req.params.id}).exec(function (err, obj) {
		if (err) return handleError(err, res);
		res.send(obj);
	});
});

/**
 * brandsService.list
 *   @description CRUD ACTION list
 *
 */
app.get(properties.api + '/brands', function (req, res) {
	db_Cleverbuys_db.brands.find().exec(function (err, list) {
		if (err) return handleError(err, res);
		res.send(list);
	});
});

/**
 * brandsService.update
 *   @description CRUD ACTION update
 *   @param ObjectId id Id
 *
 */
app.post(properties.api + '/brands/:id', function (req, res) {
	db_Cleverbuys_db.brands.findByIdAndUpdate(req.params.id, req.body, {'new': true}, function (err, obj) {
		if (err) return handleError(err, res);
		res.send(obj);
	});
});


/*
 * CUSTOM SERVICES
 * 
 *	These services will be overwritten and implemented in  Custom.js
 */
