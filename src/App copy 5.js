import './App.css';
import SplitPane, { Pane } from 'react-split-pane';
import './edit.css';

function App() {
  return(
    <div style={{backgroundColor:'red', width:300, height:300}}>
      <div style={{display:'flex'}}>
        <div style={{backgroundColor:'purple'}}>안녕하세요1</div>
        <div style={{flex:1, overflow:'auto'}}>
          <SplitPane split='horizontal'
                defaultSize='50%'
                minSize={50}

                primary='second'
                style={{position:'unset', height:'300px'}}>
            <div>HIHIHIHI</div>
            <div style={{backgroundColor:'greenyellow'}}>HIHI</div>
          </SplitPane>
        </div>
      </div>
    </div>
  )
}

export default App;
