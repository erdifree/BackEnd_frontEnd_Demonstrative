N.B per vedere  se funziona in locale consiglio scaricare XAMPP avviare Mysql scaricare MySQL Workbench e creare   il bata base breeds_db

Backend
-impostare spring.jpa.hibernate.ddl-auto= insert  e crea tramite l'entity la tebella.
-impostare spring.jpa.hibernate.ddl-auto=update e spostare data.sql dalla cartella SQLFILE in resources e avviare l'app cosi la tabella viene popolato
- dopo il primo avvio e il popolamento del DB  impostre spring.jpa.hibernate.ddl-auto=none e spostare data.sql nella cartella SQLFILE

Frontend
-button search perfettamente funzionante no casesensitive
-modale per una create sulla navbar
-button delete su ogni card