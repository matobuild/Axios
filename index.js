// axios.get("https://swapi.dev/api/people/1/")
// .then((res) => {
//     console.log("SUCCESS,", res);
//     console.log(res.data);
// }).catch((err) => {
//     console.log(err);
// });



// const makeAxiosRequest = async (id) => {
//   try {
//     const res = await axios.get(`https://swapi.dev/api/people/${id}`);
//     console.log(res);
//     console.log("SUCCESS,", res.data.name);
//   } catch (error) {
//     console.log(error);
//   }
// };

// makeAxiosRequest(2) 
// makeAxiosRequest(4) 
// makeAxiosRequest(5) 





const renderJoke = async () => {
    const jokeString = await getDadJoke()
    const ulEle = document.querySelector('#joke')
    const liELe = document.createElement('li')
    liELe.append(jokeString)
    ulEle.append(liELe)
}


const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get(`https://icanhazdadjoke.com/`, config)
        
        // console.log("SUCCESS,", res);
        // console.log(res.data.joke);
        return res.data.joke
        
    } catch (error) {
        return "no joke available"
    }
};

const buttonEle = document.querySelector('button');
buttonEle.addEventListener('click', renderJoke) 

