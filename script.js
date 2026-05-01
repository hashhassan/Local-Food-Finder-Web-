// for food filtering function 
function filterFood(category) {

    const cards = document.querySelectorAll('.card');

    const buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach(function(btn) {
        btn.classList.remove('active');
    });

    event.target.classList.add('active');

    cards.forEach(function(card) {

        const cardCategory = card.getAttribute('data-category');

        if (category === 'all') {
            card.style.display = 'block';
        }
        else if (cardCategory.includes(category)) {
            card.style.display = 'block';
        }
        else {
            card.style.display = 'none';
        }
    });
}
// for food search function
function searchFood() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    const noResults = document.getElementById('no-results');
    const searchTerm = document.getElementById('search-term');

    let visibleCount = 0;

    cards.forEach(function(card) {
        const name = card.querySelector('h3').textContent.toLowerCase();
        const location = card.querySelector('.location').textContent.toLowerCase();

        if (name.includes(input) || location.includes(input)) {
            card.style.display = 'block';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    if (visibleCount === 0 && input !== '') {
        searchTerm.textContent = input;
        noResults.style.display = 'block';
    } else {
        noResults.style.display = 'none';
    }
}

function clearSearch() {
    document.getElementById('searchInput').value = '';
    searchFood();
}

function loadSearchFromURL() {
    const params = new URLSearchParams(window.location.search);
    const search = params.get('search');

    if (search) {
        const input = document.getElementById('searchInput');
        if (input) {
            input.value = search;
            searchFood();
        }
    }
}

loadSearchFromURL();

function redirectSearch() {
    const input = document.getElementById('homeSearch').value.trim();
    if (input !== '') {
        window.location.href = 'foods.html?search=' + encodeURIComponent(input);
    } else {
        window.location.href = 'foods.html';
    }
}




// Data for food details page - in a real application this would come from a database or API
const foods = [
    {
        id: 1,
        name: "Paye Nihari",
        img: "images/nihari.jpg",
        desc: "Rich slow-cooked meat stew served with hot naan. A must-try breakfast in Rawalpindi. The nihari is slow-cooked overnight and served hot every morning with freshly baked naan.",
        restaurant: "Khan Nihari House",
        famous: "Paye Nihari, Halwa Puri",
        location: "Bhabra Bazaar, Rawalpindi",
        price: "Rs. 200 – Rs. 800 per person",
        hours: "5:00 AM – 12:00 PM",
        rating: "⭐⭐⭐⭐☆ 4 out of 5"
    },
    {
        id: 2,
        name: "Chapli Kebab",
        img: "images/kebab.jpg",
        desc: "Spicy and crispy minced meat patties, a famous street food near Raja Bazaar. Served hot with naan and chutney.",
        restaurant: "Raja Kebab Corner",
        famous: "Chapli Kebab, Seekh Kebab",
        location: "Raja Bazaar, Rawalpindi",
        price: "Rs. 150 – Rs. 500 per person",
        hours: "12:00 PM – 11:00 PM",
        rating: "⭐⭐⭐⭐⭐ 5 out of 5"
    },
    {
        id: 3,
        name: "Chicken Karahi",
        img: "images/ChickKarahi.jpg",
        desc: "Fresh tomato-based spicy chicken dish cooked in a traditional iron wok. Very popular for dinner in Islamabad.",
        restaurant: "F-10 Karahi House",
        famous: "Chicken Karahi, Mutton Karahi",
        location: "F-10 Markaz, Islamabad",
        price: "Rs. 800 – Rs. 1500 per karahi",
        hours: "1:00 PM – 1:00 AM",
        rating: "⭐⭐⭐⭐☆ 4 out of 5"
    },
    {
        id: 4,
        name: "Seekh Kebab",
        img: "images/sekhkebab.jpg",
        desc: "Minced meat skewers grilled over coal fire. Popular at BBQ stalls in Saddar Rawalpindi especially in the evening.",
        restaurant: "Saddar BBQ Point",
        famous: "Seekh Kebab, Boti Kebab",
        location: "Saddar, Rawalpindi",
        price: "Rs. 200 – Rs. 600 per person",
        hours: "5:00 PM – 12:00 AM",
        rating: "⭐⭐⭐⭐☆ 4 out of 5"
    },
    {
        id: 5,
        name: "Halwa Puri",
        img: "images/halwa puri.jpg",
        desc: "Deep-fried bread with sweet semolina halwa and spicy chana. A classic Sunday breakfast enjoyed by families across Islamabad.",
        restaurant: "G-11 Nashta Corner",
        famous: "Halwa Puri, Channay, Aloo Bhujia",
        location: "G-11 Markaz, Islamabad",
        price: "Rs. 150 – Rs. 400 per person",
        hours: "6:00 AM – 12:00 PM",
        rating: "⭐⭐⭐⭐☆ 4 out of 5"
    },
    {
        id: 6,
        name: "Dahi Bhalle",
        img: "images/dahibarha.jpg",
        desc: "Soft lentil dumplings topped with yogurt, tamarind chutney and chaat masala. A popular street snack in Bahria Town.",
        restaurant: "Bahria Chaat House",
        famous: "Dahi Bhalle, Gol Gappay, Papri Chaat",
        location: "Bahria Town, Rawalpindi",
        price: "Rs. 100 – Rs. 300 per person",
        hours: "12:00 PM – 10:00 PM",
        rating: "⭐⭐⭐☆☆ 3 out of 5"
    },
    {
        id: 7,
        name: "Mutton Boti",
        img: "images/muttonboti.jpg",
        desc: "Tender marinated mutton pieces grilled on coal. A popular BBQ dish in Islamabad enjoyed in the evening.",
        restaurant: "F-7 BBQ Tonight",
        famous: "Mutton Boti, Seekh Kebab, Tikka",
        location: "F-7 Markaz, Islamabad",
        price: "Rs. 500 – Rs. 1200 per person",
        hours: "6:00 PM – 1:00 AM",
        rating: "⭐⭐⭐⭐⭐ 5 out of 5"
    },
    {
        id: 8,
        name: "Rabri Kheer",
        img: "images/kheer.jpg",
        desc: "Traditional dessert made with thickened milk and rice. Very popular in the twin cities especially after dinner.",
        restaurant: "Saddar Sweet House",
        famous: "Rabri Kheer, Jalebi, Gulab Jamun",
        location: "Saddar, Rawalpindi",
        price: "Rs. 100 – Rs. 300 per person",
        hours: "9:00 AM – 11:00 PM",
        rating: "⭐⭐⭐⭐☆ 4 out of 5"
    },
    {
        id: 9,
        name: "Chicken Biryani",
        img: "images/biryani.jpg",
        desc: "Aromatic rice cooked with spiced chicken, a popular lunch dish across Islamabad. Served with raita and salad.",
        restaurant: "G-9 Biryani House",
        famous: "Chicken Biryani, Beef Biryani",
        location: "G-9 Markaz, Islamabad",
        price: "Rs. 300 – Rs. 700 per person",
        hours: "11:00 AM – 10:00 PM",
        rating: "⭐⭐⭐⭐☆ 4 out of 5"
    },
    {
        id: 10,
        name: "Beef Pulao",
        img: "images/pulao.jpg",
        desc: "Tender beef pieces slow-cooked with fragrant rice, a Rawalpindi dhaba favourite for lunch and dinner.",
        restaurant: "Murree Road Dhaba",
        famous: "Beef Pulao, Chicken Pulao",
        location: "Murree Road, Rawalpindi",
        price: "Rs. 250 – Rs. 600 per person",
        hours: "11:00 AM – 11:00 PM",
        rating: "⭐⭐⭐⭐☆ 4 out of 5"
    },
    {
        id: 11,
        name: "Gol Gappay",
        img: "images/golgappay.jpg",
        desc: "Crispy hollow puris filled with spiced water and chickpeas. A favourite street snack enjoyed by everyone in Islamabad.",
        restaurant: "I-8 Chaat Stall",
        famous: "Gol Gappay, Dahi Bhalle, Chaat",
        location: "I-8 Markaz, Islamabad",
        price: "Rs. 80 – Rs. 200 per person",
        hours: "3:00 PM – 10:00 PM",
        rating: "⭐⭐⭐⭐☆ 4 out of 5"
    },
    {
        id: 12,
        name: "Lahori Chargha",
        img: "images/chargha.jpg",
        desc: "Whole deep-fried chicken marinated in spices. Available at famous dhabas along Murree Road in Rawalpindi.",
        restaurant: "Murree Road Chargha Point",
        famous: "Lahori Chargha, Karahi",
        location: "Murree Road, Rawalpindi",
        price: "Rs. 700 – Rs. 1200 per chicken",
        hours: "12:00 PM – 12:00 AM",
        rating: "⭐⭐⭐⭐⭐ 5 out of 5"
    }
];

function loadDetails() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    const food = foods.find(function(f) { return f.id === id; });

    if (!food) return;

    document.getElementById('detail-img').src = food.img;
    document.getElementById('detail-img').alt = food.name;
    document.getElementById('detail-name').textContent = food.name;
    document.getElementById('detail-desc').textContent = food.desc;
    document.getElementById('detail-restaurant').textContent = food.restaurant;
    document.getElementById('detail-famous').textContent = food.famous;
    document.getElementById('detail-location').textContent = food.location;
    document.getElementById('detail-price').textContent = food.price;
    document.getElementById('detail-hours').textContent = food.hours;
    document.getElementById('detail-rating').textContent = food.rating;
}

loadDetails();