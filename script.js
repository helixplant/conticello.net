/**
 * Author: helixplant
 * Date: Nov. 1 2024
 * 
 * Purpose:
 * To make my website look really cool 
 * 
 **/

let activeButton = document.querySelector('.left-section button.active');

function displayContent(contentId) {
    const contentDivs = document.querySelectorAll('.content');
    contentDivs.forEach(div => div.classList.add('hidden'));
    const selectedDiv = document.getElementById(contentId);
    selectedDiv.classList.remove('hidden');
    const clickedButton = event.currentTarget;    
    if (activeButton) {
        activeButton.classList.remove('active');
    }
    clickedButton.classList.add('active');
    activeButton = clickedButton;
}