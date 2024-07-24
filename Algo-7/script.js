function saitSesleriCixar(soz) {
    const saitler = ['a', 'ə' , 'e', 'i', 'ı', 'o', 'ö', 'u', 'ü'];
    let saitSesler = '';
    
    for (let i = 0; i < soz.length; i++) {
      if (saitler.includes(soz[i].toLowerCase())) {
        saitSesler += soz[i];
      }
    }
    
    return saitSesler;
  }
  
  // Misal üçün istifadə:
  let soz = "Azərbaycan";
  let netice = saitSesleriCixar(soz);
  console.log(netice); // "Aəa"
  