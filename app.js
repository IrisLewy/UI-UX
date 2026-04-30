function App() {
  return (
    <div className="container">
      <h1>John Doe</h1>
      <p>Hello! I’m John, a web enthusiast learning how to build interactive websites with React and Bootstrap.</p>
      <ul>
        <li>🎵 Music</li>
        <li>🎮 Gaming</li>
        <li>✈️ Travel</li>
      </ul>
      <img src="images/profile.jpg" alt="Profile" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
