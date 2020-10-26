AOS.init();
// nav js start
let nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    
      /*mobile menu toggler*/
      const mobile_menu_toggler = document.querySelector(".mobile_menu_toggler");
      mobile_menu_toggler.style.color = "black";
      /*mobile menu toggler ends*/
      // fixed icon
      $(".back-to-top").css("display", "block")
    nav.classList.remove("nav-scrl");
    nav.style.transform = "scale(1)";
    nav.style.transition = "0.3s";
    nav.style.boxShadow = "0 4px 4px -2px grey";

    nav.classList.add("fixed-top");
    const link = nav.querySelectorAll("header #navbarNavAltMarkup .navbar-nav a.nav-link");
    link.forEach((e) => {
      e.style.color = "black";
    });
    const AzGP = nav.querySelector(".navbar-brand h2");
    AzGP.style.color = "black";
    const eng = nav.querySelector(".navbar-brand .eng");
    eng.style.color = "black";
    let navHover = document.querySelectorAll(
      "a.nav-link"
    );
    navHover.forEach((e) => {
      e.addEventListener("mouseover", function () {
        e.style.color = "turquoise";
      });
    });
    navHover.forEach((e) => {
      e.addEventListener("mouseout", function () {
        e.style.color = "black";
      });
    });
  } else {
      /*mobile menu toggler*/
      const mobile_menu_toggler = document.querySelector(".mobile_menu_toggler");
      mobile_menu_toggler.style.color = "white";
      mobile_menu_toggler.style.marginRight = "20px";
      /*mobile menu toggler ends*/
      
      $(".back-to-top").css("display", "none")
      nav.style.transform = "scale(0.8)";
    nav.classList.add("nav-scrl");
    nav.style.boxShadow = "0 3px 3px -2px turquoise";
    const link = nav.querySelectorAll("header #navbarNavAltMarkup .navbar-nav a.nav-link");
    link.forEach((e) => {
      e.style.color = "white";
    });
    const AzGP = nav.querySelector(".navbar-brand h2");
    AzGP.style.color = "white";
    const eng = nav.querySelector(".navbar-brand .eng");
    eng.style.color = "white";
    nav.classList.remove("fixed-top");
    let navHover = document.querySelectorAll(
      "a.nav-link"
    );
    navHover.forEach((e) => {
      e.addEventListener("mouseover", function () {
        e.style.color = "turquoise";
      });
    });
    navHover.forEach((e) => {
      e.addEventListener("mouseout", function () {
        e.style.color = "white";
      });
    });
  }
});
// nav js end
/*mobile menu responsiveness*/
const mobile_menu_toggler = document.querySelector(".mobile_menu_toggler");
const mobile_menu = document.querySelector(".mobile_menu");

mobile_menu_toggler.addEventListener("click",() => {
    mobile_menu.classList.add("shown");
})

const close_button = document.querySelector(".close .fa-times");
close_button.addEventListener("click",() => {
    mobile_menu.classList.remove("shown");
})

const mobile_menu_links = document.querySelectorAll(".mobile_menu ul .nav-link");
mobile_menu_links.forEach(link => {
    link.addEventListener("click",() => {
        mobile_menu.classList.remove("shown");
        /*console.log('dhfjdhfjhdsj');*/
    })
})

