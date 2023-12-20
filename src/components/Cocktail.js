import { useEffect, useState } from "react";

const Cocktail = props => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f="+props.letter)
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setCocktails(data.drinks);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [props.letter]);

    if (error) {
        return <tr><td>Error: {error.message}</td></tr>;
    }
    else
        if (!isLoaded) {
            return <tr><td>Loading...</td></tr>;
        }
        else {
            return (
                <>
                    {cocktails.map((cocktail, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{cocktail.strDrink}</th>
                                <td>{cocktail.strCategory}</td>
                                <td>{cocktail.strInstructions}</td>
                                <td><img src={cocktail.strDrinkThumb} style={{ maxWidth: '100px' }} /></td>
                            </tr>
                        );
                    }
                    )}
                </>
            );
        }

}

export default Cocktail;