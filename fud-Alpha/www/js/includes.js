/*
    Author: Fu-D Team
    Last modified: 03/03/20
    Last modified by: Sam Lohbeck
*/

// Footer Include

var footer = '<div class="col_1"><img src="theicon.png" /></div>\
    <div class="col_2"><p>Copyright</p><p>Fu-D 2020</p></div>\
    <div class="col_3"><p>Privacy Policy</p><p>User Agreement</p></div>';

function includes() {
    document.getElementsByTagName('footer').innerHTML = footer;
}
