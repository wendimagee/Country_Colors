class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"])
let scotland = new Country("Scotland", "English and Gaelic", "Hiya, World!", ["blue", "white", "white"])
let england = new Country("England", "English", "'Ello, World!'", ["white", "red", "white"])

function SwitchCountry() {
    let input = "USA";
    let country;
    DisplayText(usa);

    if (input === "USA") {
        //set country to usa 
        country = usa;
        DisplayText(usa);
        DisplayColors(usa.colors);
    }
    else if (input === "Mexico") {
        country = mexico;
        DisplayText(mexico);
        DisplayColors(mexico.colors);
    }
    else if (input === "Algeria") {
        country = algeria;
        DisplayText(algeria);
        DisplayColors(algeria.colors);
    }
    else if (input === "Scotland") {
        country = scotland;
        DisplayText(scotland);
        DisplayColors(scotland.colors);
    }
    else if (input === "England") {
        country = england;
        DisplayText(england);
        DisplayColors(england.colors);
    }
}
function DisplayText(country){
    document.getElementById("CountryName").innerText=country.name;
    document.getElementById("OfficialLanguage").innerText=country.lang;
    document.getElementById("HelloWorld").innerText=country.greeting;
}
function DisplayColors(colors){
    document.getElementsByClassName("Color1").style.backgroundColor=colors[0];
    document.getElementsByClassName("Color2").style.backgroundColor=colors[1];
    document.getElementsByClassName("Color3").style.backgroundColor=colors[2];
}
