import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import ScoreCard from "./components/ScoreCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
let imgClicked = [];
let score = 0;
let highScore = 0;

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score,
    highScore
  };

  imgClick = id => {
    function checkForId(elem) {
      return elem === id;
      
    }
    if (imgClicked.find(checkForId)) {
      console.log("GameOver");
      if ( score > highScore ) {
        highScore = score
      }
      score = 0;
      imgClicked.length = 0;
      this.setState({score, highScore });
    } else {
      score++;
    }; 
    imgClicked.push(id);

    console.log(`idAry: ${imgClicked} score: ${score}`);
    shuffle(friends);
    this.setState({ friends });
  };




  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <div className="mainBox">
        <Title>Futurama Click Me</Title><br />
        <center><ScoreCard score={score} highscore={highScore}/></center>
        </div>
        
        {this.state.friends.map(friend => (
          <FriendCard
            imgClick={this.imgClick}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
        
      </Wrapper>
    );
  }
}

var shuffle = function (array) {

  var currentIndex = array.length;
  var temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;

};


export default App;
