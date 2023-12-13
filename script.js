/*
function closeContainer() {
    document.getElementById("window-box").style.display = "none";
}*/

function closeWindow(windowClass) {
    $('.' + windowClass).hide();
}

function highlightIcon(icon) {
    $(icon).css('opacity', 0.7);
}

function resetIcon(icon) {
    $(icon).css('opacity', 1);
}
