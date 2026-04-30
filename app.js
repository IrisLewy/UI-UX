function CharacterIntro() {
  return (
    <div className="character-card">
      <div className="character-header">
        <h1>Kitasan Black</h1>
        <h3>VA: Hinaki Yano</h3>
      </div>
      <div className="character-description">
        <p>
          Ever bright and cheerful, she loves festivals more than anyone else. Her innate altruism makes her unable to ignore a person in need, and she's always ready to lend an ear. Her bottomless kindness has earned her the admiration of those around her, but when she gets too excited, her words take on a certain festival flair. With a smile as bright as the sun, she continues to run towards the dazzling horizon, hoping that she will discover her true dream along the way.
        </p>
      </div>
      <div className="character-quotes">
        <p>"I'll give it a go! You'll never know unless you try, right?"</p>
        <p>"Harikitte Ikou!"</p>
      </div>

      {/* Image wrapper with two states */}
      <div className="character-image-wrapper">
        <img src="images/Kitasan.jpg" alt="Kitasan Black" className="character-image-default" />
        <img src="images/KitasanBlack.jpg" alt="Kitasan Black Race" className="character-image-transformed" />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CharacterIntro />);
