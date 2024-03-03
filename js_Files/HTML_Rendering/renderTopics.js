import { renderRating } from "./renderRating.js";


export const renderCards = async function(myData) {
    const allCategory = new Set();
    const courseContainer = document.getElementById("courses");
    let html = ``;
    myData.forEach(courseElement => {
        if(!allCategory.has(courseElement.category)){
            allCategory.add(courseElement.category);
        }
        // create course card a > img , info ...
        html += `
            <a href="./details.html?id=${courseElement.id}" class="course" id="${courseElement.id}">
              <img src="./Logos/${courseElement.image}" alt="${courseElement.topic} course logo" class="img-in-box"/>
              <div class="course-info">
                <h4 class="category">${courseElement.category}</h4>
                <h5 class="topic">${courseElement.topic}</h5>
                <div class="rating">
                  ${renderRating(courseElement.rating)}
                </div>
                <p class="name">Author: ${courseElement.name}</p>
              </div>
            </a>
    `;
        courseContainer.innerHTML = html; // push each course data into main courses container
    });
    return allCategory;
}