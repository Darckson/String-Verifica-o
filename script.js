function verificarLetraA(str) {  
    // Converter a string para minúsculas para facilitar a contagem  
    const letraA = str.toLowerCase();  
    
    // Usar o método match para encontrar todas as ocorrências da letra 'a'  
    const ocorrencias = letraA.match(/a/g);  
    
    // Verificar a quantidade de ocorrências  
    const quantidade = ocorrencias ? ocorrencias.length : 0;  
    
    // Verificar a existência da letra 'a'  
    if (quantidade > 0) {  
        console.log(`A letra 'a' existe na string e ocorre ${quantidade} vez(es).`);  
    } else {  
        console.log("A letra 'a' não existe na string.");  
    }  
}    //teste com frase 
    let frase =" Desafio tArget final";
    verificarLetraA(frase);