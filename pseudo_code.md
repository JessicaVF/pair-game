## For two human players:

> p1 =[];<br>
> p2 = [];<br>
> cards = [1, 1, 2, 2, 3, 3];<br>
> p1turn =true;<br>
> p2turn=false;<br>

### we need to link the TDs from a html table to a index in the array cards.

### the array items should get shuffle in each new game

    changeturn () ->> we copy the system from tic tac toe. Later, we can add that if the "player" got a pair he got a extra turn

    play()
    event.listener -> on click:
    inner.html = cardx
    selection1 = card selected

    event.listener -> on click:
    inner.html =  cardx
    selection 2 = card selected

    if selection1 == selection2:
        p1 push in selection 1
        cards pop selection 1
    else:
        innerhtml = "empty"

#Français:

## Pour deux joueurs humains :

> p1 =[];<br>
> p2 = [];<br>
> cartes = [1, 1, 2, 2, 3, 3];<br>
> p1turn =true;<br>
> p2turn=false;<br>

### nous devons relier les DT d'un tableau html à un index dans les cartes de tableau.

### les éléments du tableau doivent être mélangés à chaque nouveau jeu

    changeturn () ->> on copie le système du tic tac toe. Plus tard, nous pouvons ajouter que si le "joueur" a obtenu une paire, il a un tour supplémentaire

    jouer()
    event.listener -> on click :
    inner.html = cardx
    sélection1 = carte sélectionnée

    event.listener -> on click :
    inner.html = cardx
    sélection 2 = carte sélectionnée

    si sélection1 == sélection2 :
        p1 pousser la sélection 1
        cartes pop sélection 1
    d'autre part :
        innerhtml = "empty" (vide)



