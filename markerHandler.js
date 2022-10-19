AFRAME.registerComponent("foundorlost",{
    init: async function(){
        this.el.addEventListener("markerFound", () => {
            console.log("Marker is found")
            this.mf()
        })
        this.el.addEventListener("markerLost", () => {
            console.log("Marker is lost and you should loose any hope of finding it")
            this.ml()
        })
    },
    mf:function(){
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display="flex"

        var ob = document.getElementById("order-button")
        var rb = document.getElementById("rating-button")

        rb.addEventListener("rating", () => {
            swal({
                icon:"warning",
                title:"RATE",
                text:"RATE AS BAD AS YOU CAN I DARE YOU THAT YOU WON'T BE ABLE GIVE LESS THAN 0 STARS"
            })
        })
        ob.addEventListener("order", () => {
            swal({
                icon:"https://i.imgur.com/4NZ6uLY.jpg",
                title:"ORDER PLACED",
                text:"HAHA SCAMED"
            })
        })
    },
    ml:function(){
        var buttonDiv=document.getElementById("button-div")
        buttonDiv.style.display="none"
    }
})
