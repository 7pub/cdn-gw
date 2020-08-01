## Warum Favicons im Web geliebt werden

<dl>
    <dt>Für alle, die sich jetzt fragen, was ein Favicon ist:<br/>
    Es ist eine kleine Grafik, die im Kopfbereich des Browsers neben der URL oder in einem geöffneten Tab einer Website angezeigt wird
    Favicons werden ebenfalls beim Abspeichern einer Seite als Lesezeichen mit abgespeichert und angezeigt.
    </dt>
    <dt>Es ist eine Alternative zum Setzen eines Cookies</dt>
    <dd>Es ist nicht zu 100% garantiert, aber es ergibt eine Möglichkeit, Benutzer zu ermitteln die schon zuvor die WebApp oder Webseite benutzt oder besucht haben. Viele deaktivieren Cookies um genau dies zu unterbinden. Die nach dem Schließen des Browsers noch ein Cookie als "Ich war schon einmal hier" auf unseren Computer hinterlassen.
    </dd>
    <dt>Ich bin verwirrt</dt>
    <dd>Ist es am Ende möglich, das Favicon zu verwenden, um den ersten Besucher von den wiederkehrenden Besuchern zu trennen?.
    </dd>
</dl>

### Was muss ich tun?

Sie müssen zwei Dinge tun. Zuerst müssen Sie die Favicon-Anfrage an ein Skript umleiten. Sie können dies auf zwei Arten tun. Das erste wäre, Ihrer .htaccessDatei etwas wie das Folgende hinzuzufügen

```RewriteEngine on
RewriteRule ^/favicon.ico   /favicon.php  [L]
```

oder Sie könnten einen anderen Favicon-Speicherort im HTML-Code senden. Ich würde dies jedoch nicht verwenden, um direkt zum PHP-Skript umzuleiten, da einige Browser Probleme haben, das Favicon korrekt zu verwenden, wenn es nicht wirklich ein .icooder eine .pngDatei ist. Vielleicht können Sie es verwenden, um zu einem alternativen favicon.icoSpeicherort umzuleiten und es in Kombination mit dem zu verwenden .htaccess. Ich habe für alle Einstellungen einen Symbolspeicherort verwendet, der nicht unbedingt benötigt wird. Aber auf diese Weise wissen Sie, wie Sie es ändern können.

```<link rel="icon" href="/favicon.ico" type="image/x-icon">
<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
<link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="32x32">
<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" sizes="32x32">
```

Da Sie zu einem PHP-Skript umleiten, können Sie den folgenden Code verwenden, um die tatsächliche Anforderung zu verarbeiten.

```<?php
//the location of the actual favicon
$favicon = '/favicon.ico';
$protocol = (isset($_SERVER['SERVER_PROTOCOL'])) ? $_SERVER['SERVER_PROTOCOL'] : 'HTTP/1.0';

//try to get the file info, to be able to get the correct content type
//if it doesnt work, return 404 error
$size = @getimagesize($favicon);
if (!$size) {
  header($protocol . ' 404 Not Found');
  exit();
}

// Content type
header('Content-type: ' . $size[2]);

//when is the icon last modified
//Keep in mind that if you modify the icon, all returning visitors will be handled as new visitors
$last_modified_time = @filemtime($favicon);

header("Accept-Ranges:  bytes");
//set a long max-age with a recheck marker, so people check if the icon is still the same and thus access this script.
header("Cache-Control: max-age=15724800, public, must-revalidate");
header("Vary: Accept-Encoding");
//some say the Etag is bad, some say it isnt. You can remove this part if you dont want to use it.
header("Etag: " . md5($favicon . $last_modified_time));


// exit if not modified
if (array_key_exists('HTTP_IF_MODIFIED_SINCE', $_SERVER)) {
  if (@strtotime($_SERVER['HTTP_IF_MODIFIED_SINCE']) == $last_modified_time) {
      header($protocol .' 304 Not Modified');
      /*At this point you have a returning visitor.*/
      DoSomethingWithReturningVisitor();

      exit();
  }
}

// exit if not modified using Etag, remove it if you dont want to use it.
if (array_key_exists('HTTP_IF_NONE_MATCH', $_SERVER)) {
  if ($_SERVER['HTTP_IF_NONE_MATCH'] == md5($favicon . $last_modified_time)) {
      header($protocol.' 304 Not Modified');
      /*At this point you have a returning visitor.*/
      DoSomethingWithReturningVisitor();


      exit();
  }
}

//you are sending a new image to the user. Add the last modified time.
header("Last-Modified: ".gmdate("D, d M Y H:i:s", $last_modified_time)." GMT");


//log that he is a new visitor
//If you dont to this, the user will be marked as returning visitor when he visits the 2nd page of your website
$_SESSION['newVisitor'] = true;

//return the content of the actual image
echo file_get_contents($favicon);


//A single point to handle returning visitors
//make sure you dont have any output in this function, because you are still returning a valid favicon. If you have any output the returned icon will be corrupted.

function DoSomethingWithReturningVisitor() {
  if (!empty($_SESSION['newVisitor']) && $_SESSION['newVisitor'] === true) {
    //already marked as new visitor, so skip for this session
    return;
  }

  //do something to give this user special treatment
  $_SESSION['returningVisitor'] = true;
}
?>
```

Bei der ersten Anfrage auf Ihrer Webseite ist dies schwer nachzuvollziehen. Da die Anforderung an Ihre Homepage zuerst erfolgt und anschließend versucht wird, die zu laden favicon.ico. Daher sind die Informationen für neue / wiederkehrende Besucher nicht direkt in PHP verfügbar. Der beste Weg, um zu überprüfen, ob es sich um einen wiederkehrenden Besucher oben auf der Homepage handelt, ist etwa

```<?php
if (empty($_SESSION['returningVisitor']) && empty($_SESSION['newVisitor'])) {
   //unknown if user is new or not
} else if (!empty($_SESSION['returningVisitor']) && $_SESSION['returningVisitor']===true) {
   //returning visitor
} else {
   //new visitor
}
?>
```

Wenn Sie es wirklich auf der Homepage wissen müssen (oder eine andere Seite, die der Benutzer als erste Seite für diese Sitzung anfordert), ist es am besten, einen Ajax-Anruf zu tätigen, wenn das Dokument geladen wird, möglicherweise sogar mit einer kurzen Zeitüberschreitung, weil Die Anfrage favicon.ico ist nicht immer Teil des Körpers.
