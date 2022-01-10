function validate() {
    var u = document.getElementById("username").value;
    var p = document.getElementById("email").value;
    var p = document.getElementById("password").value;
    var p = document.getElementById("password-repeat").value;
     
    if(u== "") {
    alert("Vui lòng nhập tên!");
    return false;
    }
    if(p == "") {
    alert("Vui lòng nhập email!");
    return false;
    }
    if(p == "") {
    alert("Vui lòng xác minh mật khẩu!");
    return false;
    }
     
    alert("Xin hãy điền đúng thông tin!")
     
    return true;
    }