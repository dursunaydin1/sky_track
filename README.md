<h1>Flight Radar Uygulaması</h1>
Bu proje, bir uçuş radarı uygulamasının kullanıcı arayüzünü sağlar. Kullanıcılar, mevcut uçuşları görüntüleyebilir ve her bir uçuşun ayrıntılarını görüntülemek için detay butonunu tıklayabilirler.
Uçuş ayrıntıları içinde uçuşun modeli, kuyruk kodu, şirket bilgisi, kalkış ve varış havaalanları gibi bilgiler bulunur.
Uçuş ayrıntılarını kapatmak için "X" butonuna tıklayabilirsiniz.</br>

<h3># Proje Özellikleri</h3>

Uçuş listesi:</br>
Uygulama, Redux tarafından yönetilen bir uçuş durumu kullanır. Uçuşların ID, kuyruk kodu, enlem ve boylam bilgilerini içeren bir tablo şeklinde görüntüler. Uçuş listesi, Redux store'dan alınarak görüntülenir.
Her uçuşun yanında bir "Detay" butonu bulunur.</br>

Uçuş detayları:</br>
Her bir uçuşun ayrıntılarını görüntüler, seçilen uçuşun ID'si kullanılarak API üzerinden alınır, Axios kütüphanesi kullanılarak API çağrısı yapılır, detaylar bileşen içinde görüntülenir, bu ayrıntılar uçuşun modeli, kuyruk kodu, şirket bilgisi, kalkış ve varış havaalanları gibi bilgileri içerir.Detaylar, resimlerle birlikte görüntülenebilir.</br>
Harita entegrasyonu:</br>
Uçuşların enlem ve boylam bilgilerini kullanarak uçuşların konumlarını harita üzerinde gösterir.</br>

<h3># Teknolojiler ve Kütüphaneler</h3>

Bu proje aşağıdaki teknolojileri ve kütüphaneleri kullanmaktadır:</br>

React: Kullanıcı arayüzü bileşenlerinin oluşturulması için.</br>
Redux: Uygulama durumunun yönetimi için.</br>
React Redux: React bileşenlerinin Redux store ile bağlantısını sağlamak için.</br>
Axios: HTTP istekleri yapmak için kullanılır.</br>
react-router-dom: Sayfa yönlendirmeleri ve yönlendirme işlemleri için kullanılır.</br>

Dizin Yapısı
java
Copy code
├── src
│ ├── components
│ │ ├── ListView.jsx
│ │ └── SideDetail.jsx
│ ├── App.js
│ ├── index.js
│ └── store.js
├── public
│ ├── index.html
│ └── ...
├── package.json
└── README.md
src/components: ListView ve SideDetail bileşenlerinin bulunduğu klasör.
src/App.js: Ana uygulama bileşeni.
src/index.js: Uygulamanın başlangıç noktası.
src/store.js: Redux store konfigürasyon

<h3># Katkıda Bulunma</h3>
Bu projeye katkıda bulunmak için aşağıdaki adımları izleyebilirsiniz:</br>

Bu projeyi kendi bilgisayarınıza klonlayın.</br>
Yeni özellikler ekleyin, hataları düzeltin veya iyileştirmeler yapın.</br>
Değişikliklerinizi açıklayan bir "pull request" gönderin.</br>
İnceleme sürecinden sonra değişiklikleriniz ana projeye entegre edilebilir.</br>
Lütfen yapmak istediğiniz değişiklikleri açıklamak için ayrıntılı bir açıklama ekleyin ve uygun bir şekilde test ettiğinizden emin olun.</br>

<h3><a href=""># Canlı Önizleme</a></h3>
<img src="/src/assets/screen.gif" alt="">
