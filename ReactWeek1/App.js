import React from 'react';
import BasicInfo from './basicinfo';


class App extends React.Component {

  constructor(){
    super();
    this.state = {
        person: [
      {name :'Jose', number: '9802534981', DOB: '11-19-1994' },
      {name: 'Jake', number: 9803847283, DOB: '02-12-1983' },
      {name: 'Harold', number: 7047362931, DOB: '04-14-1976' },
      {name: 'Gary', number: 98074638172, DOB: '08-22-1997' }
        
        ] 
    }
  }

  render() {
  return (
    <div className="info">
      {this.state.person.map((person) => {
        return (
   <BasicInfo name={person.name} number={person.number} DOB={person.DOB} />
        )
  })}
   </div>
  );
  }
}

export default App;


 // state = {
  //   people: [
  //     {name: 'Jake', number: 9803847283, dob: '02-12-1983' },
  //     {name: 'Harold', number: 7047362931, dob: '04-14-1976' },
  //     {name: 'Gary', number: 98074638172, dob: '08-22-1997' }

  //   ]
  // }



    // <div className="App">
    //   <Person name = 'Jose' number = '9802534981' dob = '11-19-1994'/>
    //   <Person name = {this.state.people[0].name} number = {this.state.people[0].number} dob = {this.state.people[0].dob}/>
    //   <Person name = {this.state.people[1].name} number = {this.state.people[1].number} dob = {this.state.people[1].dob}/>
    //   <Person name = {this.state.people[2].name} number = {this.state.people[2].number} dob = {this.state.people[2].dob}/>
   

  //   </div>
  // );
//   }
// }


// class BasicInfo extends Component {
//   render() {
//       return (
//           <div>
//               <ul>
//                   {this.props.person.map(info =>(
//                       <li>
//                           Name: {info.name}, 
//                           Number: {info.number}, 
//                           DOB: {info.DOB}
//                       </li>
//                   ))}
//               </ul>
//           </div>
//       )
//   }
// }

// export default BasicInfo;
