import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import nba from "nba.js";
import cors from "cors";
import "../App.css";
import Lineup from './lineup'

class PlayerSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerName: "", //user input name
      position: "",
      playerPrice: "",
      allPlayers: [],
      guardArr: [],
      forwardArr: [],
      centerArr: [],
      favPlayers: [],
      axiosFavs: [],
      img: "", //headshot from axios req
      firstName: "",
      lastName: "",
      id: "",
      lineup: []
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.postPlayer = this.postPlayer.bind(this);
    this.handlePos = this.handlePos.bind(this);
    this.postDelete = this.postDelete.bind(this);
  }
  
  async postDelete(id) {
    console.log(id);
    await axios.delete(`http://localhost:3000/fav_players/${id}`);
  }
  handlePos(evt) {
    this.setState({
      position: evt.target.value
    });
  }
  handlePrice(evt) {
    const playerPrice = evt.target.value;
    this.setState({
      playerPrice
    });
  }
  async postPlayer(event) {
    event.preventDefault();
    await axios.post("http://localhost:3000/fav_players", {
      firstname: this.state.firstName,
      lastname: this.state.lastName,
      salary: this.state.playerPrice,
      position: this.state.position,
      img: this.state.img
    });
  }
  async componentDidMount() {
    const axiosFavsCopy = [];
    await axios.get("http://localhost:3000/fav_players").then(res => {
      axiosFavsCopy.push(res.data);
      this.setState({
        axiosFavs: axiosFavsCopy[0]
      });
    });
    await axios
      .get(
        "https://cors-anywhere.herokuapp.com/http://data.nba.net/10s/prod/v1/2016/players.json"
      )
      .then(res => {
        this.setState({
          allPlayers: res.data.league.standard
        });
        console.log(this.state.allPlayers);
      });
    let guardArr = [];
    let forwardArr = [];
    let centerArr = [];
    this.state.allPlayers.forEach(function(player) {
      if (player.pos === "G") {
        guardArr.push(player);
      } else if (player.pos === "G-F") {
        guardArr.push(player) && forwardArr.push(player);
      } else if (player.pos === "F") {
        forwardArr.push(player);
      } else if (player.pos === "C") {
        centerArr.push(player);
      } else if (player.pos === "F-G") {
        guardArr.push(player) && forwardArr.push(player);
      } else if (player.pos === "F-C") {
        centerArr.push(player) && forwardArr.push(player);
      }
    });
  }

  async componentDidUpdate() {
    const axiosFavsCopy = [];
    await axios.get("http://localhost:3000/fav_players").then(res => {
      axiosFavsCopy.push(res.data);
      this.setState({
        axiosFavs: axiosFavsCopy[0]
      });
    });
  }
  onChange(evt) {
    const playerName = evt.target.value;
    let nameArray = playerName.split(" ");
    this.setState({
      playerName,
      firstName: nameArray[0],
      lastName: nameArray[1]
    });
  }
  async onSubmit(evt) {
    evt.value = "";
    let favCopy = this.state.favPlayers;
    favCopy.push(this.state.playerName);
    evt.preventDefault();
    this.setState({
      fav: favCopy,
      playerName: "",
      img: `https://nba-players.herokuapp.com/players/${this.state.lastName}/${
        this.state.firstName
      }`
    });
    this.render();
  }
  handleDelete(index) {
    this.state.fav.splice(index, 1);
    console.log(this.state.fav);
    this.setState({
      fav: this.state.fav
    });
  }
  render() {
    return (
      <html className="add">
        <body className="body">
          <div>
            <div className="content">
                <div className='text'>
              <h1>
                Add players you want to use in tonights slate and we'll create
                an optimized lineup
              </h1>
              <p>
                Make sure you add at least 8 players and their positions match
                salary and positional requirements{" "}
              </p>
              <h3> Fav Players </h3>
              <Link to="/lineup" > 
             <button onClick={this.genLU} lineup={this.props.lineup}> generate lineup </button> </Link>
              <h3 className="h3">Add Players:</h3>
              <form onChange={this.onChange} onSubmit={this.onSubmit}>
                <input
                  className="Search-Field"
                  type="textarea"
                  name="playerName"
                  placeholder="enter player name"
                  value={this.state.playerName}
                />
              </form>
              </div>
              <div className="Row">
                <div className="search-players">
                  {this.state.favPlayers.map((player, index) => {
                    return (
                      <div className="added-player" key={index}>
                        {" "}
                        <ul className="fav-player">
                          {player}
                          <select
                            placeholder="enter position"
                            onChange={this.handlePos}
                          >
                            <option value={null} />
                            <option value="pg">PG</option>
                            <option value="sg">SG</option>
                            <option value="sf">SF</option>
                            <option value="pf">PF</option>
                            <option value="c">C</option>
                          </select>
                          <input
                            type="textarea"
                            name="playerSalary"
                            value={this.state.playerPrice}
                            placeholder="enter player price"
                            onChange={this.handlePrice}
                            onSubmit={this.postPlayer}
                          />
                          <button onClick={this.postPlayer} type="button">
                            Submit
                          </button>
                          <button
                            onClick={() => {
                              this.handleDelete(index);
                            }}
                            type="button"
                          >
                            X
                          </button>{" "}
                        </ul>{" "}
                      </div>
                    );
                  })}
                </div>
                <div className="players-pic" style={{ display: "grid" }}>
                  {this.state.axiosFavs.map((player, index) => {
                    return (
                      <div>
                        <ul
                          className="ind-player"
                          key={index}
                          className="player"
                        >
                          <img
                            classname="head-shot"
                            alt="player has no img"
                            src={player.img}
                            style={{
                              display: "grid",
                              width: 70,
                              height: 50,
                              position: "relative"
                            }}
                          />
                          {player.firstname} {player.lastname}
                          <button
                            onClick={() => {
                              this.postDelete(player.id);
                            }}
                            type="button"
                          >
                            X
                          </button>{" "}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    );
  }
}
export default PlayerSelect;
