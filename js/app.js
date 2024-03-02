const btnContainer = document.getElementById('menu-container');
const cardContainer = document.getElementById('card-container');


// dynamic button
const fetchCategories = async() => {
   const url = 'https://openapi.programming-hero.com/api/videos/categories';
   const res = await fetch(url);
   const data = await res.json();
   displayBtn(data.data)
}
const displayBtn = data => {
   data.forEach(card => {
      const btn = document.createElement('button');
      // console.log(card);
      btn.innerText = card.category;
      btn.classList = 'btn btn-lg font-semibold text-xl mx-4';
      btn.addEventListener('click', () => fetchDataByCategory(card.category_id))
      btnContainer.appendChild(btn);
   })
}
const fetchDataByCategory = async(categoryId) => {
   cardContainer.innerHTML = ''
   // fetch card content
   const url = `https://openapi.programming-hero.com/api/videos/category/${categoryId}`;
      const res = await fetch(url);
      const data = await res.json();
      displayCard(data.data);
}
const displayCard = (cards) => {
   cards.forEach(card => {
      const div = document.createElement('div');
      // console.log(card.authors[0].profile_picture);
      div.innerHTML = `
      <div class="card card-compact w-96 bg-base-100 shadow-xl my-8">
      <figure><img class="rounded-2xl" src="${card.thumbnail}"
          alt="Shoes" /></figure>
      <div class="card-body flex flex-row">
        <div class="chennel-profile-img w-12">
          <img class="w-full rounded-full" src="${card.authors[0].profile_picture}" alt="">
        </div>
        <div class="card-content space-y-2">
          <h3 class="card-title font-extrabold">${card.title}</h3>
          <p>${card.authors[0].profile_name}</p>
          <p>${card.others.views} views</p>
        </div>
      </div>
    </div>
      `

      ;
    cardContainer.appendChild(div);

   })
}

fetchCategories()

// {
//    "category_id": "1001",
//    "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//    "title": "Shape of You",
//    "authors": [
//        {
//            "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//            "profile_name": "Olivia Mitchell",
//            "verified": ""
//        }
//    ],
//    "others": {
//        "views": "100K",
//        "posted_date": "16278"
//    }
// }