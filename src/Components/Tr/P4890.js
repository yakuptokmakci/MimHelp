import { Image } from "antd";
import Navbar from "../Navbar";
function P4890() {
  return (
    <div>
      <Navbar />
      <div className="container overflow-hidden">
        <div
          class=" justify-content-center align-items-center overflow-x-hidden"
          style={{ minHeight: "100vh" }}
        >
          <img
            src="/Images/Tr/4890-1.png"
            class="card-img-top"
            alt="..."
          ></img>
          <div class="card-body overflow-hidden">
            <h5 class="card-title">Personel Masraf Formu</h5>
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
                  src="/Images/Tr/delete.png"
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
                    <p class="card-text">Silme işlemi</p>
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
                    <p class="card-text">Talep onayda</p>
                  </li>
                </ul>
              </div>
            </div>

            <div class=" row" style={{ marginTop: "5px" }}>
              <div class="col-1">
                <Image
                  width={50}
                  src="/Images/Tr/danger.png"
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
                    <p class="card-text">Talep red edildi</p>
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
                    <p class="card-text">Talep onaylandı</p>
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
                    <p class="card-text">Talebin notları (not yazılmış)</p>
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

            <h5 class="card-title">Yeni masraf talebi</h5>
            <div class=" row" style={{ marginTop: "5px" }}>
              <div class="col-4">
                <Image
                  
                  src="/Images/Tr/4890-2.png"
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
                      Yeni bir masraf talebi ve düzeltilmesi gereken masraf
                      talebi için gelen ekran aşağıdaki gibidir. Burada kalem
                      kalem masraf nedenleri yazılabilir. Masraf talebinin hangi
                      proje için olduğu tarih vb bilgiler de
                      doldurulabilmektedir.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <h5 class="card-title">Masraf talebine not ekleme</h5>
            <div class=" row" style={{ marginTop: "5px" }}>
              <div class="col-4">
                <Image
                  
                  src="/Images/Tr/4890-3.png"
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
                      İlgili talebinize notlar eklemek isteyebilirsiniz, burada
                      notlar iki çeşittir. İlgili talep ile ilgili aldığınız
                      notu sadece kendiniz için almış olabilirsiniz bu notu
                      sizden başkası görmez, ya da talebi görme yetkisi olan
                      kişilerin veya onaylayacak kişilerin görmesini
                      isteyebilirsiniz. Bu iki durumda karşılanmıştır..
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div class=" row" style={{ marginTop: "5px" }}>
              <div class="col-4">
                <Image
                  
                  src="/Images/Tr/4890-4.png"
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
                      Turkuaz renkli not sadece sizin görebileceğiniz not
                      tipidir. Yeşil renkli not herkesin görebileceği not
                      tipidir. Açık mavi renk karşı tarafın yazdığı not tipidir.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <h5 class="card-title">Onaylar</h5>
            <div class=" row" style={{ marginTop: "5px" }}>
              <div class="col-4">
                <Image
                  
                  src="/Images/Tr/4890-5.png"
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
                      Talep onay akışı seçilerek onay akışına sokulur. (burada
                      kullanıcılara onay akışı tanımlanarak seçmesi gerekmeden
                      kendisine tanımlanmıs onay akışanada gönderebilir) daha
                      sonra onaylar sekmesinde tüm onay akışı takip
                      edilebilmektedir.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div class=" row" style={{ marginTop: "5px" }}>
              <div class="col-4">
                <Image
                  
                  src="/Images/Tr/4890-6.png"
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
                      Talep onaya girdiğinde onay sırası gelen kişiye aşağıdaki
                      gibi bir mail ile hatırlatma sağlanmaktadır. Portal
                      üzerinde onayımda bekleyen talepler ekranından bütün
                      modüllerimiz için gelen onayları yönetebilmektedir. Bu
                      mail ile sadece hatırlatma yapmakta kalınmayıp maildeki
                      link tıklanarak ilgili talebin açılması sağlanmış ve
                      buradan da onay işlemi yapılabilmesi sağlanmıştır.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div class=" row" style={{ marginTop: "5px" }}>
              <div class="col-4">
                <Image
                  
                  src="/Images/Tr/4890-7.png"
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
                      Mail ile gelen link tıklandığında aşağıdaki gibi bir ekran
                      açılmaktadır. Burada güvenlik sağlanmış olup sadece mailin
                      ilgilisi kişi giriş yapabilmektedir. Bu onay ekranında
                      kişi isterse (kendisi ve departmanı ile vb ilgili
                      olmadıgını, talebi yapanın yanlış onay akışını seçtiğini
                      düşünebilir) onay akışını başka bir onay akışı ile
                      değiştirebilir yada yorum yazıp onay akışında kendisinden
                      önceki bir kişiye geri gönderebilmektedir.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <h5 class="card-title">Talep çıktısı alma</h5>
            <div class=" row" style={{ marginTop: "5px" }}>
              <div class="col-4">
                <Image
                  
                  src="/Images/Tr/4890-8.png"
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
                      Talep işlemleri bittikten sonra ilgili talebin çıktısı
                      aşağıdaki örnekte görülebileceği üzere alınabilmektedir.
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

export default P4890;
