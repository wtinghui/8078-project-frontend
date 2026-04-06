import {Route, Switch} from 'wouter';
import NavBar from './NavBar'

import Home from './Home';
import Book from './Book';
import BookReview from './BookReview'
import UserProfile from './UserProfile';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage'

import './App.css';

export default function App(){
  return(
    <>
      <NavBar/>

      <Route path="/"><Home/></Route>
      <Route path="/books/:bookId">
        {params => <Book id={params.bookId}/>}
      </Route>
      <Route path="/profile"><UserProfile/></Route>
      <Route path="/login"><LoginPage/></Route>
      <Route path="/register"><RegistrationPage/></Route>
      <Route path="/books/:bookId/create-review">
        {params => <BookReview id={params.bookId}/>}
      </Route>
    </>
    
  )
    
};