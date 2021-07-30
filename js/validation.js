const validation = () => {
    var id = document.login_form.user.value;
    var ps = document.login_form.password.value;

    if (id.length === "" && ps.length === "") {
        alert("Please enter your username and password!!!")
        return false
    } else {
        if (id.length === "") {
            alert("Username is empty!")
            return false
        }
        if (ps.length === "") {
            alert("Password is empty!")
            return false
        }
    }
}