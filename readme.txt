FreeBox

Diese Anwendung zeigt dir Orte an, an denen FreeBoxen stehen. Free Boxen, sind Boxen, deren Inhalt kostenfrei zum mitnehmen ist. 
Diese Boxen werden von Personen oder Läden auf die Straße gestellt und in unserer App hochgeladen.

Falls das Projekt neu geclont wird muss anfänglich folgender Befehl ausgeführt werden:

npm -install

Beim weiteren bearbeiten des Projektes ist zuerst immer folgender Befehlt im Terminal auszuführen:

npm start

Danach werden alle Änderungen in der ./sass/styles.scss erfasst und kompiliert und in der ./css/styles.css gespeichert.

installieren für um pushnotification zu nutzen:
npm install push.js

Mergen bei gleichzeitiger Bearbeitung einer Datei:
1. Main Branch pullen - git checkout main && git pull
2. Main Branch in Antonia Branch mergen - git checkout antonia && git merge main 
3. Merge Antonia Branch in Main Branch - git checkout main && git merge antonia