import { Image } from "antd";
import Navbar from "../Navbar";

function P1550() {
  return (
    <div>
      <Navbar/>
      <div className="container overflow-hidden">
        <div
          class=" justify-content-center align-items-center overflow-x-hidden"
          style={{ minHeight: "100vh" }}
        >
          <img
            src="/Images/Tr/Teklif.png"
            class="card-img-top"
            alt="..."
          ></img>
          <div class="card-body overflow-hidden">
            <h5 class="card-title">Teklif Formu</h5>
            <p class="card-text">
            Şirket bünyesinde çalışan personellerin yaptıkları tekliflerdir.
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
                    <p class="card-text">
                    Düzeltme işlemi
                    </p>
                  </li>
                </ul>
              </div>
            </div>

       
            <div class=" row" style={{ marginTop: "5px" }}>
              <div class="col-1">
                <Image
                  width={50}
                  src="/Images/Tr/attach.png"
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
                    Talebe dosya, resim vb. ekleme ve görüntüleme işlemi
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div class=" row" style={{ marginTop: "5px" }}>
              <div class="col-1">
                <Image
                  width={50}
                  src="/Images/Tr/wait.png"
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
                    Talep onayda
                    </p>
                  </li>
                </ul>
              </div>
            </div>

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

            <div class=" row" style={{ marginTop: "5px" }}>
              <div class="col-1">
                <Image
                  width={50}
                  src="/Images/Tr/logolutalep.png"
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
                    Talebin antetli çıktısı
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div class=" row" style={{ marginTop: "5px" }}>
              <div class="col-4">
                <Image
                  
                  src="/Images/Tr/1550-1.png"
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
                    Şirket bünyesinde çalışan personellerin yaptıkları teklifleri gelişmiş aramayla görebilirsiniz.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <h5 class="card-title">Teklif Bilgisi</h5>
            <div class=" row" style={{ marginTop: "5px" }}>
              <div class="col-4">
                <Image
                  
                  src="/Images/Tr/1550-2.png"
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
                    Teklif bilgilerine ulaşabilirsiniz.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <h5 class="card-title">Onay Listesi</h5>
            <div class=" row" style={{ marginTop: "5px" }}>
              <div class="col-4">
                <Image
                 
                  src="/Images/Tr/1550-3.png"
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
                    Onaylan kişiler bilgilerine ulaşabilirsiniz.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <h5 class="card-title">Şablonlar</h5>
            <div class=" row" style={{ marginTop: "5px" }}>
              <div class="col-4">
                <Image
                  
                  src="/Images/Tr/1550-4.png"
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
                    Buradan şablon ekleyebilir,düzenleyebilir veya silebilirsiniz.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <h5 class="card-title">Notlar</h5>
            <div class=" row" style={{ marginTop: "5px" }}>
              <div class="col-4">
                <Image
                  
                  src="/Images/Tr/1550-5.png"
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
                    İlgili talebinize notlar eklemek isteyebilirsiniz.
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

export default P1550;
