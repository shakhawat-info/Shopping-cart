// 1. Task Title: Employee Performance Tracker

// array of employee objects
const employees = [
    { id: 1, name: 'Alice', tasksCompleted: 50, rating: 4.8 },
    { id: 2, name: 'Bob', tasksCompleted: 30, rating: 3.9 },
    { id: 3, name: 'Charlie', tasksCompleted: 70, rating: 4.5 },
    { id: 4, name: 'Diana', tasksCompleted: 20, rating: 3.2 },
  ];
  
// employee process
function calculateBonuses(){
     
    let selected = employees.filter((item)=> item.tasksCompleted >= 40 && item.rating >= 4.0 );
    // console.log(selected);
    
    let employee = [];

    selected.map((item)=>{
        employee.push({
            id: item.id,
            name: item.name,
            bonus: item.tasksCompleted * 10
        })
    })
    // console.log(employee);
    
    return employee
    
}
console.log(calculateBonuses());


// Bonus Challenge - all employees average rating calculation function

function calculateAverageRating(){

    let totalrating = 0;

    employees.map((item)=>{
        totalrating += item.rating;
    })

    // console.log(totalrating);

    if((totalrating / employees.length) >= 4.5){
        console.log('The company’s overall performance is excellent.');
    }else if((totalrating / employees.length) >= 4.0){
        console.log('The company’s overall performance is good.');
    }else{
        console.log('The company’s overall performance is needs improvemen.');
    }
    
}
calculateAverageRating()





// 2. Task Title: Student Grades Tracker
const students = [
    { id: 1, name: 'John', scores: [85, 78, 92] },
    { id: 2, name: 'Sara', scores: [62, 70, 68] },
    { id: 3, name: 'Emma', scores: [90, 95, 94] },
    { id: 4, name: 'Tom', scores: [50, 48, 55] },
  ];
  
  // a) calculate the average scores
  function calculateAverage(scores) {

    // Calculation total
    const total = scores.reduce((sum, score) => sum + score, 0);

    // Calculation average
    return total / scores.length; 

  }
  
  // b) evaluate students
  function evaluateStudents(students) {

    return students.map(student => {
      // calculate average score
      const averageScore = calculateAverage(student.scores); 

      // determine pass/fail
      const status = averageScore >= 60 ? 'Pass' : 'Fail'; 

      return {
        id: student.id,
        name: student.name,
        // Rounded to 2 decimal 
        averageScore: parseFloat(averageScore.toFixed(2)), 
        status: status,
      };
    });
  }
  
  // Evaluate students and display the output
  const evaluatedStudents = evaluateStudents(students);
  console.log('Evaluted Students :' , evaluatedStudents );
  

// getTopScorer(students)
function getTopScorer(students){

    let topscore = 0;
    let stdnt = evaluateStudents(students);
    // console.log(stdnt);

    stdnt.map((item)=>{
        // console.log(item.averageScore);
        
        if(item.averageScore > topscore){
            
            topscore = item.averageScore
        }
    })

    stdnt.map((item)=>{
        if(item.averageScore == topscore){
            console.log('TopScorer :' , item);
            
            // classPerformance(students)
            if(item.averageScore >= 80 ){
                console.log('overall performance is : Excellent');
            }else if(item.averageScore >= 60){
                console.log('overall performance is : Good');
            }
            else{
                console.log('overall performance : Needs Improvements');
            }
        }
    })
}
getTopScorer(students);






//  3 .Task Title: Shopping Cart Manager

const products = [
    { id: 1, name: "Laptop", price: 800, quantity: 10 },
    { id: 2, name: "Phone", price: 500, quantity: 15 },
    { id: 3, name: "Headphones", price: 100, quantity: 20 },
    { id: 4, name: "Charger", price: 25, quantity: 50 },
  ];
  
  let allproducts = document.querySelector(".allproducts");
  let allcarts = document.querySelector(".allcarts");
  const cart = [];
  
  // UI map
  products.map((item) => {
    allproducts.innerHTML += 
      `<div class="item">
        <div class="productimg">${item.id}. ${item.name}</div>
        <div class="txt">
          <h3 class="name"><span class="pdctName" data-id="${item.id}">${item.name}</span></h3>
          <h3 class="price"><span class="pdctPrice" data-id="${item.id}">${item.price} </span> $ </h3>
          <h3 class="available">Available : <span class="quantity" data-id="${item.id}">${item.quantity}</span></h3>
          <div class="quentity">
            <h3>Quantity : </h3>
            <div class="counter">
              <button type="button" class="minusbtn" data-id="${item.id}">-</button>
              <span class="count" data-id="${item.id}">1</span>
              <button type="button" class="plusbtn" data-id="${item.id}">+</button>
            </div>
          </div>
          <button type="button" class="addcart" data-id="${item.id}" >Add to Cart</button>
        </div>
      </div>`;
  });
  
  // Counter for all item
  products.forEach((item) => {
    let minusbtn = document.querySelector(`.minusbtn[data-id="${item.id}"]`);
    let plusbtn = document.querySelector(`.plusbtn[data-id="${item.id}"]`);
    let count = document.querySelector(`.count[data-id="${item.id}"]`); 
    let quantity = document.querySelector(`.quantity[data-id="${item.id}"]`);
  
    // Plus Button
    plusbtn.addEventListener("click", () => {
      if (Number(count.innerHTML) < Number(quantity.innerHTML)) {
        count.innerHTML++;
      }
    });
  
    // Minus Button
    minusbtn.addEventListener("click", () => {
      if (Number(count.innerHTML) > 1) {
        count.innerHTML--;
      }
    });


    //   cart part
    let addcart = document.querySelector(`.addcart[data-id="${item.id}"]`);
    let pdctName = document.querySelector(`.pdctName[data-id="${item.id}"]`);
    let pdctPrice = document.querySelector(`.pdctPrice[data-id="${item.id}"]`);

        addcart.addEventListener('click' , ()=>{
        cart.push({
            ProductName: pdctName.innerHTML,
            SinglePrice: pdctPrice.innerHTML,
            Quantity: count.innerHTML
        });
        // console.log(cart);

        function cartbox(){
            allcarts.innerHTML = ''
            cart.forEach((item , indx)=>{
                allcarts.innerHTML +=`
                <div class="item">
                    <div class="pdct">${item.ProductName}</div>
                    <div class="singlePrice"><span>Single Price : </span>${item.SinglePrice}</div>
                    <div class="qtty"><span>Quantity : </span>${item.Quantity}</div>
                    <div class="total"><span>Total : </span>${item.SinglePrice * item.Quantity}</div>
                    <button type="button" class="deletebtn" data-btn="${indx}" ><i class="fa-solid fa-trash-can"></i></button>
                </div>
                `;
    
            });
            cart.forEach((item , indx)=>{
                let deletebtn = document.querySelector(`.deletebtn[data-btn="${indx}"]`);
        
                deletebtn.addEventListener('click' , ()=>{
                    // console.log(indx);
                    cart.splice(indx , 1);
                    cartbox()
                })
            })
        }
        cartbox()
    })
});


















let productbtn = document.querySelector('.productbtn');
let cartbtn = document.querySelector('.cartbtn');

let productsBox = document.querySelector('#products');
let cartBox = document.querySelector('#cart');









function Showcrt(){
    productsBox.style.display = 'none';
    cartBox.style.display = 'block';
    // btn css
    cartbtn.classList.add('active');
    productbtn.classList.remove('active');



}

function ShowProduct(){
    productsBox.style.display = 'block';
    cartBox.style.display = 'none';
    cartbtn.classList.remove('active');
    productbtn.classList.add('active');
    // btn css
}