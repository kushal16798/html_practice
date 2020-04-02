counter = 0;
rowCounter = 0;
colCounter = 0;
puchase=0
var cart = [];

var book = [];

function cartCounter() {

    
    if (document.getElementById("total").innerText == 0) {
        document.getElementById("count").style.display = "none";
    }
    else {
        document.getElementById("count").style.display = "";
        document.getElementById("count").innerHTML = counter;
    }
}

window.onload = function () {
    init();
    cartCounter();
    book.forEach((book) => {
        setUpCard(book)
    })
}

function setUpCard(book) {
    if (colCounter == 0) {
        rowCounter++;
        let rowx = document.createElement('div');
        let rowid = "row" + rowCounter
        rowx.setAttribute('id', rowid) //row id
        rowx.classList.add('card-deck') //row class
        rowx.classList.add('p-3') //row class padding
        rowx.classList.add('pb-1') //row class padding

        document.getElementById('bookdynamic').appendChild(rowx)

        console.log("col cntr"+colCounter);
        
    }

    let card = document.createElement('div')
    card.classList.add('card')
    card.classList.add('zoom')

    //card image
    let cardImageTop = document.createElement('img')
    cardImageTop.src = './images/' + book.image
    cardImageTop.classList.add('card-img-top')
    cardImageTop.classList.add('img-fit')
    let KM = "knowMore("+book.id+")";
    cardImageTop.setAttribute('onclick',KM)
    card.appendChild(cardImageTop)

    //card body
    let cardBody = document.createElement('div')
    cardBody.classList.add('card-body')

    //<h5 class="card-title">The Great Gatsby</h5>
    let h5 = document.createElement('h5')
    h5.classList.add('card-title')
    h5.appendChild(document.createTextNode(book.name))
    cardBody.appendChild(h5);

    //<p class="card-text">F.Scott Fitzgerald</p>
    let p = document.createElement('p')
    p.classList.add('card-text')
    p.appendChild(document.createTextNode(book.author))
    cardBody.appendChild(p);

    //<p class="card-text text-success font-weight-bold">
    p = document.createElement('p')
    p.classList.add('card-text')
    p.classList.add('text-success')
    p.classList.add('font-weight-bold')
    p.appendChild(document.createTextNode("₹ "))
    p.appendChild(document.createTextNode(book.price))

    //<button type="button" class="btn btn-info btn-sm float-right" id="a2c3" onclick="add2cart(3)">Add to Cart</button>
    let button = document.createElement('button')
    button.classList.add('btn')
    button.classList.add('btn-secondary')
    button.classList.add('btn-sm')
    button.classList.add('float-right')
    let add2cart = "add2cart("+book.id+")"
    button.setAttribute('onclick',add2cart)
    let a2c = "a2c"+book.id
    button.setAttribute('id',a2c)
    button.appendChild(document.createTextNode("Add to Cart"))
    p.appendChild(button);


    cardBody.appendChild(p);
    


    card.appendChild(cardBody)

    //appending card to row
    let rowid = "row" + rowCounter
    document.getElementById(rowid).appendChild(card)

    colCounter = Number(colCounter) + 1;
    //reset on 4
    if (colCounter == 4)
        colCounter = 0;
}

