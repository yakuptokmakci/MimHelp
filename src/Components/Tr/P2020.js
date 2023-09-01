import { Image } from "antd";
import Navbar from "../Navbar";
function P2020() {
  return (
    <div>
      <Navbar />
      <div className="container overflow-hidden">
        <div
          class=" justify-content-center align-items-center overflow-x-hidden"
          style={{ minHeight: "100vh" }}
        >
          <img
            src="/Images/Tr/2020-1.png"
            class="card-img-top"
            alt="..."
          ></img>
          <div class="card-body overflow-hidden">
            <h5 class="card-title">Malzeme Toplama Ekranı</h5>
            <p class="card-text">
              Şirket bünyesinde çalışan personellerin yaptıkları masraflar ile
              ilgili doldurdukları form tipidir (ileri tarihli giriş
              yapılabilmesi parametrik olarak kontrol edilebilmektedir). Bu form
              için öncelikle aşağıdaki ana ekran gelmektedir. Burada kullanıcı
              geçmiş taleplerini de görebilmektedir.
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
                    <p class="card-text">Talebin çıktısı</p>
                  </li>
                </ul>
              </div>
            </div>

            <h5 class="card-title">Malzeme toplama işlemi</h5>
            <div class=" row" style={{ marginTop: "5px" }}>
              <div class="col-4">
                <Image
                  
                  src="/Images/Tr/2020-2.png"
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
                      Burada transfer işlemi yaptığınızda stoktan malzeme
                      eksilecektir aynı zamanda iade edilen malzemeler için de
                      iade işlemi yapabilir ve stoğa tekrardan eklenir.Transfer
                      yazısının solunda bulunan kutucuğa tıkladığınızda toplu
                      seçim yaparbilirsiniz,hücre kısmı malzemenin depoda hangi
                      kısımda bulunduğunu belirtmektedir.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <h5 class="card-title">Malzeme toplama eklenti</h5>
            <div class=" row" style={{ marginTop: "5px" }}>
              <div class="col-4">
                <Image
                 
                  src="/Images/Tr/2020-3.png"
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
                    <p class="card-text">Malzemelere eklenti yapabilirsiniz.</p>
                  </li>
                </ul>
              </div>
            </div>

         

            <h5 class="card-title">Çıktı</h5>
            <div class=" row" style={{ marginTop: "5px" }}>
              <div class="col-4">
                <Image
                  
                  src="/Images/Tr/2020-4.png"
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
                    <p class="card-text">Çıktı ekranı da bu şekildedir.</p>
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

export default P2020;
