import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="img circle-img" src={props.src} alt={props.alt} />
      </div>
      <div className="bottom">
        <p className="info">{props.phone}</p>
        <p className="info">{props.email}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        email="b@beyonce.com"
        name="Beyonce"
        phone="+123 456 789"
        src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        alt="Beyonce"
      />
      <Card
        email="jack@nowhere.com"
        name="Jack Bauer"
        phone="+987 654 321"
        src="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
        alt="Jack Bauer"
      />
      <Card
        email="gmail@chucknorris.com"
        name="Chuck Norris"
        phone="+918 372 574"
        src="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
        alt="Chuck Norris"
      />
    </div>
  );
}

export default App;
