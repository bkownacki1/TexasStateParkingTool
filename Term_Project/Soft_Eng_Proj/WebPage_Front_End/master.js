// function called by onclick js method.
$(document).ready(function () {
        $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});

// Document to clear fields When User clicks reset, Toggle Class Later On \\
$(document).ready(function () {
    $('#resetForm').on('click', function(){
    document.getElementById("strahan_list").style.display = "none";
    document.getElementById("mathews_list").style.display = "none";
    document.getElementById("pleasant_list").style.display = "none";
    document.getElementById("lbj_list").style.display = "none";
    });
});

// Strahan Button interaction \\
$(document).ready(function () {
    $('#btn-display-strahan-list').on('click', function(){
    document.getElementById("strahan_list").style.display = "table";
    });
});

// Mathews Button interaction \\
$(document).ready(function () {
    $('#btn-display-mathews-list').on('click', function(){
    document.getElementById("mathews_list").style.display = "table";
    });
});

// Pleasant Button interaction \\
$(document).ready(function () {
    $('#btn-display-plesant-list').on('click', function(){
    document.getElementById("pleasant_list").style.display = "table";
    });
});


// LBJ Button interaction \\
$(document).ready(function () {
    $('#btn-display-lbj-list').on('click', function(){
    document.getElementById("lbj_list").style.display = "table";
    });
});