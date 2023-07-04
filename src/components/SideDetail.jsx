import axios from "axios";
import { useEffect, useState } from "react";

const SideDetail = ({ id, setShowDetail }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    // Detayları sıfırla
    setDetails(null);

    const options = {
      method: "GET",
      url: "https://flight-radar1.p.rapidapi.com/flights/detail",
      params: { flight: id },
      headers: {
        "X-RapidAPI-Key": "6531794c49msh38dff0025c8d668p1c1dcdjsncfc3e0e62e8c",
        "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((res) => {
        // Veri alındığında detayları güncelle
        setDetails(res.data);
      })
      .catch((error) => {
        console.log("Hata:", error);
      });
  }, [id]);

  return (
    <div className="detail">
      <div className="detail-inner">
        <p className="close-icon">
          <span onClick={() => setShowDetail(false)}>X</span>
        </p>
        {!details ? (
          <p>Yükleniyor...</p>
        ) : (
          <>
            <h2>{details?.aircraft?.model?.text}</h2>
            <p>{details?.aircraft?.model?.code}</p>
            <p>Kuyruk Kodu: &nbsp;{details?.aircraft?.registration}</p>
            <img src={details?.aircraft?.images?.large[0]?.src} alt="" />
            <p>Şirket: &nbsp; {details?.airline?.short}</p>
            <p>
              Kalkış: &nbsp;
              <a href={details?.airport?.origin?.website}>
                {details?.airport?.origin?.name}
              </a>
            </p>
            <p>
              Hedef: &nbsp;
              <a href={details?.airport?.destination?.website}>
                {details?.airport?.destination?.name}
              </a>
            </p>
            <p>Durum: &nbsp;{details?.status?.text}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default SideDetail;
