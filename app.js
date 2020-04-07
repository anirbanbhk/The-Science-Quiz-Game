function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    
    new Question("The type of chemical reaction in which heat is absorbed is called?", ["Displacement Reaction", "Combination Reaction","Endothermic Reaction", "Exothermic Reaction"], "Endothermic Reaction"),
  
    new Question("The nature of salt formed in the reaction of strong acid and strong base is?", ["Neutral", "Acidic", "Basic", "None of these"], "Neutral"),

    new Question("The number of 'groups' and 'periods' in the modern periodic table are?", ["7 and 8", "6 and 18","18 and 7", "10 and 12"], "18 and 7"),
    

    new Question("In which day we can't obtain hot water by using solar heater?", ["Sunny Day", "Cloudy Day","Hot Day", "Windy Day"], "Cloudy Day"),

    new Question("Which of the following metal can displace copper from copper sulphate solution?", ["Silver", "Gold","Zinc", "Mercury"], "Zinc"),
    
    new Question("How many pairs of chromosomes are there in human body?", ["23", "22","16", "17"], "23"),

    new Question("Which of the following is responsible for maximum depletion of Ozone layer?", ["Methane", "Pesticides","Carbon monoxide", "Chlorofluorocarbon"], "Chlorofluorocarbon"),

    new Question("Which of the following is a respiratory pigment?", ["Haemoglobin", "Chlorophyll","RBC", "Plasma"], "Haemoglobin"),

    new Question("Which of the following is not include in the 3R's?", ["Reduce", "Reuse","Resistance", "Recycle"], "Resistance"),

    new Question("Which of the following disease occur due to deficiency of thyroxine?", ["Diarrhea", "Goitre","Beriberi", "Dwarfism"], "Goitre"), 

   

 new Question("4Na + O<sub>2</sub> → 2Na<sub>2</sub>O. Here Na is?", ["Oxidised", "Reduced","Displaced", "None of these"], "Oxidised"),
  
    new Question("A solution turns red litmus blue. Then pH of the solution is?", ["1", "5", "6", "10"], "10"),

    new Question("Which of the following energy is not based on solar energy?", ["Geothermal energy", "Wind energy","Nuclear energy", "Biomass"], "Nuclear energy"),
    

    new Question("Which of the following is not a metalloid?", ["Boron", "Silicon","Antimony", "Hydrogen"], "Hydrogen"),

    new Question("Which metal is coated by galvanisation?", ["Aluminium", "Zinc","Gold", "Silver"], "Zinc"),
    
    new Question("Which one of the following is biodegradable substances?", ["Aluminium can", "Plastic","Fertilizer", "DDT"], "Fertilizer"),

    new Question("No matter how far you stand from a mirror, your image appears erect. The mirror is likely to be?", ["Plane", "Concave","Convex", "Either plane or convex"], "Either plane or convex"),

    new Question("Which of the following regulates the character of an individual?", ["Gene", "DNA","Protein", "Neuron"], "Gene"),

    new Question("The function of xylem in plant body is?", ["Transport of water", "Transport of food","Transport of aminoacid", "Transport of Oxygen"], "Transport of water"),

    new Question("What is the main source of electrical energy in India?", ["Thermal energy", "Water energy","Nuclear energy", "Solar energy"], "Thermal energy"),



   
    

    new Question("Na<sub>2</sub>SO<sub>4</sub> + BaCl<sub>2</sub> → BaSO<sub>4</sub> + 2NaCl, this equation is an example of?", ["Combination Reaction", "Redox Reaction","Double Displacement Reaction", "Displacement Reaction"], "Double Displacement Reaction"),

    new Question("Which of the following is Dobereiner's triod?", ["Li, NA, k", "Na, Mg, Zn","In, Fe, Zn", "H, Li, Be"], "Li, NA, k"),
    
    new Question("Power of lens is +2D. What does it mean?", ["The lens is concave and focal length is 2 m", "The lens is convex and focal length is 2 m","The lens is concave and focal length is ½ m", "The lens is convex and focal length is ½ m"], "The lens is convex and focal length is ½ m"),

    new Question("If energy is to obtain from a windmill the least velocity of air should be?", ["20Km/Hr", "15Km/Hr","10Km/Hr", "25Km/Hr"], "15Km/Hr"),

    new Question("Which of the following is not Mendel's Laws of inheritance?", ["Laws of Dominance", "Laws of Segregation","Laws of Independent Assortment", "Laws of Natural Selection"], "Laws of Natural Selection"),

    new Question("Which of the following emulsifies fat molecules?", ["Trypsin", "Pepsin","Bile salts", "Amylase"], "Bile salts"),

    new Question("Which of the following is a plant hormone?", ["Insulin", "Thyroxin","Oestrogen", "Cytokinin"], "Cytokinin"),

    new Question("Which of the following is an abiotic Gelement of an ecosystem?", ["Temperature", "Plants","Animals", "Insects"], "Temperature"),

    new Question("Which of the following states have maximum posibility of producing wind energy?", ["Rajasthan", "Gujarat","Maharastra", "Tamilnadu"], "Gujarat"),




    new Question("What happens when dilute hydrochloric acid is added to iron powder?", ["Hydrogen gas and iron chloride is produced", "Chlorine gas and iron hydroxide is produced","Salt of iron and water is produced", "No reaction"], "Hydrogen gas and iron chloride is produced"),
    
    new Question("Which one of the following type of medicines is used for treating indigestion?", ["Antibiotic", "Analgesic","Antacid", "Antiseptic"], "Antacid"),

    new Question("Fe<sub>2</sub>O<sub>3</sub> + 2Al → Al<sub>2</sub>O<sub>3</sub> + 2Fe. This equation is an example of?", ["A combination teaction", "A decomposition reaction","A double displacement reaction", "A displacement reaction"], "A displacement reaction"),

    new Question("On moving from left to right along a period in the periodic table, then atomic radius of elements will be?", ["Increase", "Decrease","Remains the same", "None of the above"], "Decrease"),

    new Question("The main element of cooking gas is?", ["Methane", "Ethane","Propane", "Butane"], "Butane"),

    new Question("Which of the following is an example of man made ecosystem?", ["Garden", "Forest","Pond", "Lake"], "Garden"),

    new Question("What is the main element of Biogas?", ["Methane", "Ethane","Propane", "Butane"], "Methane"),

    new Question("What is the function of brain?", ["Thinking", "Heart beat Regulation","Co-ordination of body", "All of these"], "All of these"),






    new Question("The most ductile metal is?", ["Gold", "Zinc","Mercury", "Iron"], "Gold"),
    
    new Question("When zinc granules are given in blue copper sulphate solution, the solution become colourless. What does it indicate?", ["Copper is more reactive than zinc", "Zinc is more reactive than copper","Copper and zinc both are equally reactive", "Reaction is incomplete in that solutin"], "Zinc is more reactive than copper"),

    new Question("Which of the following is a nobel gas?", ["Neon", "Oxygen","Chlorine", "Nitrogen"], "Neon"),

    new Question("Which one of the following is not a renewable source of energy?", ["Wind energy", "Water energy","Solar energy", "Coal"], "Coal"),

    new Question("Which of the following forms a food chain?", ["Grass, Wheat and Mango", "Grass, Goat and Human","Goat, Cow and Elephant", "Grass, Fish and Goat"], "Grass, Goat and Human"),

    new Question("Which one of the following is an example of renewable energy?", ["Coal", "Petroleum","Solar energy", "None of these"], "Solar energy"),

    new Question("Refractive index of glass with respect to air is 1.5. Therefore what is the speed of light in glass?", ["3×10<sup>8</sup> m/s", "2×10<sup>8</sup>m/s","3/2×10<sup>8</sup>m/s", "3.2×10<sup>8</sup>m/s"], "2×10<sup>8</sup>m/s"),

    new Question("On which plant Mendel did his experiment?", ["Pea Plant", "Brinjal Plant","Pomegranate Plant", "Snail"], "Pea Plant"),



];


var quiz = new Quiz(questions);


populate();





