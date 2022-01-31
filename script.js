setInterval(() => {
    location.reload()
}, 120000);
var totalScore = 0;
let pointsArray = [];
var audio = new Audio('beep.mp3');
function highlightBox(element, box) {
    var blocks = document.getElementsByClassName('circle');
    const total = document.getElementById("totalScore");
    const logs = document.getElementById('log');
    for (var i = 0; i < blocks.length - 1; i++) {
        blocks[i].style.background = "white";
    }
    if (box != 6 && box != 7 && box != 8) {
        element.style.background = "green";
    }
    audio.play();

    switch (box) {
        case 1:
            totalScore = totalScore + 1;
            pointsArray.push(1)
            break;
        case 2:
            totalScore = totalScore + 2;
            pointsArray.push(2)
            break;
        case 3:
            totalScore = totalScore + 3;
            pointsArray.push(3)
            break;
        case 4:
            totalScore = totalScore + 4;
            pointsArray.push(4)
            break;
        case 5:
            totalScore = totalScore + 5;
            pointsArray.push(5)
            break;
        case 6:
            totalScore = totalScore + 6;
            pointsArray.push(6)
            window.alert(6)
            break;
        case 7:
        case 8:
            totalScore = totalScore + 8;
            pointsArray.push(8)
            window.alert(8)
            break;

        default:
            break;
    }
    total.innerHTML = "Score: " + totalScore;
    logs.innerHTML = "BackLogs: " + pointsArray;
}