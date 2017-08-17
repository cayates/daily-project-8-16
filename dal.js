let myTodoArray = require("./array")

function pendingItems(itemId){
    return myTodoArray.filter(function(item){
        return !item.completed
    })
}

function changeToTrue(itemId){
    return myTodoArray.filter(function(item){
        return item.completed
    })
}

function removeItem(itemId){
    return myTodoArray.map(function(item){
      if(item.id == itemId){
        item.completed = true
        console.log(item)
        return item
      } else {
        return item
      }
    })
  }
  
  module.exports = {
    pendingItems: pendingItems,
    changeToTrue: changeToTrue,
    removeItem: removeItem
  }