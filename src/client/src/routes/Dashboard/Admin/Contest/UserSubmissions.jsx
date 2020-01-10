import React from "react";
// import Axios from "../../../../utils/axiosInterceptor"
class UserSubmissions extends React.Component {
  constructor() {
    super();
    this.state = {
      submissions: [
        {
          challengeName: '',
          score: '',
          rank: '',
          code:''
        }
      ]
    };
  }

  render() {
    const { submissions } = this.state;
    return (
      <>
        <div className="row d-flex justify-content-center">
          <table
            className="table table-striped text-center border border-success col-md-8 "
            style={{ marginTop: "100px" }}
          >
            <thead>
              <tr className="p-3 mb-2 bg-info text-white">
                {/* <th scope="col">S.no</th> */}
                <th scope="col">challengeName</th>
                <th scope="col">score</th>
                <th scope="col">rank</th>
                <th scope="col">code</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map(ele => {
                return (
                  <tr>
                    {/* <th scope="row">{ele.id}</th> */}
                    <td>{ele.challengeName}</td>
                    <td>{ele.score}</td>
                    <td>{ele.rank}</td>
                    <td>{ele.code}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default UserSubmissions;
