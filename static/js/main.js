
function toggleByIdMenu(elementId) {
    console.log('toggleByIdMenu', elementId);
    let elementObj = document.getElementById(elementId);

    if (elementObj.classList.contains('show')) {
        elementObj.classList.remove('show');
        console.log('remove show class')
    } else {
        elementObj.classList.add('show');
        console.log('add show class')
    }
}



// Close the profile menu or  notification Bar if the user clicks outside of it
window.onclick = function(event) {

    if (!event.target.matches('.profile img')) {
        const profileMenu = document.getElementById('profileMenu');
        if (profileMenu.classList.contains('show')) {
            profileMenu.classList.remove('show');
        }
    }

    if(!event.target.matches('.notificationSidebarItem, .notificationSidebar, .profile img'))
        {
            const notificationBar = document.getElementById('notification_sidebar');
            if(notificationBar.classList.contains('show')){
                notificationBar.classList.remove('show');
                console.log('remove show class from notificationSidebar')
            }
        }
    
   
   
}