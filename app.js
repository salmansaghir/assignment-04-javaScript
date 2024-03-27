//<------ Array------->
//Q1
// var studentName =[] 
// studentName [0]= prompt("Enter Student name")
// document.write(studentName)
//Q2
// var studentName = Array('salman',35,'saylani','mobile&web app')

// document.write(studentName[1],studentName[3])
//Q3
// var arr=['salman','saylani']
//Q4
//var arr=[10,11,12,15]
//Q5
//var arr=[true,false]
//Q6
//var arr=['salman',35,true,false]
//Q7
// var arr=['SSC','HSC','BCS','BS','BCOM','MS','M.phil.','PhD']
// document.write(`<h1>Qualification</h1><br> 1)${arr [0]}
// <br> 2)${arr [1]} <br> 3)${arr [2]} <br> 4)${arr [3]}<br> 5)${arr [4]}
// <br> 6)${arr [5]} <br> 7)${arr [6]} <br> 8)${arr [7]}`)
//Q8
// var studentName=['Michael','Jhon','Tony']
// var score =[320,230,480]
// var percentAge=[score[0]/500*100,score[1]/500*100,score[2]/500*100]
// document.write(`Score of ${studentName[0]} is ${score[0]}. Percentage: ${percentAge[0]} % <br>`)
// document.write(`Score of ${studentName[1]} is ${score[1]}. Percentage: ${percentAge[1]} % <br>`)
// document.write(`Score of ${studentName[2]} is ${score[2]}. Percentage: ${percentAge[2]} % <br>`)
//Q9.a)

// var color= ['white', 'black', 'yellow', 'green']

// var color1= prompt('Enter the color name')

// color.unshift(color1)

// document.write(color)
//Q9.b)

// var color= ['white', 'black', 'yellow', 'green']

// var color1= prompt('Enter the color name')

// color.push(color1)
// document.write(color)
//Q9.c)
// var color=['white','black','yellow','green']
// color.unshift('gry','pink')
// document.write(color)
//Q9.d)
// var color=['gary','pink','white','black','yellow','green']
// color.shift()
// document.write(color)
//Q9.e)
// var color=['gary','pink','white','black','yellow','green']
// color.pop()

// document.write(color)
//Q9.f)
// var color=['gary','pink','white','black','yellow','green']

// color.splice(2,0,'murgenda')
// document.write(color)
//Q9.g)
// var color=['gary','pink','white','black','yellow','green']
// color.splice(3,3)
// document.write(color)
//Q10...................?
// var studentScore=[320,230,480,120]
// studentScore.sort();
// document.write(studentScore)
//Q11
// var citiesList=['Karachi','Lahore','Pishawar','Quetta','Islamabad']
// document.write(` <h1>Cities List</h1><br>${citiesList}<br>`)
// var selectedList

// selectedList = citiesList.slice(3,5)
// document.write(`<h1>Selected cities</h1><br>${selectedList}`)
//Q12
// var arr = ['This ', ' is ', ' my ', ' cat']
// document.write(`<h1>Array:</h1>${arr} <br>`)
// var arr2
// arr2 = arr.join(" ")
// document.write(`<h1>String:</h1>${arr2}`)
//Q13
// var fifo=[];

// fifo.push('Keyboard')
// fifo.push('mouse')
// fifo.push('printer')
// fifo.push('monitor')
// document.write(`Devices:<br>`)
// document.write(fifo)
// document.write(`<br>output<br>${fifo.shift()} <br>
// output<br>${fifo.shift()} <br>
// output<br>${fifo.shift()} <br>
// output<br>${fifo.shift()} <br> `)

//Q14
// var fifo=[];

// fifo.push('Keyboard')
// fifo.push('mouse')
// fifo.push('printer')
// fifo.push('monitor')
// document.write(`Devices:<br>`)
// document.write(fifo)
// document.write(`<br>output<br>${fifo.pop()} <br>
// output<br>${fifo.pop()} <br>
// output<br>${fifo.pop()} <br>
// output<br>${fifo.pop()} <br> `)

//Q15
// var phone=['apple','samsung','motorola','nokia','sony','haier']
// document.write(`<select> <option>${phone[0]}</option>
// <option>${phone[1]}</option>
// <option>${phone[2]}</option>
// <option>${phone[3]}</option>
// <option>${phone[4]}</option>
// <option>${phone[5]}</option> </select>`)
