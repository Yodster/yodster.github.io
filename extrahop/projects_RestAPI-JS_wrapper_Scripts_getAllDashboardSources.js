// This script gets all the dashboards and then pulls their sources.
// The only sources that will not be displayed are networks/captures. We don't have an endpoint for this yet.

// get all dashboards
var dashboards = EDA.getDashboards().JSON;

// get all devices
var devices = EDA.getDevices(null, null, 10000, 0).JSON;

// get all applications
var applications = EDA.getApplications(null, null, 10000).JSON;

// get all device groups

var deviceGroups = EDA.getDeviceGroups('-1w').JSON;

// get the nodes

var nodes = EDA.getNodes().JSON

// build a node lookup
var nodeLookup = {};
for (node of nodes) {
    nodeLookup[node.id] = node.display_name;
}

// create the output object
var output = {};


// loop through all the dashboards found
for (var dashboard of dashboards) {

    // check if the dashboard is a system dashboard
    if (dashboard.type == "system_dashboard") {
        // if it is then just skip it
        //console.log(dashboard);
        continue;
    }

    // get current dashboard sharing
    var dashboardSharing = EDA.getDashboardSharing(dashboard.id).JSON;

    // create an entry in our output object for this dashboard along with the owner and modificiation date
    output[dashboard.name] = {
        "devices": [],
        "applications": [],
        "deviceGroups": [],
        "owner": dashboard.owner,
        "mod": dashboard.mod_time,
        "sharing": dashboardSharing
    };
}

var counter = 0,
    startTime = new Date();

// loop through all the received devices
for (var device of devices) {

    // grab any dashboards associated with this device
    var deviceDashboards = EDA.getDeviceDashboards(device.id).JSON;

    // check to see if there are any dashboards or if this is an empty return
    if (deviceDashboards.length) {
        // if there are dashboards...
        for (var dashboard of deviceDashboards) {

            if (dashboard.type == "system_dashboard") {
                // if it is then just skip it
                //console.log(dashboard);
                continue;
            }

            // add this device as an entry for the dashboard in our output object
            output[dashboard.name].devices.push(device);
        }
    }
    counter += 1;

    if (counter % 500 == 0) {
        console.log(`Processed ${counter} out of ${devices.length} devices.`);
    }
    if (counter % 2000 == 0) {
        timer(new Date() - startTime, counter, devices.length);
    }
}

counter = 0;
startTime = new Date();

// loop through all the found applications
for (var application of applications) {

    // grab any dashboards associated with this application
    var applicationDashboards = EDA.getApplicationDashboards(application.id).JSON;

    // check to see if there are any dashboards or if this is an empty return
    if (applicationDashboards.length) {
        for (var dashboard of applicationDashboards) {

            if (dashboard.type == "system_dashboard") {
                // if it is then just skip it
                //console.log(dashboard);
                continue;
            }

            // add this application entry for the dashboard in our output object
            output[dashboard.name].applications.push(application);
        }
    }

    if (counter % 200 == 0) {
        console.log(`Processed ${counter} out of ${devices.length} applications.`);
    }
    if (counter % 500 == 0) {
        timer(new Date() - startTime, counter, applications.length);
    }
}

counter = 0;
startTime = new Date();

// loop through all the found device groups
for (var deviceGroup of deviceGroups) {

    // grab any dashboards associated with this device groups
    var deviceGroupDashboards = EDA.getDeviceGroupDashboards(deviceGroup.id);

    // there is a chance the device group has been deleted. if it is then we'll get a 404 back
    // only proceed if the response is a 200 (OK)
    if (deviceGroupDashboards.status == 200) {
        // grab the JSON result from the return
        deviceGroupDashboards = deviceGroupDashboards.JSON;
        // check to see if there are any dashboards or if this is an empty return
        if (deviceGroupDashboards.length) {
            for (var dashboard of deviceGroupDashboards) {

                if (dashboard.type == "system_dashboard") {
                    // if it is then just skip it
                    //console.log(dashboard);
                    continue;
                }

                // add this device group to the dashboard in our output object
                output[dashboard.name].deviceGroups.push(deviceGroup);
            }
        }
    }

    if (counter % 200 == 0) {
        console.log(`Processed ${counter} out of ${devices.length} device Groups.`);
    }
    if (counter % 500 == 0) {
        timer(new Date() - startTime, counter, deviceGroups.length);
    }
}

