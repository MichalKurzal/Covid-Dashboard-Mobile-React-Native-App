const getWorldwideData = async () => {
    try {
        const data = await fetch('https://disease.sh/v3/covid-19/all');
        const dataJSON = await data.json();
        return dataJSON;
    } catch (error) {
        console.log(error);
    }
};

export default getWorldwideData;
