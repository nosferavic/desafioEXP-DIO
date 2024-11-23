function nivel(nomeHeroi, expAdquirida) {
  let nivelHeroi = "";

  if (expAdquirida <= 1000) {
    nivelHeroi = "Ferro";
  } else if (expAdquirida > 1000 && expAdquirida <= 2000) {
    nivelHeroi = "Bronze";
  } else if (expAdquirida > 2000 && expAdquirida <= 5000) {
    nivelHeroi = "Prata";
  } else if (expAdquirida > 5000 && expAdquirida <= 7000) {
    nivelHeroi = "Ouro";
  } else if (expAdquirida > 7000 && expAdquirida <= 8000) {
    nivelHeroi = "Platina";
  } else if (expAdquirida > 8000 && expAdquirida <= 9000) {
    nivelHeroi = "Ascendente";
  } else if (expAdquirida > 9000 && expAdquirida <= 10000) {
    nivelHeroi = "Imortal";
  } else if (expAdquirida >= 10001) {
    nivelHeroi = "Radiante";
  }

  console.log(`O herói de nome ${nomeHeroi} está no nivel ${nivelHeroi}`);
}


nivel('Dovahkiin', 10001)