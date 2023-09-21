
import './App.css';
import React, { useState } from 'react';


function App() {

  const [list, setList] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [editSwitch, setEditSwitch] = useState(false)
  const [currentIndex, setCurrentIndex] = useState()

  function userInputValue(e) {

    setUserInput(e.target.value)
  }

  function addItems() {

    const templist = [...list]
    templist.push(userInput)
    setList(templist)
  }

  function deleteValue(index) {

    const templist = [...list]
    templist.splice(index, 1)
    setList(templist)
  }

  function editValue(index) {

    //1. input ki field mae index ki value lani hai
    //2. add button edit mae change karna hai

    const value = list[index]
    setUserInput(value)
    setCurrentIndex(index)
    setEditSwitch(true)


  }

  function updateValue() {

    //1 input wali value ko update karna hai
    //2 edit k button ko wapis add ka karna hai
    const templist = [...list]
    templist[currentIndex] = userInput
    setList(templist)
    setEditSwitch(false)
  }

  function deleteAll() {
    setList([])
  }


  return (
    <div yclassName="App">
      <header className="App-header">

        <div>
          <input placeholder='Enter Items' onChange={userInputValue} value={userInput}></input>

          {!editSwitch
            ?
            <button onClick={addItems}>Add</button>
            :
            <button onClick={updateValue}>Edit</button>
          }
          
          <button onClick={deleteAll}>Delete All</button>


          <div className="scroll">

            <ul>{list.map(function (item, index) {
              return <li style={currentIndex === index && editSwitch ? { backgroundColor: 'Orange' } : {}}>{item}
                <button onClick={() => editValue(index)}>Edit</button>
                <button onClick={() => deleteValue(index)}>Delete</button></li>
            })}

            </ul>
          </div>

        </div>


      </header >
    </div >
  );
}

export default App;
