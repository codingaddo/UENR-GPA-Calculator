const container = document.querySelector('.inputContainer')
let course = document.getElementById('Ncourses')
const enterCosNum = document.getElementById('courseBtn') 
const score = document.getElementById('score')
const credit =document.getElementById('credit')
const scoreCrdBtn = document.getElementById('scoreBtn')
const calBtn = document.getElementById('calBtn')
const clearBtn = document.getElementById('clear')
const showCourse = document.getElementById('tcourse')
const showCredit = document.getElementById('tcredit')
const showGPA = document.getElementById('gpa')
const showClass = document.getElementById('class')
let creditNumbers = [];
let scoreNumbers = [];
let gradePoint =[];
let multGPC = []


function validateNumericInput(inputElement) {
  const numericInput = inputElement.value;
  const numericRegex = /^[0-9]*$/;

  if (!numericRegex.test(numericInput)) {
    // If non-numeric characters are detected, remove them from the input
    inputElement.value = numericInput.replace(/\D/g, '');
  }
}


const getNumberOfCourse = ()=>{
    let courseValue = course.value
    courseValue !==''? courseValue: alert("can't be empty")
    

    // if(courseValue==''){
    //     alert("can't be empty")
    // }

    return courseValue;
}

enterCosNum.addEventListener('click',()=>{
    let TotalCourse = getNumberOfCourse()
    console.log('Total number of courses = '+TotalCourse)


    const getScore=()=>{
        let scoreValue = score.value
        let scoreValueNumber = +scoreValue;  //converting the text string to number

        return scoreValueNumber
    }

    const getCredit = ()=>{
        let creditValue =credit.value
        let creditValueNumber = +creditValue //converting the text string to number
        return creditValueNumber
    }
    getCredit()
    getScore()
    
    scoreCrdBtn.addEventListener('click',()=>{
        if(TotalCourse !== ''){
            let credits = getCredit()
            let scores = getScore()
            // if(scores >=80){
            //     gradePoint.push(4)
            // }else{gradePoint.push(2)}

            if(scores>=80 && scores<=100){
                gradePoint.push(4.0)
            }
            if(scores>=75 && scores<=79){
                gradePoint.push(3.5)
            }
            if(scores>=70 && scores<=74){
                gradePoint.push(3.0)
            }

            if(scores>=65 && scores<=69){
                gradePoint.push(2.5)
            }
            if(scores>=60 && scores<=64){
                gradePoint.push(2.0)
            }
            if(scores>=55 && scores<=59){
                gradePoint.push(1.5)
            }
            if(scores>=50 && scores<=54){
                gradePoint.push(1.0)
            }
            if(scores>=45 && scores<=49){
                gradePoint.push(0.5)
            }
            if(scores>=0 && scores<=44){
                gradePoint.push(0.0)
            }
            
            scoreNumbers.push(scores)
            creditNumbers.push(credits)
            credit.value ="";
            score.value ="";
            
            
            if(creditNumbers.length==TotalCourse && scoreNumbers.length==TotalCourse){
                container.style.display='none'
                calBtn.style.display = "block"
                scoreCrdBtn.style.display = "none"
                enterCosNum.style.display = "none"
                for(i=0;i<TotalCourse;i++){
                    multGPC.push(gradePoint[i]*creditNumbers[i])
                }
                let totalGPC = multGPC.reduce((x,y)=>x+y)
                let creditsum = creditNumbers.reduce((a,b)=>a+b)
                // console.log("Scores = " + scoreNumbers)
                // console.log("Respective Credit hours = " + creditNumbers)
                // console.log("Respective grade points = " + gradePoint)
                // console.log(multGPC)
                // console.log(totalGPC)
                // console.log("Total credit hours = " + creditsum)

                calBtn.addEventListener('click',()=>{
                    let GPA = totalGPC/creditsum
                    let result = GPA.toFixed(2)
                    let honour = "";
                    // console.log("GPA" + " "+ result)
                    if(result>=3.60 && result<=4.00){
                        honour = "1st class"
                    }
                    if(result>=3.00 && result<=3.59){
                        honour = "2nd class upper"
                    }
                    if(result>=2.50 && result<=2.99){
                        honour = "2nd class lower"
                    }
                    if(result>=2.00 && result<=2.49){
                        honour = "3rd class "
                    }
                    if(result>=1.00 && result<=1.99){
                        honour = "Pass"
                    }
                    if(result>=0.00 && result<=0.99){
                        honour = "Fail"
                    }


                    showCourse.innerText = TotalCourse
                    showGPA.innerText = result
                    showCredit.innerText = creditsum
                    showClass.innerText = honour
                })
            } 

                
        }else{
            alert('Credit hour/ number of courses  required')
        }
    })
})



