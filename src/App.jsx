import Header from "./Header";
import ProjectList from "./ProjectList";
import Sidebar from "./Sidebar";

function App() {

    return (
        <>
       <div className="flex h-screen">
      <Sidebar />

      <main className="flex-1 overflow-y-auto overflow-x-hidden">
          <Header />
          <ProjectList />
      </main>
       </div>
        </>
    );
}

export default App;
