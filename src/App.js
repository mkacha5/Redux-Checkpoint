import Addtasks from "./component/task/Addtasks";
import Tasklist from "./component/task/Tasklist";
import Edittasks from "./component/task/Edittasks";

function App() {
  return (
    <div className="app">
      <h1> TODO LIST </h1>
      <Addtasks />
      <Tasklist />
      <Edittasks />
    </div>
  );
}

export default App;
