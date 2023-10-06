export const ExtractAllVisitors = async () => {
  const res = await fetch("http://localhost:3000/api/visitors/all-visitors", {
    method: "GET",
    cache: "no-store",
  });

  return await res.json();
};

export const AddVisitors = async (data) => {
  const res = await fetch(`http://localhost:3000/api/visitors/add-visitors`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await res.json();
};
