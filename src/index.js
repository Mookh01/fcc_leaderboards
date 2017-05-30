import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import './index.sass';

/*header*/
class Header extends React.Component {
  render() {
    return (
      <header className="description">
        <a href="https://www.freecodecamp.com">
          <img className="fcclogo" src="./freeCodeCamp.jpg" alt="FreeCodeCamp logo" width="50%"/>
        </a>
      </header>
    );
  }
} //Header
class Application extends React.Component {
  render() {
    return <div>
      <Header />
      <OurJsonData fccApi={this.props.fccApi}/>
    </div>;
  }
} //Application

//OurJsonData will get our json data from the urls provided
//OurJsonData will also give us our table headers
class OurJsonData extends React.Component{
  constructor(){
    super();
    this.state = {
      campers: [],
      pointCount: "recent"
    } //this.state
  } //constructor
  providedData(){
    $.ajax({
      url: this.props.fccApi+"top/"+this.state.pointCount,
      dataType: 'json',
      success: function(data){
        this.setState({campers: data});
      }.bind(this),
      error: function(err){
        console.error()
      } //error
    }) //ajax
  } //providedData
  componentDidMount(){
    this.providedData()
  } //componentDidMount
  render() {
    return (
      <div>
        <table className="box-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Avatar</th>
              <th>Camper Name</th>
              <th className="rearrange chosen true" onClick={this.mostRecentInOrder.bind(this,"recent")} ><button>Points in past 30 days</button></th>
              <th className="rearrange"  onClick={this.mostRecentInOrder.bind(this,"alltime")} ><button>All time points</button></th>
              </tr>
          </thead>
        <CampLeaders
          campers={this.state.campers}
          />
      </table>
      </div>
    ) //return
  } //render

  mostRecentInOrder(field, chosenColumn){
    if(!chosenColumn.target.classList.contains('chosen')){
      this.switchClasses();
      var nodes = document.getElementsByClassName('rearrange');
      chosenColumn.target.className = 'rearrange chosen true';
        this.arrangePoints(field);
    } //if()
      var myVar = setTimeout(switchField, 600);
    function switchField(){
      if(field === "alltime"){
        $('.totalscore').addClass('chosen');
        $('.recentscore').removeClass('chosen')
    }
      if(field === "recent") {
        $('.recentscore').addClass('chosen');
        $('.totalscore').removeClass('chosen');
      }
    } //switchField
  } //mostRecentInOrder

  switchClasses(){
    var nodes = document.getElementsByClassName('rearrange');
    for(var i=0; i < nodes.length; i++){
        nodes.item(i).className = "rearrange";
    } //for loop
  } //switchClasses

arrangePoints(sorting){
  if(sorting !== this.state.sorting){
    this.setState({
      // reverse: true,
      pointCount: sorting
    }, this.providedData);
  }//if()
 }//arrangePoints

}//OurJsonData

//CampLeaders provides the user content
class CampLeaders extends React.Component {
  render(){
    var count = 0;
    var eachUser = this.props.campers;
    var visuals=this.props.campers.map(function(user){
      count++;
      return (
          <tr className="" key={user.username}>
            <td className=""> {count} </td>
            <td><a href={"https://www.freecodecamp.com/"+ user.username}> <img src={user.img} width="100px" className="" /> </a> </td>
            <td className="userhandle user-photo"><span>{user.username}</span> </td>
            <td className="recentscore">{user.recent}</td>
            <td className="totalscore">{user.alltime}</td>
          </tr>
        ); //return
    }) //visuals
    return(
        <tbody>{visuals}</tbody>
    )//return
  } //render
} //CampLeaders

 ReactDOM.render(<Application fccApi="https://fcctop100.herokuapp.com/api/fccusers/"/>, document.getElementById('root'));
