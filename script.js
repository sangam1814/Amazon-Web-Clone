// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Back to top functionality
    document.querySelector('.foot-panel1').addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Shopping cart counter
    const cartIcon = document.querySelector('.nav-cart');
    cartIcon.addEventListener('click', function() {
        alert('Your cart is empty. Start shopping now!');
    });
    
    // Search functionality
    const searchForm = document.querySelector('.nav-search');
    const searchIcon = document.querySelector('.search-icon');
    const searchInput = document.querySelector('.search-input');
    
    searchIcon.addEventListener('click', function() {
        if (searchInput.value.trim() !== '') {
            alert(`Searching for: ${searchInput.value}`);
        } else {
            alert('Please enter a search term');
        }
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            if (searchInput.value.trim() !== '') {
                alert(`Searching for: ${searchInput.value}`);
            } else {
                alert('Please enter a search term');
            }
        }
    });
    
    // Product box click behavior
    const productBoxes = document.querySelectorAll('.box');
    productBoxes.forEach(function(box) {
        box.addEventListener('click', function() {
            const productCategory = this.querySelector('h2').textContent;
            alert(`Exploring ${productCategory} category`);
        });
    });
    
    // Add Sign-in Dropdown
    const signInElement = document.querySelector('.nav-signin');
    signInElement.addEventListener('click', function() {
        alert('Sign in to your Amazon account');
    });
    
    // Change location
    const addressElement = document.querySelector('.nav-address');
    addressElement.addEventListener('click', function() {
        const newLocation = prompt('Enter your location:', 'India');
        if (newLocation) {
            document.querySelector('.add-second').textContent = newLocation;
        }
    });
    
    // Language selector
    const languageElement = document.querySelector('.nav-language');
    languageElement.addEventListener('click', function() {
        const languages = ['EN', 'ES', 'DE', 'FR', 'JP'];
        const currentLang = languageElement.textContent.trim().substring(0, 2);
        const currentIndex = languages.indexOf(currentLang);
        const nextIndex = (currentIndex + 1) % languages.length;
        
        // Update displayed language
        languageElement.innerHTML = `<i class="fa-solid fa-globe"></i> ${languages[nextIndex]}
                                    <span><i class="fa-sharp fa-solid fa-circle-chevron-down"></i></span>`;
    });
});
