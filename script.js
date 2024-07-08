// Conversion 1 mile = 1.60934 Kilometers

function milesToKilometers() {
    let miles = parseFloat(document.getElementById("miles").value);
    let kilometers = miles * 1.60394;

    // Outputting result to user
    document.getElementById("result").innerHTML = 'Distance converted to ' + kilometers + ' kilometers.';
}