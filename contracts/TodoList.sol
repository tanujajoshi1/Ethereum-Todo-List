// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

contract TodoList{

    uint256 public taskCount=0;

    struct Task{
        uint256 id;
        string content;
        bool completed;
    }

    mapping(uint256=>Task)public tasks;  //kind of DB to store the tasks by their ids

    event TaskCreated(uint256 id, string content, bool completed);
    event TaskCompleted(uint256 id, bool completed);
    
     constructor () public{
        createTask("Do not leave your tasks pending");
    
    }
    //now we need to put the task of structure into the mapping
    function createTask(string memory _content)public{
        taskCount++;
        //putting into mapping
        tasks[taskCount]=Task(taskCount,_content,false);

        emit TaskCreated(taskCount,_content, false);
    }

    function toggleCompleted(uint256 _id)public{
        Task memory _task=tasks[_id];
        _task.completed=!_task.completed;
        tasks[_id]=_task;

        emit TaskCompleted(_id,_task.completed);
    }

}