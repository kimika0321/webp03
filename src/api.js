export async function fetchImages(breed) {
    const response = await fetch(
      `https://dog.ceo/api/breeds/image/random/3`
    );
    const data = await response.json();
    return data.message;
  }