function init() {
    let booksJsonStr = window.sessionStorage.getItem('book')
    if (booksJsonStr != null) {
        book = JSON.parse(booksJsonStr)
    } else {
        book.push(
            {
                id: 1,
                name: "The Alchemist",
                author: "Paulo Coelho",
                price: 150,
                image: 'alchemist.jpg',
                description: "Paulo Coelho's enchanting novel has inspired a devoted following around the world. This story, dazzling in its powerful simplicity and soul-stirring wisdom, is about an Andalusian shepherd boy named Santiago who travels from his homeland in Spain to the Egyptian desert in search of a treasure buried near the Pyramids. Along the way he meets a Gypsy woman, a man who calls himself king, and an alchemist, all of whom point Santiago in the direction of his quest. No one knows what the treasure is, or if Santiago will be able to surmount the obstacles in his path. But what starts out as a journey to find worldly goods turns into a discovery of the treasure found within. Lush, evocative, and deeply humane, the story of Santiago is an eternal testament to the transforming power of our dreams and the importance of listening to our hearts."
            },
            {
                id: 2, name: "1984",
                author: "George Orwell",
                price: 180,
                image: '1984.jpg',
                description: "Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its futuristic purgatory becomes more real. Published in 1949, the book offers political satirist George Orwell's nightmarish vision of a totalitarian, bureaucratic world and one poor stiff's attempt to find individuality. The brilliance of the novel is Orwell's prescience of modern life—the ubiquity of television, the distortion of the language—and his ability to construct such a thorough version of hell. Required reading for students since it was published, it ranks among the most terrifying novels ever written."
            },
            {
                id: 3,
                name: "The Great Gatsby",
                author: "F.Scott Fitzgerald",
                price: 200,
                image: 'gatsby.jpg',
                description: "The Great Gatsby, F. Scott Fitzgerald's third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story is of the fabulously wealthy Jay Gatsby and his new love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted. \"gin was the national drink and sex the national obsession,\" it is an exquisitely crafted tale of America in the 1920s.The Great Gatsby is one of the great classics of twentieth-century literature."
            },
            {
                id: 4,
                name: "The Old Man and the Sea",
                author: "Ernest Hemingway",
                price: 200,
                image: 'oldman.jpg',
                description: "The last novel Ernest Hemingway saw published, The Old Man and the Sea has proved itself to be one of the enduring works of American fiction. It is the story of an old Cuban fisherman and his supreme ordeal: a relentless, agonizing battle with a giant marlin far out in the Gulf Stream. Using the simple, powerful language of a fable, Hemingway takes the timeless themes of courage in the face of defeat and personal triumph won from loss and transforms them into a magnificent twentieth-century classic."
            },
            {
                id: 5,
                name: "The Hobbit There and Back Again",
                author: "J.R.R. Tolkien",
                price: 300,
                image: 'hobbit.jpg',
                description: "On a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort.Written for J.R.R. Tolkien’s own children, The Hobbit met with instant critical acclaim when it was first published in 1937. Now recognized as a timeless classic, this introduction to the hobbit Bilbo Baggins, the wizard Gandalf, Gollum, and the spectacular world of Middle-earth recounts of the adventures of a reluctant hero, a powerful and dangerous ring, and the cruel dragon Smaug the Magnificent. The text in this 372-page paperback edition is based on that first published in Great Britain by Collins Modern Classics (1998), and includes a note on the text by Douglas A. Anderson (2001). Unforgettable!"
            },
            {
                id: 6,
                name: "Murder on the Orient Express",
                author: "Agatha Christie",
                price: 250,
                image: 'orient.jpg',
                description: "Le train estaussidangereux que le paquebot » affirme Hercule Poirot…Le lendemain, dans unevoiture de l’Orient-Express bloqué par les neigesyougoslaves, on découvre le cadavre d’un américainlardé de douze coups de couteau. L’assassinn’apuvenir de l’extérieur : voicidonc un huis clos, le plus fameux, peut-être, de toute la littératurepolicière. Pour mener son enquête, le petit détectivebelge a le choix entre uneprincesserusse, uneAméricaine fantasque, le secrétaire de la victime, un couple de Hongroisdistingués, l’inévitable colonel de retour des Indes, les domestiques de tout ce beau monde et le contrôleur du train."
            },
            {
                id: 7,
                name: "The Little Prince",
                author: "Antoine de Saint-Exupery",
                price: 220,
                image: 'price.jpg',
                description: "Moral allegory and spiritual autobiography, The Little Prince is the most translated book in the French language. With a timeless charm it tells the story of a little boy who leaves the safety of his own tiny planet to travel the universe, learning the vagaries of adult behaviour through a series of extraordinary encounters. His personal odyssey culminates in a voyage to Earth and further adventures."
            },
            {
                id: 8, name: "The Metamorphosis",
                author: "Franz Kafka",
                price: 350,
                image: 'meta.jpg',
                description: "\"As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect. He was laying on his hard, as it were armor-plated, back and when he lifted his head a little he could see his domelike brown belly divided into stiff arched segments on top of which the bed quilt could hardly keep in position and was about to slide off completely. His numerous legs, which were pitifully thin compared to the rest of his bulk, waved helplessly before his eyes.\" With it's startling, bizarre, yet surprisingly funny first opening, Kafka begins his masterpiece, The Metamorphosis. It is the story of a young man who, transformed overnight into a giant beetle-like insect, becomes an object of disgrace to his family, an outsider in his own home, a quintessentially alienated man. A harrowing—though absurdly comic—meditation on human feelings of inadequacy, guilt, and isolation, The Metamorphosishas taken its place as one of the most widely read and influential works of twentieth-century fiction. As W.H. Auden wrote, \"Kafka is important to us because his predicament is the predicament of modern man.\""
            },
            {
                id: 9,
                name: "A Study in Scarlet",
                author: "Arthur Conan Doyle",
                price: 350,
                image: 'sherlock.jpg',
                description: "\'There\'s a scarlet thread of murder running through the colourless skein of life, and our duty is to unravel it, and isolate it, and expose every inch of it.\'From the moment Dr John Watson takes lodgings in Baker Street with the consulting detective Sherlock Holmes, he becomes intimately acquainted with the bloody violence and frightening ingenuity of the criminal mind.In A Study in Scarlet , Holmes and Watson\'s first mystery, the pair are summoned to a south London house where they find a dead man whose contorted face is a twisted mask of horror. The body is unmarked by violence but on the wall a mysterious word has been written in blood.The police are baffled by the crime and its circumstances. But when Sherlock Holmes applies his brilliantly logical mind to the problem he uncovers a tragic tale of love and deadly revenge "
            },
            {
                id: 10,
                name: "Do Androids Dream of Electric Sheep?",
                author: "Philip K.Dick",
                price: 450,
                image: 'blade.jpg',
                description: "It was January 2021, and Rick Deckard had a license to kill.Somewhere among the hordes of humans out there, lurked several rogue androids. Deckard's assignment--find them and then...\"retire\" them. Trouble was, the androids all looked exactly like humans, and they didn't want to be found!"
            },
            {
                id: 11,
                name: "Chess Story",
                author: "Stefan Zweig",
                price: 300,
                image: 'chess.jpg',
                description: "Chess Story, also known as The Royal Game, is the Austrian master Stefan Zweig's final achievement, completed in Brazilian exile and sent off to his American publisher only a matter of days before his suicide in 1942. It is the only story in which Zweig looks at Nazism, and he does so with characteristic emphasis on the psychological.Travelers by ship from New York to Buenos Aires find that on board with them is the world champion of chess, an arrogant and unfriendly man. They come together to try their skills against him and are soundly defeated. Then a mysterious passenger steps forward to advise them and their fortunes change. How he came to possess his extraordinary grasp of the game of chess and at what cost lie at the heart of Zweig's story.This new translation of Chess Story brings out the work's unusual mixture of high suspense and poignant reflection"
            },
            {
                id: 12,
                name: "The Time Machine",
                author: "H.G. Wells",
                price: 450,
                image: 'time.jpg',
                description: "his journey 800,000 years beyond his own era—and the story that launched H.G. Wells’s successful career and earned him his reputation as the father of science fiction. With a speculative leap that still fires the imagination, Wells sends his brave explorer to face a future burdened with our greatest hopes...and our darkest fears. A pull of the Time Machine’s lever propels him to the age of a slowly dying Earth.  There he discovers two bizarre races—the ethereal Eloi and the subterranean Morlocks—who not only symbolize the duality of human nature, but offer a terrifying portrait of the men of tomorrow as well.  Published in 1895, this masterpiece of invention captivated readers on the threshold of a new century. Thanks to Wells’s expert storytelling and provocative insight, The Time Machinewill continue to enthrall readers for generations to come."
            }
        )
        
        window.sessionStorage.setItem('book', JSON.stringify(book))
    }
}

