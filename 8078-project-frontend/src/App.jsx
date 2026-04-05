import {Route, Switch} from 'wouter';
import Navbar from './Navbar';
import Home from './Home';
import Book from './Book';

export default function App(){
  return(
    <>
      <Navbar/>
      <Route path="/"><Home/></Route>
      <Route path="/books/:bookId">
        {params => <Book id={params.bookId}/>}
      </Route>
    </>
    
  )
    
};