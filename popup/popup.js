function myClick() {
  myWin = window.open(
    "http://edgeplugin.yezilu.xyz/",
    "",
    "width=520,height=800,location=no,alwaysRaised=yes"
  );
  myWin.focus();
  myWin.showModalDialog();
}
document.getElementById('myBtn').onclick=myClick
