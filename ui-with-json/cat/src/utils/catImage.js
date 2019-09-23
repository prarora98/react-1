export default function catImage() {
  return fetch("https://api.thecatapi.com/v1/images/search?size=short")
    .then(res => res.json())
    .then(data => data[0].url);
}
