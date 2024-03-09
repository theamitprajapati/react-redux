import react from "react";

function List(props) {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {props.blogs.map((data, index) => {
          return (
            <tr key={index}>
              <td>
                <b>{data.title}</b>
              </td>
              <td>
                <small>{data.description}</small>
              </td>
              <td>
                <small>{data.time}</small>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default List;
