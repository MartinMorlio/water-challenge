import "./display.scss";

export const Display = ({ shortestPath }) => {
  const totalSteps = shortestPath.length - 1;

  return (
    <div className="display__pairs">
      <h1 className="display__title">Steps [Total: {totalSteps}]</h1>
      <table>
        <tbody>
          <tr>
            <th>Action</th>
            <th>Bucket A</th>
            <th>Bucket B</th>
          </tr>
          {shortestPath.map((bucket, i) => (
            <tr key={i}>
              <td>{bucket.action}</td>
              <td>{bucket.small}</td>
              <td>{bucket.large}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};