function CharacterIntro() {
  return React.createElement(
    "div",
    { className: "character-card" },
    React.createElement(
      "div",
      { className: "character-header" },
      React.createElement("h1", null, "Kitasan Black"),
      React.createElement("h3", null, "VA: Hinaki Yano")
    ),
    React.createElement(
      "div",
      { className: "character-description" },
      React.createElement(
        "p",
        null,
        "Ever bright and cheerful, she loves festivals more than anyone else. Her innate altruism makes her unable to ignore a person in need, and she's always ready to lend an ear. Her bottomless kindness has earned her the admiration of those around her, but when she gets too excited, her words take on a certain festival flair. With a smile as bright as the sun, she continues to run towards the dazzling horizon, hoping that she will discover her true dream along the way."
      )
    ),
    React.createElement(
      "div",
      { className: "character-quotes" },
      React.createElement("p", null, "\"I'll give it a go! You'll never know unless you try, right?\""),
      React.createElement("p", null, "Festival Enthusiast, Helping Others, Training & Running")
    ),
    React.createElement(
      "div",
      { className: "character-image-wrapper" },
      React.createElement("img", { src: "Kitasan.jpg", alt: "Kitasan Black", className: "character-image-default" }),
      React.createElement("img", { src: "KitasanBlack.jpg", alt: "Kitasan Black Race", className: "character-image-transformed" })
    )
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(CharacterIntro));
