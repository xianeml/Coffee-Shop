var orderBtn = document.querySelector('#orderBtn');
var coffee = document.querySelector('#coffee');
var makeBtn1 = document.querySelector('#metarial1');
var makeBtn2 = document.querySelector('#metarial2');
var makeBtn3 = document.querySelector('#metarial3');
var num = document.querySelectorAll('.num');
var numSet = 0;
var complete = document.querySelector('.btn');
var comment = document.querySelector('#comment');
var esp = document.querySelector('#esp');
var water = document.querySelector('#water');
var milk = document.querySelector('#milk');
var resetBtn = document.querySelector('#resetBtn');

var coffeeList = ['Espresso', 'Americano', 'Caffe Latte'];


orderBtn.addEventListener("click", function(){
    function randomCoffee(){
        var random = Math.floor(Math.random() * coffeeList.length);
        return coffeeList[random];
    }
    coffee.textContent = randomCoffee();
});

makeBtn1.addEventListener("click", function(){
    esp.textContent = numSet+=1;
});

makeBtn2.addEventListener("click", function(){
    water.textContent = numSet+=1;
});

makeBtn3.addEventListener("click", function(){
    milk.textContent = numSet+=1;
});

complete.addEventListener("click", function(){
    if(coffee.textContent === 'Espresso'){
        MakeEsp();
    }
    if(coffee.textContent === 'Americano'){
        MakeAme();
    }
    if(coffee.textContent === 'Caffe Latte'){
        MakeLat();
    }
});

function MakeEsp(){
    if((esp.textContent==2) && (water.textContent==0) && (milk.textContent==0)){
        comment.textContent = "맛있네요 Good!";
    }else{
        comment.textContent = "웁스..";
    }
};

function MakeAme(){
    if((esp.textContent==2) && (water.textContent==1) && (milk.textContent==0)){
        comment.textContent = "맛있네요 Good!";
    }else{
        comment.textContent = "웁스..";
    }
};

function MakeLat(){
    if((esp.textContent==2) && (water.textContent==0) && (milk.textContent==1)){
        comment.textContent = "맛있네요 Good!";
    }else{
        comment.textContent = "웁스..";
    }
};

// resetBtn.addEventListener("click", function(){
//     coffee.textContent = "coffee";
//     num.textContent = 0;
//     comment.textContent = "";
// });

