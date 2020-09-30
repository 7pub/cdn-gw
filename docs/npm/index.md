#
## npm list -g --depth 0

<p>Dadurch wird der Speicherort und eine Liste der installierten Module ausgegeben.</p>

> *Beispielausgabe:* 

    $ npm list -g --depth 0
	\.\\path\to\the\location\
    +-- client@0.1.0 -> \.\\path\to\the\location\
    +-- electron@10.1.2
    +-- typescript@4.0.3
    `-- windows-build-tools@5.2.2
    
    npm ERR! peer dep missing: jquery@1.9.1 - 3, required by bootstrap@4.5.2

#
## npm get prefix

> *Beispielausgabe:*
	$npm get prefix
	\.\\path\to\the\location\npm

#
## npm config get cache

> *Beispielausgabe:*
	
	$ npm config get cache
	\.\\path\to\the\location\

#