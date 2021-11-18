import './App.css';
import myimage from "./imageInPublic.jpg"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{border:'solid 1px black',maxWidth:'100vw'}}>
          <h1 className="title red">This is Amesterdam</h1>
          <br></br>
          <img src={myimage} />
          <br></br>
          <img src={myimage} />
        </div>
        <video width="320" height="240" controls>
          <source src={"/myVideo.mp4"} type="video/mp4" />
        </video>
      </header>
  </div>
  );
}

export default App;
