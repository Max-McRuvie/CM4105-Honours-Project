export default async function GetFoodInformation (data) {
    console.log("Getting food information");
        await fetch('https://world.openfoodfacts.org/api/v2/product/' + data + '?fields=product_name,nutriscore_data,ingredients', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },  
        })
        .then((response) => response.json())
        .then(response => {
            console.log(response);
        })
};