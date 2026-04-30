function CharacterIntro() {
  return React.createElement(
    "div",
    { className: "character-card" },
    React.createElement(
      "div",
      { className: "character-header" },
      React.createElement("h1", null, "Kitasan Black"),
      React.createElement("h3", null, "VA: Melissa Fahn")
    ),
    React.createElement(
      "div",
      { className: "character-description" },
      React.createElement(
        "p",
        null,
        "A new season of Elation begins, featuring the limited-time return of the invincible player \"Silver Wolf LV.999\"! She's conquered the universe, unlocked every cosmic achievement... What's left to play?"
      )
    ),
    React.createElement(
      "div",
      { className: "character-quotes" },
      React.createElement("p", null, "\"Reach the peak of 'Elation'? Boring... Since I've got the cartridge now, I make the rules~\""),
      React.createElement("p", null, "\"LV.999 mode, my final form, first time seeing it, right? Let's hit up a high-difficulty Raid. I'll carry you. One-button clear.\"")
    ),
    React.createElement(
      "div",
      { className: "character-image-wrapper" },
      React.createElement("img", { src: "images/Kitasan.jpg", alt: "Kitasan Black", className: "character-image-default" }),
      React.createElement("img", { src: "images/KitasanBlack.jpg", alt: "Kitasan Black Race", className: "character-image-transformed" })
    )
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(CharacterIntro));
