import React from 'react';
import './App.css';

//component 
import Classcomonent from '../components/component/class';
import Functioncomonent from '../components/component/functional';

//jsx
import Jsx from './jsx file/with jsx';
import WithoutJsx from './jsx file/without jsx';

//props
import Hello from './props/props';
import Welcome from './props/propsclass';

//state
import MessageState from './state/state';
import SetStateCount from './state/setState';

// event handling
import FunctionClick from './event handling/functioneventhandling';
import Classclick from './event handling/classeventhandling';
import Bindingeventhandler from './event handling/bindingEventHandling';

//
import Parent from './methods as props/parent'

//conditional rendering
import Greeting from './conditional rendering/if/ifelse'
import Elementvaraibles from './conditional rendering/if/element variables';
import Ternaryopertaor from './conditional rendering/if/ternaryoperator'
import Shortcircuitoperator from './conditional rendering/if/shortcircuitoperator'

//list rendering
import { name, car } from './list rendering/list rendering'
import Person from './list rendering/listandkey'
import Carname from './list rendering/indexaskey'



function App() {

  return (
    <div>
      <div className='component'>
        <h1>component</h1>
        <Functioncomonent></Functioncomonent> 
        <Classcomonent />
      </div>

      <br></br>
      <hr></hr>

      <div className='jsx'>
        <h1>jsx</h1>
        <Jsx />
        <WithoutJsx />
      </div>

      <br></br>
      <hr></hr>

      <div className='props'>
        < Hello name= "bruce" heroname = "batman"></Hello>
        < Hello name= "tony" heroname = "ironman">
          <button>ironman button</button>
        </Hello>
        < Hello name= "steve" heroname= "captain america" />
        < Hello name= "bruce" heroname= "hulk" />
        < Hello name= "bruce" heroname = "batman">
          <p>
            this is children file
          </p>
        </Hello>
        < Welcome name= "bruce" heroname = "batman"></Welcome>
        < Welcome name= "tony" heroname = "ironman">
          <button>ironman button</button>
        </Welcome>
      </div>

      <br></br>
      <hr></hr>
      <div className='state'>
        <MessageState />
        <SetStateCount />
      </div>

      <br></br>
      <hr></hr>

      <div className='eventHandling'>
        <FunctionClick> </FunctionClick>
        <Classclick />
        <Bindingeventhandler />
      </div>
     
      <br></br>
      <hr></hr>

      <div className='methodasprops'>
        <Parent /> 
      </div>

      <br></br>
      <hr></hr>
      <div className='conditionalrendering'>
        <Greeting></Greeting>
        <Elementvaraibles />
        <Ternaryopertaor />
        <Shortcircuitoperator />
      </div>
     
      <br></br>
      <hr></hr>
      <div className='listrendering'>
        <name></name>
        <car />
        <Person />
        <Carname />
      </div>
    </div>
  );
}

export default App;
