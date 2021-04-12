// Your code here

function saturdayFun(def = "roller-skate") {
  return `This Saturday, I want to ${def}!`
}

let mondayWork = function(def = "go to the office") {
  return `This Monday, I will ${def}.`
}

function wrapAdjective(special = "*") {
  let inner = function(string) {
    return `You are ${special}${string}${special}!`
  }
  return inner
}

const Calculator = {
  add: function(num1, num2) {
    return num1 + num2
  },
  subtract: function(num1, num2) {
    return num1 - num2
  },
  multiply: function(num1, num2) {
    return num1 * num2
  },
  divide: function(num1, num2) {
    return num1 / num2
  }
}


function actionApplyer(startInt, actions) {
  function callActionOnAccumulator(accumulator, action) {
    return action(accumulator)
  }
  return actions.reduce(callActionOnAccumulator, startInt)
}
