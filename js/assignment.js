"use strict";

const submissionBtn = document.getElementById("submission-btn");
const smallestNumberElement = document.getElementById("smallest-number");
const largestNumberElement = document.getElementById("largest-number");
const averageNumberElement = document.getElementById("average-number");

const myNumbers = [35, 130, 354, 100, 25, 134, 99, 200, 35];

// Function to find the smallest number in the array
function findSmallestNumber(arr) {
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}

// Function to find the largest number in the array
function findLargestNumber(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

// Function to find the average of numbers in the array
function findAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

// Render the answers on the page
function render() {
    const smallest = findSmallestNumber(myNumbers);
    const largest = findLargestNumber(myNumbers);
    const average = findAverage(myNumbers);

    smallestNumberElement.textContent = `Smallest Number: ${smallest}`;
    largestNumberElement.textContent = `Largest Number: ${largest}`;
    averageNumberElement.textContent = `Average Number: ${average}`;
}

// Listen for the button click to trigger the render function
submissionBtn.addEventListener("click", function () {
    render();
});
