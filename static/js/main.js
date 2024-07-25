
function submenu(subMenu)
{
    const sub_menu = document.getElementById(subMenu);
    if (sub_menu.classList.contains('show'))
    {
        sub_menu.classList.remove('show');
    }
    else
    {
        sub_menu.classList.add('show');
        
    }
}



function toggleProfileMenu() {
    var profileMenu = document.getElementById('profileMenu');
    if (profileMenu.classList.contains('show')) {
        profileMenu.classList.remove('show');
    } else {
        profileMenu.classList.add('show');
    }
}

// Close the profile menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.profile img')) {
        var profileMenu = document.getElementById('profileMenu');
        if (profileMenu.classList.contains('show')) {
            profileMenu.classList.remove('show');
        }
    }
}