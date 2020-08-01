sharedrop
ShareDrop
ShareDrop ist ein HTML5-Klon des Apple AirDrop- Dienstes. Sie können Dateien direkt zwischen Geräten übertragen, ohne sie zuerst auf einen Server hochladen zu müssen. Es verwendet WebRTC für die sichere Übertragung von Peer-to-Peer-Dateien und Firebase für die Anwesenheitsverwaltung und die WebRTC-Signalisierung.

Mit ShareDrop können Sie Dateien ohne Konfiguration an andere Geräte im selben lokalen Netzwerk (dh Geräte mit derselben öffentlichen IP-Adresse) senden. Öffnen Sie einfach https://www.sharedrop.io auf allen Geräten, und sie sehen sich gegenseitig. Sie können auch Dateien zwischen Netzwerken senden. Klicken Sie einfach auf die Schaltfläche + in der oberen rechten Ecke der Seite, um einen Raum mit einer eindeutigen URL zu erstellen und diese URL für andere Personen freizugeben, an die Sie eine Datei senden möchten. Sobald sie diese Seite in einem Browser auf ihren Geräten öffnen, sehen Sie die Avatare des anderen.

Der Hauptunterschied zwischen ShareDrop und AirDrop besteht darin, dass ShareDrop eine Internetverbindung benötigt, um andere Geräte zu erkennen, während AirDrop keine benötigt - es wird ein drahtloses Ad-hoc-Netzwerk zwischen ihnen erstellt. Auf der anderen Seite können Sie mit ShareDrop Dateien zwischen mobilen (Android) und Desktop-Geräten sowie zwischen Netzwerken austauschen.

Unterstützte Browser
Chrome (Desktop und Android) 33+
Opera (Desktop und Android) 20+
Firefox (Desktop und Android) 28+
Safari (Desktop) 12+
Wie man es für die lokale Entwicklung einrichtet
Firebase einrichten:
Melden Sie sich für ein Firebase-Konto an und erstellen Sie eine Datenbank.
Gehen Sie zur Registerkarte "Sicherheitsregeln", klicken Sie auf die Schaltfläche "Regeln laden" und wählen Sie die firebase_rules.jsonDatei aus.
Notieren Sie sich Ihre Datenbank-URL und ihr Geheimnis, die Sie auf der Registerkarte "Geheimnisse" finden.
Führen Sie npm install -g ember-clidiese Option aus, um Ember CLI zu installieren.
Ausführen ember install, um App-Abhängigkeiten zu installieren.
Ausführen cp .env{.sample,}, um eine .envDatei zu erstellen . Diese Datei wird von Foreman verwendet, um Umgebungsvariablen festzulegen, wenn die App lokal ausgeführt wird.
SECRETDer Schlüssel wird verwendet, um Cookies zu verschlüsseln und einen Raumnamen basierend auf der öffentlichen IP-Adresse für die /Route zu generieren . Es kann eine beliebige zufällige Zeichenfolge sein - Sie können eine mit zdate | md5sum
NEW_RELIC_* Schlüssel sind nur in der Produktion erforderlich
Führen Sie aus npm run dev, um die App zu starten.
Einsatz
Heroku
Verwenden Sie bei der Bereitstellung auf Heroku ein Multi-Buildpack .

Für neue Apps:

heroku create myapp --buildpack https://github.com/heroku/heroku-buildpack-multi.git
Für vorhandene Apps:

heroku config:set BUILDPACK_URL=https://github.com/heroku/heroku-buildpack-multi.git
Dann renne

heroku config:set NPM_CONFIG_PRODUCTION=false
Damit Node.js Buildpack Entwicklungsabhängigkeiten installiert, die zum Erstellen der Ember CLI-App sowie der Produktions-App erforderlich sind.

Es verwendet das Standard- Buildpack Heroku Node.js , um die Pakete Node.js, npm und Node.js zu installieren, und verwendet dann das Ember CLI-Buildpack , um Bower-Pakete zu installieren und die Ember CLI-App zu erstellen.

Diese Seite ist Open Source. Verbessere diese Seite .