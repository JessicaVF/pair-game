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