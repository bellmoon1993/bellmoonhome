let wind = $(window)

// 로고 이미지변경
let logoTop = $('#aboutme').offset().top;
console.log(logoTop)

wind.scroll(function(){
  if($(this).scrollTop() < logoTop) {
    $("#logo").attr({ src : "./images/bellmoonLogo3.png" })
    $("#mob-navy .menu-btn .line").css({ background: "#fff"})
  }
  else{
    $("#logo").attr({ src : "./images/bellmoonLogo2.png" })
    $("#mob-navy .menu-btn .line").css({ background: "#112152"})
  }
})

// 포트폴리오 슬라이드

$('.slick').slick({
  dots: true, //페이지 네비게이션
  arrows:true, // next, prev 이동 버튼
  // autoplay:ture // 자동 넘김 여부
  infinite: true, //반복설정
  // speed: 300, //슬라이드 속도
  // autoplaySpeed : 10000,   // 자동 넘김시 슬라이드 시간
  pauseOnHover : true,// 마우스 hover시 슬라이드 멈춤
  vertical : false,  // 세로 방향 슬라이드 옵션
  prevArrow :  `#prev`,
  nextArrow : `#next`, //화살표 커스텀
  slidesToShow: 3, //보여질 슬라이드 수
  slidesToScroll: 1, //넘겨질 슬라이드 수
  
  responsive: [ // -> 반응형 옵션
    {
      breakpoint: 1199, // 반응형 ~ 1024
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 899,// 반응형 ~ 960
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 599,// 반응형 ~ 480
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// 사이드 네비게이션

// console.clear();

Splitting();


let section1 = $('#home')
let section2 = $('#aboutme')
let section3 = $('#skill')
let section4 = $('#portfolio')
let section5 = $('#contact')
let windTop = wind.scrollTop()

let sideBtn = $('.nav__link--text:even')
let sideText = $('.nav__link--text:odd')

let section1Top = section1.offset().top;
let section2Top = section2.offset().top;
let section3Top = section3.offset().top;
let section4Top = section4.offset().top;
let section5Top = section5.offset().top;

$('.nav__link--text:eq(0)').addClass('btnOn')
$('.nav__link--text:eq(1)').addClass('btnOn2')


wind.scroll(function(){
  // console.log(section4Top)
  // console.log($(window).scrollTop())

  if($(this).scrollTop() < section2Top){
    // console.log('test1')

    $('.nav__link--text').removeClass('btnOn')
    $('.nav__link--text').removeClass('btnOn2')
    $('.nav__link--text:eq(0)').addClass('btnOn')
    $('.nav__link--text:eq(1)').addClass('btnOn2')
  }
  else if($(this).scrollTop() >= section2Top && $(window).scrollTop() < section3Top){
    // console.log('test2')

    $('.nav__link--text').removeClass('btnOn')
    $('.nav__link--text').removeClass('btnOn2')
    $('.nav__link--text:eq(2)').addClass('btnOn')
    $('.nav__link--text:eq(3)').addClass('btnOn2')
  }
  else if($(this).scrollTop() >= section3Top && $(window).scrollTop() < section4Top){
    // console.log('test3')

    $('.nav__link--text').removeClass('btnOn')
    $('.nav__link--text').removeClass('btnOn2')
    $('.nav__link--text:eq(4)').addClass('btnOn')
    $('.nav__link--text:eq(5)').addClass('btnOn2')
  }
  else if($(this).scrollTop() >= section4Top && $(window).scrollTop() < section5Top){
    // console.log('test4')

    $('.nav__link--text').removeClass('btnOn')
    $('.nav__link--text').removeClass('btnOn2')
    $('.nav__link--text:eq(6)').addClass('btnOn')
    $('.nav__link--text:eq(7)').addClass('btnOn2')
  }
  else{
    $('.nav__link--text').removeClass('btnOn')
    $('.nav__link--text').removeClass('btnOn2')
    $('.nav__link--text:eq(8)').addClass('btnOn')
    $('.nav__link--text:eq(9)').addClass('btnOn2')
  }
})

// 사이드네비 스크롤순서 오류수정

$("#sideNav a").on('click', function() {
  n = $(this).data('num');
  
  let pos = $('.scroll'+n).offset().top;
  $("html, body").animate({ scrollTop: pos }, 500)
})

// 프로필사진 고정 및 제목 고정
let profile = $('#profilePhoto')
let aboutme = $('.aboutme.part1')
let aboutmetwo = $('.aboutme.part2')
let aboutmethree = $('.aboutme.part3')


let aboutmeTop = aboutme.offset().top;
let aboutmetwoTop = aboutmetwo.offset().top;
let aboutmethreeTop = aboutmethree.offset().top;

  
wind.scroll(function(){
  if($(this).scrollTop()>=aboutmeTop && $(this).scrollTop() < aboutmethreeTop ){
    $('#profilePhoto').css({ position: 'fixed', top: '49vh' });
    $('.sectionTitle:eq(0)').css({ position: 'fixed', top: '12vh' });
    $('.growth').css({ position: 'fixed', top: '27vh' });
  }
  else if($(this).scrollTop() < aboutmeTop)  {
    $('#profilePhoto').css({ position: 'absolute', top: '49vh' })
    $('.sectionTitle:eq(0)').css({ position: 'absolute', top: '12vh' })
    $('.growth').css({ position: 'absolute', top: '27vh' })
  }
  else {
    $('#profilePhoto').css({ position: 'absolute', top: '249vh' });
    $('.sectionTitle:eq(0)').css({ position : 'absolute', top : '212vh'})
    $('.growth').css({position : 'absolute', top : '227vh'})
  }
})

wind.scroll(function(){
  if($(this).scrollTop() >= aboutmetwoTop && $(this).scrollTop() < aboutmethreeTop) {
    $("#profilePhoto").attr({ src : "./images/프로필사진2.png" })
  }
  else if($(this).scrollTop() < aboutmetwoTop){
    $("#profilePhoto").attr({ src : "./images/프로필사진1.png" })
  }
  else{
    $("#profilePhoto").attr({ src : "./images/프로필사진3.png" })
  }
})
// skill 
var snippet = [].slice.call(document.querySelectorAll('.hover'));
if (snippet.length) {
  snippet.forEach(function (snippet) {
    snippet.addEventListener('mouseout', function (event) {
      if (event.target.parentNode.tagName === 'figure') {
        event.target.parentNode.classList.remove('hover')
      } else {
        event.target.parentNode.classList.remove('hover')
      }
    });
  });
}
$("figure a").on('click',function(e){
  e.preventDefault();
})

$(window).resize(function(){ 
  // 다바이스 크기가 1199이상일때 
  
  if (window.innerWidth > 1199) {  

// 메인 네비게이션
$(function() {

  /* LOCAL STORAGE START */
  // To reset your local storage
  localStorage.removeItem('learnMenu');

  //check if menu-pulses are required
  function checkMenuPulseState() {
    if(localStorage.getItem('learnMenu') == 'learned') {
      var $menuPulse = $('.menu-pulse');
      $menuPulse.addClass('is-learned');
    }
  }
  checkMenuPulseState();
  /* LOCAL STORAGE END */


  $(".menu-link").click(function(e) {
    e.preventDefault();

    /* LOCAL STORAGE START */
    localStorage.setItem('learnMenu', 'learned');
    checkMenuPulseState();
    /* LOCAL STORAGE END */

    $(".menu-overlay").toggleClass("menu-open");
    $(".menu-toggle").toggleClass("menu-open");
  });
});

// 메인네비 스크롤 오류 수정
// $(".overlay-content li").children('a').on('click', function() {
//   n = $(this).data('num');
//   if ( n <= 5 ) {
//     $('#skill').css({ left: 0 })
//   }
//   else if ( n > 5 ){
//     $('#skill').css({ left: -$(".skill:last").offset().left })
//   }
// })




// 홈페이지 인트로

var listHTML = $(".Title").html();
var listItems = listHTML.split("<br>");
$(".Title").html("");
$.each(listItems, function(i, v) {
  var item = '<div class="Title-mask"><span class="Title-line">' + v + "</span></div>";
  $(".Title").append(item);
});





//원페이지 스크롤

let n = 1;
let num;
let state = 1;
window.addEventListener('load',function(){
    setTimeout(function(){
        scrollTo(0,0)
    },10)
})


$("#sideNav ul li:eq(0)").children('a').addClass('on')


let scrolling = function(e) {
    let secPos;
    if ( e.wheelDelta < 0 && state == 1 ) { // 휠을 내릴때
        state=0;

        n++;
        if( n==8 ) {
            n=7;
            state=1;

        }
        else {
            secPos = $(".scroll"+n).offset().top;
            $("html, body").animate({ scrollTop : secPos  },500 ,function(){
                state=1;
            })
        }
        // nCount();
    }
    else if (e.wheelDelta > 0 && state ==1 ){
       state=0;
       n--;
       if(n<1) {
            n=1;
            state=1;
        }
       else {
        secPos = $(".scroll"+n).offset().top;
        $('html, body').animate({ scrollTop: secPos },500, function(){
            state = 1;
            // nCount();
            
        })
       }
    }

    console.log(n)

    // num = n-1
    // $("#sideNav ul li").children('a').removeClass('on')
    // $("#sideNav ul li:eq("+num+")").children('a').addClass('on')
  }
  document.addEventListener('wheel', function(e){
    e.preventDefault();
    scrolling(e)
  }, {passive : false})

// 사이드네비 스크롤순서 오류수정

$("#sideNav a").on('click', function() {
  n = $(this).data('num');

  let pos = $('.scroll'+n).offset().top;
  $("html, body").animate({ scrollTop: pos }, 500)
})

  
  /* 스크립트내용*/ 
  
  } 
  // 1199 이하 
  else if(window.innerWidth <= 1199 && window.innerWidth > 599){
  // 햄버거바 모양변경
  var menuBtn = document.querySelector('.menu-btn');
  var nav = document.querySelector('nav');
  var lineOne = document.querySelector('nav .menu-btn .line--1');
  var lineTwo = document.querySelector('nav .menu-btn .line--2');
  var lineThree = document.querySelector('nav .menu-btn .line--3');
  var link = document.querySelector('nav .nav-links');
  menuBtn.addEventListener('click', () => {
      nav.classList.toggle('nav-open');
      lineOne.classList.toggle('line-cross');
      lineTwo.classList.toggle('line-fade-out');
      lineThree.classList.toggle('line-cross');
      link.classList.toggle('fade-in');
  })
 
  }
  else{
    var menuBtn = document.querySelector('.menu-btn');
  var nav = document.querySelector('nav');
  var lineOne = document.querySelector('nav .menu-btn .line--1');
  var lineTwo = document.querySelector('nav .menu-btn .line--2');
  var lineThree = document.querySelector('nav .menu-btn .line--3');
  var link = document.querySelector('nav .nav-links');
  menuBtn.addEventListener('click', () => {
      nav.classList.toggle('nav-open');
      lineOne.classList.toggle('line-cross');
      lineTwo.classList.toggle('line-fade-out');
      lineThree.classList.toggle('line-cross');
      link.classList.toggle('fade-in');
  })

// 프로필사진 고정 및 제목 고정
let profile = $('#profilePhoto')
let aboutme = $('.aboutme.part1')
let aboutmetwo = $('.aboutme.part2')
let aboutmethree = $('.aboutme.part3')


let aboutmeTop = aboutme.offset().top;
let aboutmetwoTop = aboutmetwo.offset().top;
let aboutmethreeTop = aboutmethree.offset().top;

  
wind.scroll(function(){
  if($(this).scrollTop()>=aboutmeTop && $(this).scrollTop() < aboutmethreeTop ){
    $('#profilePhoto').css({ position: 'fixed', top: '20vh' });
    $('.sectionTitle:eq(0)').css({ position: 'fixed', top: '12vh' });
    $('.growth').css({ position: 'fixed', top: '27vh' });
  }
  else if($(this).scrollTop() < aboutmeTop)  {
    $('#profilePhoto').css({ position: 'absolute', top: '20vh' })
    $('.sectionTitle:eq(0)').css({ position: 'absolute', top: '12vh' })
    $('.growth').css({ position: 'absolute', top: '27vh' })
  }
  else {
    $('#profilePhoto').css({ position: 'absolute', top: '220vh' });
    $('.sectionTitle:eq(0)').css({ position : 'absolute', top : '212vh'})
    $('.growth').css({position : 'absolute', top : '227vh'})
  }
})

wind.scroll(function(){
  if($(this).scrollTop() >= aboutmetwoTop && $(this).scrollTop() < aboutmethreeTop) {
    $("#profilePhoto").attr({ src : "./images/프로필사진2.png" })
  }
  else if($(this).scrollTop() < aboutmetwoTop){
    $("#profilePhoto").attr({ src : "./images/프로필사진1.png" })
  }
  else{
    $("#profilePhoto").attr({ src : "./images/프로필사진3.png" })
  }
})

  }
  
  }).resize(); 
