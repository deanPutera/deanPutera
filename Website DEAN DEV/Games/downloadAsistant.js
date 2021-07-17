window.onload =
function ()
{
  var JellyfishAnchor = document.getElementById("jellyGameAnchor");
  var Name = "Not known";
  if (navigator.appVersion.indexOf("Win") != -1)
  {
    JellyfishAnchor.href = "Jellyfish adventure Setup.exe";
    Name = "Windows OS";
    console.log("HI WINDOWS USERS!!");
  }

  if (navigator.appVersion.indexOf("Mac") != -1)
  {
    Name = "MacOS";
    JellyfishAnchor.href = "Warn.html";
    JellyfishAnchor.removeAttribute("download");
    console.log("HI MACOS USERS!!");
    console.log("DEAN's GAME IS NOT SUPPORT MACOS!!");
  }

  if (navigator.appVersion.indexOf("Linux") != -1)
  {
    Name = "Linux OS";
    JellyfishAnchor.href = "Warn.html";
    JellyfishAnchor.removeAttribute("download");
    console.log("HI LINUX USERS!!");
    console.log("DEAN's GAME IS NOT SUPPORT LINUX!!");
  }

  if (navigator.appVersion.indexOf("Android") != -1)
  {
    JellyfishAnchor.href = "Jellyfish adventure.apk";
    Name = "Android";
    console.log("HI ANDROID USERS!!");
  }

  if (navigator.appVersion.indexOf("iPhone") != -1 || navigator.appVersion.indexOf("iPad") != -1)
  {
    JellyfishAnchor.href = "Warn.html";
    JellyfishAnchor.removeAttribute("download");
    Name = "IOS";
    console.log("HI IOS USERS!!");
    console.log("DEAN's GAME IS NOT SUPPORT IOS!!");
  }

  if (Name == "Not known")
  {
    JellyfishAnchor.href = "Warn.html";
    JellyfishAnchor.removeAttribute("download");
    console.log("HI NOT KNOWN DEVICE USERS!!");
  }
};