// create the headers for our csv output
var outputText = "Dashboard Name; Dashboard Owner; Shared; Shared with; Last Modified Time; Devices; Applications; Device Groups\n";

// loop through all of the dashboards in our output object
for (var dashboard of Object.keys(output)) {

    // grab the various dashboard properties for ease of reading
    var dashboardName = dashboard,
        dashboard = output[dashboard],
        owner = dashboard.owner,
        modified = new Date(dashboard.mod),
        apps = [],
        devs = [],
        devGroups = [];

    // loop through all of the devices associated with this and put the name of each devices in the devs array
    for (var dashboardDevice of dashboard.devices) {
        devs.push(`${dashboardDevice.display_name} : ${nodeLookup[dashboardDevice.node_id]}`);
    }

    // loop through all of the applications associated with this dashboard and put the name of each applications in the apps array
    for (var dashboardApplication of dashboard.applications) {
        apps.push(`${dashboardApplication.display_name} : ${nodeLookup[dashboardApplication.node_id]}`);
    }

    // loop through all of the device groups associated with this dashboard and put the name of each device group in the devGroups array
    for (var dashboardDeviceGroup of dashboard.deviceGroups) {

        // get the devices in this device group
        var devGroupDevices = EDA.getDeviceGroupDevices(dashboardDeviceGroup.id).JSON;
        var devGroupNodes = []

        // iterate ofer the devices and create an array of all the node ids present (but keep it unique)
        for (devGroupDevice of devGroupDevices) {
            if (!devGroupNodes.includes(devGroupDevice.node_id)) {
                devGroupNodes.push(devGroupDevice.node_id);
            }
        }

        // create an empty string to populate with friendly node names
        var nodeList = "";

        for (var i = 0; i < devGroupNodes.length; i++) {
            // populate the string with names
            nodeList += nodeLookup[devGroupNodes[i]];

            // add the seperator unless this is the last element
            if (i !== (devGroupNodes.length - 1)) {
                nodeList += " | ";
            }
        }



        devGroups.push(`${dashboardDeviceGroup.name} : ${nodeList}`);
    }

    var dashboardShared,
        dashboardSharedWith = [];

    // check to see if there are any sharing permissions setup
    if (dashboard.sharing.anyone ||
        Object.keys(dashboard.sharing.groups).length ||
        Object.keys(dashboard.sharing.users).length) {
        dashboardShared = true;
    } else {
        dashboardShared = false;
    }

    if(dashboard.sharing.anyone){
        dashboardSharedWith.push("All")
    }

    // now build a list of all the shared with groups & users
    for(var user of Object.keys(dashboard.sharing.users)){
        var userPermission = dashboard.sharing.users[user];
        dashboardSharedWith.push(`${user}: ${userPermission}`);
    }

    for(var group of Object.keys(dashboard.sharing.groups)){
        var groupPermission = dashboard.sharing.groups[group];
        dashboardSharedWith.push(`${group}: ${groupPermission}`);
    }


    outputText += `${dashboardName}; ${owner}; ${dashboardShared}; ${dashboardSharedWith.sort()}; ${modified}; ${uniqueArray(devs.sort())}; ${uniqueArray(apps.sort())}; ${uniqueArray(devGroups.sort())}\n`;


}

copy(outputText);
console.log("Done! ouput is in the clipboard\nJust open up excel and paste the data in. Then under the data tab select \"Text to Columns\" and use a semicolon as the delimiter.")


function timer(timePassed, objectsFinished, objectsTotal) {

    var averageMSperObject = timePassed / objectsFinished;
    var timeRemaining = (objectsTotal - objectsFinished) * averageMSperObject;

    // convert ms to seconds
    var timeUnits = "seconds",
        minutesRemaining = null;
    timeRemaining = Math.trunc(timeRemaining / 1000);
    if (timeRemaining > 60) {
        timeRemaining = Math.trunc(timeRemaining / 60);
        timeUnits = "minutes"
    }
    if (timeRemaining > 60) {
        minutesRemaining = timeRemaining % 60;
        timeRemaining = Math.trunc(timeRemaining / 60);
        timeUnits = 'hour(s)';
    }

    var outputString = `Time remaining for object class is approximately ${timeRemaining} ${timeUnits}`;
    if (minutesRemaining) {
        outputString += ` and ${minutesRemaining} minutes.`
    }

    console.log(outputString);
    return;
}


function uniqueArray(arrArg) {
    return arrArg.filter(function(elem, pos, arr) {
        return arr.indexOf(elem) == pos;
    });
};
