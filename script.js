
    let ism = prompt("Ismingizni kiriting");
    let familiya = prompt("Familiyangizni kiriting");
    let yosh = prompt("Yoshingizni kiriting");
    let tanlov = prompt("Ismingiz katta harf yoki kichikligini tanlang:\n1) Katta\n2) Kichik");

    
    if (tanlov === "1") {
      ism = ism.toUpperCase();
    } else if (tanlov === "2") {
      ism = ism.toLowerCase(); 
    } else {
      alert("notogri tanlov")
    }

    let box = document.getElementById("info");
    box.innerHTML = `
      <p>1. Ism: ${ism}</p>
      <p>2. Familiya: ${familiya}</p>
      <p>3. Yosh: ${yosh}</p>
    `;

    console.log("ismingiz:" , ism, "familiyangiz:", familiya, "yoshingiz", yosh, "ismingiz katta kichikligi:", tanlov)
