const NoPage = () => {
    return <h1>404</h1>;
};

export default NoPage;

// cài đặt npm install react-router-dom --save
// BrowserRouter : sử dụng History API để theo dõi lịch sử bộ
// định tuyến
// Route : định nghĩa một ánh xạ giữa URL và một Component
//        (khi truy cập 1 URL thì một Component sẽ đc gọi đến để render ra giao diện)

// path : Đg dẫn đến URL
// exact:  Liúp cho route này này chỉ hoạt động nếu URL trên trình duyệt phù hợp tuyệt đối với giá trị của thuộc tính path của nó.
// component: Là component sẽ đươc load ra tương ứng với Route đó.
// Outlet: cho phép hiển thị nội dung mà thanh điều hướng đang hiển thị
// Link : dùng để chuyển hướng như thẻ <a> to giống như href