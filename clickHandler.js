let clicks = localStorage.getItem("clicks")
let rebirths = localStorage.getItem("rebirths")

function initialize() {
    if (clicks === null) {
        clicks = 0
    };

    if (rebirths === null) {
        rebirths = 0
    };
    
    if (typeof(clicks) === "string") {
        Number(clicks)
    };

    if (typeof(rebirths) === "string") {
        Number(rebirths)
    };

    document.getElementById("click").onclick = addClick()
};

function addClick() {
    let clickInc = getClickIncrease()

    console.log("yo")
};

function getClickIncrease() {
    
};

function savePlayerData() {
    localStorage.setItem("clicks", toString(clicks))
    localStorage.setItem("rebirths", toString(rebirths))
}

initialize()