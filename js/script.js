// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Ali Mugamai9
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-5-07-JS/sw.js", {
    scope: "/ICS20-5-07-JS/",
  })
}
/**
 * gets a random number and displays if you are right or wrong
 */
function myButtonClicked() {
  const num = parseInt(document.getElementById("number").value)
  let counter = 0
  let answer = 0
  while (counter < num) {
    counter = counter + 1
    answer = answer + counter
  }
  document.getElementById("answer").innerHTML = "<p>Value is " + answer + "</p>"
}
