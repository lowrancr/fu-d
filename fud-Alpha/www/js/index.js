/*
    Author: Fu-D Team
    Last modified: 2/25/20
    Last modified by: Sam Lohbeck 
 */
function loadingScreen () {
    var preload = document.getElementById("load-wrapper");
    var loading = 0;                                           
    var id = setInterval(frame, 10);
    
    function frame() {
        if (loading == 100) {
            clearInterval(id);
            window.open("../home.html","_self");
        } else {
            loading = loading + 1;
            if(loading = 90) {
                preload.style.animation = "fadeout 1s ease";
            }
        }
    }
}
