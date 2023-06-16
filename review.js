document.addEventListener('DOMContentLoaded', function () {
    const reviewForm = document.getElementById('reviewform');
    const nameInput = document.getElementById('namereview');
    const reviewInput = document.getElementById('messagereview');
    const reviewsContainer = document.getElementById('reviewOutPut');

    reviewForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = nameInput.value;
        const review = reviewInput.value;

        if (name.trim() === '' || review.trim() === '') {
            alert('Пожалуйста, заполните все поля');
            return;
        }

        const reviewItem = document.createElement('div');
        reviewItem.classList.add('review');
        reviewItem.innerHTML = `
        <h2>Имя:</h2>
        <p class="name">${name}</p>
        <h2>Сообщение:</h2>
        <p class="text">${review}</p>
      `;

        reviewsContainer.appendChild(reviewItem);

        nameInput.value = '';
        reviewInput.value = '';

        saveReview(name, review);
    });

    loadReviews();

    function saveReview(name, review) {
        let reviews = localStorage.getItem('reviews');

        if (reviews === null) {
            reviews = [];
        } else {
            reviews = JSON.parse(reviews);
        }

        reviews.push({name, review});

        localStorage.setItem('reviews', JSON.stringify(reviews));
    }

    function loadReviews() {
        let reviews = localStorage.getItem('reviews');

        if (reviews !== null) {
            reviews = JSON.parse(reviews);

            reviews.forEach(function (review) {
                const reviewItem = document.createElement('div');
                reviewItem.classList.add('review');
                reviewItem.innerHTML = `
            <h2>Имя:</h2>
            <p class="name">${review.name}</p>
            <h2>Сообщение:</h2>
            <p class="text">${review.review}</p>
          `;
                reviewsContainer.appendChild(reviewItem);
            });
        }
    }
});