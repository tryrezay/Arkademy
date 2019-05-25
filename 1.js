 let result = {
    name: "Try Reza",
    address: "Bekasi",
    hobbies: ["Futsal, Musik"],
    is_married: false,
    school: {
        highschool: "SMA Sultan Agung", 
        university: "Mikroskil"
    },
    skills: [{
        name: "HTML",
        score: 85
    },
    {
        name: "Bootstrap",
        score: 75
    },
    {
        name: "Javascript",
        score: 70
    }]
};
function biodata(){
    console.log(result);
}

biodata();     