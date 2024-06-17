# Patchnotes
- **V1.0.1**
- Added a score system
- Added the possibility to mention *everyone* by simply add everyone in the config.json

# WakeUp Bot

WakeUp Bot is a highly configurable Discord bot designed to remind users to perform specific actions, such as using the `/bump` command for Disboard. This bot can also be configured to remind users to vote for the server on various platforms like Top-Serveur, thanks to its flexible `config.json` file.

## Features
- **Automated Reminders**: Set up reminders for specific commands.
- **Multilingual Support**: Available in French, Italian, and English.
- **Customizable Configuration**: Adjust settings in the `config.json` file to tailor the bot to your needs.

## Configuration (`config.json`)
```json
{
    "token": "[[Your Bot Token]]",
    "language": "en",
    "channelToCheck": "[[Discord ID of the channel where you want to check the command use]]",
    "botToCheck": "302050872383242240",
    "roleToAlert": "[[Discord ID of the role you want to alert]]",
    "timeBeforeBump": "02:00:00",
    "command": "bump",
    "checkUpdate": "yes"
}
```
- **token**: Your bot's token.
- **language**: Language of the bot (en, fr, it).
- **channelToCheck**: ID of the channel to monitor for the command.
- **botToCheck**: ID of the bot to check (e.g., Disboard).
- **roleToAlert**: ID of the role to alert.
- **timeBeforeBump**: Time interval before reminding to bump (hh:mm:ss).
- **command**: Command to remind (e.g., `/bump`).
- **checkUpdate**: Whether to check for updates.

## How to Install and Use

1. **Clone the Repository**
    ```sh
    git clone https://github.com/yourusername/WakeUp-Bot.git
    cd WakeUp-Bot
    ```

2. **Configure the Bot**
    - Edit the `config.json` file with your specific settings.

3. **Update Language Files if Command Changes**
    - If you change the command, make sure to update the corresponding language file in the `lang` folder to reflect the new command name.

4. **Run the Bot**
    - Run the following command from the root of the directory:
    ```sh
    node index.js
    ```

## Contributing
We welcome contributions from the community. If you have suggestions for improvements, please open an issue or submit a pull request.

## License
This project is licensed under License. See the LICENSE file for more details.

---

# Patchnotes
- **V1.0.1**
- Ajout d'un système de score
- Ajout de la possibilité de mentionner *everyone* en mettant simplement "everyone" dans le config.json

# WakeUp Bot

WakeUp Bot est un bot Discord hautement configurable conçu pour rappeler aux utilisateurs d'effectuer des actions spécifiques, telles que l'utilisation de la commande `/bump` pour Disboard. Grâce à son fichier de configuration flexible `config.json`, ce bot peut également rappeler aux utilisateurs de voter pour le serveur sur diverses plateformes comme Top-Serveur.

## Fonctionnalités
- **Rappels Automatisés** : Configurez des rappels pour des commandes spécifiques.
- **Support Multilingue** : Disponible en français, italien et anglais.
- **Configuration Personnalisable** : Ajustez les paramètres dans le fichier `config.json` pour adapter le bot à vos besoins.

## Configuration (`config.json`)
```json
{
    "token": "[[Votre Token Bot]]",
    "language": "fr",
    "channelToCheck": "[[ID du canal Discord où vous voulez vérifier l'utilisation de la commande]]",
    "botToCheck": "302050872383242240",
    "roleToAlert": "[[ID du rôle Discord que vous souhaitez alerter]]",
    "timeBeforeBump": "02:00:00",
    "command": "bump",
    "checkUpdate": "yes"
}
```
- **token** : Le token de votre bot.
- **language** : Langue du bot (en, fr, it).
- **channelToCheck** : ID du canal à surveiller pour la commande.
- **botToCheck** : ID du bot à surveiller (par exemple, Disboard).
- **roleToAlert** : ID du rôle à alerter.
- **timeBeforeBump** : Intervalle de temps avant de rappeler de bump (hh:mm:ss).
- **command** : Commande à rappeler (par exemple, `/bump`).
- **checkUpdate** : Vérifier les mises à jour.

