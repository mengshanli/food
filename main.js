// document.addEventListener("DOMContentLoaded", function() {

//     const image_folder='./images/';
//     const category_en=['sashimi','donburi','sushi','handroll','others'];
//     // const category_cn=['刺身','冷食丼飯','握壽司','手卷','單點'];
//     const each_count=[2,2,2,2,2]; //每一個種類有幾張圖片，如有增減圖片，需人工手動修改

//     for (let i=0; i<category_en.length; i++){
//       for (let j=1; j<each_count[i]+1; j++){
//         let image_src=image_folder+category_en[i]+'/'+j+'.jpeg';
//         let category=document.getElementById(category_en[i]);

//         const food = document.createElement("div");
//         food.innerHTML = `        
//           <img class='col-md-5 col-10 my-3' src="${image_src}" alt="${category_en[i]+j}">
//         `;
//         category.appendChild(food);
//       }
//     }

// });





function showCategory(category) {
  document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active'));
  document.getElementById(category).classList.add('active');

  document.querySelectorAll('.category-btns .btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
}
