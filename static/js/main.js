
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