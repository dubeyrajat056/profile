// document.addEventListener("DOMContentLoaded", function() {
//     var modal = document.getElementById("editProfileModal");
//     var btn = document.getElementById("editProfileBtn");
//     var span = document.getElementsByClassName("close")[0];
//     var saveBtn = document.getElementById("saveChangesBtn");
//     var profileImageInput = document.getElementById("profileImageInput");
//     var profileImage = document.getElementById("profileImage");
//     var username = document.getElementById("username");
//     var bio = document.getElementById("bio");

//     btn.onclick = function() {
//         modal.style.display = "block";
//     }

//     span.onclick = function() {
//         modal.style.display = "none";
//     }

//     window.onclick = function(event) {
//         if (event.target == modal) {
//             modal.style.display = "none";
//         }
//     }

//     saveBtn.onclick = function() {
//         var newUsernameValue = document.getElementById("newUsername").value;
//         var newBioValue = document.getElementById("newBio").value;

//         if (newUsernameValue !== "") {
//             username.innerText = newUsernameValue;
//         }

//         if (newBioValue !== "") {
//             bio.innerText = newBioValue;
//         }

//         if (profileImageInput.files.length > 0) {
//             var reader = new FileReader();
//             reader.onload = function(e) {
//                 profileImage.src = e.target.result;
//             }
//             reader.readAsDataURL(profileImageInput.files[0]);
//         }

//         modal.style.display = "none";
//     }
// });

document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("editProfileModal");
    var btn = document.getElementById("editProfileBtn");
    var span = document.getElementsByClassName("close")[0];
    var saveBtn = document.getElementById("saveChangesBtn");
    var profileImageInput = document.getElementById("profileImageInput");
    var profileImage = document.getElementById("profileImage");
    var username = document.getElementById("username");
    var bio = document.getElementById("bio");

    // Check if profile data exists in local storage
    if(localStorage.getItem("username")) {
        username.innerText = localStorage.getItem("username");
    }
    if(localStorage.getItem("bio")) {
        bio.innerText = localStorage.getItem("bio");
    }
    if(localStorage.getItem("profileImage")) {
        profileImage.src = localStorage.getItem("profileImage");
    }

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    saveBtn.onclick = function() {
        var newUsernameValue = document.getElementById("newUsername").value;
        var newBioValue = document.getElementById("newBio").value;

        if (newUsernameValue !== "") {
            username.innerText = newUsernameValue;
            // Store new username in local storage
            localStorage.setItem("username", newUsernameValue);
        }

        if (newBioValue !== "") {
            bio.innerText = newBioValue;
            // Store new bio in local storage
            localStorage.setItem("bio", newBioValue);
        }

        if (profileImageInput.files.length > 0) {
            var reader = new FileReader();
            reader.onload = function(e) {
                profileImage.src = e.target.result;
                // Store new profile image URL in local storage
                localStorage.setItem("profileImage", e.target.result);
            }
            reader.readAsDataURL(profileImageInput.files[0]);
        }

        modal.style.display = "none";   
    }
});

