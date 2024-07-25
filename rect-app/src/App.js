import './App.css';
import IDCard from "./components/IDCard";
import ProjectExplorer from "./components/ProjectExplorer";


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <IDCard/>
                <ProjectExplorer/>
            </header>
        </div>
    );
}

export default App;
