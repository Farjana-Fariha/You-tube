const btnContainer = document.getElementById('menu-container');


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
const fetchDataByCategory = categoryId => {
   
}

fetchCategories()