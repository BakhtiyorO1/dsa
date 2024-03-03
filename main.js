document.addEventListener("DOMContentLoaded", function() {
    // Задержка в 3 секунды (3000 миллисекунд)
    setTimeout(function() {
        // Скрытие окна загрузки после задержки
        document.getElementById("loader-wrapper").style.display = "none";
    }, 3000);
});
