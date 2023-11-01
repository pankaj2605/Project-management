import NewProject from "./components/Newproject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar/>
      <NoProjectSelected/>
      {/* <NewProject/> */}
    </main>
  );
}

export default App;
