var openProfile = document.querySelector(".user-profile-page-action");

function openProfileAction(){
    openProfile.classList.toggle("user-profile-page-action-click");
}

function closeProfile(){
    openProfile.classList.remove("user-profile-page-action-click");
}