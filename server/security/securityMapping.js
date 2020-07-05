/**

  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
                                                                                     
                                                                                   
 *  DO NOT EDIT HIS FILE!!
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */

exports.authMapping = {
    //STATIC SECURITY
    'POST - /api/changePassword$': [],
    'POST - /api/users/$': ["ADMIN"],
    'POST - /api/users/([^/])+$': ["ADMIN"],
    'GET - /api/users/$': ["ADMIN"],
    'GET - /api/users/([^/])+$': ["ADMIN"],
    'POST - /api/users/([^/])+/changePassword': ["ADMIN"],

    //YOUR SECURITY MAPPING
	'POST - /api/user/([^/])+/changePassword$' : ["ADMIN"],
	'POST - /api/user/*$' : [],
	'DELETE - /api/user/([^/])+$' : [],
	'GET - /api/user/([^/])+$' : null,
	'GET - /api/user/*$' : [],
	'POST - /api/user/([^/])+$' : [],
	'POST - /api/brands/*$' : [],
	'DELETE - /api/brands/([^/])+$' : [],
	'GET - /api/brands/([^/])+$' : [],
	'GET - /api/brands/*$' : [],
	'POST - /api/brands/([^/])+$' : [],
	'POST - /api/dealerbrands/*$' : [],
	'DELETE - /api/dealerbrands/([^/])+$' : [],
	'GET - /api/dealerbrands/findBybrandID/([^/])+$' : [],
	'GET - /api/dealerbrands/([^/])+$' : [],
	'GET - /api/dealerbrands/*$' : [],
	'POST - /api/dealerbrands/([^/])+$' : [],
	'POST - /api/dealership/*$' : [],
	'DELETE - /api/dealership/([^/])+$' : [],
	'GET - /api/dealership/findBybrands/([^/])+$' : [],
	'GET - /api/dealership/([^/])+$' : [],
	'GET - /api/dealership/*$' : [],
	'POST - /api/dealership/([^/])+$' : [],
	'POST - /api/state/*$' : [],
	'DELETE - /api/state/([^/])+$' : [],
	'GET - /api/state/([^/])+$' : [],
	'GET - /api/state/*$' : [],
	'POST - /api/state/([^/])+$' : [],
	

}
