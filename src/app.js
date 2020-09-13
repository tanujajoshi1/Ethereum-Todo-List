App={
   async load(){
    // console.log("app loading..")
    await App.loadWeb3()   //load web3 in order to connect client side with blockchain
    await App.loadAccount()
  },


   async loadWeb3(){
    if (typeof web3 !== 'undefined') {
      App.web3Provider = web3.currentProvider
      web3 = new Web3(web3.currentProvider)
    } else {
      window.alert("Please connect to Metamask.")
    }    
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)      
        window.ethereum.enable()        
        web3.eth.sendTransaction({/* ... */})
     
    }   
    else if (window.web3) {
      App.web3Provider = web3.currentProvider
      window.web3 = new Web3(web3.currentProvider)
      web3.eth.sendTransaction({/* ... */})
    }   
    else {
      console.log('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  },

  async loadAccount(){
    account=web3.eth.getAcounts[0]
    console.log(App.account)
  }


}
window.onload=()=>{
  App.load()
}