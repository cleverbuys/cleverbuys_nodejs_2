/**

  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
                                                                                     
                                                                                   
 *  DO NOT EDIT HIS FILE!!
 * 
 *  FOR CUSTOMIZE DB SCHEMA PLEASE EDIT db/Cleverbuys_db_customSchema.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const createUser = require('../security/security.js');

const db_Cleverbuys_db_schema = [];
const db_Cleverbuys_db = [];

/**
 * SCHEMA DB Cleverbuys_db
 */



 /**
  * User
  */
db_Cleverbuys_db_schema.User = new mongoose.Schema({
	lat: {
		type: 'Number'
	},
	lng: {
		type: 'Number'
	},
	mail: {
		type: 'String'
	},
	name: {
		type: 'String'
	},
	password: {
		type: 'String', 
		required : true
	},
	postCode: {
		type: 'String'
	},
	roles: [{
		type: 'String'
	}],
	state: {
		type: 'String'
	},
	surname: {
		type: 'String'
	},
	town: {
		type: 'String'
	},
	username: {
		type: 'String', 
		required : true
	},
	//RELATIONS
	
	
	//EXTERNAL RELATIONS
	/*
	*/
});


 /**
  * brands
  */
db_Cleverbuys_db_schema.brands = new mongoose.Schema({
	name: {
		type: 'String', 
		required : true
	},
	//RELATIONS
	
	
	//EXTERNAL RELATIONS
	/*
	brands: {
		type: Schema.ObjectId,
		ref : "dealership"
	},
	*/
});


 /**
  * dealerBrands
  */
db_Cleverbuys_db_schema.dealerBrands = new mongoose.Schema({
	brandID: {
		type: 'Number', 
		required : true
	},
	dealershipID: {
		type: 'Number', 
		required : true
	},
	//RELATIONS
	
	
	//EXTERNAL RELATIONS
	/*
	*/
});


 /**
  * dealership
  */
db_Cleverbuys_db_schema.dealership = new mongoose.Schema({
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
	brands: {
		type: Schema.ObjectId,
		ref : "brands"
	},
	
	
	//EXTERNAL RELATIONS
	/*
	*/
});


 /**
  * state
  */
db_Cleverbuys_db_schema.state = new mongoose.Schema({
	name: {
		type: 'String', 
		required : true
	},
	shortName: {
		type: 'String', 
		required : true
	},
	//RELATIONS
	
	
	//EXTERNAL RELATIONS
	/*
	*/
});



// Import schema customization
require('./Cleverbuys_db_customSchema.js');
var Cleverbuys_db_model = require('./Cleverbuys_db_crud.js');

// Declare mongoose model

db_Cleverbuys_db.User = Cleverbuys_db_model.connection.model('User', db_Cleverbuys_db_schema.User );
db_Cleverbuys_db.brands = Cleverbuys_db_model.connection.model('brands', db_Cleverbuys_db_schema.brands );
db_Cleverbuys_db.dealerBrands = Cleverbuys_db_model.connection.model('dealerBrands', db_Cleverbuys_db_schema.dealerBrands );
db_Cleverbuys_db.dealership = Cleverbuys_db_model.connection.model('dealership', db_Cleverbuys_db_schema.dealership );
db_Cleverbuys_db.state = Cleverbuys_db_model.connection.model('state', db_Cleverbuys_db_schema.state );

module.exports = db_Cleverbuys_db;

// Create ADMIN user if does not exist
createUser.createUser();
