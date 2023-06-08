const quizData = [
    {
        question: "Who is the founder of Java language?",
        a: " Mr.James Gosling",
        b: "Dennis MacAlistair Ritchie",
        c: "Bjarne Stroustrup",
        d: "Ada Lovelace",
        correct: "a",
    },
    {
        question: "Number of primitive data types in Java are?",
        a: "6",
        b: "7",
        c: "8",
        d: "9",
        correct: "c",
    },
    {
        question: "What is the size of float and double in java?",
        a: "32 and 64",
        b: "32 and 32",
        c: "64 and 64",
        d: "64 and 32",
        correct: "a",
    },
    {
        question: "Select the valid statement.",
        a: "char[] ch = new char(5)",
        b: "char[] ch = new char[5]",
        c: "char[] ch = new char()",
        d: "char[] ch = new char[]",
        correct: "b",
    },
    {
        question: "Arrays in java are ",
        a: "Object References",
        b: "Object",
        c: "Primitive data type",
        d: "None",
        correct: "b",
    },
    {
        question: "When is the object created with new keyword?",
        a: "At Run Time",
        b: "At Compile Time",
        c: "Depends on the code",
        d: "none",
        correct: "a",
    },
    {
          question: "Identify the keyword among the following that makes a variable belong to a class,rather than being defined for each instance of the class.",
        a: "final",
        b: "volatic",
        c: "static",
        d: "abstract",
        correct: "c",
    },

    {
        question: "In which of the following is toString() method defined?",
        a: "java.lang.string",
        b: "java.lang.util",
        c: "java.lang.object",
        d: "None",
        correct: "c",
    },

    {
        question: "compareTo() returns",
        a: "true",
        b: "false",
        c: "An int value",
        d: "None",
        correct: "c",
    },
    {
        question: "Identify the output of the following program.String str = “Hellow”;System.out.println(str.indexOf(‘t));",
        a: "0",
        b: "1",
        c: "true",
        d: "-1",
        correct: "d",
    },
    {
        question: "Total constructor string class have?",
        a: "3",
        b: "7",
        c: "13",
        d: "20",
        correct: "c",
    },
    {
        question: "Identify the output of the following program.String str = “abcde”; System.out.println(str.substring(1, 3));",
        a: "abc",
        b: "bc",
        c: "bcd",
        d: "cd",
        correct: "b",
    },
    {
        question: "Find the output of the following code. int ++a = 100; System.out.println(++a);",
        a: "101",
        b: "100",
        c: "compile error",
        d: "None",
        correct: "c",
    },
    {
        question: "Output of Math.floor(3.6)?",
        a: "3",
        b: "4.0",
        c: "4",
        d: "3.0",
        correct: "d",
    },
    {
        question: "Identify the return type of a method that does not return any value.",
        a: "void",
        b: "int",
        c: "double",
        d: "None",
        correct: "a",
    },
    {
        question: "Find the output of the following code.Public class Solution{ Public static void main(String… argos){Int x = 5; x * = (3 + 7);System.out.println(x);",

        a: "50",
        b: "22",
        c: "10",
        d: "none",
        correct: "a",
    },
    {
        question: "Identify the modifier which cannot be used for constructor",
        a: "public",
        b: "protected",
        c: "private",
        d: "static",
        correct: "d",
    },
    {
        question: "What is Runnable?",
        a: "abstract class",
        b: "class",
        c: "method",
        d: "interface",
        correct: "d",
    },
    {
        question: "Exception created by try block is caught in which block",
        a: "final",
        b: "throw",
        c: "catch",
        d: "None",
        correct: "c",
    },
    {
        question: "Which of the following is used to find and fix bugs in the program?",
        a: "JDK",
        b: "JRE",
        c: "JVM",
        d: "JDB",
        correct: "d",
    },


];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})