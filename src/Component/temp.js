// let arr = [1, 2, 3, 4, 2, 7, 8, 8, 3];   
// let temp=[];

// for(let i=0;i<arr.length;i++)
// {
//    let isDuplicate=false;
//     for(let  j=0;j<temp.length;j++)
//     {
           
//         if(arr[i]===temp[j])
//         {
//              isDuplicate=true;
//              break;
//         }
         
//     }
//     if(!isDuplicate)
//     {
//          temp.push(arr[i]);
//     }
// }
// console.log(temp);

var myArrA=[20,30,56,55,40];

// Output should be 2,3,6,5,4
let result=[];


for(let i=0;i<myArrA.length;i++)
{
    const num1=myArrA[i]/10;
    // console.log(num1);
    const num2=num1%1;
    console.log(num2);
    const num3=Math.ceil(num2*10);
    if(num3>5)
    {
        result.push(parseInt(num1)+1);
    }
    else
    {
        result.push(parseInt(num1));
         
    }


}

console.log(result);





// // div {

// //    width: 310px;        310+
//                             20+
//                              5;

// //    padding: 20px;

// //    border: 5px solid blue;

// //    margin: 0;

// //  }

//     // colspan = 2 column

//    let arr = [1, 2, 3, 4, 2, 7, 8, 8, 3]; 
//    let temp=[];
   

//  for(let i=0;i<arr.length;i++)
//  {
//     for(let j=i+1;j<arr.length;j++)
//     {

//         if(arr[i]==arr[j])
//         {
//             break;
//         }
//         else
//         {
//              temp.push(arr[i]);
//         }
//         // console.log(arr[i],arr[j]);
//     }
//  }

//  console.log(temp)

    