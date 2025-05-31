//const Task = require('../Models/Task')
// implement CRUD operation


//let url = "http://localhost:4000/api/v1/driverDetails";
let url = "http://localhost:4000/task";



//save driver deatils to json/DB
async function saveTask(task) {

    const response = await fetch(url, {
        method: "POST",
        headers: {
            'content-type': "application/json"
        },
        body: JSON.stringify(task)
    })
        //return response.json();
        .then(response => response.json());
    window.location.reload();
}

// get driver details from json/db
async function getAllTask() {

    const response = await fetch(url);
    return response;

}

//fetching data for administration page

async function getDriverDetails() {

    const response = await fetch(url, {
        method: "GET"
    })
    return response.json();
}

async function getDriverDetailsById(id) {
    const response = await fetch(url + "/" + id, {
        method: "GET"

    })
    return response.json();
}

async function updateDriverDetails(id, mobile) {
    const response = await fetch(url + "/" + id + "/" + mobile, {
        method: "PATCH",
        headers: {
            'content-type': "application/json"
        },
        //--------------add below code if you want to get data without backend means to store into JSON and 
        //remove mobile(+ "/" + mobile) from like 48--
        // body: JSON.stringify({
        //   "phone": mobile
        // })
    })
    return response.json();
    //.then(response => response.json());
    //  window.location.reload();
}

async function deleteDriversDetails(id) {
    const response = await fetch(url + "/" + id, {
        method: "DELETE"
    })
    return response.json();

}

module.exports = {
    saveTask,
    getAllTask,
    getDriverDetails,
    getDriverDetailsById,
    updateDriverDetails,
    deleteDriversDetails
}