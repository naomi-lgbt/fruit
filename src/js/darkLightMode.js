const themeBtn = document.getElementById("theme-btn");

themeBtn.onclick = () => {
    themeBtn.classList.toggle('fa-sun');
    if (themeBtn.classList.contains('fa-sun')) {
        document.body.classList.add('changeTheme');
    } else {
        document.body.classList.remove('changeTheme');
    }
};