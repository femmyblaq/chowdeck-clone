const faqLists = document.querySelectorAll("#faq li");
const anwsLists = document.querySelectorAll(".box p");
console.log(anwsLists)

faqLists.forEach((faq, i) => {
    faq.addEventListener("click", () => {
        faqLists.forEach(li => li.classList.remove("active"))
        faq.className = "active"


        anwsLists.forEach(ans => ans.classList.remove("activeAns"))
        anwsLists[i].className = "activeAns"
    })
})


