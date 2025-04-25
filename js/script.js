// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Sasha Vorontsov
// Created on: April 2025
// This file contains the JS functions for index.html


function calculaterandomnumber () {

  const randomNumber = Math.floor(Math.random() * 6) + 1
  const userNumber= document.getElementById('option-positive').checked

  if (userNumber==true)  {
    document.getElementById('answer1').innerHTML =
      "<p>You have got it correct with your guess!" + randomNumber + "</p>" 
  }
  else {
    document.getElementById('answer1').innerHTML =
      "<p>You have got it correct with your guess!: -" + randomNumber + "</p>" 
  }

  }
