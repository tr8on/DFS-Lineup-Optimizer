import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";

class Lineup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lineup: [],
      axiosFavs: [],
      pg: [],
      sg: [],
      sf: [],
      pf: [],
      c: [],
      g: [],
      f: [],
      util: []
    };
    this.genLU = this.genLU.bind(this);
  }
  async componentDidMount() {
    const axiosFavsCopy = [];
    await axios.get("/fav_players").then(res => {
      axiosFavsCopy.push(res.data);
      this.setState({
        axiosFavs: axiosFavsCopy[0]
      });
    });
    let pgCount = 0;
    let sgCount = 0;
    let sfCount = 0;
    let pfCount = 0;
    let cCount = 0;
    let gCount = 0;
    let fCount = 0;
    let utilCount = 0;

    let lineupCopy = [];
    for (let i = 0; i <= this.state.axiosFavs.length; i++) {
      if (pgCount === 0 && this.state.axiosFavs[i].position === "pg") {
        lineupCopy.push(this.state.axiosFavs[i]);
        pgCount++;
        this.setState({
          pg: this.state.axiosFavs[i]
        });
      } else if (sgCount === 0 && this.state.axiosFavs[i].position === "sg") {
        lineupCopy.push(this.state.axiosFavs[i]);
        sgCount++;
        this.setState({
          sg: this.state.axiosFavs[i]
        });
      } else if (sfCount === 0 && this.state.axiosFavs[i].position === "sf") {
        lineupCopy.push(this.state.axiosFavs[i]);
        sfCount++;
        this.setState({
          sf: this.state.axiosFavs[i]
        });
      } else if (pfCount === 0 && this.state.axiosFavs[i].position === "pf") {
        lineupCopy.push(this.state.axiosFavs[i]);
        pfCount++;
        this.setState({
          pf: this.state.axiosFavs[i]
        });
      } else if (cCount === 0 && this.state.axiosFavs[i].position === "c") {
        lineupCopy.push(this.state.axiosFavs[i]);
        cCount++;
        this.setState({
          c: this.state.axiosFavs[i]
        });
      } else if (gCount === 0 && this.state.axiosFavs[i]) {
        lineupCopy.push(this.state.axiosFavs[i]);
        gCount++;
        this.setState({
          g: this.state.axiosFavs[i]
        });
      } else if (fCount === 0 && this.state.axiosFavs[i]) {
        lineupCopy.push(this.state.axiosFavs[i]);
        fCount++;
        this.setState({
          f: this.state.axiosFavs[i]
        });
      } else if (utilCount === 0 && this.state.axiosFavs[i]) {
        lineupCopy.push(this.state.axiosFavs[i]);
        utilCount++;
        this.setState({
          util: this.state.axiosFavs[i]
        });
      }
    }
    this.setState({
      lineup: lineupCopy
    });
    console.log(this.state.pg);
  }
  genLU() {}
  render() {
    return (
      <body className="lubody">
        <div className="lucontent">
          <h1 className="lutext"> Here is your optimized lineup: </h1>

          <div className="table-div">
            <table className="lu-table">
              <tr>
                <th>Position</th>
                <th>Player Name</th>
                <th>img</th>
              </tr>
              <tr>
                <td>PG</td>
                <td>
                  {this.state.pg.firstname + " " + this.state.pg.lastname}
                </td>
                <td>
                  {" "}
                  <img
                    alt="player has no img"
                    src={this.state.pg.img}
                    style={{
                      display: "grid",
                      width: 70,
                      height: 50,
                      position: "relative"
                    }}
                  />{" "}
                </td>
              </tr>
              <tr>
                <td>SG</td>
                <td>
                  {this.state.sg.firstname + " " + this.state.sg.lastname}
                </td>
                <td>
                  {" "}
                  <img
                    alt="player has no img"
                    src={this.state.sg.img}
                    style={{
                      display: "grid",
                      width: 70,
                      height: 50,
                      position: "relative"
                    }}
                  />{" "}
                </td>
              </tr>
              <tr>
                <td>SF</td>
                <td>
                  {this.state.sf.firstname + " " + this.state.sf.lastname}
                </td>
                <td>
                  {" "}
                  <img
                    alt="player has no img"
                    src={this.state.sf.img}
                    style={{
                      display: "grid",
                      width: 70,
                      height: 50,
                      position: "relative"
                    }}
                  />{" "}
                </td>
              </tr>
              <tr>
                <td>PF</td>
                <td>
                  {this.state.pf.firstname + " " + this.state.pf.lastname}
                </td>
                <td>
                  {" "}
                  <img
                    alt="player has no img"
                    src={this.state.pf.img}
                    style={{
                      display: "grid",
                      width: 70,
                      height: 50,
                      position: "relative"
                    }}
                  />{" "}
                </td>
              </tr>
              <tr>
                <td>C</td>
                <td>{this.state.c.firstname + " " + this.state.c.lastname}</td>
                <td>
                  {" "}
                  <img
                    alt="player has no img"
                    src={this.state.c.img}
                    style={{
                      display: "grid",
                      width: 70,
                      height: 50,
                      position: "relative"
                    }}
                  />{" "}
                </td>
              </tr>
              <tr>
                <td>G</td>
                <td>{this.state.g.firstname + " " + this.state.g.lastname}</td>
                <td>
                  {" "}
                  <img
                    alt="player has no img"
                    src={this.state.g.img}
                    style={{
                      display: "grid",
                      width: 70,
                      height: 50,
                      position: "relative"
                    }}
                  />{" "}
                </td>
              </tr>
              <tr>
                <td>F</td>
                <td>{this.state.f.firstname + " " + this.state.f.lastname}</td>
                <td>
                  {" "}
                  <img
                    alt="player has no img"
                    src={this.state.f.img}
                    style={{
                      display: "grid",
                      width: 70,
                      height: 50,
                      position: "relative"
                    }}
                  />{" "}
                </td>
              </tr>
              <tr>
                <td>UTIL</td>
                <td>
                  {this.state.util.firstname + " " + this.state.util.lastname}
                </td>
                <td>
                  {" "}
                  <img
                    alt="player has no img"
                    src={this.state.util.img}
                    style={{
                      display: "grid",
                      width: 70,
                      height: 50,
                      position: "relative"
                    }}
                  />{" "}
                </td>
              </tr>
              <tr>
                <Link to="/players">
                  <button> Edit Lineup </button>{" "}
                </Link>
              </tr>
            </table>
          </div>
          <h2> ' ' </h2>
          <h2> ' ' </h2>
          <h2> ' ' </h2>
          <h2> ' ' </h2>
          <h2> ' ' </h2>
          <h2> ' ' </h2>
          <h2> ' ' </h2>
          <h2> ' ' </h2>
          <h2> ' ' </h2>
          <h2> ' ' </h2>
          <h2> ' ' </h2>
          <h2> ' ' </h2>
          <h2> ' ' </h2>
          <h2> ' ' </h2>
          <h2> ' ' </h2>
          <h2> ' ' </h2>
        </div>
      </body>
    );
  }
}

export default Lineup;
