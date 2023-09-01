import Navbar from "../Navbar";
function P2150() {
  return (
    <div>
      <Navbar />
      <div className="container overflow-hidden">
        <div
          class=" justify-content-center align-items-center overflow-x-hidden"
          style={{ minHeight: "100vh" }}
        >
          <img
            src="/Images/Tr/2150-1.png"
            class="card-img-top"
            alt="..."
          ></img>
          <div class="card-body overflow-hidden">
            <h5 class="card-title">Yedek Parça Sipariş Takip</h5>
            <p class="card-text">
            Yedek parça siparişlerinin takibini yapabilirsiniz.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default P2150;
