import { Image } from "antd";
import Navbar from "../Navbar";
function mustafa() {
  return (< div>
  <Navbar/>
    <div className="container overflow-hidden">
    <div class=" justify-content-center align-items-center overflow-x-hidden" style={{minHeight: "100vh" }} >
      <img src="/Images/Tr/kolaydrivedosya görünümü.PNG" class="card-img-top" alt="..."></img>
      <div class="card-body overflow-hidden">
      <h5 class="card-title"> MUSTAFA</h5>
              <p class="card-text">
                Kolay Drive'ın sunmuş olduğu Ortak Alanlar, dosyalarınızı
                belirli bir hiyerarşi ve yetkiye göre düzenlemenizi sağlar.
                Gelişmiş Yetkilendirme sistemi ile belirlenen yetkilere sahip
                kişi veya Kullanıcı Gruplarına izin verilen işlemlerin
                yapılmasına olanak sağlar ve ortak çalışma alanlarını daha
                güvenli kılar. Ayrıca, kullanıcıya özel kişiselleştirme
                seçenekleri sayesinde her kullanıcı kendi çalışma ortamını
                istediği gibi düzenleyebilir
              </p>

              <h5 class="card-title">Görünüm Menüsü</h5>
              <div class=" row" style={{ marginTop: "5px" }}>
                <div class="col-4">
                  <Image
                    width={200}
                    src="/Images/Tr/1040-13 - OrtakAlanlar-gorunum.png"
                    placeholder={
                      <Image
                        preview={false}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                        width={200}
                      />
                    }
                  />
                </div>
                <div class="col-8">
                  <ul>
                    <li>
                      <p class="card-text">
                        {" "}
                        <span style={{ fontWeight: "bold" }}>
                          Navigasyon Bölmesi:{" "}
                        </span>
                        Ekranın sol tarafındaki bulunan ağaç görünümünde klasör
                        listesini gösterir veya gizler.
                      </p>
                    </li>
                    <li>
                      <p class="card-text">
                        {" "}
                        <span style={{ fontWeight: "bold" }}>
                          Onay Kutuları:{" "}
                        </span>
                        Klasör/dosya seçimlerini fareyle seçip kaydırmak yerine
                        üzerine gelindiğinde görünen onay kutularını seçerek
                        yapılır.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              
              <h5 class="card-title">Ekran Pop-Up Menüleri</h5>
              <div class=" row" style={{ marginTop: "5px" }}>
                <div class="col-4">
                  <Image
                    width={200}
                    src="/Images/Tr/1040-09 - OrtakAlanlar-treePopup-1.png"
                    placeholder={
                      <Image
                        preview={false}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                        width={200}
                      />
                    }
                  />
                </div>
                <div class="col-8">
                  <ul>
                    <li>
                      <p class="card-text">
                        {" "}
                        <span style={{ fontWeight: "bold" }}>
                        Genişlet:{" "}
                        </span>
                        Ağaç görünümündeki klasör listesinde seçilen klasörün açılıp alt klasörlerinin listelenmesini sağlar.
                      </p>
                    </li>
                    <li>
                      <p class="card-text">
                        {" "}
                        <span style={{ fontWeight: "bold" }}>
                        Yenile:{" "}
                        </span>
                        Klasör görünümünü yeniler. Aktif görüntülenen klasörde bulunan alt klasörlerde veya dosyalarda yapılan değişiklikler varsa bunları sayfada yeniler.
                      </p>
                    </li>
                    <li>
                      <p class="card-text">
                        {" "}
                        <span style={{ fontWeight: "bold" }}>
                        Aç:{" "}
                        </span>
                        Seçilen dosyayı açmak için kullanılır.
                      </p>
                    </li>
                    <li>
                      <p class="card-text">
                        {" "}
                        <span style={{ fontWeight: "bold" }}>
                        Yükle:{" "}
                        </span>
                        Aktif klasör içine bilgisayardan dosya/klasör yüklemek için kullanılır.
                      </p>
                    </li>
                    <li>
                      <p class="card-text">
                        {" "}
                        <span style={{ fontWeight: "bold" }}>
                        Yeni Klasör: {" "}
                        </span>
                        Aktif klasör içine yeni bir klasör oluşturur.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div class=" row" style={{ marginTop: "5px" }}>
                <div class="col-4">
                  <Image
                    width={200}
                    src="/Images/Tr/1040-07 - OrtakAlanlar-klasorPopup.png"
                    placeholder={
                      <Image
                        preview={false}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                        width={200}
                      />
                    }
                  />
                </div>
                <div class="col-8">
                  <ul>
                    <li>
                      <p class="card-text">
                        {" "}
                        <span style={{ fontWeight: "bold" }}>
                        İndir:{" "}
                        </span>
                        Seçilen dosyayı bilgisayara indirmek (kaydetmek) için kullanılır.
                      </p>
                    </li>
                    <li>
                      <p class="card-text">
                        {" "}
                        <span style={{ fontWeight: "bold" }}>
                        Kes:{" "}
                        </span>
                        Seçilen dosyayı/klasörü bulunduğu konumdan başka bir klasöre taşımak istendiğinde kesmek için kullanılır.
                      </p>
                    </li>
                    <li>
                      <p class="card-text">
                        {" "}
                        <span style={{ fontWeight: "bold" }}>
                        Yapıştır: {" "}
                        </span>
                        Kopyalanan dosyayı/klasörü aktif klasör içine yapıştırır.
                      </p>
                    </li>
                    <li>
                      <p class="card-text">
                        {" "}
                        <span style={{ fontWeight: "bold" }}>
                        Sil:{" "}
                        </span>
                        Seçilen dosyayı/klasörü fiziksel olarak silmek için kullanılır.
                      </p>
                    </li>
                    <li>
                      <p class="card-text">
                        {" "}
                        <span style={{ fontWeight: "bold" }}>
                        İsim Değiştir: {" "}
                        </span>
                        Seçilen dosya/klasör ismini değiştirmek için kullanılır.
                      </p>
                    </li>
                    <li>
                      <p class="card-text">
                        {" "}
                        <span style={{ fontWeight: "bold" }}>
                        Yeni Klasör: {" "}
                        </span>
                        Aktif klasör içine yeni bir klasör oluşturur.
                      </p>
                    </li>
                    <li>
                      <p class="card-text">
                        {" "}
                        <span style={{ fontWeight: "bold" }}>
                        Seçimi Çevir: {" "}
                        </span>
                        Aktif klasör içinde daha önce seçilmiş olan dosyaları bırakıp seçilmeyenleri işaretler.
                      </p>
                    </li>
                    <li>
                      <p class="card-text">
                        {" "}
                        <span style={{ fontWeight: "bold" }}>
                        Aç:{" "}
                        </span>
                        Seçilen dosyayı açmak için kullanılır.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div class=" row" style={{ marginTop: "5px" }}>
                <div class="col-4">
                  <Image
                    width={200}
                    src="/Images/Tr/1040-08 - OrtakAlanlar-dosyaPopup.png"
                    placeholder={
                      <Image
                        preview={false}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                        width={200}
                      />
                    }
                  />
                </div>
                <div class="col-8">
                  <ul>
                    <li>
                      <p class="card-text">
                        {" "}
                        <span style={{ fontWeight: "bold" }}>
                        Önizleme:{" "}
                        </span>
                        Dosyayı yüklemeden veya açmadan sayfada görüntülemek için kullanılır. İlgili dosyaya sağ-clik ile tıklanıp Önizleme seçilerek açılır 
                      </p>
                    </li>
                    <li>
                      <p class="card-text">
                        {" "}
                        <span style={{ fontWeight: "bold" }}>
                        Kes:{" "}
                        </span>
                        Seçilen dosyayı/klasörü bulunduğu konumdan başka bir klasöre taşımak istendiğinde kesmek için kullanılır.
                      </p>
                    </li>
                    <li>
                      <p class="card-text">
                        {" "}
                        <span style={{ fontWeight: "bold" }}>
                        Yapıştır: {" "}
                        </span>
                        Kopyalanan dosyayı/klasörü aktif klasör içine yapıştırır.
                      </p>
                    </li>
                    <li>
                      <p class="card-text">
                        {" "}
                        <span style={{ fontWeight: "bold" }}>
                        İsim Değiştir: {" "}
                        </span>
                        Seçilen dosya/klasör ismini değiştirmek için kullanılır.
                      </p>
                    </li>
                    <li>
                      <p class="card-text">
                        {" "}
                        <span style={{ fontWeight: "bold" }}>
                        Seçimi Çevir: {" "}
                        </span>
                        Aktif klasör içinde daha önce seçilmiş olan dosyaları bırakıp seçilmeyenleri işaretler.
                      </p>
                    </li>
                    <li>
                      <p class="card-text">
                        {" "}
                        <span style={{ fontWeight: "bold" }}>
                        Aç:{" "}
                        </span>
                        Seçilen dosyayı açmak için kullanılır.
                      </p>
                    </li>
                    <li>
                      <p class="card-text">
                        {" "}
                        <span style={{ fontWeight: "bold" }}>
                        İndir:{" "}
                        </span>
                        Seçilen dosyayı bilgisayara indirmek (kaydetmek) için kullanılır.
                      </p>
                    </li>
                    <li>
                      <p class="card-text">
                        {" "}
                        <span style={{ fontWeight: "bold" }}>
                        Sil:{" "}
                        </span>
                        Seçilen dosyayı/klasörü fiziksel olarak silmek için kullanılır.
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

export default mustafa;
