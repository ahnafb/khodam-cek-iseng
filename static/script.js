$(document).ready(function () {
    const animals = ["Owa Owa","Kukang Jawa","Anoa","Kucing", "Tikus", "Kadal", "Anomali", "Kuda Nil", "Bunglon", "Siput", "Koala", "Kodok", "Monyet", "Anjing", "Arwah", "Harimau", "Kambing", "Berang-berang", "Kuda", "Komodo", "Gajah", "Cicak", "Ular", "Anomali", "Kura-kura", "Lele", "Laba-laba", "Singa", "Zebra", "Bebek", "Ayam", "Buaya", "Gorila", "Semut", "Rubah", "Naga", "Naga", "Ikan", "Ubu-ubur", "Cacing", "Semut", "Udang", "Musang", "Monyet", "Kecoak", "Ulat Bulu", "Rubah", "Kupu-kupu", "Laba-laba", "Biawak", "Kurama", "Anomali", "Tikus", "Raja", "Raja", "Lipan", "Jangkrik", "Lipan", "Ulat Bulu", "Kucing", "Panda", "Anomali", "Sepuh"];
    const behaviours = ["Jawa", "Depresi", "Mekanik", "Insom", "Skizo", "Klepto", "Bunting", "Sigma", "Cupu", "Raksasa", "Stress", "Berkaki Seribu", "Skizo", "Sad boy", "Kayang", "Metal", "Mewing", "Gyatt", "Idol", "Yapper", "Skizo", "Second Choice :)", "Ambis", "Sigma", "Dribble", "Jawa", "Kayang", "Ngesot", "Sunda", "Panuan", "Kalimantan", "Kutub", "Sumatera", "Idol", "Sunda", "Sumatera", "Yapper", "Ngesot", "Ambis", "Kayang", "Pemarah", "Kocak", "Second Choice :)", "Push Up", "Gila", "Cupu", "Silver", "Emas", "Perak", "Cilacap", "Kocak", "Stress"];
    const things = ["Speaker JBL", "Toa Masjid", "Lemari 2 Pintu", "Kulkas", "Ice Cream", "Taplak Meja", "Pecel Lele", "Charger Iphone", "Airpods", "Kalkulator", "Sendal Jepit", "Undur-undur Maju", "Bagas Dribble", "Remote AC", "Sendal Jepit", "Sapu Lidi", "Gagang Pintu", "Tutup Toples", "Rice Cooker", "Gerobak Ketoprak", "Ban Motor", "Bakwan Jagung", "Rice Cooker", "Nugget Rebus", "Asep Kulkas", "Bintang Skibidi", "Helikopter", "Laba-laba Sunda", "Raja Beruang", "Nastar", "Ice Cream", "Seblak Ceker", "Macan Cisewu", "Zaki Indomie", "Singkong Rebus", "Farhan Kebab", "Rizal Perkedel", "Joko Kopling", "Botol Yakult", "Reza Wangsaf", "Sigit Rendang", "Biawak Alaska", "Budi Martabak", "Nurdin Basket", "Edgar Burger", "Aspal Tol Cipularang", "Tuyul Mohawk", "Aldi Taher", "Cocomelon", "Maaf yang ini khodamnya kabur", "Orang Normal 😀", "Kereta Thomas", "Botol Yakult", "Ice Cream", "Raja Khodam 👑", "Kura-kura Ninja", "Batagor"]

    function getRandomElement(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }

    $("#check-khodam-form").submit(function (e) {
        e.preventDefault();
        const name = $("#inputnama").val();
        $("#name-result").text(name);
        $("#check-khodam-form").hide();
        $("#loading").show();

        setTimeout(() => {
            let randomKhodam = "";
            const randomTest = Math.round(Math.random());

            if (randomTest === 0) {
                randomKhodam = `${getRandomElement(animals)} ${getRandomElement(behaviours)}`;
            } else {
                randomKhodam = getRandomElement(things);
            }

            $("#khodam-result").text(randomKhodam);
            $("#loading").hide();
            $("#result").show();
        }, 5000);
    });

    $("#reset-btn").click(function () {
        $("#inputnama").val("");
        $("#result").hide();
        $("#check-khodam-form").show();
    });
});