function add2cart(num) {
     var x = "a2c" + num;
    document.getElementById(x).disabled = "true";

    counter++;

    var i = book.findIndex(b => { return b.id == num; });  //index of book
    cart.push(book[i]);

    var i = cart.findIndex(b => { return b.id == num; });
    cart[i].count = 1;
    console.log(cart[i].count);

    sumTotal();

    cartCounter(); //top counter

    displayCart();
}

function displayCart() {
    //delete existing rows
    var n = document.getElementById("ordersTable").rows.length;
    n = n - 1;
    while (n > -1) {
        document.getElementById("ordersTable").deleteRow(n);
        n--;
    }

    //display in cart
    cart.forEach(i => {
        var table = document
            .getElementById("ordersTable")
            .getElementsByTagName("tbody")[0];
        var row = table.insertRow(table.rows.length);

        var Id = row.insertCell(0);
        var Name = row.insertCell(1);
        var Each = row.insertCell(2);
        var Minus = row.insertCell(3);
        var Count = row.insertCell(4);
        var Plus = row.insertCell(5);
        var Price = row.insertCell(6);
        var DeleteCell = row.insertCell(7);

        Id.innerText = i.id;
        Id.style.display = "none";
        Name.innerText = i.name;
        Each.innerText = "₹ " + i.price + " each";
        Minus.innerHTML =
            "<button class='btn btn-secondary float-right' onclick = 'minus(" +
            i.id +
            ")'>-</button>";
        Count.innerHTML =
            "<span class='font-weight-bold text-primary'>" +
            i.count +
            "</span>";
        Count.style.textAlign = "center";

        Plus.innerHTML =
            "<button class='btn btn-secondary float-left' onclick = 'plus(" +
            i.id +
            ")'>+</button>";
        var totalPrice = i.price * i.count;
        Price.innerText = totalPrice;
        DeleteCell.innerHTML =
            '<button type="button" class="btn btn-danger" onclick="deleteItem(this)" title="Delete"><i class="fa fa-trash"></i></button>';
        sumTotal();
    });
}

