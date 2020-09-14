//we use mocha framework for test 
//chai module in testing



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

})