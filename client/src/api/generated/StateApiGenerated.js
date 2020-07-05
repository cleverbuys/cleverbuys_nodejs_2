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
 *  TO CUSTOMIZE APIS IN StateApiGenerated.js PLEASE EDIT ../StateApi.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 
// Dependencies
import axios from "axios";
import { properties } from "../../config/properties";

class StateApiGenerated {

  static contextUrl = properties.endpoint + "/state";

  // CRUD METHODS

  /**
  * stateService.create
  *   @description CRUD ACTION create
  *   @param state obj Object to insert
  *
  */
  static createState(state) {
    return axios.post(StateApiGenerated.contextUrl, state )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * stateService.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id state
  *
  */
  static deleteState(id) {
    return axios.delete(StateApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * stateService.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id state
  *   @returns state
  *
  */
  static getOneState(id) {
    return axios.get(StateApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * stateService.list
  *   @description CRUD ACTION list
  *   @returns ARRAY OF state
  *
  */
  static getStateList() {
    return axios.get(StateApiGenerated.contextUrl)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * stateService.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id state
  *   @returns state
  *
  */
  static saveState(state) {
    return axios.post(StateApiGenerated.contextUrl + "/" + state._id, state )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }



    // Custom APIs
}

export default StateApiGenerated;
