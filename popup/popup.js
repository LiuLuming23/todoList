function myClick() {
  myWin = window.open(
    "https://www.runoob.com",
    "",
    "width=500,height=600,location=no,alwaysRaised=yes"
  );
  myWin.focus();
  myWin.showModalDialog();
}
document.getElementById('myBtn').onclick=myClick
