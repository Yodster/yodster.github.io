/**
 * Created by eugen on 5/11/2017.
 * Updated by graz on 6/15/18.
 * Updated by eugene on 12/28/18 for 7.5 endpoints
 * Updaed by eugene on 7/29/19 for 7.7 endpoints
 * updated by eugene on 1/15/19 for 7.9 endpoints
 * updated by eugene on 8/26/20 for 8.1.3 endpoints
 * updated by eugene on 1/8/21 for 8.3.0 endpoints and Rx 360 API compatibility
 * updated by eugene on 1/8/21 for 8.4.0 endpoints and RPC goodies from Thomas
 */

function ExtraHop(hostname, apiKey=null, cloud_id=null, cloud_secret=null){
    this.hostname = hostname;
    this.apiKey = apiKey;
    this.cloud_id = cloud_id
    this.cloud_secret = cloud_secret
    // *************************************
    // *********** Activity Groups *********
    // *************************************

    this.getActivityGroups = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/activitygroups";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getActivityGroupsDashboards = function(activitygroupsID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/activitygroups/"+activitygroupsID+"/dashboards";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // *************************************
    // *********** Activity Maps *********
    // *************************************

    this.getActivityMaps = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/activitymaps";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postActivityMaps = function(body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/activitymaps";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.postActivityMapsQuery = function(body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/activitymapsquery";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.deleteActivityMap = function(activitymapID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/activitymaps/" + activitymapID;

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getActivityMap = function(activitymapID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/activitymaps/" + activitymapID;

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.patchActivityMap = function(activitymapsID, body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/activitymaps/" + activitymapsID;

        var _request = new XMLHttpRequest();
        _request.open("PATCH", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.postActivityMapQuery = function(activitymapID, body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/activitymaps/" + activitymapID + "/query";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.getActivityMapSharing = function(activitymapsID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/activitymaps/" + activitymapsID + "/sharing";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.patchActivityMapSharing = function(activitymapsID, body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/activitymaps/" + activitymapsID + "/sharing";

        var _request = new XMLHttpRequest();
        _request.open("PATCH", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.putActivityMapSharing = function(activitymapsID, body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/activitymaps/" + activitymapsID + "/sharing";

        var _request = new XMLHttpRequest();
        _request.open("PUT", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };


    // *************************************
    // *************** Alerts **************
    // *************************************

    this.getAlerts = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/alerts";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };
    this.postAlert = function(body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/alerts";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };
    this.deleteAlert = function(alertID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/alerts";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + alertID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };
    this.getAlert = function(alertID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/alerts";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + alertID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };
    this.patchAlert = function(alertID, body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/alerts";

        var _request = new XMLHttpRequest();
        _request.open("PATCH", _uri + '/' + alertID.toString(), false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.getAlertApplications = function(alertID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/alerts";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + alertID.toString() + "/applications", false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };
    this.postAlertApplications = function(alertID,body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/alerts";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + alertID.toString() + "/applications", false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };
    this.deleteAlertApplication = function(alertID,applicationID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/alerts";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + alertID.toString() + "/applications/" + applicationID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };
    this.postAlertApplication = function(alertID,applicationID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/alerts";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + alertID.toString() + "/applications/" + applicationID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getAlertDeviceGroups = function(alertID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/alerts";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + alertID.toString() + "/devicegroups", false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };
    this.postAlertDeviceGroups = function(alertID,body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/alerts";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + alertID.toString() + "/devicegroups", false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };
    this.deleteAlertDeviceGroup = function(alertID,devicegroupID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/alerts";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + alertID.toString() + "/devicegroups/" + devicegroupID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };
    this.postAlertDeviceGroup = function(alertID,devicegroupID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/alerts";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + alertID.toString() + "/devicegroups/" + devicegroupID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getAlertDevices = function(alertID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/alerts";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + alertID.toString() + "/devices", false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };
    this.postAlertDevices = function(alertID,body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/alerts";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + alertID.toString() + "/devices", false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };
    this.deleteAlertDevice = function(alertID,deviceID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/alerts";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + alertID.toString() + "/devices/" + deviceID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };
    this.postAlertDevice = function(alertID,deviceID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/alerts";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + alertID.toString() + "/devices/" + deviceID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getAlertEmailGroups = function(alertID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/alerts";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + alertID.toString() + "/emailgroups", false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };
    this.postAlertEmailGroups = function(alertID,body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/alerts";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + alertID.toString() + "/emailgroups", false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };
    this.deleteAlertEmailGroup = function(alertID,emailgroupID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/alerts";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + alertID.toString() + "/emailgroups/" + emailgroupID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };
    this.postAlertEmailGroup = function(alertID,emailgroupID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/alerts";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + alertID.toString() + "/emailgroups/" + emailgroupID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getAlertExclusionIntervals = function(alertID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/alerts";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + alertID.toString() + "/exclusionintervals", false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };
    this.postAlertExclusionIntervals = function(alertID,body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/alerts";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + alertID.toString() + "/exclusionintervals", false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };
    this.deleteAlertExclusionInterval = function(alertID,exclusionintervalID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/alerts";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + alertID.toString() + "/exclusionintervals/" + exclusionintervalID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };
    this.postAlertExclusionInterval = function(alertID,exclusionintervalID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/alerts";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + alertID.toString() + "/exclusionintervals/" + exclusionintervalID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getAlertNetworks = function(alertID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/alerts";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + alertID.toString() + "/networks", false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };
    this.postAlertNetworks = function(alertID,body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/alerts";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + alertID.toString() + "/networks", false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };
    this.deleteAlertNetwork = function(alertID,networkID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/alerts";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + alertID.toString() + "/networks/" + networkID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };
    this.postAlertNetwork = function(alertID,networkID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/alerts";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + alertID.toString() + "/networks/" + networkID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getAlertStats = function(alertID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/alerts";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + alertID.toString() + "/stats", false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    }

    // *************************************
    // ********** Analysis Priority ********
    // *************************************

    this.getAnalysisPriorityConfig = function(applianceID = 0){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/analysispriority/config/" + applianceID;

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    }

    this.putAnalysisPriorityConfig = function(body, applianceID = 0){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/analysispriority/config/" + applianceID;

        var _request = new XMLHttpRequest();
        _request.open("PUT", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    }

    this.getAnalysisPriorityManager = function(applianceID = 0){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/analysispriority/" + applianceID + "/manager";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    }

    this.patchAnalysisPriorityManager = function(body, applianceID = 0){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/analysispriority/" + applianceID + "/manager";

        var _request = new XMLHttpRequest();
        _request.open("PATCH", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    }

    // *************************************
    // *************** API-Key *************
    // *************************************

    this.getAPIkeys = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/apikeys";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postAPIkeys = function(body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/apikeys";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.getAPIkey = function(keyID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/apikeys";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + keyID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // *************************************
    // ************* Appliances ************
    // *************************************

    this.getAppliances = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/appliances";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postAppliance = function(body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/appliances";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.DeleteAppliance = function(applianceID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/appliances/" + applianceID;

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };


    this.getAppliance = function(applianceID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/appliances";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + "/" + applianceID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getApplianceCloudservices = function(applianceID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/appliances";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + "/" + applianceID.toString() + "/cloudservices", false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getApplianceProductkey = function(applianceID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/appliances";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + "/" + applianceID.toString() + "/productkey", false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // *************************************
    // ************ Applications ***********
    // *************************************

    this.getApplications = function(active_from, active_until, limit, offset, search_type, value) {
        var _uri = "HTTPS://" + this.hostname + "/api/v1/applications",
            _queryString = "";

        if(!!active_from || active_from === 0 || active_from === "0") {
            if (_queryString) {
                _queryString += "&";
            }
            _queryString += "active_from=" + active_from.toString();
        }

        if(!!active_until || active_until === 0 || active_until=== "0"){
            if(_queryString) {
                _queryString += "&";
            }
            _queryString += "active_until=" + active_until.toString();
        }

        if(!!limit || limit === 0 || limit === "0") {
            if(_queryString) {
                _queryString += "&";
            }
            _queryString += "limit=" + limit.toString();
        }

        if(!!offset || offset === 0 || offset === "0") {
            if(_queryString) {
                _queryString += "&";
            }
            _queryString += "offset=" + offset.toString();
        }

        if(!!search_type && !!value){
            if(_queryString) {
                _queryString += "&";
            }
            _queryString += "search_type=" + search_type + "&value=" + value;
        }

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + "?" + _queryString, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postApplication = function(body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/applications";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.getApplication = function(applicationID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/applications";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + applicationID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.patchApplication = function(applicationID, body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/applications";

        var _request = new XMLHttpRequest();
        _request.open("PATCH", _uri + '/' + applicationID.toString(), false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.getApplicationActivity = function(applicationID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/applications";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + applicationID.toString() + "/activity", false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getApplicationAlerts = function(applicationID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/applications";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + applicationID.toString() + "/alerts", false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postApplicationAlerts = function(applicationID,body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/applications";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + applicationID.toString() + "/alerts", false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.deleteApplicationAlert = function(applicationID,alertID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/applications";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + applicationID.toString() + "/alerts/" + alertID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postApplicationAlert = function(applicationID,alertID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/applications";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + applicationID.toString() + "/alerts/" + alertID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getApplicationDashboards = function(applicationID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/applications";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + applicationID.toString() + "/dashboards", false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // deprecated
    this.getApplicationFlexGrids = function(applicationID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/applications";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + applicationID.toString() + "/flexgrids", false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // deprecated
    this.postApplicationFlexGrids = function(applicationID,body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/applications";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + applicationID.toString() + "/flexgrids", false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    // deprecated
    this.deleteApplicationFlexGrid = function(applicationID,flexgridID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/applications";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + applicationID.toString() + "/flexgrids/" + flexgridID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // deprecated
    this.postApplicationFlexGrid = function(applicationID,flexgridID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/applications";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + applicationID.toString() + "/flexgrids/" + flexgridID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // deprecated
    this.getApplicationGeoMaps = function(applicationID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/applications";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + applicationID.toString() + "/geomaps", false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // deprecated
    this.postApplicationGeoMaps = function(applicationID,body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/applications";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + applicationID.toString() + "/geomaps", false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    // deprecated
    this.deleteApplicationGeoMap = function(applicationID,geomapID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/applications";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + applicationID.toString() + "/geomaps/" + geomapID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // deprecated
    this.postApplicationGeoMap = function(applicationID,geomapID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/applications";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + applicationID.toString() + "/geomaps/" + geomapID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // deprecated
    this.getApplicationPages = function(applicationID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/applications";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + applicationID.toString() + "/pages", false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // deprecated
    this.postApplicationPages = function(applicationID,body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/applications";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + applicationID.toString() + "/pages", false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    // deprecated
    this.deleteApplicationPage = function(applicationID,pageID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/applications";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + applicationID.toString() + "/pages/" + pageID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // deprecated
    this.postApplicationPage = function(applicationID,pageID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/applications";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + applicationID.toString() + "/pages/" + pageID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // *************************************
    // ************* Audit Log *************
    // *************************************

    this.getAuditLog = function(limit, offset) {
        var _uri = "HTTPS://" + this.hostname + "/api/v1/auditlog",
            _queryString = "";

        if(!!limit || limit === 0 || limit === "0") {
            if(_queryString) {
                _queryString += "&";
            }
            _queryString += "limit=" + limit.toString();
        }

        if(!!offset || offset === 0 || offset === "0") {
            if(_queryString) {
                _queryString += "&";
            }
            _queryString += "offset=" + offset.toString();
        }

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + "?" + _queryString, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // *************************************
    // *************** Auth ****************
    // *************************************

    this.getAuthIdentityproviders = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/auth/identityproviders";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postAuthIdentityprovider = function(body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/auth/identityproviders";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.deleteAuthIdentityprovider = function(providerID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/auth/identityproviders";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + providerID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getAuthIdentityprovider = function(providerID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/auth/identityproviders";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + providerID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.patchAuthIdentityprovider = function(providerID, body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/auth/identityproviders";

        var _request = new XMLHttpRequest();
        _request.open("PATCH", _uri + '/' + providerID.toString(), false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.getAuthIdentityproviderPrivileges = function(providerID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/auth/identityproviders/privileges";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + providerID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.patchAuthIdentityproviderPrivileges = function(providerID, body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/auth/identityproviders/privileges";

        var _request = new XMLHttpRequest();
        _request.open("PATCH", _uri + '/' + providerID.toString(), false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.getAuthSamlsp = function(xml){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/auth/samlsp",
        _queryString = `?xml=${!!xml}`;

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + _queryString, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // *************************************
    // ************** Bundles **************
    // *************************************

    this.getBundles = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/bundles";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postBundle = function(body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/bundles";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send(body);

        return this._processResponse(_request);
    };

    this.deleteBundle = function(bundleID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/bundles";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + bundleID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getBundle = function(bundleID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/bundles";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + bundleID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postBundleApply = function(bundleID,body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/bundles";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + bundleID.toString() + "/apply", false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    // *************************************
    // ************** Cloud ****************
    // *************************************

    this.postCloudConnect = function(body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/cloud/connect";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    // *************************************
    // ********** Custom Devices ***********
    // *************************************

    this.getCustomDevices = function(include_criteria){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/customdevices",
        _queryString = "";

        if(include_criteria || include_criteria === false){
            _queryString += `?include_criteria=${include_criteria}`
        }

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + _queryString, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postCustomDevice = function(body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/customdevices";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.deleteCustomDevice = function(customdeviceID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/customdevices";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + customdeviceID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getCustomDevice = function(customdeviceID,include_criteria){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/customdevices";

        var _request = new XMLHttpRequest();
        include_criteria = include_criteria ? "?include_criteria=true" : "?include_criteria=false";
        _request.open("GET", _uri + '/' + customdeviceID.toString() + "?include_criteria="  + include_criteria, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.patchCustomDevice = function(customdeviceID, body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/customdevices";

        var _request = new XMLHttpRequest();
        _request.open("PATCH", _uri + '/' + customdeviceID.toString(), false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    // deprecated
    this.getCustomDeviceCriteria = function(customdeviceID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/customdevices";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + customdeviceID.toString() + "/criteria", false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // deprecated
    this.postCustomDeviceCriteria = function(customdeviceID,body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/customdevices";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + customdeviceID.toString() + "/criteria", false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    // deprecated
    this.deleteCustomDeviceCriteria = function(customdeviceID,criteriaID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/customdevices";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + customdeviceID.toString() + "/criteria/" + criteriaID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // deprecated
    this.getCustomDeviceCriterion = function(customdeviceID,criteriaID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/customdevices";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + customdeviceID.toString() + "/criteria/" + criteriaID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // *************************************
    // ********** Customizations ***********
    // *************************************

    this.getCustomizations = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/customizations";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postCustomization = function(body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/customizations";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.getCustomizationsStatus = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/customizations/status";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.deleteCustomization = function(customizationID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/customizations";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + customizationID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getCustomization = function(customizationID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/customizations";
        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + customizationID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postCustomizationApply = function(customizationID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/customizations";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + customizationID.toString()+'/apply', false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postCustomizationDownload = function(customizationID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/customizations";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + customizationID.toString()+'/download', false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // *************************************
    // ************ Dashboards *************
    // *************************************

    this.getDashboards = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/dashboards";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.deleteDashboard = function(dashboardID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/dashboards";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + dashboardID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getDashboard = function(dashboardID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/dashboards";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + dashboardID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.patchDashboard = function(dashboardID, body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/dashboards";

        var _request = new XMLHttpRequest();
        _request.open("PATCH", _uri + '/' + dashboardID.toString(), false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.getDashboardReports = function(dashboardID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/dashboards";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + dashboardID.toString() + '/reports', false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getDashboardSharing = function(dashboardID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/dashboards";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + dashboardID.toString() + "/sharing", false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };
    this.patchDashboardSharing = function(dashboardID,body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/dashboards";

        var _request = new XMLHttpRequest();
        _request.open("PATCH", _uri + '/' + dashboardID.toString() + "/sharing", false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.putDashboardSharing = function(dashboardID,body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/dashboards";

        var _request = new XMLHttpRequest();
        _request.open("PUT", _uri + '/' + dashboardID.toString() + "/sharing", false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    // *************************************
    // ************* Detections ************
    // *************************************

    this.getDetections = function(limit){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/detections";

        if(limit){
            _uri += `?limit=${limit}`;
        }else{
            _uri += `?limit=1000`;
        }


        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getDetectionFormats = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/detections/formats";


        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postDetectionFormat = function(body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/detections/formats";


        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.postDetectionsSearch = function(body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/detections/search";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.deleteDetectionFormat = function(formatID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/detections/formats/" + formatID;


        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };


    this.patchDetectionFormat = function(formatID, body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/detections/formats/" + formatID;


        var _request = new XMLHttpRequest();
        _request.open("PATCH", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.getDetectionRulesHiding = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/detections/rules/hiding";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    }

    this.postDetectionRulesHiding = function(body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/detections/rules/hiding";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    }

    this.deleteDetectionRulesHiding = function(detectionID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/detections/rules/hiding/" + detectionID;

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    }

    this.patchDetectionRulesHiding = function(detectionID, body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/detections/rules/hiding/" + detectionID;

        var _request = new XMLHttpRequest();
        _request.open("PATCH", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    }

    this.postDetectionsSearch = function(body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/detections/search";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.patchDetectionTicket = function(body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/detections/tickets";

        var _request = new XMLHttpRequest();
        _request.open("PATCH", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    }

    this.getDetection = function(detectionID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/detections";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + "/" + detectionID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.patchDetection = function(detectionID, body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/detections";

        var _request = new XMLHttpRequest();
        _request.open("PATCH", _uri + "/" + detectionID.toString(), false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    // *************************************
    // *********** Device Groups ***********
    // *************************************

    this.getDeviceGroups = function(since,all,name) {
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devicegroups",
            _queryString = "";

        if(!!since || since === 0 || since === "0") {
            _queryString += "since=" + since.toString();
        }

        if(_queryString) {
            _queryString += "&";
        }
        _queryString += "all=" + !!all;

        if(!!name) {
            if(_queryString) {
                _queryString += "&";
            }
            _queryString += "name=" + name.toString();
        }

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + "?" + _queryString, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postDeviceGroup = function(body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devicegroups";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.deleteDeviceGroup = function(devicegroupID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devicegroups";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + devicegroupID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getDeviceGroup = function(devicegroupID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devicegroups";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + devicegroupID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.patchDeviceGroup = function(devicegroupID, body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devicegroups";

        var _request = new XMLHttpRequest();
        _request.open("PATCH", _uri + '/' + devicegroupID.toString(), false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.getDeviceGroupAlerts = function(devicegroupID,direct_assignments_only){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devicegroups";

        if(!direct_assignments_only){
            direct_assignments_only = false;
        }
        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + devicegroupID.toString() + "/alerts" + "?direct_assignments_only=" + direct_assignments_only, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postDeviceGroupAlerts = function(devicegroupID,body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devicegroups";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + devicegroupID.toString() + "/alerts", false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.deleteDeviceGroupAlert = function(devicegroupID,alertID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devicegroups";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + devicegroupID.toString() + "/alerts/" + alertID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postDeviceGroupAlert = function(devicegroupID,alertID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devicegroups";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + devicegroupID.toString() + "/alerts/" + alertID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getDeviceGroupDashboards = function(devicegroupID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devicegroups";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + devicegroupID.toString()+'/dashboards', false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getDeviceGroupDevices = function(devicegroupID, active_from, active_until, limit, offset){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devicegroups",
        _queryString = "";

        if(!!active_from || active_from === 0 || active_from === "0") {
            _queryString += "active_from=" + active_from.toString();
        }

        if(!!active_until || active_until === 0 || active_until=== "0"){
            if(_queryString) {
                _queryString += "&";
            }
            _queryString += "active_until=" + active_until.toString();
        }

        if(!!limit || limit === 0 || limit === "0") {
            if(_queryString) {
                _queryString += "&";
            }
            _queryString += "limit=" + limit.toString();
        }

        if(!!offset || offset === 0 || offset === "0") {
            if(_queryString) {
                _queryString += "&";
            }
            _queryString += "offset=" + offset.toString();
        }

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + devicegroupID.toString() + "/devices?" + _queryString, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postDeviceGroupDevices = function(devicegroupID,body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devicegroups";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + devicegroupID.toString() + "/devices", false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.deleteDeviceGroupDevice = function(devicegroupID,deviceID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devicegroups";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + devicegroupID.toString() + "/devices/" + deviceID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postDeviceGroupDevice = function(devicegroupID,deviceID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devicegroups";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + devicegroupID.toString() + "/devices/" + deviceID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // deprecated
    this.getDeviceGroupFlexGrids = function(devicegroupID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devicegroups";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + devicegroupID.toString() + "/flexgrids", false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // deprecated
    this.postDeviceGroupFlexGrids = function(devicegroupID,body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devicegroups";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + devicegroupID.toString() + "/flexgrids", false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    // deprecated
    this.deleteDeviceGroupFlexGrid = function(devicegroupID,flexgridID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devicegroups";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + devicegroupID.toString() + "/flexgrids/" + flexgridID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // deprecated
    this.postDeviceGroupFlexGrid = function(devicegroupID,flexgridID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devicegroups";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + devicegroupID.toString() + "/flexgrids/" + flexgridID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // deprecated
    this.getDeviceGroupGeoMaps = function(devicegroupID,direct_assignments_only){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devicegroups";

        if(!direct_assignments_only){
            direct_assignments_only = false;
        }
        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + devicegroupID.toString() + "/geomaps" + "?direct_assignments_only=" + direct_assignments_only, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // deprecated
    this.postDeviceGroupGeoMaps = function(devicegroupID,body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devicegroups";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + devicegroupID.toString() + "/geomaps", false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    // deprecated
    this.deleteDeviceGroupGeoMap = function(devicegroupID,geomapID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devicegroups";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + devicegroupID.toString() + "/geomaps/" + geomapID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // deprecated
    this.postDeviceGroupGeoMap = function(devicegroupID,geomapID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devicegroups";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + devicegroupID.toString() + "/geomaps/" + geomapID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // deprecated
    this.getDeviceGroupPages = function(devicegroupID, direct_assignments_only){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devicegroups";

        if(!direct_assignments_only){
            direct_assignments_only = false;
        }

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + devicegroupID.toString() + "/pages", false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // deprecated
    this.postDeviceGroupPages = function(devicegroupID,body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devicegroups";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + devicegroupID.toString() + "/pages", false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    // deprecated
    this.deleteDeviceGroupPage = function(devicegroupID,pageID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devicegroups";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + devicegroupID.toString() + "/pages/" + pageID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // deprecated
    this.postDeviceGroupPage = function(devicegroupID,pageID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devicegroups";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + devicegroupID.toString() + "/pages/" + pageID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // deprecated
    this.getDeviceGroupTags = function(devicegroupID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devicegroups";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + devicegroupID.toString() + "/tags", false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // deprecated
    this.postDeviceGroupTags = function(devicegroupID,body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devicegroups";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + devicegroupID.toString() + "/tags", false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    // deprecated
    this.deleteDeviceGroupTag = function(devicegroupID,tagID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devicegroups";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + devicegroupID.toString() + "/tags/" + tagID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // deprecated
    this.postDeviceGroupTag = function(devicegroupID,tagID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devicegroups";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + devicegroupID.toString() + "/tags/" + tagID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getDeviceGroupTriggers = function(devicegroupID,direct_assignments_only){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devicegroups";

        if(!direct_assignments_only){
            direct_assignments_only = false;
        }
        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + devicegroupID.toString() + "/triggers" + "?direct_assignments_only=" + direct_assignments_only, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postDeviceGroupTriggers = function(devicegroupID,body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devicegroups";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + devicegroupID.toString() + "/triggers", false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.deleteDeviceGroupTrigger = function(devicegroupID,triggerID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devicegroups";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + devicegroupID.toString() + "/triggers/" + triggerID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postDeviceGroupTrigger = function(devicegroupID,triggerID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devicegroups";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + devicegroupID.toString() + "/triggers/" + triggerID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };


    // *************************************
    // ************** Devices **************
    // *************************************

    this.getDevices = function(active_from, active_until, limit, offset, search_type, value) {
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devices",
            _queryString = "";

        if(!!active_from || active_from === 0 || active_from === "0") {
            _queryString += "active_from=" + active_from.toString();
        }

        if(!!active_until || active_until === 0 || active_until=== "0"){
            if(_queryString) {
                _queryString += "&";
            }
            _queryString += "active_until=" + active_until.toString();
        }

        if(!!limit || limit === 0 || limit === "0") {
            if(_queryString) {
                _queryString += "&";
            }
            _queryString += "limit=" + limit.toString();
        }

        if(!!offset || offset === 0 || offset === "0") {
            if(_queryString) {
                _queryString += "&";
            }
            _queryString += "offset=" + offset.toString();
        }

        if(!!search_type && !!value){
            if(_queryString) {
                _queryString += "&";
            }
            _queryString += "search_type=" + encodeURIComponent(search_type) + "&value=" + encodeURIComponent(value);
        }

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + "?" + _queryString, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postDeviceSearch = function(body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devices/search";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    }

    this.getDevice = function(deviceID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devices";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + deviceID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.patchDevice = function(deviceID, body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devices";

        var _request = new XMLHttpRequest();
        _request.open("PATCH", _uri + '/' + deviceID.toString(), false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.getDeviceActivity = function(deviceID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devices";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + deviceID.toString() + "/activity", false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getDeviceAlerts = function(deviceID,direct_assignments_only){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devices";

        if(!direct_assignments_only){
            direct_assignments_only = false;
        }
        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + deviceID.toString() + "/alerts" + "?direct_assignments_only=" + direct_assignments_only, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postDeviceAlerts = function(deviceID,body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devices";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + deviceID.toString() + "/alerts", false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.deleteDeviceAlert = function(deviceID,alertID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devices";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + deviceID.toString() + "/alerts/" + alertID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postDeviceAlert = function(deviceID,alertID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devices";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + deviceID.toString() + "/alerts/" + alertID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getDeviceDashboards = function(deviceID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devices";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + deviceID.toString() + "/dashboards", false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getDeviceDeviceGroups = function(deviceID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devices";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + deviceID.toString() + "/devicegroups", false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postDeviceDeviceGroups = function(deviceID,body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devices";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + deviceID.toString() + "/devicegroups", false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.deleteDeviceDeviceGroup = function(deviceID,devicegroupID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devices";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + deviceID.toString() + "/devicegroups/" + devicegroupID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postDeviceDeviceGroup = function(deviceID,devicegroupID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devices";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + deviceID.toString() + "/devicegroups/" + devicegroupID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getDeviceDnsnames = function(deviceID, from, until){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devices/" + deviceID + "/dnsnames",
            _queryString = "";

        if(from){
            _queryString += `from=${from}`;
        }

        if(until){
            if(_queryString){
                _queryString += `&`;
            }

            _queryString += `until=${until}`;
        }

        if(_queryString){
            _queryString = "?" + _queryString;
        }

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + _queryString , false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getDeviceIPaddrs = function(deviceID, from, until){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devices/" + deviceID + "/ipaddrs",
            _queryString = "";

        if(from){
            _queryString += `from=${from}`;
        }

        if(until){
            if(_queryString){
                _queryString += `&`;
            }

            _queryString += `until=${until}`;
        }

        if(_queryString){
            _queryString = "?" + _queryString;
        }

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + _queryString , false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };


    this.getDeviceSoftware = function(deviceID, from, until){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devices/" + deviceID + "/software",
            _queryString = "";

        if(from){
            _queryString += `from=${from}`;
        }

        if(until){
            if(_queryString){
                _queryString += `&`;
            }

            _queryString += `until=${until}`;
        }

        if(_queryString){
            _queryString = "?" + _queryString;
        }

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + _queryString , false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // deprecated
    this.getDeviceFlexGrids = function(deviceID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devices";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + deviceID.toString() + "/flexgrids", false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // deprecated
    this.postDeviceFlexGrids = function(deviceID,body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devices";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + deviceID.toString() + "/flexgrids", false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    // deprecated
    this.deleteDeviceFlexGrid = function(deviceID,flexgridID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devices";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + deviceID.toString() + "/flexgrids/" + flexgridID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // deprecated
    this.postDeviceFlexGrid = function(deviceID,flexgridID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devices";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + deviceID.toString() + "/flexgrids/" + flexgridID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // deprecated
    this.getDeviceGeoMaps = function(deviceID, direct_assignments_only){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devices";

        if(!direct_assignments_only){
            direct_assignments_only = false;
        }
        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + deviceID.toString() + "/geomaps" + "?direct_assignments_only=" + direct_assignments_only, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // deprecated
    this.postDeviceGeoMaps = function(deviceID,body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devices";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + deviceID.toString() + "/geomaps", false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    // deprecated
    this.deleteDeviceGeoMap = function(deviceID,geomapID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devices";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + deviceID.toString() + "/geomaps/" + geomapID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // deprecated
    this.postDeviceGeoMap = function(deviceID,geomapID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devices";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + deviceID.toString() + "/geomaps/" + geomapID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // deprecated
    this.getDevicePages = function(deviceID, direct_assignments_only){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devices";

        if(!direct_assignments_only){
            direct_assignments_only = false;
        }

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + deviceID.toString() + "/pages", false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // deprecated
    this.postDevicePages = function(deviceID,body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devices";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + deviceID.toString() + "/pages", false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    // deprecated
    this.deleteDevicePage = function(deviceID,pageID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devices";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + deviceID.toString() + "/pages/" + pageID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // deprecated
    this.postDevicePage = function(deviceID,pageID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devices";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + deviceID.toString() + "/pages/" + pageID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getDeviceTags = function(deviceID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devices";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + deviceID.toString() + "/tags", false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postDeviceTags = function(deviceID,body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devices";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + deviceID.toString() + "/tags", false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.deleteDeviceTag = function(deviceID,tagID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devices";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + deviceID.toString() + "/tags/" + tagID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postDeviceTag = function(deviceID,tagID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devices";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + deviceID.toString() + "/tags/" + tagID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getDeviceTriggers = function(deviceID,direct_assignments_only){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devices";

        if(!direct_assignments_only){
            direct_assignments_only = false;
        }
        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + deviceID.toString() + "/triggers" + "?direct_assignments_only=" + direct_assignments_only, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postDeviceTriggers = function(deviceID,body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devices";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + deviceID.toString() + "/triggers", false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.deleteDeviceTrigger = function(deviceID,triggerID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devices";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + deviceID.toString() + "/triggers/" + triggerID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postDeviceTrigger = function(deviceID,triggerID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/devices";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + deviceID.toString() + "/triggers/" + triggerID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };


    // *************************************
    // *********** E-mail Groups ***********
    // *************************************

    this.getEmailGroups = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/emailgroups";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postEmailGroup = function(body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/emailgroups";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.deleteEmailGroup = function(emailgroupID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/emailgroups";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + emailgroupID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getEmailGroup = function(emailgroupID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/emailgroups";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + emailgroupID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.patchEmailGroup = function(emailgroupID, body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/emailgroups";

        var _request = new XMLHttpRequest();
        _request.open("PATCH", _uri + '/' + emailgroupID.toString(), false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    // *************************************
    // ******** Exclusion Intervals ********
    // *************************************

    this.getExclusionIntervals = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/exclusionintervals";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postExclusionInterval = function(body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/exclusionintervals";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.deleteExclusionInterval = function(exclusionintervalID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/exclusionintervals";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + exclusionintervalID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getExclusionInterval = function(exclusionintervalID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/exclusionintervals";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + exclusionintervalID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.patchExclusionInterval = function(exclusionintervalID, body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/exclusionintervals";

        var _request = new XMLHttpRequest();
        _request.open("PATCH", _uri + '/' + exclusionintervalID.toString(), false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    // *************************************
    // ************* ExtraHop **************
    // *************************************

    this.getExtrahop = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/extrahop";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getExtrahopDetectionsAccess = function(){
      var _uri = "HTTPS://" + this.hostname + "/api/v1/extrahop/detections/access";

      var _request = new XMLHttpRequest();
      _request.open("PUT", _uri, false);
      this._setHeaders(_request);
      _request.send();

      return this._processResponse(_request);
    }

    this.putExtrahopDetectionsAccess = function(body){
      var _uri = "HTTPS://" + this.hostname + "/api/v1/extrahop/detections/access";

      var _request = new XMLHttpRequest();
      _request.open("PUT", _uri, false);
      this._setHeaders(_request);
      _request.send(JSON.stringify(body));

      return this._processResponse(_request);
    }

    this.getExtrahopEdition = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/extrahop/edition";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // these next two seem to be gone form the rest api explorer.. sure which i remembered what they did.
    this.getExtrahopCluster = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/extrahop/cluster";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.patchExtrahopCluster = function(body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/extrahop/cluster";

        var _request = new XMLHttpRequest();
        _request.open("PATCH", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    // pretty sure this is never going to get used in this API wrapper.
    // Not testing for firmware push via a browser
    // If this is used elsewhere we need to test this properly
    this.postExtrahopFirmware = function(firmware){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/extrahop/firmware";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send(firmware);

        return this._processResponse(_request);
    };

    this.postExtrahopFirmwareLatestUpgrade = function(body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/extrahop/firmware/latest/upgrade";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send(body);

        return this._processResponse(_request);
    };

    this.getExtrahopFirmwarePrevious = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/extrahop/firmware/previous";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postExtrahopFirmwarePrevious = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/extrahop/firmware/previous";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };


    this.getExtrahopIdrac = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/extrahop/idrac";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getExtrahopPlatform = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/extrahop/platform";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getExtrahopProcesses = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/extrahop/processes";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postExtrahopProcessRestart = function(process){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/extrahop/processes/";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + process + "/restart", false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postExtrahopRestart = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/extrahop/restart";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postExtrahopSSLcert = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/extrahop/sslcert";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.putExtrahopSSLcert = function(body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/extrahop/sslcert";

        var _request = new XMLHttpRequest();
        _request.open("PUT", _uri, false);
        this._setHeaders(_request);
        _request.send(body);

        return this._processResponse(_request);
    };

    this.postExtrahopSSLcertSigningrequest = function(body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/extrahop/sslcert/signingrequest";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.getExtrahopTicketing = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/extrahop/ticketing";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.patchExtrahopTicketing = function(body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/extrahop/ticketing";

        var _request = new XMLHttpRequest();
        _request.open("PATCH", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.getExtrahopVersion = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/extrahop/version";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // entire section is deprecated
    // *************************************
    // ************ Flex Grid **************
    // *************************************

    this.getFlexGrids = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/flexgrids";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getFlexGridApplications = function(flexgridID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/flexgrids";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + flexgridID.toString() + "/applications", false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };
    this.postFlexGridApplications = function(flexgridID,body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/flexgrids";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + flexgridID.toString() + "/applications", false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };
    this.deleteFlexGridApplication = function(flexgridID,applicationID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/flexgrids";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + flexgridID.toString() + "/applications/" + applicationID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };
    this.postFlexGridApplication = function(flexgridID,applicationID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/flexgrids";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + flexgridID.toString() + "/applications/" + applicationID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getFlexGridDeviceGroups = function(flexgridID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/flexgrids";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + flexgridID.toString() + "/devicegroups", false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };
    this.postFlexGridDeviceGroups = function(flexgridID,body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/flexgrids";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + flexgridID.toString() + "/devicegroups", false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };
    this.deleteFlexGridDeviceGroup = function(flexgridID,devicegroupID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/flexgrids";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + flexgridID.toString() + "/devicegroups/" + devicegroupID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };
    this.postFlexGridDeviceGroup = function(flexgridID,devicegroupID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/flexgrids";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + flexgridID.toString() + "/devicegroups/" + devicegroupID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getFlexGridDevices = function(flexgridID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/flexgrids";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + flexgridID.toString() + "/devices", false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };
    this.postFlexGridDevices = function(flexgridID,body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/flexgrids";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + flexgridID.toString() + "/devices", false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };
    this.deleteFlexGridDevice = function(flexgridID,deviceID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/flexgrids";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + flexgridID.toString() + "/devices/" + deviceID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };
    this.postFlexGridDevice = function(flexgridID,deviceID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/flexgrids";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + flexgridID.toString() + "/devices/" + deviceID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // entire section is deprecated
    // *************************************
    // ************* Geo Maps **************
    // *************************************

    this.getGeoMaps = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/geomaps";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };
    this.postGeoMaps = function(body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/geomaps";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };
    this.deleteGeoMap = function(geomapID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/geomaps";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + geomapID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };
    this.getGeoMap = function(geomapID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/geomaps";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + geomapID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };
    this.patchGeoMap = function(geomapID, body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/geomaps";

        var _request = new XMLHttpRequest();
        _request.open("PATCH", _uri + '/' + geomapID.toString(), false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.getGeoMapApplications = function(geomapID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/geomaps";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + geomapID.toString() + "/applications", false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };
    this.postGeoMapApplications = function(geomapID,body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/geomaps";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + geomapID.toString() + "/applications", false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };
    this.deleteGeoMapApplication = function(geomapID,applicationID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/geomaps";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + geomapID.toString() + "/applications/" + applicationID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };
    this.postGeoMapApplication = function(geomapID,applicationID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/geomaps";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + geomapID.toString() + "/applications/" + applicationID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getGeoMapDeviceGroups = function(geomapID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/geomaps";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + geomapID.toString() + "/devicegroups", false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };
    this.postGeoMapDeviceGroups = function(geomapID,body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/geomaps";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + geomapID.toString() + "/devicegroups", false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };
    this.deleteGeoMapDeviceGroup = function(geomapID,devicegroupID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/geomaps";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + geomapID.toString() + "/devicegroups/" + devicegroupID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };
    this.postGeoMapDeviceGroup = function(geomapID,devicegroupID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/geomaps";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + geomapID.toString() + "/devicegroups/" + devicegroupID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getGeoMapDevices = function(geomapID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/geomaps";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + geomapID.toString() + "/devices", false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };
    this.postGeoMapDevices = function(geomapID,body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/geomaps";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + geomapID.toString() + "/devices", false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };
    this.deleteGeoMapDevice = function(geomapID,deviceID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/geomaps";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + geomapID.toString() + "/devices/" + deviceID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };
    this.postGeoMapDevice = function(geomapID,deviceID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/geomaps";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + geomapID.toString() + "/devices/" + deviceID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // *************************************
    // ************* License ***************
    // *************************************

    this.getLicense = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/license";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.putLicense = function(body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/license";

        var _request = new XMLHttpRequest();
        _request.open("PUT", _uri, false);
        this._setHeaders(_request);
        _request.send(body);

        return this._processResponse(_request);
    };

    this.getLicenseProductKey = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/license/productkey";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.putLicenseProductKey = function(body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/license/productkey";

        var _request = new XMLHttpRequest();
        _request.open("PUT", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    // *************************************
    // ************* Metrics ***************
    // *************************************

    this.postMetrics = function(body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/metrics";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.getMetricsNextXID = function(xid){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/metrics/next/";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + xid.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postMetricsTotal = function(body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/metrics/total";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.postMetricsTotalByObject = function(body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/metrics/totalbyobject";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };


    // *************************************
    // ****** Network Locality Entry *******
    // *************************************

    this.getNetworklocalities = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/networklocality";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postNetworklocality = function(body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/networklocality";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.deleteNetworklocality = function(networklocalityID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/networklocality";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + networklocalityID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getNetworklocality = function(networklocalityID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/networklocality";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + networklocalityID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.patchNetworklocality = function(networklocalityID, body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/networklocality";

        var _request = new XMLHttpRequest();
        _request.open("PATCH", _uri + '/' + networklocalityID.toString(), false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    // *************************************
    // ************* Networks **************
    // *************************************

    this.getNetworks = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/networks";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getNetwork = function(networkID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/networks";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + networkID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.patchNetwork = function(networkID, body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/networks";

        var _request = new XMLHttpRequest();
        _request.open("PATCH", _uri + '/' + networkID.toString(), false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.getNetworkAlerts = function(networkID,direct_assignments_only){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/networks";

        if(!direct_assignments_only){
            direct_assignments_only = false;
        }
        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + networkID.toString() + "/alerts" + "?direct_assignments_only=" + direct_assignments_only, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postNetworkAlerts = function(networkID,body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/networks";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + networkID.toString() + "/alerts", false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.deleteNetworkAlert = function(networkID,alertID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/networks";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + networkID.toString() + "/alerts/" + alertID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postNetworkAlert = function(networkID,alertID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/networks";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + networkID.toString() + "/alerts/" + alertID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // deprecated
    this.getNetworkPages = function(networkID, direct_assignments_only){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/networks";

        if(!direct_assignments_only){
            direct_assignments_only = false;
        }

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + networkID.toString() + "/pages", false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // deprecated
    this.postNetworkPages = function(networkID,body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/networks";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + networkID.toString() + "/pages", false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    // deprecated
    this.deleteNetworkPage = function(networkID,pageID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/networks";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + networkID.toString() + "/pages/" + pageID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // deprecated
    this.postNetworkPage = function(networkID,pageID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/networks";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + networkID.toString() + "/pages/" + pageID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getNetworkVlans = function(networkID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/networks";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + networkID.toString() + "/vlans", false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // *************************************
    // *************** Nodes ***************
    // *************************************

    this.getNodes = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/nodes";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getNode = function(nodeID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/nodes";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + nodeID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.patchNode = function(nodeID, body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/nodes";

        var _request = new XMLHttpRequest();
        _request.open("PATCH", _uri + '/' + nodeID.toString(), false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    // *************************************
    // *********** Observations ************
    // *************************************

    this.postObservationsAssociatedipaddrs = function(body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/observations/associatedipaddrs";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    // *************************************
    // ********* Open Data Streams *********
    // *************************************

    this.getODStargets = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/odstargets";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getODStargetsHTTP = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/odstargets/http";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postODStargetHTTP = function(body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/odstargets/http";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.deleteODStargetHTTP = function(ODS_target_name){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/odstargets/http";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + "/" + ODS_target_name, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getODStargetHTTP = function(ODS_target_name){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/odstargets/http";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + "/" + ODS_target_name, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getODStargetsKafka = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/odstargets/kafka";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postODStargetKafka = function(body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/odstargets/kafka";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.deleteODStargetKafka = function(ODS_target_name){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/odstargets/kafka";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + "/" + ODS_target_name, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getODStargetKafka = function(ODS_target_name){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/odstargets/kafka";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + "/" + ODS_target_name, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getODStargetsMongoDB = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/odstargets/mongodb";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postODStargetMongoDB = function(body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/odstargets/mongodb";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.deleteODStargetMongoDB = function(ODS_target_name){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/odstargets/mongodb";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + "/" + ODS_target_name, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getODStargetMongoDB = function(ODS_target_name){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/odstargets/mongodb";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + "/" + ODS_target_name, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getODStargetsRaw = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/odstargets/raw";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postODStargetRaw = function(body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/odstargets/raw";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.deleteODStargetRaw = function(ODS_target_name){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/odstargets/raw";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + "/" + ODS_target_name, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getODStargetRaw = function(ODS_target_name){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/odstargets/raw";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + "/" + ODS_target_name, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getODStargetsSyslog = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/odstargets/syslog";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postODStargetSyslog = function(body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/odstargets/syslog";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.deleteODStargetSyslog = function(ODS_target_name){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/odstargets/syslog";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + "/" + ODS_target_name, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getODStargetSyslog = function(ODS_target_name){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/odstargets/syslog";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + "/" + ODS_target_name, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // *************************************
    // ********** Packet Captures **********
    // *************************************

    this.getPacketCaptures = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/packetcaptures";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.deletePacketCapture = function(packetcaptureID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/packetcaptures";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + packetcaptureID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getPacketCapture = function(packetcaptureID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/packetcaptures";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + packetcaptureID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };


    // *************************************
    // *********** Packet Search ***********
    // *************************************

    this.getPacketSearch = function(from, until, output, limit_bytes, limit_search_duration, always_return_body, bpf, ip1, port1, ip2, port2){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/packets/search";
        var _queryString = "?from=" + encodeURIComponent(from);

        if(until){
            _queryString += `&until=${encodeURIComponent(until)}`;
        }

        if(output){
            _queryString += `&output=${encodeURIComponent(output)}`;
        }

        if(limit_bytes){
            _queryString += `&limit_bytes=${encodeURIComponent(limit_bytes)}`;
        }

        if(limit_search_duration){
            _queryString += `&limit_search_duration=${encodeURIComponent(limit_search_duration)}`;
        }

        if(always_return_body){
            _queryString += `&always_return_body=${encodeURIComponent(always_return_body)}`;
        }

        if(bpf){
            _queryString += `&bpf=${encodeURIComponent(bpf)}`;
        }

        if(ip1){
            _queryString += `&ip1=${encodeURIComponent(ip1)}`;
        }

        if(ip2){
            _queryString += `&ip2=${encodeURIComponent(ip2)}`;
        }

        if(port1){
            _queryString += `&port1=${encodeURIComponent(port1)}`;
        }

        if(port2){
            _queryString += `&port2=${encodeURIComponent(port2)}`;
        }

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + _queryString, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postPacketSearch = function(body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/packets/search";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    // *************************************
    // ************** Pairing **************
    // *************************************

    this.postPairingtoken = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/pairing/token";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // entire section is deprecated
    // *************************************
    // *************** Pages ***************
    // *************************************

    this.getPages = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/pages";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };
    this.postPages = function(body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/pages";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };
    this.deletePage = function(pageID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/pages";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + pageID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };
    this.getPage = function(pageID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/pages";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + pageID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };
    this.patchPage = function(pageID, body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/pages";

        var _request = new XMLHttpRequest();
        _request.open("PATCH", _uri + '/' + pageID.toString(), false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.getPageApplications = function(pageID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/pages";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + pageID.toString() + "/applications", false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };
    this.postPageApplications = function(pageID,body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/pages";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + pageID.toString() + "/applications", false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };
    this.deletePageApplication = function(pageID,applicationID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/pages";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + pageID.toString() + "/applications/" + applicationID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };
    this.postPageApplication = function(pageID,applicationID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/pages";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + pageID.toString() + "/applications/" + applicationID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getPageDeviceGroups = function(pageID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/pages";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + pageID.toString() + "/devicegroups", false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };
    this.postPageDeviceGroups = function(pageID,body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/pages";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + pageID.toString() + "/devicegroups", false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };
    this.deletePageDeviceGroup = function(pageID,devicegroupID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/pages";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + pageID.toString() + "/devicegroups/" + devicegroupID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };
    this.postPageDeviceGroup = function(pageID,devicegroupID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/pages";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + pageID.toString() + "/devicegroups/" + devicegroupID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getPageDevices = function(pageID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/pages";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + pageID.toString() + "/devices", false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };
    this.postPageDevices = function(pageID,body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/pages";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + pageID.toString() + "/devices", false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };
    this.deletePageDevice = function(pageID,deviceID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/pages";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + pageID.toString() + "/devices/" + deviceID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };
    this.postPageDevice = function(pageID,deviceID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/pages";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + pageID.toString() + "/devices/" + deviceID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getPageNetworks = function(pageID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/pages";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + pageID.toString() + "/networks", false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };
    this.postPageNetworks = function(pageID,body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/pages";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + pageID.toString() + "/networks", false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };
    this.deletePageNetwork = function(pageID,networkID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/pages";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + pageID.toString() + "/networks/" + networkID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };
    this.postPageNetwork = function(pageID,networkID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/pages";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + pageID.toString() + "/networks/" + networkID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // *************************************
    // ************ Record Logs ************
    // *************************************

    this.postRecordsCursor = function(body, context_ttl){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/records/cursor";

        if(context_ttl){
            context_ttl = "?" + context_ttl.toString();
        }else{
            context_ttl = "";
        }

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri+ cursor.toString() + context_ttl, false);
        this._setHeaders(_request);

        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    // deprecated
    this.getRecordsCursor = function(cursor, context_ttl){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/records/cursor/";

        if(context_ttl){
            context_ttl = "?" + context_ttl.toString();
        }else{
            context_ttl = "";
        }

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + cursor.toString() + context_ttl, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postRecordsSearch = function(body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/records/search";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    // *************************************
    // ************* Reports ***************
    // *************************************

    this.getReports = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/reports";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postReport = function(body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/reports";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.deleteReport = function(reportID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/reports";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + reportID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getReport = function(reportID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/reports";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + "/" + reportID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.patchReport = function(reportID, body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/reports";

        var _request = new XMLHttpRequest();
        _request.open("PATCH", _uri + '/' + reportID.toString(), false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.getReportContents = function(reportID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/reports";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + "/" + reportID.toString() + "/contents", false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.putReportContents = function(reportID,body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/reports";

        var _request = new XMLHttpRequest();
        _request.open("PUT", _uri + '/' + reportID.toString() + "/contents", false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.getReportEmailGroups = function(reportID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/reports";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + "/" + reportID.toString() + "/emailgroups/", false); //bug. trailing slash needs to be removed when the bug in the API is fixed
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postReportEmailGroups = function(reportID, body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/reports";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + "/" + reportID.toString() + "/emailgroups", false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.deleteReportEmailGroup = function(reportID, emailGroupID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/reports";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + reportID.toString() + "/emailgroups/" + emailGroupID, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postReportEmailGroup = function(reportID, emailGroupID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/reports";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + reportID.toString() + "/emailgroups/" + emailGroupID, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postReportQueue = function(reportID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/reports";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + reportID.toString() + "/queue", false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // *************************************
    // ********** Running Config ***********
    // *************************************

    this.getRunningConfig = function(section){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/runningconfig";

        if(section){
            section = "?section=" + section;
        }else{
            section = "";
        }

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + section, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.putRunningConfig = function(body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/runningconfig";

        // sanity check to prevent blank running configs
        if(!body){
            return {"status" : 999,
            "body": "A blank running config will cause problems. Please don't do this."}
        }

        var _request = new XMLHttpRequest();
        _request.open("PUT", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.postRunningConfigSave = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/runningconfig/save";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getRunningConfigSaved = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/runningconfig/saved";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // *************************************
    // ************* Software **************
    // *************************************

    this.getSoftware = function(software_type, name, version){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/software",
        _queryString = "";

        if(software_type){
            _queryString += `software_type=${encodeURIComponent(software_type)}`;
        }

        if(name){
            if(_queryString) {
                _queryString += "&";
            }

            _queryString += `name=${encodeURIComponent(name)}`;
        }

        if(version){
            if(_queryString) {
                _queryString += "&";
            }

            _queryString += `version=${encodeURIComponent(version)}`;
        }

        if(_queryString){
            _queryString = "?" + _queryString;
        }

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + _queryString, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // well this is ugly
    // can't use the usual singular vs plural form because software is both the singular AND plural form of the word
    this.getSoftwareByID = function(softwareID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/software";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + "/" + softwareID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // *************************************
    // ********* SSL Decrypt Keys **********
    // *************************************

    this.getSSLdecryptKeys = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/ssldecryptkeys";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postSSLdecryptKey = function(body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/ssldecryptkeys";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.deleteSSLdecryptKey = function(ssldecryptkeyID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/ssldecryptkeys";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + ssldecryptkeyID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getSSLdecryptKey = function(ssldecryptkeyID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/ssldecryptkeys";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + ssldecryptkeyID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.patchSSLdecryptKey = function(ssldecryptkeyID, body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/ssldecryptkeys";

        var _request = new XMLHttpRequest();
        _request.open("PATCH", _uri + '/' + ssldecryptkeyID.toString(), false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.getSSLdecryptKeyProtocols = function(ssldecrpytkeyID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/ssldecrpytkeys";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + ssldecrpytkeyID.toString() + "/protocols", false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postSSLdecryptKeyProtocols = function(ssldecrpytkeyID,body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/ssldecrpytkeys";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + ssldecrpytkeyID.toString() + "/protocols", false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.deleteSSLdecryptKeyProtocol = function(ssldecrpytkeyID,protocolID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/ssldecrpytkeys";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + ssldecrpytkeyID.toString() + "/protocols/" + protocolID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // *************************************
    // ********** Support Packs ************
    // *************************************

    this.getSupportPacks = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/supportpacks";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postSupportPackExecute = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/supportpacks/execute";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getSupportPackQueue = function(queueID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/supportpacks/queue/";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + encodeURIComponent(queueID.toString()), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getSupportPack = function(filename){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/supportpacks/";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + encodeURIComponent(filename.toString()), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // *************************************
    // *************** Tags ****************
    // *************************************

    this.getTags = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/tags";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postTag = function(body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/tags";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.deleteTag = function(tagID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/tags";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + tagID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getTag = function(tagID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/tags";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + tagID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.patchTag = function(tagID, body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/tags";

        var _request = new XMLHttpRequest();
        _request.open("PATCH", _uri + '/' + tagID.toString(), false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.getTagDevices = function(tagID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/tags";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + tagID.toString() + "/devices", false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postTagDevices = function(tagID,body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/tags";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + tagID.toString() + "/devices", false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.deleteTagDevice = function(tagID,deviceID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/tags";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + tagID.toString() + "/devices/" + deviceID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postTagDevice = function(tagID,deviceID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/tags";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + tagID.toString() + "/devices/" + deviceID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // *************************************
    // ********* Threat Collection *********
    // *************************************

    this.getThreatcollections = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/threatcollections";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postThreatcollection = function(body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/threatcollections";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.deleteThreatcollection = function(collectionID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/threatcollections";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + "/" + collectionID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getThreatcollectionObservables = function(collectionID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/threatcollections";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + "/" + collectionID.toString() + "/observables" , false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.putThreatcollection = function(userKey, body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/threatcollections";

        var _request = new XMLHttpRequest();
        _request.open("PUT", _uri + "/~" + userKey.toString(), false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    // *************************************
    // ************* Triggers **************
    // *************************************

    this.getTriggers = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/triggers";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postTrigger = function(body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/triggers";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.postTriggerExternalData = function(body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/triggers/externaldata";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.deleteTrigger = function(triggerID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/triggers";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + triggerID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getTrigger = function(triggerID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/triggers";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + triggerID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.patchTrigger = function(triggerID, body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/triggers";

        var _request = new XMLHttpRequest();
        _request.open("PATCH", _uri + '/' + triggerID.toString(), false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.getTriggerDeviceGroups = function(triggerID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/triggers";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + triggerID.toString() + "/devicegroups", false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postTriggerDeviceGroups = function(triggerID,body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/triggers";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + triggerID.toString() + "/devicegroups", false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.deleteTriggerDeviceGroup = function(triggerID,devicegroupID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/triggers";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + triggerID.toString() + "/devicegroups/" + devicegroupID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postTriggerDeviceGroup = function(triggerID,devicegroupID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/triggers";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + triggerID.toString() + "/devicegroups/" + devicegroupID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getTriggerDevices = function(triggerID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/triggers";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + triggerID.toString() + "/devices", false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postTriggerDevices = function(triggerID,body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/triggers";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + triggerID.toString() + "/devices", false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.deleteTriggerDevice = function(triggerID,deviceID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/triggers";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + triggerID.toString() + "/devices/" + deviceID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postTriggerDevice = function(triggerID,deviceID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/triggers";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + '/' + triggerID.toString() + "/devices/" + deviceID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // *************************************
    // ************ User Groups ************
    // *************************************

    this.getUserGroups = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/usergroups";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postUserGroup = function(body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/usergroups";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.postUserGroupsRefresh = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/usergroups/refresh";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.deleteUserGroups = function(userGroupID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/usergroups";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + "/" + usergroupID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getUserGroup = function(usergroupID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/usergroups/";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + usergroupID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.patchUserGroup = function(usergroupID, body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/usergroups/";

        var _request = new XMLHttpRequest();
        _request.open("PATCH", _uri + usergroupID.toString(), false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.deleteUserGroupAssociations = function(usergroupID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/usergroups/";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + usergroupID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getUserGroupMembers = function(usergroupID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/usergroups/";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + usergroupID.toString() + "/members", false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.patchUserGroupMembers = function(usergroupID, body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/usergroups/";

        var _request = new XMLHttpRequest();
        _request.open("PATCH", _uri + usergroupID.toString() + "/members", false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.putUserGroupMembers = function(usergroupID, body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/usergroups/";

        var _request = new XMLHttpRequest();
        _request.open("PUT", _uri + usergroupID.toString() + "/members", false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.postUserGroupRefresh = function(usergroupID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/usergroups/";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + usergroupID.toString() + "/refresh", false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // *************************************
    // *************** Users ***************
    // *************************************

    this.getUsers = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/users";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postUser = function(body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/users";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.deleteUser = function(username, dest_user){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/users";
        var _queryString = ""
        if(dest_user){
          _queryString = `?dest_user=${dest_user}`
        }

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + '/' + username + _queryString, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getUser = function(username){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/users";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + '/' + username, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.patchUser = function(username, body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/users";

        var _request = new XMLHttpRequest();
        _request.open("PATCH", _uri + '/' + username, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    this.getUserAPIkeys = function(username){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/users/";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + username + "/apikeys", false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    // deprecated
    this.getUserAPIkey = function(username, keyID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/users/";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri + username + "/apikeys/" + keyID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };


    // *************************************
    // *************** VLANs ***************
    // *************************************

    this.getVlans = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/vlans";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getVlan = function(vlanID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/vlans";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri+'/'+vlanID, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.patchVlan = function(vlanID, body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/vlans";

        var _request = new XMLHttpRequest();
        _request.open("PATCH", _uri + '/' + vlanID.toString(), false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    // *************************************
    // ************* Watchlist *************
    // *************************************

    this.deletewatchlistDevice = function(deviceID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/watchlist/device/";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + deviceID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postwatchlistDevice = function(deviceID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/watchlist/device/";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + deviceID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getwatchlistsDevices = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/watchlist/devices";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postwatchlistDevices = function(body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/watchlist/devices";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    // *************************************
    // ************* Whitelist *************
    // *************************************
    // deprecated... being replaced with Watchlist, but keeping section in for backwards compatibility

    this.deleteWhitelistDevice = function(deviceID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/whitelist/device/";

        var _request = new XMLHttpRequest();
        _request.open("DELETE", _uri + deviceID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postWhitelistDevice = function(deviceID){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/whitelist/device/";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri + deviceID.toString(), false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.getWhitelistsDevices = function(){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/whitelist/devices";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        return this._processResponse(_request);
    };

    this.postWhitelistDevices = function(body){
        var _uri = "HTTPS://" + this.hostname + "/api/v1/whitelist/devices";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(body));

        return this._processResponse(_request);
    };

    // *************************************
    // *************** RPC *************
    // *************************************

    this.rpcServiceUp = function(){

        // Checks if services have started on Target ExtraHop.
        // Parameters: None
        // Returns:
        //     True if services have started
        //     False if services are still starting

        var _uri = "HTTPS://" + this.hostname + "/ping/";

        var _request = new XMLHttpRequest();
        _request.open("GET", _uri, false);
        this._setHeaders(_request);
        _request.send();

        let returned_data = this._processResponse(_request);

        if (returned_data.status >= 500){
            return false
          }else{
            return true
          }
    }

    this.rpcNewBundle = function(
      exports,
      name="",
      author="",
      description="",
      minimumVersion="",
    ){
        /*
        *  Creates a new bundle on the target ExtraHop.
        *  "exports" should be a dictionary of assets to be exported.
        *  May include any of the following keys, values should be lists of API IDs.
        *
        *      Parameters:
        *              exports (dict): Required, should contain any of the following keys:
        *                  "Alert": [], "Application": [], "Dashboard": [], "DeviceGroup": [],
        *                  "RecordSpec": [], "Trigger": [], "Query": [], "TrendAlert": []
        *      Returns:
        *              "EH_response" (class):
        *                  EH_response.ok (bool): Was the attempt successful?
        *                  EH_response.message (any): Actual response body
        *                  EH_response.status (int): HTTP Status code
        */

        if (!name){
                name = "bundle generated: " + new Date().toString().replace(/ \w{3}-\d{4}.*/,"")
              }
        var payload = {
                  "method": "config.addBundle",
                  "params": [
                      {
                          "name": name,
                          "comment": description,
                          "version_min": minimumVersion,
                          "author": author,
                          "exports": {
                              "Alert": exports.Alert || [],
                              "Application": exports.Application ||  [],
                              "Dashboard": exports.Dashboard || [],
                              "DeviceGroup": exports.DeviceGroup || [],
                              "RecordSpec": exports.RecordSpec || [],
                              "Trigger": exports.Trigger || [],
                              "Query": exports.Query || [],
                              "TrendAlert": exports.TrendAlert || [],
                          },
                      }
                  ],
              }

        var _uri = "HTTPS://" + this.hostname + "/a/";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        this._setHeaders(_request);
        _request.send(JSON.stringify(payload));

        let returned_data = this._processResponse(_request);
        return returned_data;

    }

    this.rpcUpdateDashboard = function(
          short_code,
          name="",
          author="",
          description="",
          permalink="",
      ){

        /*
        *    Updates the properties of an ExtraHop dashboard.
        *
        *            Parameters:
        *                    short_code (str): Required, the current permalink, i.e. "fxYGx"
        *                    name (str): Optional, new dashboard name.
        *                    author (str): Optional, new dashboard author.
        *                    description (str): Optional, new dashboard description.
        *                    permalink (str): Optional, new dashboard permalink.
        *
        *            Returns:
        *                    "EH_response" (class):
        *                        EH_response.ok (bool): Was the attempt successful?
        *                        EH_response.message (any): Actual response body
        *                        EH_response.status (int): HTTP Status code
        */

        var request_payload = {
                "method": "summary.getDashboard",
                "params": [
                    short_code,
                    {
                        // '"Expand": False' prevents it from returning
                        // all the widget details we don't need
                        "expand": false
                    },
                ],
            };
        var _uri = "HTTPS://" + this.hostname + "/a/";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        _request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        _request.send(JSON.stringify(request_payload));

        dashboard_props =  this._processResponse(_request).JSON;

        if(!dashboard_props.result){return false}

        var dashboard_data = dashboard_props.result,
            update_payload = {
                "method": "summary.updateDashboard",
                "params": [
                    dashboard_data["id"],
                    {
                        "id": dashboard_data["id"],
                        "author": author ? author : dashboard_data["author"],
                        "description": description ? description : dashboard_data.description,
                        "object_type": "any",
                        "shortcut": permalink ? permalink : dashboard_data["shortcut"],
                        "isWritable": dashboard_data["isWritable"],
                        "automatic": dashboard_data["automatic"],
                        "name": name ? name : dashboard_data["name"],
                        "theme": dashboard_data["theme"],
                    },
                ],
            }

            var _uri = "HTTPS://" + this.hostname + "/a/";

            var _request = new XMLHttpRequest();
            _request.open("POST", _uri, false);
            _request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            _request.send(JSON.stringify(update_payload));

            return this._processResponse(_request);
      }

    this.rpcUpdateDashboardSources = function(
      short_code,
      sources,
      combine_sources=false,
      replace_sources=false,
      override_source=false
    ){
      /*
      *    Adds any number of additional sources to each widget with metrics for the
      *    same source type on a dashboard.
      *        Parameters:
      *            short_code (str): Required, permalink of dashboard to edit
      *            sources (dict): Required, dictionary of lists containing API IDs
      *            for sources to add. Adding `None` to a list will create a dynamic
      *            source, i.e. `$application`.
      *                e.g.{
      *                        "application":[],
      *                        "capture":[],
      *                        "device":[],
      *                        "device_group":[],
      *                        "flow_network":[],
      *                        "flow_interface":[]
      *                    }
      *            combine_sources (bool): default is False
      *            replace_sources (bool): default is False
      *            override_source (str): Optional, specify a source type to set any on
      *            any widgets found to not have sources. i.e. "application" or "device_group", etc.
      */

      req_payload = {
              "method": "summary.getDashboard",
              "params": [
                  short_code,
                  {
                      // returns all widgets if "expand": true
                      "expand": true
                  },
              ],
          }

      var _uri = "HTTPS://" + this.hostname + "/a/";

      var _request = new XMLHttpRequest();
      _request.open("POST", _uri, false);
      _request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      _request.send(JSON.stringify(req_payload));

      var r = this._processResponse(_request).JSON

      var regions = r.result.regions;
      update_errors = [];
      for(var region of regions){
        for(var widget of region.widgets){
          if(widget.type == "text_widget"){continue}
          var payload = {"method": "summary.updateWidget", "params": []};
          payload.params.push(widget.id);
          for(var widget_group of widget.series_groups){
            if(widget_group.objects.length){
                var source_type = widget_group["objects"][0]["object_type"];
            }
            if(override_source){
                var source_type = override_source;
            }
            var new_sources = sources[source_type] || [];
            if(!new_sources.length){
                console.log('Skipping one widget group, no source type found or specified.');
                continue;
            }
            if(replace_sources){
              widget_group.objects = [];
            }
            for(var s of new_sources){
              widget_group.objects.push(
                {
                  object_id : s,
                  object_type : source_type
                }
              )
            }
            if(combine_sources){
              widget_group.are_sources_combined = true;
            }
          }
          payload.params.push(widget)

          var _uri = "HTTPS://" + this.hostname + "/a/";

          var _request = new XMLHttpRequest();
          _request.open("POST", _uri, false);
          _request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
          _request.send(JSON.stringify(payload));
          console.log("updating widget ID:" + widget["id"]);

          var r = this._processResponse(_request)
          if(r.status < 400){
            continue
          }else{
            update_errors.push(r.JSON)
          }
          payload["params"] = []

        }
      }
      if(update_errors.length){
        console.log("There were errors...");
        console.log(update_errors);
        return update_errors;
      }else{
        console.log("Success");
        return "Success!";
      }
    }

    this.rpcGetDashboards = function(){
         let payload = {"method":"summary.getDashboards","params":[]}

        var _uri = "HTTPS://" + window.location.hostname + "/a/";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        _request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        _request.send(JSON.stringify(payload));

        var dashboards = this._processResponse(_request).JSON;
        return dashboards.result;

    }

     this.rpcGetCustomDevices = function(load_criteria=false){
        let payload = {"method":"config.getCustomDevices","params":[0]}

        var _uri = "HTTPS://" + window.location.hostname + "/a/";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        _request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        _request.send(JSON.stringify(payload));

        _request.responseText
        var returned_data = this._processResponse(_request).JSON.result;
        var customDevices = []
        for(var c_device of returned_data.values){
            var customDevice = {};
            for(var index in returned_data.keys){
                let keyName = returned_data.keys[index]
                let keyValue = c_device[index]
                customDevice[keyName] = keyValue;
                if(keyName === "oid" && keyValue > 16777216){
                    let node_data = EDA.convertEcaIdToEdaId(keyValue);

                    customDevice.node_id = node_data.nodeID;
                    customDevice.eda_id = node_data.edaID;

                    if(load_criteria){
                        customDevice.criteria = this.rpcGetCustomDeviceCriteria(keyValue);
                    }
                }
            }
            customDevices.push(customDevice)
        }
        return customDevices;
    }

    this.rpcGetCustomDeviceCriteria = function(customdeviceID){
        let payload = {"method":"config.getCustomDeviceCriteria","params":[customdeviceID]}
        var _uri = "HTTPS://" + window.location.hostname + "/a/";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        _request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        _request.send(JSON.stringify(payload));

        return returned_data = this._processResponse(_request).JSON.result;
    }

    this.rpcCreateCustomDevice = function(node_id, custom_device){
        /*
           Create a new Custom Device on the target ExtraHop sensor
            Parameters:
                node_id (int): Required, The ID of the node where the new custom
                    device should be created.
                custom_device (json): Required, the custom device object, should 
                    conform the the ExtraHop API Guide criteria.
        */

        payload = {
            "method": "config.savecustom_device",
            "params": [
                None,
                {
                    "device_id": custom_device.extrahop_id || "",
                    "name": custom_device.name || "",
                    "disabled": custom_device.disabled || false,
                    "author": custom_device.author || "API",
                    "comment": custom_device.description || "",
                    "node_id": node_id,
                    "criteria": []
                }
            ]
        }

        var _uri = "HTTPS://" + window.location.hostname + "/a/";

        var _request = new XMLHttpRequest();
        _request.open("POST", _uri, false);
        _request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        _request.send(JSON.stringify(payload));

        returned_data = this._processResponse(_request).JSON.result;

        if(!returned_data.result){
            console.log(`Error creating custom device ${custom_device.name}.\n${JSON.stringify(returned_data,null,4)}`)
            return false;
        }
        console.log(`Created custom device: ${custom_device.name} ... populating criteria.`);
        payload.params[1].device_id = returned_data.result.device_id;
        payload.params[1].mod_time = returned_data.result.mod_time;
        payload.params[0] = returned_data.result.oid;
        for (let criteria of custom_device.criteria){
            
        }
        
    }

     this.rpcGetDashboardSources = function(short_code){
     
      req_payload = {
              "method": "summary.getDashboard",
              "params": [
                  short_code,
                  {
                      // returns all widgets if "expand": true
                      "expand": true
                  },
              ],
          }

      var _uri = "HTTPS://" + this.hostname + "/a/";

      var _request = new XMLHttpRequest();
      _request.open("POST", _uri, false);
      _request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      _request.send(JSON.stringify(req_payload));

      var r = this._processResponse(_request).JSON
      var output = {};
      for(var region of r.result.regions){
          for(var widget of region.widgets){
              if(widget.type =="text_widget"){continue}
              for(var series_group of widget.series_groups ){
                  for (var source_object of series_group.objects){
                      if(!output[source_object.object_type]){
                          output[source_object.object_type] = [];
                      }
                      if(!output[source_object.object_type].includes(source_object.object_id ? source_object.object_id : "Missing Source")){
                        output[source_object.object_type].push(source_object.object_id ? source_object.object_id : "Missing Source");
                      }
                  }
              }
          }
      }
      return output;

     }






    // *************************************
    // *************** HELPERS *************
    // *************************************

    this.toggleDetectionTrigger = function(triggerUUID, enabled){
      var _uri = "HTTPS://" + this.hostname + "/api/v1/cloudtriggers";

      var body = {uuid: triggerUUID, enabled: enabled};

      var _request = new XMLHttpRequest();
      _request.open("PATCH", _uri, false);
      this._setHeaders(_request);
      _request.send(JSON.stringify(body));

      return this._processResponse(_request);
    }

    this._processResponse = function(_response){

        var _returnObject = {};
        _returnObject.status = _response.status;
        _returnObject.body = _response.responseText;
        if(_response.responseText && _response.getResponseHeader("content-type").includes("application/json")){
            _returnObject.JSON = JSON.parse(_response.responseText);
        }
        let _tempHeaders = _response.getAllResponseHeaders();
        _returnObject.headers = {};

        _tempHeaders = _tempHeaders.split("\n");
        _tempHeaders.forEach(function(header){
            header = header.split(": ");
            if(header.length == 2){
                _returnObject.headers[header[0]] = header[1];
                if(header[0] === "location"){
                  // grab the id of the created object from the location header
                  let split_location = header[1].split("/");
                  _returnObject.created_id = parseInt(split_location[split_location.length - 1]);
                }
            }
        })

        return _returnObject;
    };

    this._update_token = function(){
      let auth_token = btoa(`${this.cloud_id}:${this.cloud_secret}`),
          _request = new XMLHttpRequest(),
          _uri = "HTTPS://" + this.hostname + "/oauth2/token";

      _request.open("POST", _uri, false);
      _request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      _request.setRequestHeader("Authorization","Basic " + auth_token);
      _request.send("grant_type=client_credentials");

       let response = this._processResponse(_request);
       if(!(response.status == 200)){
           console.log(`Error getting token\n${response.body}`)
       }else{
           this.access_token = response.JSON.access_token;
           console.log("Success fetching new token.");
       }
    }

    this._setHeaders = function(_request){
        _request.setRequestHeader("Accept","application/json");
        _request.setRequestHeader("Content-Type", "application/json");
        if(this.access_token){
            _request.setRequestHeader("Authorization","Bearer " + this.access_token);
        }else{
            _request.setRequestHeader("Authorization","ExtraHop apikey=" + this.apiKey);
        }
    };

    this.saveText = function(data, filename){
       if(!data) {
            console.error('Console.save: No data')
            return;
        }

        if(!filename) filename = prompt("Please enter a filename") || "default.txt";

        if(typeof data === "object"){
            data = JSON.stringify(data, undefined, 4)
        }

        var blob = new Blob([data], {type: 'text/json'}),
            e    = document.createEvent('MouseEvents'),
            a    = document.createElement('a')

        a.download = filename
        a.href = window.URL.createObjectURL(blob)
        a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
        a.dispatchEvent(e)
    }

    this.convertEdaIdToEcaId = function(eda_device_id, node_id){
    let binary_node_id = node_id.toString(2),
        shifted_binary_node_id = binary_node_id + "0".repeat(32),
        eca_id = parseInt(shifted_binary_node_id,2) + eda_device_id;
        return eca_id;
    }

    this.getEdaNodeIdFromEcaId = function(eca_id){
        return parseInt(eca_id.toString(2).padStart(40,"0").substr(0,8),2);
    }

    this.convertEcaIdToEdaId = function(eca_id){
        let nodeID = parseInt(eca_id.toString(2).padStart(40,"0").substr(0,8),2);
        let edaID = parseInt(eca_id.toString(2).padStart(40,"0").substr(8),2);
        return {nodeID, edaID};
    }
}

if (/\/admin\/api\//i.test(document.URL)) {
    var apiKeys = document.getElementsByTagName("code")
      , key_found = false;

    for (var api_key of apiKeys) {
        if (!/\*{3,}/.test(api_key.innerText)) {
            key_found = true;
            var found_key = api_key.innerText;
            break;
        }
    }
    if (key_found) {
        var EDA = new ExtraHop(window.location.hostname,found_key);
        if (EDA.getExtrahop().status == 200) {
            console.log("Success!!");
        } else {
            alert("There was a problem with the API key or this is being run in the wrong scope.");
        }
    }
} else if(/[^\.]+\.cloud\.extrahop\.com/i.test(document.URL)){
    let input = prompt("Please enter the api ID and secret in the format\nID,Secret");
    input = input.split(",");

    const hostname = window.location.hostname;
    const cloud_id = input[0]
    const cloud_secret = input[1]

    var EDA = new ExtraHop(hostname,null,cloud_id,cloud_secret);
    EDA._update_token()
    if(EDA.access_token){
        console.log("Connected to 360 API!!");
    }


}else {
    let _api_key = prompt("Please enter the API key, leave blank for RPC only.");
    if(!_api_key){
        var EDA = new ExtraHop(window.location.hostname);    
        console.log(`EDA object created... don't use any of the POST,GET,PATCH,DELETE,etc.. methods sicne they won't work.`)
    }else{
        var EDA = new ExtraHop(window.location.hostname,prompt("Please enter the API key, or RPC for RPC only."));
        if (EDA.getExtrahop().status == 200) {
        alert("Success!!");
    } else {
        alert("There was a problem with the API key or this is being run in the wrong scope.");
    }
    }
}
