const header = document.querySelector(".header");
const header_item = document.querySelectorAll(".header__item a");
const header_lag = document.querySelector(".header__item.language");
const header_logo = document.querySelector(".main-logo a img");
const header_userIcon = document.querySelectorAll(".users-icon a img");

const ICON = "./bundle/images/icon/";

const userIconScroll = (x, y, z) => {
  for (let i = 0; i < header_userIcon.length; i++) {
    switch (i) {
      case 0:
        header_userIcon[i].src = x;
        break;
      case 1:
        header_userIcon[i].src = y;
        break;
      case 2:
        header_userIcon[i].src = z;
        break;
      default:
        break;
    }
  }
};

const handleScroll = e => {
  if (e.deltaY > 0) {
    {
      header.classList.remove("scrollUp");
      header_item.forEach(el => el.classList.remove("item-scrollUp"));
      header_lag.classList.remove("item-scrollUp");
    }
    header.classList.add("scrollDown");
    header_item.forEach(el => el.classList.add("item-scrollDown"));
    header_lag.classList.add("item-scrollDown");
    header_logo.src = `${ICON}벧엘교회_로고_over.png`;
    userIconScroll(
      `${ICON}search_icon-black.png`,
      `${ICON}preist_icon-black.png`,
      `${ICON}관리자 설정.png`
    );
  } else if (e.deltaY < 0) {
    {
      header.classList.remove("scrollDown");
      header_item.forEach(el => el.classList.remove("item-scrollDown"));
      header_lag.classList.remove("item-scrollDown");
    }
    header.classList.add("scrollUp");
    header_item.forEach(el => el.classList.add("item-scrollUp"));
    header_lag.classList.add("item-scrollUp");
  }

  if (window.scrollY === 0) {
    header.classList.remove("scrollUp");
    header_item.forEach(el => el.classList.remove("item-scrollUp"));
    header_lag.classList.remove("item-scrollUp");
    if (header.className == "header home") {
      header_logo.src = `${ICON}logo_top.png`;
      userIconScroll(
        `${ICON}search_icon.png`,
        `${ICON}preist_icon.png`,
        `${ICON}관리자 설정-화이트.png`
      );
    }
  }
};

const init = () => {
  window.addEventListener("wheel", handleScroll);
};

init();
