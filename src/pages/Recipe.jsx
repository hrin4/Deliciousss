import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DetailWrapper, Button, Info } from "./styles";

function Recipe() {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("about");
  let params = useParams();

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image}></img>
      </div>
      <Info>
        <Button
          className={activeTab === "about" ? "active" : ""}
          onClick={() => setActiveTab("about")}
        >
          About
        </Button>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        {activeTab === "about" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
          </div>
        )}
        {activeTab === "instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>
                <h4>{ingredient.original}</h4>
              </li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

export default Recipe;
