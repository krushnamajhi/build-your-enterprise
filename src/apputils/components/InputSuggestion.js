import React, { useEffect, useState } from "react";

function InputSuggestion(props) {
  const [showModal, setShowModal] = useState(false);
  const { fetcher } = props;
  const [suggestions, setSuggestions] = useState([]);
  const [isselected, setIsSelected] = useState(false)
  const [searchData, setSearchData] = useState('')

  const openSuggesstionPopup = () => {
    setShowModal(true);
  };

  const selectSuggestion = (value) => {
    setSearchData(value)
    setIsSelected(true)
  } 

  const handleSearchData = (e) => {
    setSearchData(e.target.value)
    setIsSelected(false)
  }

  useEffect(() => {
    if (showModal) {
      fetcher.findAll().then(({ data }) => {
        setSuggestions(data);
      });
    }
  }, [showModal]);

  return (
    <div>
      <table className="container">
        <tbody>
          <tr>
            <td style={{ width: "85%" }}>
              <input {...props} disabled={true} />
            </td>
            <td>
              <button
                className="btn btn-primary px-5"
                onClick={openSuggesstionPopup}
              >
                Select
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      {showModal ? (
        <div
          id="suggestion-pop"
          className="card shadow container"
          style={{ marginTop: "-25%", maxWidth: "90%" }}
        >
          <div className="m-3">
            <div className="col">
              <button
                className="btn btn-success px-2 mx-1"
                onClick={() => setShowModal(false)} disabled = {!isselected}
              >
                Submit
              </button>
              <button
                className="btn btn-danger my-1 px-2 mx-1"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button className="btn btn-primary my-1 px-2 mx-1">Refine</button>
            </div>
            <div className="container text-center py-2 my-2">
              <input className="form-control" value={searchData} onChange = {handleSearchData}/>
              <div
                className="row"
                style={{ maxHeight: "150px", overflow: "scroll" }}
              >
                {suggestions.map((sugg) => (
                    <div className="nav-item active">
                   <label key={sugg.id} onClick = {() => selectSuggestion(sugg.name)}>
                    {sugg.name}
                  </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default InputSuggestion;
