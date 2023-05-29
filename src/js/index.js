
import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const loader = document.querySelector('.loader');
const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const catImage = document.querySelector('.cat-image');
const breedName = document.querySelector('.breed-name');
const description = document.querySelector('.description');
const temperament = document.querySelector('.temperament');
const error = document.querySelector('.error');

// Function to hide the loader
function hideLoader() {
  loader.style.display = 'none';
}

// Function to show the loader
function showLoader() {
  loader.style.display = 'block';
}

// Function to hide the error message
function hideError() {
  error.style.display = 'none';
}

// Function to show the error message
function showError() {
  error.style.display = 'block';
}

// Function to update the cat info based on the selected breed
function updateCatInfo(breedId) {
  showLoader();
  hideError();
  catInfo.style.display = 'none';

  fetchCatByBreed(breedId)
    .then(data => {
      const cat = data[0];
      catImage.src = cat.url;
      breedName.textContent = cat.breeds[0].name;
      description.textContent = cat.breeds[0].description;
      temperament.textContent = cat.breeds[0].temperament;
      catInfo.style.display = 'block';
    })
    .catch(() => {
      showError();
    })
    .finally(() => {
      hideLoader();
    });
}

// Function to populate the breed select options
function populateBreedSelect(breeds) {
  breeds.forEach(breed => {
    const option = document.createElement('option');
    option.value = breed.id;
    option.textContent = breed.name;
    breedSelect.appendChild(option);
  });
}

// Event listener for breed select change
breedSelect.addEventListener('change', event => {
  const breedId = event.target.value;
  updateCatInfo(breedId);
});

// Initialization
showLoader();
hideError();

fetchBreeds()
  .then(breeds => {
    populateBreedSelect(breeds);
    hideLoader();
  })
  .catch(() => {
    showError();
    hideLoader();
  });
