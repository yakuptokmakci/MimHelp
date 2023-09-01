import { Image } from "antd";
import Navbar from "../Navbar";
function P2820() {
  return (
    <div>
      <Navbar />
      <div className="container overflow-hidden">
        <div
          class=" justify-content-center align-items-center overflow-x-hidden"
          style={{ minHeight: "100vh" }}
        >
          <img
            src="/Images/Tr/2820-1.png"
            class="card-img-top"
            alt="..."
          ></img>
          <div class="card-body overflow-hidden">
            <h5 class="card-title">Fatura Onay Ekranı</h5>
            <p class="card-text">
            Buradan taşeron şirketlerin faturalarını görebilirsiniz.
            </p>

            <h5 class="card-title">Ekrandaki İşaretlerin Anlamı:</h5>


            <div class=" row" style={{ marginTop: "5px" }}>
              <div class="col-1">
                <Image
                  width={50}
                  src="/Images/Tr/valid.png"
                  placeholder={
                    <Image
                      preview={false}
                      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                      width={50}
                    />
                  }
                />
              </div>
              <div class="col-11">
                <ul>
                  <li>
                    <p class="card-text">
                    Talep onaylandı
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div class=" row" style={{ marginTop: "5px" }}>
              <div class="col-1">
                <Image
                  width={50}
                  src="/Images/Tr/empty_baloon.png"
                  placeholder={
                    <Image
                      preview={false}
                      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                      width={50}
                    />
                  }
                />
              </div>
              <div class="col-11">
                <ul>
                  <li>
                    <p class="card-text">
                    Talebin notları (henüz not yazılmamış)
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div class=" row" style={{ marginTop: "5px" }}>
              <div class="col-1">
                <Image
                  width={50}
                  src="/Images/Tr/filled_baloon.png"
                  placeholder={
                    <Image
                      preview={false}
                      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                      width={50}
                    />
                  }
                />
              </div>
              <div class="col-11">
                <ul>
                  <li>
                    <p class="card-text">
                    Talebin notları (not yazılmış)
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div class=" row" style={{ marginTop: "5px" }}>
              <div class="col-1">
                <Image
                  width={50}
                  src="/Images/Tr/printer.png"
                  placeholder={
                    <Image
                      preview={false}
                      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                      width={50}
                    />
                  }
                />
              </div>
              <div class="col-11">
                <ul>
                  <li>
                    <p class="card-text">
                    Talebin çıktısı
                    </p>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default P2820;
