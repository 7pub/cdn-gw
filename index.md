
<!DOCTYPE html>
<!--[if lte IE 6]><html class="preIE7 preIE8 preIE9"><![endif]-->
<!--[if IE 7]><html class="preIE8 preIE9"><![endif]-->
<!--[if IE 8]><html class="preIE9"><![endif]-->
<!--[if gte IE 9]><!-->
<html>
<!--<![endif]-->
<head>
  <title>cdn-gw</title>
  <!--base href="/cdn-gw/"-->
  <meta charset="UTF-8">
  <meta name="author" content="cali">
  <meta name="keywords" content="keywords,here">
  <meta name="description" content="description here">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <link rel="shortcut icon" href="favicon/x-image.ico" type="image/vnd.microsoft.icon">
  <script>
      function loadStyle(directory, files) {
          var head = document.getElementsByTagName("head")[0]
          var extension = '.css'
          for (var file of files) {
              var path = directory + file + extension
              var link = document.createElement("link")
              link.href = path
              link.type = "text/css"
              link.rel = "stylesheet"
              head.appendChild(link)
          }
      }
      (() => loadStyle('css/', ['index']))();
      (() => loadStyle('vendor/nativedroid2/css/', ['material']))();
    //(() => loadStyle('/path/to/files/', ['filename']))();
  </script>   
  <style type="text/css">
    body {
      background-color: rgb(51, 153, 204) !important;
      /*background-color: rgb(229, 232, 237);*/
      font-size: 0.8em;
    }
  </style>
  <script type="text/javascript">
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-143517290-1']);
    _gaq.push(['_trackPageview']);
    (function () {
      var ga = document.createElement('script');
      ga.type = 'text/javascript';
      ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') +
        '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(ga, s);
    })();
  </script>
</head>
<body>
  <section id="404">
    <div>
      <img align="left" style="width: 6rem;" class="image-png-chrome-192x192-base64" />
      <br>
      <span class="size-14-span">
        <p align="center" class="size-14">
          You may now close this tab and return to the application
        </p>
      </span>
      <hr>
      <br>
      <img align="right" style="width: 9rem;" class="octicons-bug-checker-base64" />
      <br>
      |<p class="Calitube" id="font">
       <pre>
        <code>
              const string = tree('path/to/dir', {
              allFiles: true,
              exclude: [/node_modules/, /lcov/],
              maxDepth: 4,
              });
              console.log(string);
        </code>
      <a href="/download/">Open Download Site</a> |</p>
      <br>
      <p class="uri" align="right"><a href="//www.cali.run">www.cali.run</a></p>
      <br>
      </pre>
    </div>
    <script type="text/javascript">
      function autorun() {}
      if (document.addEventListener) document.addEventListener("DOMContentLoaded", autorun, false);
      else if (document.attachEvent) document.attachEvent("onreadystatechange", autorun);
      else window.onload = autorun;
    </script>
  </section>
</body>
</html>
