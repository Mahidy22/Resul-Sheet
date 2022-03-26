let bangla = document.querySelector('#bang');
let english = document.querySelector('#eng');
let math = document.querySelector('#math');
let science = document.querySelector('#science');
let checkBtn = document.querySelector('#check');
let resetBtn = document.querySelector('#reset')
let average = document.querySelector('#avg');
let grade = document.querySelector('#grade');
let setBang = 0;
let setEng = 0;
let setMath = 0;
let setScience = 0;



checkBtn.addEventListener('click',()=>{
    bangla.textContent = bangla.value ;
    setBang = Number(bangla.value);
    english.textContent = english.value ;
    setEng = Number(english.value);
    math.textContent = math.value ;
    setMath = Number(math.value);
    science.textContent = science.value ;
    setScience = Number(science.value);
    let subArr = [setBang,setEng,setMath,setScience];
    
    function calculating(arr){
        let sum = 0;
        let count = 0;
        
        for(i = 0; i <arr.length; i++){
            sum += arr[i]
            
            if(arr[i]){
                count++
            }
        }
        let averageMarks = sum / count;
        average.innerHTML = averageMarks;
        
        if(averageMarks < 60){
            grade.innerHTML = 'Fail'
        }else if(averageMarks >= 60 && averageMarks < 70){
            grade.innerHTML = 'B+'
        }else if(averageMarks >= 70 && averageMarks < 80){
            grade.innerHTML = 'A-'
        }else if(averageMarks >= 80 && averageMarks <= 100){
            grade.innerHTML = 'A+'
        }else{
            grade.innerHTML = 'Not A Number'
        }
    }
    calculating(subArr)
})

resetBtn.addEventListener('click',()=>{
    average.innerHTML = '';
    grade.innerHTML = '';
})