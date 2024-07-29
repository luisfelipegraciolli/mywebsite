function themeChange(){
    var element = document.getElementById("main-container");
    var icon = document.getElementById("theme-icon");
    
    if(icon.classList.contains('fa-moon')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
    element.classList.toggle("light-mode")
        
}
