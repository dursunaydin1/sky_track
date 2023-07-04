import { useSelector } from "react-redux";
import { useState } from "react";
import SideDetail from "./SideDetail";

const ListView = () => {
  const state = useSelector((store) => store);
  const [detailId, setDetailId] = useState();
  const [showDetails, setShowDetails] = useState(false);

  const handleDetailClick = (id) => {
    setDetailId(id);
    setShowDetails(true);
  };

  return (
    <div className="container">
      <h3>{state.flights.length} Uçuş Bulundu</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Kuruk Kodu</th>
            <th>Enlem</th>
            <th>Boylam</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {state.flights.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.id}</td>
              <td>{flight.code}</td>
              <td>{flight.lat}</td>
              <td>{flight.lng}</td>
              <td>
                <button onClick={() => handleDetailClick(flight.id)}>
                  Detay
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showDetails && (
        <SideDetail id={detailId} setShowDetail={setShowDetails} />
      )}
    </div>
  );
};

export default ListView;
