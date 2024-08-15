// ini javascript

console.log('linked succes'); 

// function
function formvalidate() {
    let inputWeight = document.getElementById('input-weight').value;
    let inputHeight = document.getElementById('input-height').value;
    console.log(`Isi inputan berat badan: ${inputWeight}`);
    console.log(`Isi inputan tinggi badan: ${inputHeight}`);
   
    if (inputWeight == '' || inputHeight == ''){
        alert('Terdapat Inputan Kosong!');
        return;
    } else{
        // Konversi tinggi badan dari cm ke m
        let heightInMeters = inputHeight / 100;
       
        // Menghitung BMI
        let bmi = inputWeight / Math.pow(heightInMeters, 2);
        console.log(`BMI: ${bmi}`);

        // Menampilkan hasil BMI dengan kategori
        let bmiCategory;
        if (bmi < 18.5) {
            bmiCategory = "Kurus";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            bmiCategory = "Normal";
        } else if (bmi >= 25 && bmi < 29.9) {
            bmiCategory = "Gemuk";
        } else {
            bmiCategory = "Obesitas";
        }

        // Menampilkan hasil BMI dan kategorinya
        let resultText = `BMI Anda adalah ${bmi.toFixed(2)} (${bmiCategory})`;
        document.getElementById('result').innerText = resultText;
    }
    console.log('form submitted');
} 