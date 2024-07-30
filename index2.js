var tab =[1,2,8,10];
 var card;
function insert(  ){
    for (let i = 1; i < tab.length; i++) {
        let j=i-1;
        let card = tab[i];
        while (j >= 0 && tab[j] > card) {
            tab[j + 1] = tab[j];
            j--;
        }
        tab[j + 1] = card;

    }
    return tab 
}
console.log (insert())
