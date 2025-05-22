// import AcceptTask from '../TaskList/AcceptTask';
// import CompleteTask from '../TaskList/CompleteTask';
// import FailedTask from '../TaskList/FailedTask';
// import NewTask from '../TaskList/NewTask';

// const Tasklist = ({ data }) => {

//   return (
//     <div>
//       <div style={{ margin: "10vh" }}>

//         <div className="row d-flex" style={{ gap: "15px" }}>
//  {data.tasks.map((elem, index) => {
//   if (elem.newTask) {
//     return <NewTask key={index} task={elem} user={data} />;
//   } else if (elem.active) {
//     return <AcceptTask key={index} task={elem} user={data} />;
//   } else if (elem.completed) {
//     return <CompleteTask key={index} task={elem} user={data} />;
//   } else if (elem.failed) {
//     return <FailedTask key={index} task={elem} user={data} />;
//   } else {
//     return null;
//   }
// })}

//         </div>

//       </div>
//     </div>
//   );
// };

// export default Tasklist;

import AcceptTask from "../TaskList/AcceptTask";
import CompleteTask from "../TaskList/CompleteTask";
import FailedTask from "../TaskList/FailedTask";
import NewTask from "../TaskList/NewTask";
const Tasklist = ({ data }) => {
  return (
    <div className="task-cards-container">
      {data?.tasks?.map((task, index) => {
        if (task.newTask) {
          return <NewTask key={index} task={task} index={index} />;
        } else if (task.active) {
          return <AcceptTask key={index} task={task} index={index} />;
        } else if (task.completed) {
          return <CompleteTask key={index} task={task} index={index} />;
        } else if (task.failed) {
          return <FailedTask key={index} task={task} index={index} />;
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default Tasklist;
