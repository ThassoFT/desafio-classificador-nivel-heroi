//criar uma variavel pra quantidade de xp
let nome_heroi = "Carlos";
let xp_heroi = 6250;
let tipo_nivel = "";

if (xp_heroi > 1000 && xp_heroi <= 2000) {
    tipo_nivel = "Bronze"
}
else if (xp_heroi > 2000 && xp_heroi <= 6000) { tipo_nivel = "Prata" }
else if (xp_heroi > 6000 && xp_heroi <= 7000) { tipo_nivel = "Ouro" }
else if (xp_heroi > 7000 && xp_heroi <= 8000) { tipo_nivel = "Platina" }
else if (xp_heroi > 8000 && xp_heroi <= 9000) { tipo_nivel = "Ascendente" }
else if (xp_heroi > 9000 && xp_heroi <= 10000) { tipo_nivel = "Imortal" }
else if (xp_heroi > 10000) { tipo_nivel = "Radiante" }
else { tipo_nivel = "Radiante" }

console.log("O Herói de nome " + nome_heroi + " esta no nivel de " + tipo_nivel);