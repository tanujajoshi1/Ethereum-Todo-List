//we use mocha framework for test 
//chai module in testing

const assert = require('assert');



const TodoList= artifacts.require('./TodoList.sol')

contract('TodoList', (accounts)=>{   //account store all the accounts that we have in our network(ganache/metamask)
    before(async function(){
this.todoList= await TodoList.deployed()   //before each test run, get the deployed smart contract
    })

it('deploys successfully', async function(){
    const address= await this.todoList.address
    assert.notEqual(address,0x0)
    assert.notEqual(address,null)
    assert.notEqual(address,'')
    assert.notEqual(address,undefined)
})

it('create tasks',async function(){
    const result=await this.todoList.createTask('A new task');
    const taskCount=await this.todoList.taskCount()
    assert.equal(taskCount,2);
    const event=result.logs[0].args;
    assert.equal(event.id.toNumber(),2);
    assert.equal(event.content,'A new task');
    assert.equal(event.completed,false);


})

})