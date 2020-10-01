<link href="../css/bootstrap.min.css" rel="stylesheet">
<link href="../css/customizer.css" rel="stylesheet">
<link href="../css/jquery.minicolors.css" rel="stylesheet">

<div align="right"><img src="https://img.shields.io/badge/Calirun-Projekte-blue" /></div>

<p align="center">
  <a href="favicon-16x16.png" target="_blank"><img src="favicon-16x16.png" /></a>
  <a href="favicon-32x32.png" target="_blank"><img src="favicon-32x32.png" /></a>
  <a href="android-icon-48x48.png" target="_blank"><img src="android-icon-48x48.png" /></a>
  <a href="ms-icon-70x70.png" target="_blank"><img src="ms-icon-70x70.png" /></a>
  <a href="favicon-96x96.png" target="_blank"><img src="favicon-96x96.png" /></a>
  <a href="ms-icon-70x70.png" target="_blank"><img src="ms-icon-70x70.png" /></a>
  <a href="android-icon-48x48.png" target="_blank"><img src="android-icon-48x48.png" /></a>
  <a href="favicon-32x32.png" target="_blank"><img src="favicon-32x32.png" /></a>
  <a href="favicon-16x16.png" target="_blank"><img src="favicon-16x16.png" /></a>
</p>

<h2>Kurzanleitung</h2>

<ul>
  <li>1) Folgenden Code kopieren und im Kopfbereich <strong>```<head>```</strong> deines HTML-Dokuments einfügen.<br></li>
  <li>2) Speichere den Download im Stammverzeichniss deines Projekts.<br></li>
  <li>3) Den folgenden Code im Kopfbereich<head> deines HTML-Dokuments einfügen</li>
  <li>4) fine</li>
</ul>

<hr>

<h2> Downloads</h2>

<form method="get" action="https://github.com/7pub/cdn-gw/raw/master/favicon/Crown/3f446392a21bf3d2a08024894cccdb3e.ico.zip">
  <button type="submit">ZIP Download</button>
</form>

<hr>

<h2>Definition und Verwendung</h2>
<ul>
  <li>+ Das ``<link>`` -Element Definiert die Beziehung zwischen der eigenen internen und einer externen Ressource.</li>
  <li>+ Das ``<link>`` -Tag wird am häufigsten zum Verknüpfen mit externen Stylesheets verwendet.</li>
  <li>+ Das ``<link>`` -ist ein leeres Element und enthält nur Attribute.</li>
</ul>

<button id="myBtn">HEAD Tag Element</button>

<div id="myModal" class="modal">
  <div class="modal-content">
    <span class="close">&times;</span>
    &lt;link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"&gt;<br>
    &lt;link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"&gt;<br>
    &lt;link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"&gt;<br>
    &lt;link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"&gt;<br>
    &lt;link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"&gt;<br>
    &lt;link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"&gt;<br>
    &lt;link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"&gt;<br>
    &lt;link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"&gt;<br>
    &lt;link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"&gt;<br>
    &lt;link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png"&gt;<br>
    &lt;link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"&gt;<br>
    &lt;link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"&gt;<br>
    &lt;link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"&gt;<br>
    &lt;link rel="manifest" href="/manifest.json"&gt;<br>
    &lt;meta name="msapplication-TileColor" content="#ffffff"&gt;<br>
    &lt;meta name="msapplication-TileImage" content="/ms-icon-144x144.png"&gt;<br>
    &lt;meta name="theme-color" content="#ffffff"&gt;<br>
  </div>
</div>

<hr>

<script>

  var modal = document.getElementById("myModal"); // get modal
  var btn = document.getElementById("myBtn"); // button, opens modal
  var span = document.getElementsByClassName("close")[0]; // <span> element for modal closes
      btn.onclick = function () { modal.style.display = "block";}  // button, open the modal 
      span.onclick = function () {modal.style.display = "none";} // button, close modal <span> (x)
      window.onclick = function (event) { if (event.target == modal) {modal.style.display = "none";}} // outside closing function

</script>