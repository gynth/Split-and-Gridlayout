import './App.css';
import SplitPane, { Pane } from 'react-split-pane';

function App() {
  return(
    <SplitPane split='horizontal'
          defaultSize='50%'
          minSize={50}

          primary='second'
    >
      <div>HIHIHIHI</div>
      <div style={{backgroundColor:'rebeccapurple'}}>HIHI</div>
    </SplitPane>
  )
}

export default App;
