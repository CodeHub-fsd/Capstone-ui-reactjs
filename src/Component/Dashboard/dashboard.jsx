import React from 'react';
import Registration from '../Registration/registration';
//import { getAllTask, saveTask } from '../../Services/task.service';
import getAllTask  from '../../Services/task.service';
class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            allTask: []
        }
    }

    // save driver details to DB 
    saveTaskinDB = (newtask) => {
        //console.log(newtask);
        let taskList = this.state.allTask;
        newtask.taskId = taskList.length + 1;
        // saveTask is API call here fron service class
        saveTask(newtask);
        taskList.push(newtask);
        this.setState({
            allTask: taskList
        })
    }

    render() {
        return (
            // here we are binding registration page with all user input details
            <div>
                <Registration saveTask1={this.saveTaskinDB}></Registration>
            </div>
        )
    }
}

export default Dashboard;