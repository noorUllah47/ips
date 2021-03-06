import { useState, useEffect } from "react";
import NavigationBar from "../../Atoms/NavgationBar";
import blockImage from "../../../Assets/Img/bus.png";
import timerImage from "../../../Assets/Img/Tick.png"
const AfterSubmission = () => {
  const [activeTab, setActiveTab] = useState("PIB");
  const [activeTable, setActiveTable] = useState();

  function handleActiveTAb(value) {
    setActiveTab(value);
    if (value === "PIB") {
      setActiveTable(PIB);
    } else if (value === "Tbill") {
      setActiveTable(Tbill);
    } else if (value === "Quaterly") {
      setActiveTable(Quaterly);
    } else if (value === "semiAnual") {
      setActiveTable(semiAnual);
    } else if (value === "annual") {
      setActiveTable(annual);
    }
    console.log("========asdadad>", activeTable);
  }

  const Quaterly = {
    headings: [
      "Start of When-Issue Period ",
      "Auction Date",
      "Settlement Date",
    ],
    tBody: [
      {
        id: 1,
        items: ["14-May-22", "  18-May-22", " 19-May-22"],
      },
      {
        id: 3,
        items: ["28-May-22", " 1-Jun-22", " 2-Jun-22"],
      },

      {
        id: 4,
        items: ["11-Jun-22", " 15-Jun-22", " 16-Jun-22"],
      },
      {
        id: 5,
        items: ["25-Jun-22", "  29-Jun-22", " 30-Jun-22"],
      },
      {
        id: 6,
        items: ["6-Jul-22", " 13-Jul-22", " 14-Jul-22"],
      },
      {
        id: 7,
        items: ["23-Jul-22", " 27-Jul-22", " 28-Jul-22"],
      },
    ],
  };
  const semiAnual = {
    headings: [
      "Start of When-Issue Period ",
      "Auction Date",
      "Settlement Date",
    ],
    tBody: [
      {
        id: 1,
        items: ["13-May-22", "  18-May-22", " 19-May-22"],
      },
      {
        id: 3,
        items: ["27-May-22", " 1-Jun-22", " 2-Jun-22"],
      },

      {
        id: 4,
        items: ["10-Jun-22", " 15-Jun-22", " 16-Jun-22"],
      },
      {
        id: 5,
        items: ["24-Jun-22", "  29-Jun-22", " 30-Jun-22"],
      },
      {
        id: 6,
        items: ["7-Jul-22", " 13-Jul-22", " 14-Jul-22"],
      },
      {
        id: 7,
        items: ["22-Jul-22", " 27-Jul-22", " 28-Jul-22"],
      },
    ],
  };

  const PIB = {
    headings: [
      "Instrument",
      "Bidding Deadline",
      "Auction Date",
      "Settlement Date",
    ],
    tBody: [
      
      {
        id: 2,
        items: ["PIB", "15-Jun-22", "22-Jun-22", "23-Jun-22"],
      },
      {
        id: 3,
        items: ["PIB", "13-Jul-22", "20-Jul-22", " 21-Jul-22"],
      },
   
    ],
  };


  const annual = {
    headings: [
      "Start of When-Issue Period ",
      "Auction Date",
      "Settlement Date",
    ],
    tBody: [
      {
        id: 1,
        items: ["18-May-22", " 25-May-22", " 26-May-22"],
      },
      {
        id: 2,
        items: ["15-Jun-22", " 22-Jun-22", " 23-Jun-22"],
      },
      {
        id: 3,
        items: ["13-Jul-22", " 20-Jul-22", " 21-Jul-22"],
      },
    ],
  };
  const Tbill = {
    headings: ["Instrument", "Auction Date", "Settlement Date"],
    tBody: [
 
      {
        id: 2,
        items: ["T-BILL", "1-Jun-22", "2-Jun-22"],
      },
      {
        id: 3,
        items: ["T-BILL", "15-Jun-22", "16-Jun-22"],
      },
      {
        id: 4,
        items: ["T-BILL", "29-Jun-22", "30-Jun-22"],
      },
      {
        id: 5,
        items: ["T-BILL", "13-Jul-22", "14-Jul-22"],
      },
      {
        id: 6,
        items: ["T-BILL", "27-Jul-22", "28-Jul-22"],
      },
    ],
  };
  useEffect(() => {
    setActiveTable(PIB);
  }, []);

  console.log(Tbill.headings);
  const activeclass = "tabActive";
  return (
    <>
      <NavigationBar step={0} />
      <div>
        <div className="container-fluid account_main">
          <div className="row  accountdiv">
            <div className="  col-lg-6 col-sm-4 col-md-4">
              <h2>Welcome Mr .John Doe   <img  src={timerImage} /></h2>
              <p className=" my-4 fw-600 acntp">
              Thank You. Your IPS account has been opened.
              </p>
              <button className="btn btn-primary after_sub_btn ">
              Submit Bid
              </button>
              <button className="btn btn-primary ms-3 after_sub_btn">
              Fund Account
              </button>
            </div>
            <div className="col-9">
              <div className="d-flex justify-content-end">
                <img className="imageticks" src={blockImage} />
           
              </div>
            </div>
          </div>

          <div className="row   calendardiv ">
            <div className="col-lg-6  col-sm-6 col-md-6">
              <h2 className="my-3">Calendar</h2>
              <div className="calendarTab">
                <div className=" tabs_div">
                  <button
                    onClick={() => handleActiveTAb("PIB")}
                    className={`btn btn-primary my-2 ${
                      activeTab === "PIB" ? activeclass : "tabsbtn"
                    } my-3 me-3 `}
                  >
                    PIB
                  </button>
                  <button
                    onClick={() => handleActiveTAb("Tbill")}
                    className={`btn btn-primary  my-2  ${
                      activeTab === "Tbill" ? activeclass : "tabsbtn"
                    }  me-3 `}
                  >
                    T-BILL
                  </button>
                  <button
                    // onClick={() => handleActiveTAb("")}
                    className={`btn btn-primary    ${
                      activeTab === "skuk" ? activeclass : "tabsbtn"
                    }  my-2  me-3 sukook `}
                  >
                    SUKUK (Coming Soon)
                  </button>
                </div>
                <div className=" tabs_div">
                  <p className="ms-1 my-3 fw-600 acntp">
                    <a href="">Click Here</a> to review last auction results
                  </p>
                
                </div>
              </div>

              <table class="table calendarTable table-bordered">
                <thead class="table_head">
                  <tr className="calendarT_header text-center">
                    {activeTable?.headings?.map((data) => {
                      return <th>{data}</th>;
                    })}
                    <th>Remind me</th>
                  </tr>
                </thead>
                <tbody>
                  {activeTable?.tBody?.map((item) => (
                    <tr className="second_row text-center">
                      {item.items?.map((data) => (
                        <td key={item}>{data}</td>
                      ))}
                      <td className="">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-sm-6 col-md-6">
              <h2 className="my-3">Bidding & Payment Instructions</h2>
              <ul className="me-4">
                <li className="calendar_li my-4 fw-600">
                  To place a bid in the next auction, please download, print and
                  fill out the form for non-comeptitive bid or competitive bid,
                  and email us with a scanned copy at ips@nextcapital.com.pk.
                  Please only email us with the registered address from which
                  you created your account.
                </li>
                <li className="calendar_li my-4 fw-600">
                  To fund your bid, prior to the bidding deadline of 3pm, one
                  day prior to the auction date, you can send us money at the
                  following bank account:
                  <br /> Title: Next Capital Limited-Client Group Account <br />
                  Branch: Stock Exchange Branch Karachi <br />
                  Acc #: 0550019331003195 <br /> IBAN #:
                  PK85MUCB0550019331003195
                </li>
                <li className="calendar_li my-4 fw-600">
                  You may send us funds via IBFT, Raast, or Cheque. Cheques must
                  be received 3 days prior to the bid deadline so that there is
                  sufficient time for them to clear. If your funds have not
                  cleared and been received in Next Capital???s bank account, then
                  we will not submit your bid to NCCPL.
                </li>
                <li className="calendar_li my-4 fw-600">
                  {" "}
                  Please also note the following:<br /> ??? We will charge a one-time
                  commission of 0.0325% (annualized) on the discounted value of
                  your security.<br /> ??? Any redemption or profit payments will be
                  sent to us by NCCPL, and we will forward those funds to you.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AfterSubmission;
