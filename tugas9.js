const biodata = {
    nickName: "Ikhor",
    from: "Blitar",
    age: 23,
    domisili: "Jakarta",
    hobi: "menggambar",
}
// console.log(biodata);

biodata.hobi = "Mendengarkan Musik";
// console.log(biodata);

biodata.bekerja = false;
// console.log(biodata);

for (let i in biodata) {
    console.log(biodata[i]);
}