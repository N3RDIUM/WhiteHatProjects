class Security {
    constructor(){
        this.access1 = createInput("Code1")
        this.access1.position(100,90)
        this.access1.style('background','white')

        this.button1 = createButton('Check')
        this.button1.position(100,120)
        this.button1.style('background','lightgray')

        this.access2 = createInput("Code1")
        this.access2.position(700,190)
        this.access2.style('background','white')
        this.access2.hide()

        this.button2 = createButton('Check')
        this.button2.position(700,250)
        this.button2.style('background','lightgray')
        this.button2.hide()

        this.access3 = createInput("Code1")
        this.access3.position(100,290)
        this.access3.style('background','white')
        this.access3.hide()

        this.button3 = createButton('Check')
        this.button3.position(100,320)
        this.button3.style('background','lightgray')
        this.button3.hide()
    }
    refresh(){
        this.button1.mousePressed(()=>{
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide()
                this.access1.hide()
                this.button2.show()
                this.access2.show()
                score++
            }
        })
        this.button2.mousePressed(()=>{
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide()
                this.access2.hide()
                this.button3.show()
                this.access3.show()
                score++
            }
        })
        this.button3.mousePressed(()=>{
            if(system.authenticate(accessCode3,this.access3.value())){
                this.button3.hide()
                this.access3.hide()
                score++
            }
        })
    }
}