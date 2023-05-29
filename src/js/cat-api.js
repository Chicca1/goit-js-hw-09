
export function fetchBreeds() {
  return fetch('https://api.thecatapi.com/v1/breeds', {
    headers: {
      'x-api-key': 'live_Irm4tj1sTM90OaI4p93j1uGBknX1wNeOFv6k8ufRlok3tRYdEMDG6ugOkfc4B5Af'
    }
  })
    .then(response => response.json())
    .then(data => data)
    .catch(error => {
      console.error('Error fetching breeds:', error);
      throw error;
    });
}

export function fetchCatByBreed(breedId) {
  const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;

  return fetch(url, {
    headers: {
      'x-api-key': 'live_Irm4tj1sTM90OaI4p93j1uGBknX1wNeOFv6k8ufRlok3tRYdEMDG6ugOkfc4B5Af'
    }
  })
    .then(response => response.json())
    .then(data => data)
    .catch(error => {
      console.error('Error fetching cat:', error);
      throw error;
    });
}
