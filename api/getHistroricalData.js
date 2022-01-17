const headers = {'Cache-Control': 'no-cache', Pragma: 'no-cache'};

const getHistoricalData = async () => {
    try {
        const data = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=30', {
            headers,
        });
        const dataJSON = await data.json();
        return dataJSON;
    } catch (error) {
        console.log(error);
    }
};

export default getHistoricalData;
