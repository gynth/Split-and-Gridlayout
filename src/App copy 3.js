import './App.css';
import SplitPane, { Pane } from 'react-split-pane';
import './edit.css';

function App() {
  return(
    <div style={{backgroundColor:'red', width:300, height:300}}>
      <div style={{width:'100%', height:'100%'}}>
        <div style={{width:'100%', height:'100%'}}>
          <SplitPane split='horizontal'
                defaultSize='50%'
                minSize={50}

                primary='second'
                style={{position:'unset'}}
          >
            <div>HIHIHIHI</div>
            <div style={{backgroundColor:'greenyellow'}}>HIHI</div>
          </SplitPane>
        </div>
      </div>
    </div>
  )
}

export default App;
