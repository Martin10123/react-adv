import ProductCard from "../components";
import { ProductButtons, ProductImage, ProductTitle } from "../components";

import "../styles/custom-styles.css";

const product = {
  id: "1",
  title: "Coffe Mug - Card",
  img: "../../../public/coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={product}>
          <ProductCard.Image />

          <ProductCard.Title title="Cafeteraaaaa" />

          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product} className="bg-dark">
          <ProductImage className="custom-image" />

          <ProductTitle className="text-white" />

          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard
          product={product}
          style={{
            background: "#0099ff",
            color: "#fff",
          }}
        >
          <ProductImage />

          <ProductTitle />

          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
