const jokes = document.querySelector("#jokes");
const btn = document.querySelector("button");

const getDadJokes = async () => {
  const config = { headers: { Accept: "application/json" } };
  const res = await axios.get("https://icanhazdadjoke.com/", config);
  return res.data.joke;
};

const addDadJokes = async () => {
  const text = await getDadJokes();
  const list = document.createElement("LI");
  list.append(text);
  jokes.append(list);
};

btn.addEventListener("click", addDadJokes);
