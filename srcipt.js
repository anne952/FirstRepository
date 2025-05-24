const touches = [...document.querySelectorAll('.button')];
const listeKeyCode = touches.map(touche => touche.dataset.key);
const ecran = document.querySelector('.ecran');

document.addEventListener('keydown', (e) => 
    {
        const valeur = e.keyCode.toString();
        calculer(valeur);
        
    })

document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur);
})

const calculer = (valeur) =>{
    if(listeKeyCode.includes(valeur)){
       switch (valeur) {
            case '67':
                ecran.textContent = "";
                break;
            case '187':
               const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            case '32':
                ecran.textContent += " ";
                break;
            default:
                const indexKeyCode = listeKeyCode.indexOf(valeur);
                const touche = touches[indexKeyCode];
                ecran.textContent += touche.innerHTML;
        }
      }
}

 window.addEventListener('error', (e) => {
     e.preventDefault();
   
     alert("erreur de syntaxe: " + e.message);
 });