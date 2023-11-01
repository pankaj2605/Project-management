import { useState } from "react";
import NewProject from "./components/Newproject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState,setProjectState]=useState({
    selectedProjectId:undefined,
    projects:[],
    tasks:[]
  });

  const handleAddTask=(text)=>{
    console.log(text);
    setProjectState(prevState=>{
      const taskId=Math.random();
      const newTask ={
        text:text,
        projectId:prevState.selectedProjectId,
        id:taskId,
      }

      return{
        ...prevState,
        tasks:[newTask, ...prevState.tasks]

      }
    })
  }
  console.log(projectState.tasks)

  const handleDeleteTask=()=>{
    
  }
  
  const handleSelectproject=(id)=>{
    setProjectState(prevState=>{
      return{
        ...prevState,
        selectedProjectId:id,

      }
    })
  }
  const handleStartAddProject=()=>{
    setProjectState(prevState=>{
      return{
        ...prevState,
        selectedProjectId:null,

      }
    })
  }

  const handleCancelAddProject=()=>{
      setProjectState(prevState=>{
        return{
          ...prevState,
          selectedProjectId:undefined,

        }
      }
      )
   }
  const handleAddProject=(projectData)=>{

    setProjectState(prevState=>{
      const projectId=Math.random();
      const newProject ={
        ...projectData,
        id:projectId,
      }

      return{
        ...prevState,
        selectedProjectId:undefined,
        projects:[...prevState.projects,newProject],

      }
    })
  }

  function handleDeleteproject(){
    setProjectState(prevState=>{
      return{
        ...prevState,
        selectedProjectId:undefined,
        projects:prevState.projects.filter((project)=>{
          return (project.id !== prevState.selectedProjectId)
        }),

      }
    });
  }
  const selectedProject =projectState.projects.find(project=>project.id === projectState.selectedProjectId);
  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteproject} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} tasks={projectState.tasks}/>;

  if(projectState.selectedProjectId === null){
        content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
      } else if (projectState.selectedProjectId === undefined){
        content =  <NoProjectSelected onStartAddProject={handleStartAddProject} />;
      }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} projects={projectState.projects} onSelectProject={handleSelectproject} />
      {content}
      {/* <NewProject/> */}
    </main>
  );
}

export default App;
