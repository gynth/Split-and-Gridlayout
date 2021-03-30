import './App.css';
import SplitPane from "react-splitter-layout";
import 'react-splitter-layout/lib/index.css';

function App() {
  return(
    <SplitPane vertical
               borderColor="#999"
               percentage={false}
               primaryIndex={0}
               secondaryInitialSize={100}
               >
      <SplitPane vertical
                 borderColor="#999"
                 percentage={false}
                 primaryIndex={1}
                 secondaryInitialSize={100}>
        <p>안녕하세요.</p>

        <SplitPane borderColor="#999"
                   percentage={false}
                   primaryIndex={1}
                   secondaryInitialSize={100}>
          <div>
            <a href="https://www.npmjs.com/package/react-splitter-layout">
              react-splitter-layout
            </a>
          </div>

          <SplitPane borderColor="#999"
                     percentage={false}
                     primaryIndex={0}
                     secondaryInitialSize={100}>
            <div>
              <h2>Start editing to see some magic happen {"\u2728"}</h2>
            </div>
            <div>Filters</div>
          </SplitPane>
        </SplitPane>
      </SplitPane>
      <div className="footer">Footer</div>
      
    </SplitPane>
  )
}

export default App;
