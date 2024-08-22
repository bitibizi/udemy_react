import {useState} from 'react'
import Header from './Components/Header/Header.jsx'
import {CORE_CONCEPTS} from './data.js'
import CoreConcept from './Components/CoreConcept.jsx';
import TabButton from './Components/TabButton.jsx';
import {EXAMPLES} from './data.js'

function App() {
  const [selectedTopic, setSelectedTopic]=useState()
  
  function handleSelect(selectButton){
    setSelectedTopic(selectButton)
    console.log(selectButton)
  }
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
        <h2>Core concepts</h2>
        <ul>
         {CORE_CONCEPTS.map((conceptItem)=>(<CoreConcept key={conceptItem.title} {...conceptItem}/>))}
        </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic==='components'} onSelect={()=> handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic==='jsx'} onSelect={()=> handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic==='props'} onSelect={()=> handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic==='state'} onSelect={()=> handleSelect('state')}>State</TabButton>
          </menu>
          
          {!selectedTopic ? (<p>Please select content</p>) : (<div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>)}
          
        </section>
         
      </main>
    </div>
  );
}

export default App;
