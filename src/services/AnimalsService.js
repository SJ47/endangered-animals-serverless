// const baseURL = 'http://localhost:3000/api/animals';
const baseURL = "/.netlify/functions/"
// const baseURL = "http://localhost:8888/"
const AnimalsService = {
    getAnimals() {
        console.log("ANIMAL SERVICE", baseURL + "read-all")
        return fetch(baseURL + "read-all")
            .then(res => res.json());
    }
};

export default AnimalsService;