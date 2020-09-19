# Ethereum-todo-list
A todo list on Blockchain platform powered by Ethereum smart contracts

It is a basic todo list which lets us understand how blockchain works and how to connect application with a decentralized platform.
<br><br>
Unlike a web based todo list , there is not any central authority or a central databse where your data is stored.
![screenshot](screenshot.jpg)
The data / your tasks are stored on a decentralized network and it is distributed over the blockchain
### Requirements
This project uses truffle and ganache for test network. One can also import ganache to localhost port in metamask

### Cli- truffle console
> todolist= await todoList.deployed()                    /*Deployed contract is assigned to variable todolist whicj acts as an object to the contract */
>
>
> todolist.address                      /*gives the address of contract */
>
>
> taskCount= await todoList.taskCount()
>
>
> taskCount.toNumber()
>
>
> task.id.toNumber()    /*gives the id of task*/

