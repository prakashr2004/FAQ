var list = document.querySelectorAll("span")
var hideContent = document.querySelectorAll(".notview")

var listCollation;
var currentValueCollation;

list.forEach( (value,index) =>{

   // listCollation = index;

   // console.log(listCollation)
   value.addEventListener("click",()=>{
      
      // value.classList.remove("notview");
      // value.classList.add("view");
   hideContent.forEach((currentValue,indexNew)=>{
     
   // currentValueCollation = indexNew ;

   console.log(index == indexNew )

   if(index == indexNew )
   {
      currentValue.classList.toggle("view")
   }
   else{

      currentValue.classList.remove("view")
      currentValue.classList.add("notview")
   }
   })

  })
})

