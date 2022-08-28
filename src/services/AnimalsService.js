// const baseURL = 'http://localhost:3000/api/animals';
const baseURL = "/.netlify/functions/"

const AnimalsService = {
    getAnimals() {
        console.log("ANIMAL SERVICE")
        return fetch(baseURL + "read-all")
            .then(res => res.json());
    }
};

export default AnimalsService;