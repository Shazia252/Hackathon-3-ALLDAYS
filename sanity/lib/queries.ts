import { groq } from "next-sanity";

// Fetch all products
export const allProducts = groq`
  *[_type == "product"] {
    _id,
    name,
    description,
    price,
    discountPercentage,
    isFeaturedProduct,
    stockLevel,
    category,
    "imageUrl": image.asset->url,
    "slug": slug.current
  }
`;

// Fetch only the first 4 products
export const four = groq`
  *[_type == "product"][0..3] {
    _id,
    productName,
    description,
    price,
    discountPercentage,
    isFeaturedProduct,
    stockLevel,
    category,
    "imageUrl": image.asset->url,
    "slug": slug.current
  }
`;
