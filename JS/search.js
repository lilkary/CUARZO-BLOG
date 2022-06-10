import signos from "./cuarzos.json" assert { type: "json" }
const id = ID => document.getElementById(ID)
console.log(signos)
const SIGNOS = [
  "Aries",
  "Tauro",
  "Geminis",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Escorpio",
  "Sagitario",
  "Capricornio",
  "Acuario",
  "Piscis"
]

const setDataToView = signo => {
  const data = signos[signo]
  
  id("image").style.backgroundImage = `url(${data.image})`
  id("title").textContent = data.title
  id("info").innerHTML = data.text
  id("matchs").classList.remove("searching")
  id("no-content").classList.remove("view")
}

id("search").onkeyup = ({target: input}) => {

  id("matchs").innerHTML =""

  const value = input.value
  const Matchs = SIGNOS.filter(signo => {
    if(signo.toLocaleLowerCase().includes(value.toLocaleLowerCase())) return signo
  })

  Matchs.forEach(signo => {
    const option = document.createElement("DIV")
    const span = document.createElement("SPAN")

    span.textContent = signo
    option.appendChild(span)
    option.classList.add("option")
    id("matchs").append(option)

    option.onclick = ev => {
      console.log(signo)
      setDataToView(signo.toLocaleLowerCase())
    }
  })

  if(Matchs.length < 1 || value.length < 1){
    id("matchs").classList.remove("searching")

  }else if(!id("matchs").className.includes("searching") ){

    id("matchs").classList.add("searching")
  }
}

onclick = ({target: element}) => {
  if(!element.className.includes("option")){
    id("matchs").classList.remove("searching")
  }
}