// English version
$(document).ready(function () {
  $(".header-info .language .dropdown-menu .eng").click(function () {
    $(".header-info .language .change-lang").html("Language");
  
    $("#nav-link-1").html("HOME");
    $("#nav-link-2").html("ABOUT");
    $("#nav-link-3").html("SERVİCES");
    $("#nav-link-4").html("HUMAN RESOURCES");
    $("#nav-link-5").html("CONTACTS US");
    $("#nav-link-11").html("HOME");
    $("#nav-link-22").html("ABOUT");
    $("#nav-link-33").html("SERVİCES");
    $("#nav-link-44").html("HUMAN RESOURCES");
    $("#nav-link-55").html("CONTACTS US");
    $("#scientis").html(
      "SCIENTISTS DREAM ABOUT DOING GREAT THINGS.<span> ENGINEERS </span>  DO THEM"
    );
    $("#ab-eng").html("ABOUT");
    $("#ab-text-eng").html(
      'The company employs well-known specialists in accordance with the profile of the project, (See <span><a href="#resources"> Resources</a></span>) uses the most advanced technologies and geophysical devices in the implementation of projects.(See <span><a href="#services">Services</a></span> )'
    );
    $("#ser-eng").html("SERVICES");
    $(".card-text-1").html("Seismic hazard assessment");
    $(".card-text-2").html("Geophysical survey of the construction site");
    $(".card-text-3").html("Geophysical control of groundwater level");
    $(".card-text-4").html("Search of fresh water sources and drilling of wells");
    $(".card-text-5").html("Laboratory services");
    $(".card-text-6").html("Ecological research");
    $(".card-text-7").html("Geophysical survey of ore deposits");
    $(".card-text-8").html(
      '<p class="card-text  text-center font-weight-bold pt-4">For more information</p><span class="pt-3 font-weight-bold"><a class="btn" href="#contact">Contact Us</a></span>'
    );
    $("#re-eng").html("HUMAN RESOURCES");
    $("#re-text-eng").html(
      "The company's projects are implemented under the guidance of highly qualified and internationally recognized specialists"
    );
    $("#con-eng").html("CONTACTS");
  
  });
  
  
  // English version end
  $(".header-info .language .dropdown-menu .aze").click(function () {
   
    $(".header-info .language .change-lang").html("Dil Seçimi");
    $("#nav-link-1").html("ƏSAS SƏHİFƏ");
    $("#nav-link-2").html("HAQQIMIZDA");
    $("#nav-link-3").html("XİDMƏTLƏR");
    $("#nav-link-4").html("İNSAN RESURSLARI");
    $("#nav-link-5").html("BİZİMLƏ ƏLAQƏ");
    $("#nav-link-11").html("ƏSAS SƏHİFƏ");
    $("#nav-link-22").html("HAQQIMIZDA");
    $("#nav-link-33").html("XİDMƏTLƏR");
    $("#nav-link-44").html("İNSAN RESURSLARI");
    $("#nav-link-55").html("BİZİMLƏ ƏLAQƏ");
    $("#scientis").html(
      "ALİMLƏR BÖYÜK İŞLƏR ETMƏYİ ARZULAYIR . MÜHƏNDİSLƏR İSƏ , BUNLARI  HƏYATA KEÇİRİR "
    );
    $("#ab-eng").html("HAQQIMIZDA");
    $("#ab-text-eng").html(
      'Şirkət layihənin profilinə uyğun tanınmış mütəxəssisləri işəcəlb edir, (<span><a href="#resources"> İnsan resurslarına</a></span> bax) layihələrin həyata keçirilməsində ən qabaqcıl texnologiyalardan və geofiziki cihazlardan istifadə olunur.(<span><a href="#services">Xidmətlərə</a></span> bax)'
    );
    $("#ser-eng").html("XİDMƏTLƏRİMİZ");
    $(".card-text-1").html("Seysmik təhlükənin qiymətləndirilməsi");
    $(".card-text-2").html("İnşaat sahəsinin geofiziki tədqiqatları");
    $(".card-text-3").html(
      "Qrunt sularının səviyyəsinin geofiziki üsulla kontrolu"
    );
    $(".card-text-4").html(
      "Şirin su mənbələrinin axtarışı və quyuların qazılması"
    );
    $(".card-text-5").html("Laborotor servisi");
    $(".card-text-6").html("Ekoloji tədqiqatlar");
    $(".card-text-7").html("Filiz yataqlarının geofiziki üsullarla axtarışı.");
    $(".card-text-8").html(
      '<p class="card-text  text-center font-weight-bold pt-4">Daha Ətraflı məlumatlandırma üçün</p><span class="pt-3 font-weight-bold"><a class="btn" href="#contact">Əlaqə Saxla</a></span>'
    );
    $("#re-eng").html("İNSAN RESURSLARI");
    $("#re-text-eng").html(
      "Şirkətin layihələri yüksək kvalifikasiyalı və beynəlxalq aləmdə tanınmış mütəxəssislərin rəhbərliyi altında həyata keçirilir."
    );
    $("#con-eng").html("ƏLAQƏ");
    
  });

})
function preloader() {
  $(window).on("load", function () {
    $(".preloader").fadeOut();
  }); 
}
preloader();




