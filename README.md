# simple_portofolio_tailwind!

[alt text](image.png)


Các bước install TailwindCSS ver 3.x

1. npm install -D tailwindcss
2. npx tailwindcss init
3. tailwind.config.js, update 
    content: ["./src/**/*.{html,js}"],

4. tạo thư mục src/input.css , ctrl + v

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

5. tại cửa sổ command 
    npx tailwindcss -i ./src/input.css -o ./src/output.css --watch

6. tạo file index.html trong thư mục src với link href trỏ tới file output.css ở bước 5

7. Click phải chọn Open Live Server & xem kết quả ở trình duyệt

8. Khai báo màu sắc, font chữ, media queries ở file tailwind.config.js

Các chú ý khác:
    Mỗi lần dev thì nhớ chạy câu lệnh bên dưới
        npx tailwindcss -i ./src/input.css -o ./src/output.css --watch 
    Liên quan đến container thì nên tham khảo link sau 
        https://tailwindcss.com/docs/container
    Để hạn chế dùng mx-auto thì thêm cú pháp sau vào file tailwind.config.js

        container: {
            center: true,
            padding: "1rem",//tuong đương với <div class="container p-4 mx-auto"></div>
        },