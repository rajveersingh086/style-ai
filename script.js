document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const authButtons = document.querySelector('.auth-buttons');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        authButtons.classList.toggle('active');
    });

    // Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentTestimonial = 0;
    let testimonialInterval;

    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        testimonials[index].classList.add('active');
        dots[index].classList.add('active');
        currentTestimonial = index;
    }

    function startTestimonialRotation() {
        testimonialInterval = setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }, 5000);
    }

    function stopTestimonialRotation() {
        clearInterval(testimonialInterval);
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopTestimonialRotation();
            showTestimonial(index);
            startTestimonialRotation();
        });
    });

    prevBtn.addEventListener('click', () => {
        stopTestimonialRotation();
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentTestimonial);
        startTestimonialRotation();
    });

    nextBtn.addEventListener('click', () => {
        stopTestimonialRotation();
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
        startTestimonialRotation();
    });

    // Start auto-rotation
    startTestimonialRotation();

    // Wardrobe Tab System
    const tabButtons = document.querySelectorAll('.tab-btn');
    const wardrobeItems = document.querySelector('.wardrobe-items');

    // Combined wardrobe data with real images
    const wardrobeData = {
        shirts: [
            { id: 1, name: 'White T-Shirt', color: 'white', type: 'casual', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
            { id: 2, name: 'Blue Button-Up', color: 'blue', type: 'business', image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
            { id: 3, name: 'Black Polo', color: 'black', type: 'casual', image: 'https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
            { id: 4, name: 'Striped Shirt', color: 'multicolor', type: 'casual', image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
            { id: 5, name: 'Denim Shirt', color: 'blue', type: 'casual', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
            { id: 6, name: 'Formal White Shirt', color: 'white', type: 'business', image: 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' }
        ],
        pants: [
            { id: 7, name: 'Blue Jeans', color: 'blue', type: 'casual', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
            { id: 8, name: 'Black Chinos', color: 'black', type: 'business', image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
            { id: 9, name: 'Gray Dress Pants', color: 'gray', type: 'business', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
            { id: 10, name: 'Beige Khakis', color: 'beige', type: 'casual', image: 'https://via.placeholder.com/200?text=Beige+Khakis' }
        ],
        shoes: [
            { id: 11, name: 'White Sneakers', color: 'white', type: 'casual', image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
            { id: 12, name: 'Black Dress Shoes', color: 'black', type: 'business', image: 'https://via.placeholder.com/200?text=Black+Dress' },
            { id: 13, name: 'Brown Loafers', color: 'brown', type: 'business', image: 'https://via.placeholder.com/200?text=Brown+Loafers' }
        ],
        accessories: [
            { id: 14, name: 'Leather Belt', color: 'brown', type: 'business', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
            { id: 15, name: 'Baseball Cap', color: 'blue', type: 'casual', image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
            { id: 16, name: 'Silk Tie', color: 'red', type: 'business', image: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
            { id: 17, name: 'Silver Watch', color: 'silver', type: 'accessory', image: 'https://via.placeholder.com/200?text=Silver+Watch' }
        ]
    };

    // Enhanced render function with item details overlay
    function renderWardrobeItems(category) {
        wardrobeItems.innerHTML = '';
        const items = wardrobeData[category] || [];
        
        items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'wardrobe-item';
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="item-overlay">
                    <h4>${item.name}</h4>
                    <p>Color: ${item.color}</p>
                    <p>Type: ${item.type}</p>
                    <div class="item-actions">
                        <button class="btn small edit-btn" data-id="${item.id}">Edit</button>
                        <button class="btn small delete-btn" data-id="${item.id}">Delete</button>
                    </div>
                </div>
            `;
            wardrobeItems.appendChild(itemElement);
        });

        // Add event listeners for the new buttons
        document.querySelectorAll('.edit-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const itemId = parseInt(e.target.dataset.id);
                editItem(itemId);
            });
        });

        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const itemId = parseInt(e.target.dataset.id);
                deleteItem(itemId, category);
            });
        });
    }

    function editItem(itemId) {
        // Find the item in any category
        let itemToEdit = null;
        let category = '';
        
        for (const cat in wardrobeData) {
            const foundItem = wardrobeData[cat].find(item => item.id === itemId);
            if (foundItem) {
                itemToEdit = foundItem;
                category = cat;
                break;
            }
        }
        
        if (!itemToEdit) return;

        // In a real app, you would show a modal with a form to edit the item
        const newName = prompt('Edit item name:', itemToEdit.name);
        if (newName !== null) {
            itemToEdit.name = newName;
            renderWardrobeItems(category);
        }
    }

    function deleteItem(itemId, category) {
        if (confirm('Are you sure you want to delete this item?')) {
            wardrobeData[category] = wardrobeData[category].filter(item => item.id !== itemId);
            renderWardrobeItems(category);
        }
    }

    // Set default tab
    tabButtons[0].classList.add('active');
    renderWardrobeItems('shirts');

    // Tab switching
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            renderWardrobeItems(button.dataset.category);
        });
    });

    // Upload functionality - Fixed version
    const uploadBtn = document.querySelector('.upload-btn');
    const fileInput = document.getElementById('clothing-upload');

    uploadBtn.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', function(e) {
        if (this.files && this.files.length > 0) {
            const file = this.files[0];
            
            // Validate image type
            if (!file.type.match('image.*')) {
                alert('Please select an image file (JPEG, PNG, etc.)');
                return;
            }
            
            // Create object URL for preview
            const imageUrl = URL.createObjectURL(file);
            
            // For demo purposes, we'll add the uploaded image to the wardrobe
            const activeTab = document.querySelector('.tab-btn.active');
            const category = activeTab.dataset.category;
            
            const newItem = {
                id: Date.now(),
                name: `Uploaded ${category.slice(0, -1)}`,
                color: 'unknown',
                type: 'casual',
                image: imageUrl
            };
            
            if (!wardrobeData[category]) {
                wardrobeData[category] = [];
            }
            
            wardrobeData[category].push(newItem);
            renderWardrobeItems(category);
            
            // Reset the file input
            this.value = '';
            
            // In a real app, you would upload to a server here
            // and replace the object URL with a permanent one
            /*
            const formData = new FormData();
            formData.append('image', file);
            
            fetch('/upload-endpoint', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                // Replace temporary URL with permanent one
                newItem.image = data.imageUrl;
                renderWardrobeItems(category);
                URL.revokeObjectURL(imageUrl); // Clean up
            })
            .catch(error => {
                console.error('Upload failed:', error);
                // Handle error (maybe remove the temporary item)
            });
            */
        }
    });

    // Form submission for adding new items
    const addItemForm = document.querySelector('#add-item-form');
    if (addItemForm) {
        addItemForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const newItem = {
                id: Date.now(),
                name: formData.get('name'),
                color: formData.get('color'),
                type: formData.get('type'),
                image: formData.get('image-url') || 'https://via.placeholder.com/200'
            };
            
            const category = formData.get('category');
            if (!wardrobeData[category]) {
                wardrobeData[category] = [];
            }
            wardrobeData[category].push(newItem);
            
            // Update the display
            const activeTab = document.querySelector('.tab-btn.active');
            renderWardrobeItems(activeTab.dataset.category);
            
            // Reset form
            this.reset();
            
            // Show success message
            const successMsg = document.createElement('div');
            successMsg.className = 'success-message';
            successMsg.textContent = 'Item added successfully!';
            this.appendChild(successMsg);
            
            setTimeout(() => {
                successMsg.remove();
            }, 3000);
        });
    }

    // Outfit Generation
    const generateBtn = document.querySelector('.generate-btn');
    const occasionSelect = document.getElementById('occasion-select');
    const outfitGrid = document.querySelector('.outfit-grid');
    const loadingSpinner = document.querySelector('.loading-spinner');

    // Sample outfit data
    const sampleOutfits = {
        casual: [
            { 
                name: 'Casual Weekend', 
                description: 'Perfect for a relaxed day out', 
                items: [
                    { name: 'White T-Shirt', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
                    { name: 'Blue Jeans', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
                    { name: 'White Sneakers', image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' }
                ]
            }
        ],
        business: [
            { 
                name: 'Office Ready', 
                description: 'Professional and polished', 
                items: [
                    { name: 'Blue Button-Up', image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
                    { name: 'Gray Dress Pants', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
                    { name: 'Black Dress Shoes', image: 'https://via.placeholder.com/200?text=Black+Dress' }
                ]
            }
        ]
        // Other outfit types...
    };

    generateBtn.addEventListener('click', function() {
        const occasion = occasionSelect.value;
        
        loadingSpinner.style.display = 'block';
        outfitGrid.innerHTML = '';
        
        setTimeout(() => {
            loadingSpinner.style.display = 'none';
            
            const outfits = sampleOutfits[occasion] || [];
            
            if (outfits.length === 0) {
                outfitGrid.innerHTML = '<p class="no-outfits">No outfits found for this occasion.</p>';
                return;
            }
            
            outfits.forEach(outfit => {
                const outfitCard = document.createElement('div');
                outfitCard.className = 'outfit-card';
                
                const mainImage = outfit.items[0].image;
                const thumbnails = outfit.items.map(item => 
                    `<img src="${item.image}" alt="${item.name}" title="${item.name}" class="outfit-thumbnail">`
                ).join('');
                
                outfitCard.innerHTML = `
                    <img src="${mainImage}" alt="${outfit.name}" class="outfit-main-image">
                    <div class="outfit-details">
                        <h4>${outfit.name}</h4>
                        <p class="outfit-description">${outfit.description}</p>
                        <div class="outfit-items">
                            <p class="outfit-includes"><strong>Includes:</strong></p>
                            <div class="outfit-thumbnails">${thumbnails}</div>
                        </div>
                        <div class="outfit-actions">
                            <button class="btn secondary save-outfit">Save</button>
                            <button class="btn primary view-details">View Details</button>
                        </div>
                    </div>
                `;
                
                outfitCard.querySelector('.save-outfit').addEventListener('click', () => {
                    alert(`Outfit "${outfit.name}" saved!`);
                });
                
                outfitCard.querySelector('.view-details').addEventListener('click', () => {
                    alert(`Viewing details for "${outfit.name}"`);
                });
                
                outfitGrid.appendChild(outfitCard);
            });
        }, 1500);
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                navLinks.classList.remove('active');
                authButtons.classList.remove('active');
            }
        });
    });

    // Get Started button
    document.querySelector('.get-started').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.outfit-generator').scrollIntoView({
            behavior: 'smooth'
        });
    });
});