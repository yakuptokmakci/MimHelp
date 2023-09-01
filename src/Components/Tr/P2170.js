import { Image } from "antd";
import Navbar from "../Navbar";
function P2170() {
  return (
    <div>
      <Navbar />
      <div className="container overflow-hidden">
        <div
          class=" justify-content-center align-items-center overflow-x-hidden"
          style={{ minHeight: "100vh" }}
        >
          <img
            src="/Images/Tr/2170-1.png"
            class="card-img-top"
            alt="..."
          ></img>
          <div class="card-body overflow-hidden">
            <h5 class="card-title">Geçmiş PDI Talepleri</h5>
            <p class="card-text">
              Şirket bünyesinde kayıt altında tutulan PDI taleplerini
              arşivlemeye yarayan ekrandır
            </p>

            <h5 class="card-title">Ekrandaki İşaretlerin Anlamı:</h5>

            <div class=" row" style={{ marginTop: "5px" }}>
              <div class="col-1">
                <Image
                  width={50}
                  src="/Images/Tr/edit.png"
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
                    <p class="card-text">Düzeltme işlemi</p>
                  </li>
                </ul>
              </div>
            </div>

            <h5 class="card-title">GeçmişPDI işlemi</h5>
            <div class=" row" style={{ marginTop: "5px" }}>
              <div class="col-4">
                <Image
                  
                  src="/Images/Tr/2170-2.png"
                  placeholder={
                    <Image
                      preview={false}
                      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                      width={250}
                    />
                  }
                />
                <Image
                  
                  src="/Images/Tr/2170-3.png"
                  style={{marginTop:"5px"}}
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
                      Arzu edilen gemiş PDI talebini daha detaylı bir şekilde
                      filtreleme yaparak bulmaya yarayan ekrandandır arzu edilen
                      geçmiş pdi talebini form no , şehir ve iş tipi gibi
                      parametlere bağlı olarak bulabilirsiniz
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

export default P2170;
