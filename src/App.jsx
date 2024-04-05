
import './App.css'
import Post from './components/Post'
import Learnprops from './components/Learnprops'



function App() {
  return <>
    <Post />
    <Post />
    <Post />
    <Learnprops author="Anoushka's Book" bookName="Life through my lens" />
    <Learnprops author="Chetan's book" bookName="My Motivations" />
    <Learnprops author="Akshita's book" bookName="CAT" />
  </>;


}
export default App;