## Comment Installer et Utiliser

1. **Cloner le Répertoire**
    ```sh
    git clone https://github.com/yourusername/WakeUp-Bot.git
    cd WakeUp-Bot
    ```

2. **Configurer le Bot**
    - Éditez le fichier `config.json` avec vos paramètres spécifiques.

3. **Mettre à jour les fichiers de langue si la commande change**
    - Si vous changez la commande, assurez-vous de mettre à jour le fichier de langue correspondant dans le dossier `lang` pour refléter le nouveau nom de la commande.

4. **Lancer le Bot**
    - Exécutez la commande suivante depuis la racine du répertoire :
    ```sh
    node index.js
    ```

## Contribution
Nous accueillons les contributions de la communauté. Si vous avez des suggestions d'améliorations, veuillez ouvrir une issue ou soumettre une pull request.

## Licence
Ce projet est sous licence. Voir le fichier LICENSE pour plus de détails.

---
# Patchnotes
- **V1.0.1**
- Aggiunto un sistema di score
- Aggiunta la possibilità di ping *everyone* semplicement mettendo "everyone" nel file config.json

# WakeUp Bot

WakeUp Bot è un bot Discord altamente configurabile progettato per ricordare agli utenti di eseguire azioni specifiche, come usare il comando `/bump` per Disboard. Grazie al suo file di configurazione flessibile `config.json`, questo bot può anche ricordare agli utenti di votare per il server su varie piattaforme come Top-Serveur.

## Caratteristiche
- **Promemoria Automatici**: Configura promemoria per comandi specifici.
- **Supporto Multilingue**: Disponibile in francese, italiano e inglese.
- **Configurazione Personalizzabile**: Regola le impostazioni nel file `config.json` per adattare il bot alle tue esigenze.

## Configurazione (`config.json`)
```json
{
    "token": "[[Il Tuo Token Bot]]",
    "language": "it",
    "channelToCheck": "[[ID del canale Discord dove vuoi controllare l'uso del comando]]",
    "botToCheck": "302050872383242240",
    "roleToAlert": "[[ID del ruolo Discord che vuoi avvisare]]",
    "timeBeforeBump": "02:00:00",
    "command": "bump",
    "checkUpdate": "yes"
}
```
- **token** : Il token del tuo bot.
- **language** : Lingua del bot (en, fr, it).
- **channelToCheck** : ID del canale da monitorare per il comando.
- **botToCheck** : ID del bot da monitorare (ad esempio, Disboard).
- **roleToAlert** : ID del ruolo da avvisare.
- **timeBeforeBump** : Intervallo di tempo prima di ricordare di bump (hh:mm:ss).
- **command** : Comando da ricordare (ad esempio, `/bump`).
- **checkUpdate** : Verificare gli aggiornamenti.

## Come Installare e Usare

1. **Clona il Repository**
    ```sh
    git clone https://github.com/yourusername/WakeUp-Bot.git
    cd WakeUp-Bot
    ```

2. **Configura il Bot**
    - Modifica il file `config.json` con le tue impostazioni specifiche.

3. **Aggiornare i file di lingua se il comando cambia**
    - Se cambi il comando, assicurati di aggiornare il file di lingua corrispondente nella cartella `lang` per riflettere il nuovo nome del comando.

4. **Avvia il Bot**
    - Esegui il seguente comando dalla radice della directory:
    ```sh
    node index.js
    ```

## Contribuire
Accogliamo con piacere i contributi della comunità. Se hai suggerimenti per miglioramenti, apri un issue o invia una pull request.

## Licenza
Questo progetto è concesso in licenza. Vedi il file LICENSE per ulteriori dettagli.
