
    // Create Dino Constructor
    const  Dinos= [
         {
             "species": "Triceratops",
             "weight": 13000,
             "height": 114,
             "diet": "herbavor",
             "where": "North America",
             "when": "Late Cretaceous",
             "fact": ["First discovered in 1889 by Othniel Charles Marsh"]
         },
         {
             "species": "Tyrannosaurus Rex",
             "weight": 11905,
             "height": 144,
             "diet": "carnivor",
             "where": "North America",
             "when": "Late Cretaceous",
             "fact": ["The largest known skull measures in at 5 feet long."]
         },
         {
             "species": "Anklyosaurus",
             "weight": 10500,
             "height": 55,
             "diet": "herbavor",
             "where": "North America",
             "when": "Late Cretaceous",
             "fact": ["Anklyosaurus survived for approximately 135 million years."]
         },
         {
             "species": "Brachiosaurus",
             "weight": 70000,
             "height": "372",
             "diet": "herbavor",
             "where": "North America",
             "when": "Late Jurasic",
             "fact": ["An asteroid was named 9954 Brachiosaurus in 1991."]
         },
         {
             "species": "Stegosaurus",
             "weight": 11600,
             "height": 79,
             "diet": "herbavor",
             "where": "North America, Europe, Asia",
             "when": "Late Jurasic to Early Cretaceous",
             "fact": ["The Stegosaurus had between 17 and 22 seperate places and flat spines."]
         },
         {
             "species": "Elasmosaurus",
             "weight": 16000,
             "height": 59,
             "diet": "carnivor",
             "where": "North America",
             "when": "Late Cretaceous",
             "fact": ["Elasmosaurus was a marine reptile first discovered in Kansas."]
         },
         {
             "species": "Pteranodon",
             "weight": 44,
             "height": 20,
             "diet": "carnivor",
             "where": "North America",
             "when": "Late Cretaceous",
             "fact": ["Actually a flying reptile, the Pteranodon is not a dinosaur."]
         },
         {
             "species": "Pigeon",
             "weight": 0.5,
             "height": 9,
             "diet": "herbavor",
             "where": "World Wide",
             "when": "Holocene",
             "fact": ["All birds are living dinosaurs."]
         }
     ]

    function Dino(species, weight, height, diet, where, when, fact){
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.where = where;
        this.when = when;
        this.fact=fact;
        this.image = `../images/${species.toLowerCase()}.png`;
        return this;
    }


    const dinos =[];
    // Create Dino Objects
     (function dinoCreation(){
        Dinos.forEach( e => dinos.push(new Dino(e.species, e.weight, e.height, e.diet, e.where, e.when, e.fact)))
    })();
    
    // Create Human Object

    let human = {
        Name : "",
        Hight : {
            Feet: 0,
            inches: 0
        },
        Wight: 0,
        Diet: "",
        image: ""
    }
    // Use IIFE to get human data from form
    let humanData ={}
     function getData(){
     
    
        return {
           Name: document.getElementById("name").value,
            Hight: 
            (document.getElementById("feet").value)+
             ((document.getElementById("inches").value) * 12)
            ,
            Wight: document.getElementById("weight").value,
            Diet: document.getElementById("diet").value.toLowerCase(),
            image: "../images/human.png" 
            
        }
       
    }

    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 
    function compareHightDino(){
        dinos.forEach(element => {
            element.height > humanData.Hight ? element.fact.push("I'm taller than you by, "+(element.height - humanData.Hight)+"inches") : element.fact.push("You are taller than me by, "+( humanData.Hight - element.height )+" inches")
        });
    }
    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
    function compareWightDino(){
        dinos.forEach(element => {
            element.weight > humanData.Wight ? element.fact.push("I wigh more than you by, "+(element.weight - humanData.Wight)) : element.fact.push("You wigh more than me by, "+( humanData.Wight - element.wight ))
        });
    }
    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
    function compareDightDino(){
        
        dinos.forEach(element => {
            // console.log(humanData.Diet.toLowerCase());
            element.diet === humanData.Diet ? element.fact.push("We share the same Diet, "+element.diet) : element.fact.push("you have, "+ humanData.Diet+" dite, my dite is"+ element.diet )
        });
    }

    // Generate Tiles for each Dino in Array
    function generateTiles(){
        let element = document.getElementById("dino-compare")
      
        humanData = getData();
        
        element.remove();
        compareDightDino(); 
        compareHightDino();
        compareWightDino();
        console.log(humanData)
        dinos.splice(4, 0, humanData);
        var grid = document.getElementById("grid").children;
        for (var i = 0; i < grid.length; i++) {
            const divs = grid[i];
                var title = document.createElement('h3');
                var pic = document.createElement('img');
                var parg = document.createElement('p');


                    if(i===4){
                        title.innerText = dinos[4].Name
                        pic.src = dinos[4].image;
                    }
                     else if(i <= dinos.length ){
                        title.innerText=dinos[i].species
                        pic.src = dinos[i].image;

                        if(dinos[i].species === "Pigeon")
                             parg.innerText= dinos[i].fact[0];
                        else  
                            parg.innerText= dinos[i].fact[Math.floor(Math.random() * dinos[i].fact.length) ];
                   
                      
                }
              
                divs.appendChild(title);
                divs.appendChild(pic);
                divs.appendChild(parg);
              
                
            //}                
            // document.getElementById('boxParent').appendChild(row);
        }
        document.querySelector("#grid").style.display = "flex";
    }
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
