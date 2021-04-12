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


function actionApplyer(startInt, array) {
  
  return array.reduce(function(accumulator, innerFunc) {
    return innerFunc(accumulator)
  }, startInt
  )

  // interate over the function in the array
    //pass in the starting int
    // return result
  
  return startInt

}
