import logo from './logo.svg';
import './App.css';
import Header from './Header';
function App() {
 // https://tailwindcss.com/docs
  return (
<div className="container mx-auto mb-8 px-8">
<Header />
<h1 className="mt-8 text-center text-3xl font-bold underline">
  Hamburger menu in Tailwind & React
</h1>
</div>
  );
}

export default App;
