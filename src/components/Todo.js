import { memo } from "react";

const Todos = ({ todos, addTodo }) => {
  console.log("todo calling");
  return (
    <>      
      <button onClick={addTodo}>{todos} Add Todo</button>
    </>
  );
};

export default memo(Todos);

