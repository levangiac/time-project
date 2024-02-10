const icons = '../assets/icons';
const images = '../assets/images';
const jsons = '../assets/jsons';

export const ICON = {
  home: require(`${icons}/home.png`),
  home_2: require(`${icons}/home_2.png`),
  //   left: require(`${icons}/left.png`),
  //   profile_default: require(`${icons}/profile_default.png`),
  //   clover: require(`${icons}/clover.png`),
  back: require(`${icons}/back.png`),
  //   bell: require(`${icons}/bell.png`),
  document: require(`${icons}/document.png`),
  document_2: require(`${icons}/document_2.png`),
  //   user: require(`${icons}/user.png`),
  //   user_2: require(`${icons}/user_2.png`),
  //   goto: require(`${icons}/goto.png`),
  //   goto_grey: require(`${icons}/goto_grey.png`),
  //   plus: require(`${icons}/plus.png`),
  //   c_plus: require(`${icons}/c_plus.png`),
  //   plus_btn: require(`${icons}/plus_btn.png`),
  //   minus: require(`${icons}/minus.png`),
  //   close: require(`${icons}/close.png`),
  //   check_circle: require(`${icons}/check_circle.png`),
  arrow_right: require(`${icons}/arrow_right.png`),
  //   warning: require(`${icons}/warning.png`),
  //   cancel_circle: require(`${icons}/cancel_circle.png`),
  //   eyeClose: require(`${icons}/eye-close.png`),
  //   eye: require(`${icons}/eye.png`),
  //   cup_ranking:require(`${icons}/cup_ranking.png`),
  //   cup_award:require(`${icons}/cup_award.png`),
  //   cup_award_grey:require(`${icons}/cup_award_grey.png`),
  //   search: require(`${icons}/search.png`),
  //   arrow_down: require(`${icons}/arrow_down.png`),
  //   chevron_down: require(`${icons}/down_ic.png`),
  //   evil:require(`${icons}/142.png`),
  //   evil_fill:require(`${icons}/143.png`),
  chevron_right: require(`${icons}/chevron_right.png`),
  //   pencil:require(`${icons}/pencil.png`),
  //   chevron_up:require(`${icons}/chevron_up.png`),
  rank: require(`${icons}/rank.png`),
  rank_2: require(`${icons}/rank_2.png`),
  //   word:require(`${icons}/word.png`),
  event: require(`${icons}/event.png`),
  event_2: require(`${icons}/event_2.png`),
  volume: require(`${icons}/volume.png`),
  //   notice:require(`${icons}/notice.png`),
  //   buy_icon: require(`${icons}/buyicon.jpg`),
  //   clear_icon: require(`${icons}/clear_icon.png`),
  //   timer:require(`${icons}/timer.png`),
  //   close_modal:require(`${icons}/close_modal.png`),
  //   crown:require(`${icons}/crown.png`),
  //   lightning:require(`${icons}/lightning.png`),
  //   circle:require(`${icons}/circle.png`),
  //   icon_check: require(`${icons}/icon_check.png`),
  //   icon_checked: require(`${icons}/icon_checked.png`),
  //   icon_tick_on: require(`${icons}/tick_on.png`),
  //   icon_tick_off:require(`${icons}/tick_off.png`),
  //   triangle:require(`${icons}/triangle.png`),
  //   word_bg:require(`${icons}/word_bg.png`),
  //   icon_splash: require(`${icons}/splash_b.png`)
};
export type ICON_PARAMS = typeof ICON;
export type ICON_KEY = keyof ICON_PARAMS;

export const IMAGE = {
  //   soldout: require(`${images}/soldout.png`),
  //   success: require(`${images}/success.png`),
  //   avatar: require(`${images}/avatar.png`),
  //   advert_1: require(`${images}/advert_1.png`),
  //   advert_2: require(`${images}/advert_2.png`),
  //   advert_3: require(`${images}/advert_3.png`),
  //   product: require(`${images}/product.png`),
  //   scanner: require(`${images}/scanner.png`),
  //   qr_1: require(`${images}/qr_1.png`),
  //   qr_2: require(`${images}/qr_2.png`),
  //   banner_gift: require(`${images}/gift-banner.png`),
  //   bgImage:require(`${images}/photo-1553095066-5014bc7b7f2d.jpg`),
  //   rank_image:require(`${images}/rank_image.png`),
  //   rank_no_image:require(`${images}/rank_no_image.png`),
  //   warning_01_ic:require(`${images}/warning_01_ic.png`),
  splash: require(`${images}/splash.jpg`),
  ipa: require(`${images}/ic_ipa.png`),
  raiDen: require(`${images}/raiden.png`),
  qiqi: require(`${images}/qiqi.png`),
  jean: require(`${images}/jean.png`),
  kengqing: require(`${images}/kengqing.png`),
  mona: require(`${images}/mona.png`),
};

export const JSON = {
  sound_wave: require(`${jsons}/sound-wave.json`),
  loading_spiner: require(`${jsons}/loading_spiner.json`),
  lottie1: require(`${jsons}/Lottie1.json`),
  lottie2: require(`${jsons}/Lottie2.json`),
  lottie3: require(`${jsons}/Lottie3.json`),
};

export type IMAGE_PARAMS = typeof IMAGE;
export type IMAGE_KEY = keyof IMAGE_PARAMS;
