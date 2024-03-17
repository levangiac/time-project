import { ImageSourcePropType } from 'react-native';

export type Data = {
  name: string;
  location: string;
  uri: string;
  about: string;
};

const data: Data[] = [
  {
    name: 'Xóm Rớ',
    location: 'Phú Yên',
    uri: 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/08/Ke-chan-song-Xom-Ro-2.jpg',
    about:
      'Kè chắn sóng Xóm Rớ nổi lên như một địa điểm du lịch Phú Yên mới từ đầu năm nay, nơi những kè chắn sóng, triều cường bỗng nhiên phủ đầy rêu xanh tạo nên một cảnh quan tuyệt vời. Khi thủy triều xuống, những chiếc kè nổi lên xanh mướt, óng ánh dưới ánh nắng mặt trời, một khung cảnh khiến nhiều người đam mê chụp ảnh không thể làm ngơ.',
  },
  {
    name: 'Đầm Ô Loan',
    location: 'Phú Yên',
    uri: `https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/03/dam-o-loan-vntrip-e1521861055626.jpg`,
    about:
      'Đầm Ô Loan cách thành phố Tuy Hoà 22km, là một điểm đến có tiếng từ lâu ở Phú Yên. Đầm Ô Loan rộng khoảng 1200ha, đứng từ đèo Quán Cau nhìn xuống trông tựa như một con phượng đang xòe cánh vô cùng lộng lẫy. Đầm Ô Loan đẹp nhất trong những khoảnh khắc ngày tàn, khi mà hoàng hôn buông xuống thật lãng mạn, đứng nơi đây nhẹ nhàng ngắm trời đất tối dần là một trải nghiệm bình yên mà bạn không bao giờ có được ở nơi đô thị.',
  },
  {
    name: 'Mũi Điện',
    location: 'Phú Yên',
    uri: 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/08/mui-dien.jpg',
    about:
      'Với vị trí địa lí đặc biệt thuộc thôn Phước Tân, xã Hòa Tâm, huyện Đông Hòa, tỉnh Phú Yên, mũi Điện ở Phú Yên được xem là một trong những địa điểm đầu tiên thuộc lãnh thổ Việt Nam đón ánh mặt trời mỗi buổi bình minh lên.',
  },
  {
    name: 'Tháp Nhạn',
    location: 'Phú Yên',
    uri: 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/09/thap-nhan-phu-yen2-1426740740-e1506501957266.jpg',
    about:
      'Tháp Nhạn là ngọn tháp nổi tiếng ở Phú Yên gắn với nhiều điều bí ẩn chưa được giải đáp. Tháp nằm gần trên đỉnh ngọn núi Nhạn ở bờ bắc sông Đà Rằng.',
  },
];

export default data;
