Dataflow – GCS → BigQuery (Template + UDF)
🎯 Description

Ce projet contient les fichiers utilisés pour créer un job Google Cloud Dataflow via l’interface GCP, en utilisant le template “GCS Text to BigQuery”.
Le pipeline lit des fichiers CSV dans Cloud Storage, applique une UDF JavaScript pour transformer les données, puis charge le résultat dans une table BigQuery selon un schéma défini.

Ce repo documente :

la UDF JavaScript utilisée dans le job

le schéma BigQuery (schema.json)

un exemple de fichier source CSV

les instructions pour reproduire le job Dataflow

🧰 Comment reproduire le job (via Console GCP)

Uploader dans ton bucket GCS :

input/*.csv (tes données source)

schema.json (schéma BigQuery)

udf.js (fonction JavaScript)

un dossier tmp/ pour les fichiers temporaires du job

Créer un job Dataflow

Aller dans Dataflow > Créer un job à partir d’un template

Template : Text File on Cloud Storage to BigQuery

Paramètres à renseigner :

inputFilePattern : gs://<bucket>/input/*.csv

outputTableSpec : <PROJECT_ID>:<DATASET>.<TABLE>

schemaPath : gs://<bucket>/schema.json

javascriptTextTransformGcsPath : gs://<bucket>/udf.js

javascriptTextTransformFunctionName : transform

bigQueryLoadingTemporaryDirectory : gs://<bucket>/temp/

Lancer le job et vérifier dans :

Dataflow → statut du job

BigQuery → que la table contient bien les données