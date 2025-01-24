const url = new URL(location.href);
const cityName = url.searchParams.get("cityName");

if (!cityName) {
  alert("City name not provided in the URL!");
} else {
  name_of_city.innerText = cityName;
}

const reviews_API_Link = "https://295c58cb-4830-44a8-9cdd-b5fcf1cecfc5-00-n809s5mte2vu.worf.replit.dev/api/v1/reviews/";

const main = document.getElementById("section");

// New Review Form
const div_new = document.createElement('div');
div_new.innerHTML = `
  <div class="row">
    <div class="column">
      <div class="card">
          New Review
          <p><strong>Review: </strong>
            <input type="text" id="new_review" value="">
          </p>
          <p><strong>User: </strong>
            <input type="text" id="new_user" value="">
          </p>
          <p><button class="submit-btn" onclick="saveReview('new_review', 'new_user')">Submit Review</button></p>
          </p>
      </div>
    </div>
  </div>
`;
main.appendChild(div_new);

// Fetch and Display Reviews
returnReviews(reviews_API_Link);

function returnReviews(url) {
  fetch(url + cityName)
    .then(res => res.json())
    .then(function(data) {
      console.log(data);
      data.forEach(review => {
        const div_card = document.createElement('div');
        div_card.innerHTML = `
          <div class="row">
            <div class="column">
              <div class="card" id="${review._id}">
                <p><strong>Review: </strong>${review.review}</p>
                <p><strong>User: </strong>${review.user}</p>
                <p>
                  <a href="#" onclick="editReview('${review._id}', '${review.review}', '${review.user}')">✏️</a>
                  <a href="#" onclick="deleteReview('${review._id}')">🗑</a>
                </p>
              </div>
            </div>
          </div>
        `;
        main.appendChild(div_card);
      });
    })
    .catch(err => console.error("Error fetching reviews:", err));
}

function editReview(id, review, user) {
  const element = document.getElementById(id);
  const reviewInputId = "review" + id;
  const userInputId = "user" + id;

  element.innerHTML = `
    <p><strong>Review: </strong>
      <input type="text" id="${reviewInputId}" value="${review}">
    </p>
    <p><strong>User: </strong>
      <input type="text" id="${userInputId}" value="${user}">
    </p>
   <p><button class="submit-btn" onclick="saveReview('${reviewInputId}', '${userInputId}', '${id}')">Submit Review</button></p>
  `;
}

function saveReview(reviewInputId, userInputId, id = "") {
  const review = document.getElementById(reviewInputId).value;
  const user = document.getElementById(userInputId).value;

  const method = id ? 'PUT' : 'POST';
  const url = id ? reviews_API_Link + id : reviews_API_Link + "new";

  fetch(url, {
    method,
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user, review, cityName })
  })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      location.reload();
    })
    .catch(err => console.error("Error saving review:", err));
}

function deleteReview(id) {
  fetch(reviews_API_Link + id, {
    method: 'DELETE'
  })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      location.reload();
    })
    .catch(err => console.error("Error deleting review:", err));
}
