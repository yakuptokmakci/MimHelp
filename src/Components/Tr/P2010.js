import Navbar from "../Navbar";
function P2010() {
  return (
    <div>
      <Navbar />
      <div className="container overflow-hidden">
        <div
          class=" justify-content-center align-items-center overflow-x-hidden"
          style={{ minHeight: "100vh" }}
        >
          <img
            src="/Images/Tr/2010-1.png"
            class="card-img-top"
            alt="..."
          ></img>
          <div class="card-body overflow-hidden">
            <h5 class="card-title">Müşteri Sorgu Ekranı</h5>
            <p class="card-text">
              Firma seçiniz kısmından firma seçerek firma bilgilerine ve
              firmanın sahip olduğu makine bilgilerine ulaşabilirsiniz.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default P2010;
