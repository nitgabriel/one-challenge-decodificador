const codifications = [
    {
        letra: 'a',
        codificacao: 'ai',
    },
    {
        letra: 'e',
        codificacao: 'enter',
    },
    {
        letra: 'i',
        codificacao: 'imes',
    },
    {
        letra: 'o',
        codificacao: 'ober',
    },
    {
        letra: 'u',
        codificacao: 'ufat',
    },

]

const input = document.getElementById('input');
const output = document.getElementById('outputTexto');
const btnCriptografar = document.getElementById('btnCriptografar');
const btnDescriptografar = document.getElementById('btnDescriptografar');
const btnCopiar = document.getElementById('btnCopiar');
const vazio = document.getElementById('empty');

function init() {
    btnCriptografar.addEventListener('click', () => {
        if (input.value !== '') {
            output.innerHTML = criptografar(input.value);
            output.style.display = "block";
            if (output.value != '') {
                vazio.style.display = "none";
                btnCopiar.style.display = "flex";        
            }
        } else {
            vazio.style.display = "block";
            output.style.display = "none";
            btnCopiar.style.display = "none";
        }
    });

    btnDescriptografar.addEventListener('click', () => {
        if (input.value !== '') {
            output.innerHTML = descriptografar(input.value);
            output.style.display = "block";
            if (output.value != '') {
                vazio.style.display = "none";
                btnCopiar.style.display = "block";        
            }
        } else {
            vazio.style.display = "block";
            output.style.display = "none";
            btnCopiar.style.display = "none";
        }
    });

    btnCopiar.addEventListener('click', () => {
        output.select();
        document.execCommand('copy');
    });

}

function criptografar(texto) {
    let textoCriptografado = texto;

    codifications.forEach((codification) => {
        textoCriptografado = textoCriptografado.replace(new RegExp(codification.letra, 'gi'), codification.codificacao);
    });

    return textoCriptografado;
}

function descriptografar(texto) {
    const reverseCodifications = {};
    for (const codification of codifications) {
        reverseCodifications[codification.codificacao] = codification.letra;
    }
  
    const sortedReverseCodificationsKeys = Object.keys(reverseCodifications).sort((a, b) => b.length - a.length);
  
    sortedReverseCodificationsKeys.forEach((codificacao) => {
        texto = texto.split(codificacao).join(reverseCodifications[codificacao]);
    });
  
    return texto;
  }

init();