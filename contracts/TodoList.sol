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


    constructor()public{
        createTask("Test how it works!!");
    
    }
    //now we need to put the task of structure into the mapping
    function createTask(string memory _content)public{
        taskCount++;
        //putting into mapping
        tasks[taskCount]=Task(taskCount,_content,false);
    }

}