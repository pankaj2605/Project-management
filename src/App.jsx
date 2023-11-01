import NewProject from "./components/Newproject";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar/>
      <NewProject/>
    </main>
  );
}

export default App;
