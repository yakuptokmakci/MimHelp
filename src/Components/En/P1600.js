import { Image } from "antd";
import Navbar from "../Navbar";
function P1600() {
  return (
    <div>
      <Navbar />
      <div className="container overflow-hidden">
        <div
          class=" justify-content-center align-items-center overflow-x-hidden"
          style={{ minHeight: "100vh" }}
        >
          <img
            src="/Images/Tr/1600-1.png"
            class="card-img-top"
            alt="..."
          ></img>
          <div class="card-body overflow-hidden">
            <h5 class="card-title">Teknik Destek Talepleri</h5>
            <p class="card-text">
            Buradan teknik destek taleplerine ulaşabilirsiniz.
            </p>

            <h5 class="card-title">Yeni kayıt</h5>
            <div class=" row" style={{ marginTop: "5px" }}>
              <div class="col-4">
                <Image
                  
                  src="/Images/Tr/1600-2.png"
                  placeholder={
                    <Image
                      preview={false}
                      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                      width={250}
                    />
                  }
                />
              </div>
              <div class="col-8">
                <ul>
                  <li>
                    <p class="card-text">
                    Buradan yeni kayıt yapabilirsiniz.
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

export default P1600;
