import './App.css';
import GridLayout from 'react-grid-layout';
import './Style1.css';
import './Style2.css';

function App() {
  const layout = [
    {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
    {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
    {i: 'c', x: 4, y: 0, w: 1, h: 2}
  ];

  return(
    <GridLayout className="layout" layout={layout} cols={12} rowHeight={20} width={1000}>
      <div style={{borderStyle:'solid'}} key="a">a</div>
      <div style={{borderStyle:'solid'}} key="b">b</div>
      <div style={{borderStyle:'solid'}} key="c">c</div>
  </GridLayout>
  )
}

export default App;
