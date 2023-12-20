import Cocktail from "../components/Cocktail";

const CocktailList = () => {

    return (
        <>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">Drink</th>
                        <th scope="col">Category</th>
                        <th scope="col">Instructions</th>
                        <th scope="col">Photo</th>
                    </tr>
                </thead>
                <tbody>
                    <Cocktail />
                </tbody>
            </table>
        </>
    )

}

export default CocktailList;