function deleteItem(td) {
    if (confirm('Sure to remove item?')) {
        selectedRow = td.parentElement.parentElement;
        var IDNum = selectedRow.cells[0].innerHTML;

        var i = cart.findIndex(b => { return b.id == IDNum; });
        var cnt = cart[i].count;
        cart.splice(i, 1);

        var x = "a2c" + IDNum;
        console.log(x);
        document.getElementById(x).disabled = "";

        document.getElementById("ordersTable").deleteRow(selectedRow.all);
        displayCart();

        counter = counter - Number(cnt);
        sumTotal();
        cartCounter(); //top counter
    }

}

function plus(num) {
    var i = cart.findIndex(s => { return s.id == num; });

    var x = document.getElementById("ordersTable").rows[i].cells[4];
    var totalPrice = document.getElementById("ordersTable").rows[i].cells[6];

    plus1 = Number(x.innerText) + 1;
    cart[i].count = plus1;
    console.log(cart[i].count);
    x.innerHTML =
        "<span class='font-weight-bold text-primary'>" +
        plus1 +
        "</span>";
    totalPrice.innerText = Number(cart[i].price) * Number(cart[i].count);

    counter++;
    cartCounter();
    sumTotal();
}

function minus(num) {
    var i = cart.findIndex(s => { return s.id == num; });

    var x = document.getElementById("ordersTable").rows[i].cells[4];
    var totalPrice = document.getElementById("ordersTable").rows[i].cells[6];

    if (Number(x.innerText) > 1) {

        minus1 = Number(x.innerText) - 1;
        cart[i].count = minus1;
        console.log(cart[i].count);
        x.innerHTML =
            "<span class='font-weight-bold text-primary'>" +
            minus1 +
            "</span>";
        totalPrice.innerText = Number(cart[i].price) * Number(cart[i].count);

        counter--;
        cartCounter();
        sumTotal();
    }
}

function sumTotal() {

    var sum = 0;
    cart.forEach(i => {
        sum = sum + i.count * i.price;
    });
    document.getElementById("total").innerText = sum;
}

function knowMore(num) {
    $("#exampleModal").modal();
    var i = book.findIndex(b => { return b.id == num; });  //index of book

    document.getElementById("ModalTitle").innerText = book[i].name;
    document.getElementById("ModalBody").innerText = book[i].description;
    // document.getElementById("knowMoreFooter").innerHTML =
    //     `<button type="button" class="btn btn-secondary btn-sm float-right" id="a2c`
    //     +book[i].id+
    //     `" " onclick="add2cart(`
    //     +book[i].id+
    //     `)" data-dismiss="modal" >Add to Cart</button>`;

    if(!cart.findIndex(c => { return c.id == num; })){
        document.getElementById("knowMoreFooter").style.display="none";
    }
    else
    document.getElementById("knowMoreFooter").style.display="";

    
}

function viewCart() {
    $("#cartModal").modal();
}

function purchase(){
  
     if(confirm("sure to purchase?")){
    
        counter="";
        cartCounter();
        cart=[];
        $("#some").empty();
        document.getElementById("total").innerText = '';
    }

    console.log(cart)
    console.log(counter)
    console.log(book)


  document.getElementById("a2c1").disabled=false;
  document.getElementById("a2c2").disabled=false;
  document.getElementById("a2c3").disabled=false;
  document.getElementById("a2c4").disabled=false;
  document.getElementById("a2c5").disabled=false;
  document.getElementById("a2c6").disabled=false;
  document.getElementById("a2c7").disabled=false;
  document.getElementById("a2c8").disabled=false;
  document.getElementById("a2c9").disabled=false;
  document.getElementById("a2c10").disabled=false;
  document.getElementById("a2c11").disabled=false;
  document.getElementById("a2c12").disabled=false;
  
  
  
  
    //purchase=1;
}

