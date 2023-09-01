import './App.css';

import{BrowserRouter,Route,Routes} from'react-router-dom';

import Error404 from './Components/Error404';
import Tr30 from './Components/Tr/P30';
import Tr1520 from './Components/Tr/P1520';
import Tr1550 from './Components/Tr/P1550';
import Tr1600 from './Components/Tr/P1600';
import Tr1630 from './Components/Tr/P1630';
import Tr1640 from './Components/Tr/P1640';
import Tr2000 from './Components/Tr/P2000';
import Tr2010 from './Components/Tr/P2010';
import Tr2020 from './Components/Tr/P2020';
import Tr2140 from './Components/Tr/P2140';
import Tr2150 from './Components/Tr/P2150';
import Tr2170 from './Components/Tr/P2170';
import Tr2290 from './Components/Tr/P2290';
import Tr2750 from './Components/Tr/P2750';
import Tr2760 from './Components/Tr/P2760';
import Tr2820 from './Components/Tr/P2820';
import Tr2850 from './Components/Tr/P2850';
import Tr2960 from './Components/Tr/P2960';
import Tr3490 from './Components/Tr/P3490';
import Tr4890 from './Components/Tr/P4890';
import Tr5220 from './Components/Tr/P5220';

import En30 from './Components/En/P30';
import En1520 from './Components/En/P1520';
import En1550 from './Components/En/P1550';
import En1600 from './Components/En/P1600';
import En1630 from './Components/En/P1630';
import En1640 from './Components/En/P1640';
import En2000 from './Components/En/P2000';
import En2010 from './Components/En/P2010';
import En2020 from './Components/En/P2020';
import En2140 from './Components/En/P2140';
import En2150 from './Components/En/P2150';
import En2170 from './Components/En/P2170';
import En2290 from './Components/En/P2290';
import En2750 from './Components/En/P2750';
import En2760 from './Components/En/P2760';
import En2820 from './Components/En/P2820';
import En2850 from './Components/En/P2850';
import En2960 from './Components/En/P2960';
import En3490 from './Components/En/P3490';
import En4890 from './Components/En/P4890';
import En5220 from './Components/En/P5220';

function App() {
  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route exact path='*' element={<Error404/>}></Route>
      <Route exact path='/tr-TR/30' element={<Tr30/>}></Route>
      <Route exact path='/tr-TR/1520' element={<Tr1520/>}></Route>
      <Route exact path='/tr-TR/1550' element={<Tr1550/>}></Route>
      <Route exact path='/tr-TR/1600' element={<Tr1600/>}></Route>
      <Route exact path='/tr-TR/1630' element={<Tr1630/>}></Route>
      <Route exact path='/tr-TR/1640' element={<Tr1640/>}></Route>
      <Route exact path='/tr-TR/2000' element={<Tr2000/>}></Route>
      <Route exact path='/tr-TR/2010' element={<Tr2010/>}></Route>
      <Route exact path='/tr-TR/2020' element={<Tr2020/>}></Route>
      <Route exact path='/tr-TR/2140' element={<Tr2140/>}></Route>
      <Route exact path='/tr-TR/2150' element={<Tr2150/>}></Route>
      <Route exact path='/tr-TR/2170' element={<Tr2170/>}></Route>
      <Route exact path='/tr-TR/2290' element={<Tr2290/>}></Route>
      <Route exact path='/tr-TR/2750' element={<Tr2750/>}></Route>
      <Route exact path='/tr-TR/2760' element={<Tr2760/>}></Route>
      <Route exact path='/tr-TR/2820' element={<Tr2820/>}></Route>
      <Route exact path='/tr-TR/2850' element={<Tr2850/>}></Route>
      <Route exact path='/tr-TR/2960' element={<Tr2960/>}></Route>
      <Route exact path='/tr-TR/3490' element={<Tr3490/>}></Route>
      <Route exact path='/tr-TR/4890' element={<Tr4890/>}></Route>
      <Route exact path='/tr-TR/5220' element={<Tr5220/>}></Route>

      <Route exact path='/en-US/30' element={<En30/>}></Route>
      <Route exact path='/en-US/1520' element={<En1520/>}></Route>
      <Route exact path='/en-US/1550' element={<En1550/>}></Route>
      <Route exact path='/en-US/1600' element={<En1600/>}></Route>
      <Route exact path='/en-US/1630' element={<En1630/>}></Route>
      <Route exact path='/en-US/1640' element={<En1640/>}></Route>
      <Route exact path='/en-US/2000' element={<En2000/>}></Route>
      <Route exact path='/en-US/2010' element={<En2010/>}></Route>
      <Route exact path='/en-US/2020' element={<En2020/>}></Route>
      <Route exact path='/en-US/2140' element={<En2140/>}></Route>
      <Route exact path='/en-US/2150' element={<En2150/>}></Route>
      <Route exact path='/en-US/2170' element={<En2170/>}></Route>
      <Route exact path='/en-US/2290' element={<En2290/>}></Route>
      <Route exact path='/en-US/2750' element={<En2750/>}></Route>
      <Route exact path='/en-US/2760' element={<En2760/>}></Route>
      <Route exact path='/en-US/2820' element={<En2820/>}></Route>
      <Route exact path='/en-US/2850' element={<En2850/>}></Route>
      <Route exact path='/en-US/2960' element={<En2960/>}></Route>
      <Route exact path='/en-US/3490' element={<En3490/>}></Route>
      <Route exact path='/en-US/4890' element={<En4890/>}></Route>
      <Route exact path='/en-US/5220' element={<En5220/>}></Route>
    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
