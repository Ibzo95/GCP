# Projet 2 — Dataflow batch processing with Job Builder (SQL Transform)

## 🎯 Objectif
Job Dataflow créé via **Job Builder** (console GCP) en utilisant la transformation **SQL Transform** pour filtrer des employés à haut salaire  dans **BigQuery**.

## 🔢 Transformation SQL utilisée
SELECT *
FROM PCollection
WHERE Salary > 60000;
