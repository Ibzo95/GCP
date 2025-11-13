function transform(line) {
  var values = line.split(","); // Split the input line by commas (CSV format)

  // Check if it's the header row (first line) and skip it
  if (values[0] === "id") {
    return null; // Skip processing the header row
  }

  // Create an object mapping the values to the BigQuery schema
  var obj = new Object();
  obj.id = parseInt(values[0]);                  // int
  obj.date = values[1];                // Date (format yyyy-MM-dd)
  obj.produit = values[2];                       // string
  obj.quantite = parseInt(values[3]);            // int
  obj.prix_unitaire = parseFloat(values[4]);     // float
  obj.montant_total = parseFloat(values[5]);     // float
  // Convert the object to a JSON string
  var jsonString = JSON.stringify(obj);
  return jsonString;
}
