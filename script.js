const etoiles = 6
for (let i = 0 ; i < etoiles; i++){
    const nbr = i + 1
    let ligne = ""
    for (let j = 0 ; j < nbr; j++){
        ligne = ligne + "*"
    }
    console.log(ligne)
}