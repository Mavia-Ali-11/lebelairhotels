function toggleReviewsIcon(i) {
    let targetedIcon = document.getElementById("rev-icon" + i);
    console.log(targetedIcon)
    if (targetedIcon.classList.contains("fa-chevron-down")) {
        targetedIcon.setAttribute("class", "fa fa-chevron-up");
    } else {
        targetedIcon.setAttribute("class", "fa fa-chevron-down");
    }
}

function goFullScreen(e) {
    let getClassList = e.classList.contains("full-scr");

    if (!getClassList &&  document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
        e.classList.add("full-scr");
    } else if(getClassList) {
        document.exitFullscreen();
        e.classList.remove("full-scr");
    }
}

function shutFullScreen() {
    document.getElementById("go-full").classList.remove("full-scr");
    if (document.exitFullscreen) {
        document.exitFullscreen();
    }
}