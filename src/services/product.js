export const ExtractAllProduct = async () => {
 const res = await fetch("http://localhost:3000/api/product/all-product", {
   method: "GET",
   cache: "no-store",
 });

 return await res.json();
};