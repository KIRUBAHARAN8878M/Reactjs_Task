import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import {Routes, Route } from "react-router-dom";
import SquareSplit from './pages/SqareSplit/SquareSplit';
import Navbar from './pages/Navbar/Navbar';
import BucketElementTransfer from './pages/Bucket_Element/BucketElementTransfer';
import NestedList from './pages/Nested_list_component/NestedList';
import Infinite from './pages/InfiniteScroll/InfiniteScroll';
import BoxesGame from './pages/BoxesGame/BoxesGame'

function App() {
  const items = [
    {
      id: 1,
      name: "Parent 1",
      children: [
        {
          id: 2,
          name: "P1-Child 1",
          children: [
            {
              id: 3,
              name: "P1-Grandchild 1",
            },
            {
              id: 4,
              name: "P1-Grandchild 2",
            },
          ],
        },
        {
          id: 5,
          name: "P1-Child 2",
        },
      ],
    },
    {
      id: 6,
      name: "Parent 2",
      children: [
        {
          id: 7,
          name: "P2-Child 1",
          children: [
            {
              id: 8,
              name: "P2-Grandchild 1",
            },
            {
              id: 9,
              name: "P2-Grandchild 2",
            },
          ],
        },
        {
          id: 10,
          name: "P2-Child 2",
        },
      ]
    },
  ];

  function handleClick(item) {
    console.log(item);
  }

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        
        <Route path="/" element={<BucketElementTransfer />} />  
        <Route path='/Infinitescroll' element={<Infinite />} />
        <Route path='/BoxesGame' element={<BoxesGame />} />
        <Route path="/List" element={<NestedList items={items} onClick={handleClick} />} />
        <Route path="/Square" element={<SquareSplit />} />
      </Routes>
    </div>
  );
}

export default App;
