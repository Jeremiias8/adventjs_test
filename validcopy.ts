
// RETO ADVENTJS - ES UNA COPIA VALIDA (?)

function checkIsValidCopy(original: string, copy: string) {
    
    const simbolos = "#+:. ";
    const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const minusculas = "abcdefghijklmnopqrstuvwxyz";
    const isMayus = (s: string) => mayusculas.includes(s); 
    const isMinus = (s: string) => minusculas.includes(s);

    const passToMinus = (s: string) => {
        return s.toLowerCase();
    }

    // Function no usada
    /* const passToMayus = (s: string) => {
        return s.toUpperCase();
    } */

    const degradeOptions = (s: string) => {
        // Caso 1: Si es mayusculas => mayusculas, minusculas, símbolos
        if (isMayus(s)) {
            return s + passToMinus(s) + simbolos;
        }

        // Caso 2: Si es minusculas => minusculas, símbolos
        if (isMinus(s)) {
            return s + simbolos;
        }

        // Caso 3: Si vengo de varias copias, un carácter especial 
        // se degrada a otro (y ojo en secuencia)
        const isAsymbol = simbolos.includes(s);
        if (isAsymbol) {
            let symbolIndex = simbolos.indexOf(s);
            let symbolsSubList = simbolos.slice(symbolIndex);
            return symbolsSubList;
        }

        console.log(isAsymbol);

        // Caso 4: Si no es una letra => el mismo carácter
        return s;
        /* if (!isMayus && !isMinus) {
            return s;
        } */
    }

    if (original.length !== copy.length) {
        return false;
    }

    for (let i = 0; i < original.length; i++) {
        const originalCharacter = original[i];
        const errorsValidosCombinations = degradeOptions(originalCharacter);
        const actualCopyCharacter = copy[i];

        if (!errorsValidosCombinations(actualCopyCharacter)) {
            return false;
        }

        return true;


    }


}