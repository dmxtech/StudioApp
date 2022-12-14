const start = document.getElementById("start");
const startbtn = document.getElementById("startbtn");

function startQuiz() {



    const questions = [

        {
            question: "¿Qué tipo de grabación?",
            choiceA: "Voz",
            choiceB: "Voz e instrumental",
            choiceC: "Grabacion de voz en off",
            choiceD: "Otro",
        },
        {
            question: "¿Qué tipo de música estás grabando?",
            choiceA: "Rock",
            choiceB: "Pop",
            choiceC: "Hip-hop",
            choiceD: "No estoy seguro",
            choiceE: "Otro",
        },
        {
            question: "¿Cuántas canciones quieres grabar?",
            choiceA: "1",
            choiceB: "2",
            choiceC: "3",
            choiceD: "4",
            choiceE: "5",
            choiceF: "Otro",
        },
        {
            question: "¿Falta algo?",
            choiceA: "Mezclado",
            choiceB: "Mastering",
            choiceC: "Preproducción",
            choiceD: "Edicion",
            choiceE: "Post-producción",
            choiceF: "Otro",
        },
        {
            question: "¿Cuándo necesitas grabación de audio?",
            //Calendario
        },
        {
            question: "A que hora necesitas al estudio de grabación?",
            choiceA: "Horario",
            //dropdown
            choiceB: "Tiempo",

        },
    ]


};
start.addEventListener("click", startQuiz);