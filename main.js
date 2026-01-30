const resources = [
    // --- FRONTEND ---
    {
        name: "HTML",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        desc: "Khung xương của mọi trang web.",
        category: "frontend",
        icon: "fa-brands fa-html5",
        logoUrl: "assets/html-1.svg"
    },
    {
        name: "CSS",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        desc: "Trang trí giao diện và bố cục web.",
        category: "frontend",
        icon: "fa-brands fa-css3",
        logoUrl: "assets/css-3.svg"
    },
    {
        name: "JavaScript",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        desc: "Ngôn ngữ lập trình tạo nên sự tương tác cho web.",
        category: "frontend",
        icon: "fa-brands fa-js",
        logoUrl: "assets/javascript-1.svg"
    },
    {
        name: "TypeScript",
        url: "https://www.typescriptlang.org/",
        desc: "Phiên bản nâng cấp của JS với định kiểu tĩnh chặt chẽ.",
        category: "frontend",
        icon: "fa-solid fa-code",
        logoUrl: "assets/typescript-2.svg"
    },
    {
        name: "React.js",
        url: "https://react.dev/",
        desc: "Thư viện UI phổ biến nhất thế giới của Meta.",
        category: "frontend",
        icon: "fa-brands fa-react",
        logoUrl: "assets/react-svgrepo-com.svg"
    },
    {
        name: "Vue.js",
        url: "https://vuejs.org/",
        desc: "Framework Progressive, dễ tiếp cận và nhẹ.",
        category: "frontend",
        icon: "fa-brands fa-vuejs",
        logoUrl: "assets/vue-svgrepo-com.svg"
    },
    {
        name: "Angular",
        url: "https://angular.io/",
        desc: "Framework mạnh mẽ cho ứng dụng doanh nghiệp lớn.",
        category: "frontend",
        icon: "fa-brands fa-angular",
        logoUrl: "assets/angular-icon-svgrepo-com.svg"
    },
    {
        name: "Tailwind CSS",
        url: "https://tailwindcss.com/",
        desc: "Viết CSS nhanh chóng thông qua các class tiện ích.",
        category: "frontend",
        icon: "fa-solid fa-wind",
        logoUrl: "assets/tailwind-css-2.svg"
    },
    {
        name: "Sass/SCSS",
        url: "https://sass-lang.com/",
        desc: "CSS Preprocessor giúp code CSS gọn gàng hơn.",
        category: "frontend",
        icon: "fa-brands fa-sass",
        logoUrl: "assets/sass-svgrepo-com.svg"
    },

    // --- BACKEND ---
    {
        name: "Java",
        url: "https://www.java.com/",
        desc: "Ngôn ngữ 'Viết một lần, chạy mọi nơi'.",
        category: "backend",
        icon: "fa-brands fa-java",
        logoUrl: "assets/java-svgrepo-com.svg"
    },
    {
        name: "Spring Boot",
        url: "https://spring.io/",
        desc: "Framework Java số 1 cho Backend hiện nay.",
        category: "backend",
        icon: "fa-brands fa-java",
        logoUrl: "assets/spring-boot-1.svg"
    },
    {
        name: "PHP",
        url: "https://www.php.net/",
        desc: "Ngôn ngữ kịch bản phía server phổ biến, cốt lõi của WordPress.",
        category: "backend",
        icon: "fa-brands fa-php",
        logoUrl: "assets/php-programming-language-icon.svg"
    },
    {
        name: "Node.js",
        url: "https://nodejs.org/",
        desc: "Chạy JavaScript ở phía Server với hiệu năng cao.",
        category: "backend",
        icon: "fa-brands fa-node",
        logoUrl: "assets/node-js-svgrepo-com.svg"
    },
    {
        name: "Python",
        url: "https://www.python.org/",
        desc: "Ngôn ngữ đa năng: Web, AI, Data Science, Automation.",
        category: "backend",
        icon: "fa-brands fa-python",
        logoUrl: "assets/python-5.svg"
    },
    {
        name: "C++",
        url: "https://isocpp.org/",
        desc: "Hiệu suất tối đa, dùng cho Game engine và Hệ điều hành.",
        category: "backend",
        icon: "fa-solid fa-code",
        logoUrl: "assets/c.svg" 
    },
    {
        name: "C Language",
        url: "https://en.cppreference.com/w/c",
        desc: "Ngôn ngữ lập trình cấu trúc, nền tảng của khoa học máy tính.",
        category: "backend",
        icon: "fa-solid fa-c",
        logoUrl: "assets/c-1.svg"
    },
    {
        name: "C#",
        url: "https://learn.microsoft.com/dotnet/csharp/",
        desc: "Ngôn ngữ chủ lực của Microsoft và .NET.",
        category: "backend",
        icon: "fa-brands fa-microsoft",
        logoUrl: "assets/c--4.svg"
    },
    {
        name: "Go (Golang)",
        url: "https://go.dev/",
        desc: "Ngôn ngữ hiện đại của Google, xử lý song song cực tốt.",
        category: "backend",
        icon: "fa-brands fa-golang",
        logoUrl: "assets/go-svgrepo-com.svg"
    },
    {
        name: "Ruby",
        url: "https://www.ruby-lang.org/",
        desc: "Ngôn ngữ thanh lịch, dễ đọc, cốt lõi của Ruby on Rails.",
        category: "backend",
        icon: "fa-solid fa-gem",
        logoUrl: "assets/ruby-svgrepo-com.svg"
    },

    // --- DATABASE (Danh mục mới) ---
    {
        name: "MySQL",
        url: "https://www.mysql.com/",
        desc: "Hệ quản trị cơ sở dữ liệu quan hệ (RDBMS) mã nguồn mở phổ biến nhất.",
        category: "database",
        icon: "fa-solid fa-database",
        logoUrl: "assets/mysql-icon.svg"
    },
    {
        name: "PostgreSQL",
        url: "https://www.postgresql.org/",
        desc: "Database quan hệ mạnh mẽ, hỗ trợ tính năng nâng cao.",
        category: "database",
        icon: "fa-solid fa-database",
        logoUrl: "assets/postgresql-icon.svg"
    },
    {
        name: "MongoDB",
        url: "https://www.mongodb.com/",
        desc: "Database NoSQL lưu trữ dạng JSON linh hoạt. (Cần tải icon)",
        category: "database",
        icon: "fa-brands fa-envira",
        logoUrl: "assets/mongodb.svg" 
    },
    {
        name: "Redis",
        url: "https://redis.io/",
        desc: "In-memory database dùng để làm cache cực nhanh. (Cần tải icon)",
        category: "database",
        icon: "fa-solid fa-server",
        logoUrl: "assets/redis.svg"
    },

    // --- MOBILE ---
    {
        name: "React Native",
        url: "https://reactnative.dev/",
        desc: "Code một lần chạy được cả iOS và Android.",
        category: "mobile",
        icon: "fa-brands fa-react",
        logoUrl: "assets/react-svgrepo-com.svg" 
    },
    {
        name: "Swift",
        url: "https://developer.apple.com/swift/",
        desc: "Ngôn ngữ native để phát triển cho hệ sinh thái Apple.",
        category: "mobile",
        icon: "fa-brands fa-apple",
        logoUrl: "assets/swift-svgrepo-com.svg"
    },
    {
        name: "Flutter",
        url: "https://flutter.dev/",
        desc: "UI Toolkit của Google build app đẹp và mượt. (Cần tải icon)",
        category: "mobile",
        icon: "fa-brands fa-google",
        logoUrl: "assets/flutter.svg"
    },

    // --- DEVOPS & INFRA ---
    {
        name: "Git",
        url: "https://git-scm.com/",
        desc: "Công cụ quản lý phiên bản code không thể thiếu.",
        category: "devops",
        icon: "fa-brands fa-git-alt",
        logoUrl: "assets/git-svgrepo-com.svg"
    },
    {
        name: "GitHub",
        url: "https://github.com/",
        desc: "Mạng xã hội cho lập trình viên lưu trữ code.",
        category: "devops",
        icon: "fa-brands fa-github",
        logoUrl: "assets/github-svgrepo-com.svg"
    },
    {
        name: "Docker",
        url: "https://www.docker.com/",
        desc: "Đóng gói ứng dụng vào container để chạy mọi nơi.",
        category: "devops",
        icon: "fa-brands fa-docker",
        logoUrl: "assets/docker-svgrepo-com.svg"
    },
    {
        name: "Linux",
        url: "https://www.linux.org/",
        desc: "Hệ điều hành mã nguồn mở, nền tảng của server. (Cần tải icon)",
        category: "devops",
        icon: "fa-brands fa-linux",
        logoUrl: "assets/linux.svg"
    },
    {
        name: "AWS",
        url: "https://aws.amazon.com/",
        desc: "Nền tảng điện toán đám mây lớn nhất thế giới. (Cần tải icon)",
        category: "devops",
        icon: "fa-brands fa-aws",
        logoUrl: "assets/aws.svg"
    },

    // --- AI ---
    {
        name: "ChatGPT",
        url: "https://chatgpt.com/",
        desc: "AI chatbot thay đổi thế giới của OpenAI.",
        category: "ai",
        icon: "fa-solid fa-robot",
        logoUrl: "assets/chatgpt-icon.svg"
    },
    {
        name: "Claude AI",
        url: "https://claude.ai/",
        desc: "Đối thủ đáng gờm của ChatGPT, code rất thông minh.",
        category: "ai",
        icon: "fa-solid fa-robot",
        logoUrl: "assets/claude-ai-icon.svg"
    },
    {
        name: "Gemini",
        url: "https://gemini.google.com/",
        desc: "AI đa phương thức mạnh mẽ từ Google.",
        category: "ai",
        icon: "fa-brands fa-google",
        logoUrl: "assets/google-gemini.svg" 
        // LƯU Ý: Bạn cần tải file icon Gemini và đổi tên thành google-gemini.svg
    },
    {
        name: "Perplexity",
        url: "https://www.perplexity.ai/",
        desc: "Công cụ tìm kiếm thông tin thời gian thực bằng AI.",
        category: "ai",
        icon: "fa-solid fa-magnifying-glass",
        logoUrl: "assets/perplexity.svg"
        // LƯU Ý: Bạn cần tải file icon Perplexity và đổi tên thành perplexity.svg
    },

    // --- IDE & TOOLS ---
    {
        name: "Visual Studio Code",
        url: "https://code.visualstudio.com/",
        desc: "Editor miễn phí, nhẹ và mạnh nhất hiện nay.",
        category: "ide",
        icon: "fa-solid fa-code",
        logoUrl: "assets/vs-code-svgrepo-com.svg"
    },
    {
        name: "Cursor AI",
        url: "https://cursor.sh/",
        desc: "Editor tích hợp AI, giúp code nhanh gấp đôi VS Code.",
        category: "ide",
        icon: "fa-solid fa-robot",
        logoUrl: "assets/cursor-ai-code-icon.svg"
    },
    {
        name: "Visual Studio",
        url: "https://visualstudio.microsoft.com/",
        desc: "IDE chuyên nghiệp cho .NET và C++.",
        category: "ide",
        icon: "fa-brands fa-windows",
        logoUrl: "assets/visual-studio-svgrepo-com.svg"
    },
    {
        name: "Sublime Text",
        url: "https://www.sublimetext.com/",
        desc: "Editor siêu nhẹ, khởi động tức thì.",
        category: "ide",
        icon: "fa-solid fa-file-code",
        logoUrl: "assets/sublime-text-icon.svg"
    },
    {
        name: "IntelliJ IDEA",
        url: "https://www.jetbrains.com/idea/",
        desc: "IDE tốt nhất thế giới cho Java.",
        category: "ide",
        icon: "fa-brands fa-java",
        logoUrl: "assets/intellij-idea-ide-icon.svg"
    },
    {
        name: "PyCharm",
        url: "https://www.jetbrains.com/pycharm/",
        desc: "IDE Python tốt nhất cho Data Science và Web.",
        category: "ide",
        icon: "fa-brands fa-python",
        logoUrl: "assets/pycharm-icon.svg"
    },
    {
        name: "WebStorm",
        url: "https://www.jetbrains.com/webstorm/",
        desc: "IDE chuyên dụng cho Web Frontend (JS/TS).",
        category: "ide",
        icon: "fa-brands fa-js",
        logoUrl: "assets/webstorm-ide-icon.svg"
    },
    {
        name: "CLion",
        url: "https://www.jetbrains.com/clion/",
        desc: "IDE thông minh cho C và C++.",
        category: "ide",
        icon: "fa-solid fa-c",
        logoUrl: "assets/clion-ide-icon.svg"
    },
    {
        name: "Rider",
        url: "https://www.jetbrains.com/rider/",
        desc: "IDE .NET thay thế hoàn hảo cho Visual Studio.",
        category: "ide",
        icon: "fa-solid fa-code",
        logoUrl: "assets/rider-ide-icon.svg"
    },
    {
        name: "GoLand",
        url: "https://www.jetbrains.com/go/",
        desc: "IDE chuyên dụng cho Go.",
        category: "ide",
        icon: "fa-brands fa-golang",
        logoUrl: "assets/goland-ide-icon.svg"
    },
    {
        name: "RubyMine",
        url: "https://www.jetbrains.com/ruby/",
        desc: "IDE chuyên dụng cho Ruby/Rails.",
        category: "ide",
        icon: "fa-solid fa-gem",
        logoUrl: "assets/rubymine-svgrepo-com.svg"
    },
    {
        name: "RustRover",
        url: "https://www.jetbrains.com/rust/",
        desc: "IDE mới nhất của JetBrains cho Rust.",
        category: "ide",
        icon: "fa-solid fa-gear",
        logoUrl: "assets/rustrover-ide-icon.svg"
    },
    {
        name: "Notepad++",
        url: "https://notepad-plus-plus.org/",
        desc: "Huyền thoại soạn thảo text trên Windows.",
        category: "ide",
        icon: "fa-solid fa-file-code",
        logoUrl: "assets/icons8-notepad++.svg"
    },
    {
        name: "Postman",
        url: "https://www.postman.com/",
        desc: "Công cụ test API phổ biến nhất. (Cần tải icon)",
        category: "ide",
        icon: "fa-solid fa-paper-plane",
        logoUrl: "assets/postman.svg"
    }
];
// Hàm khởi tạo nội dung sách
function initBookContent() {
    const container = document.getElementById('dynamic-pages');
    const itemsPerPage = 3; // Số resource trên mỗi mặt giấy
    const totalResources = resources.length;
    
    // Tính toán số lượng tờ giấy cần thiết (mỗi tờ có 2 mặt: Front & Back)
    // Front chứa nội dung, Back chứa nội dung tiếp theo
    
    let html = '';
    let resourceIndex = 0;
    // Bắt đầu ID từ 1 (vì 0 là bìa trước)
    let pageId = 1; 

    while (resourceIndex < totalResources) {
        // Tạo một tờ giấy (div.page)
        html += `<div class="page" id="p${pageId}">`;
        
        // --- Mặt trước (Front) ---
        html += `<div class="front">
                    <div class="page-content">
                        <h2>Tài nguyên (Trang ${pageId*2 - 1})</h2>`;
        
        // Lấy items cho mặt trước
        for (let i = 0; i < itemsPerPage && resourceIndex < totalResources; i++) {
            const item = resources[resourceIndex];
            html += createResourceHTML(item);
            resourceIndex++;
        }
        
        html += `   </div>
                    <div class="page-number">${pageId*2 - 1}</div>
                 </div>`;

        // --- Mặt sau (Back) ---
        html += `<div class="back">
                    <div class="page-content">
                         <h2>Tài nguyên (Trang ${pageId*2})</h2>`;
        
        // Lấy items cho mặt sau (nếu còn)
        for (let i = 0; i < itemsPerPage && resourceIndex < totalResources; i++) {
            const item = resources[resourceIndex];
            html += createResourceHTML(item);
            resourceIndex++;
        }

        html += `   </div>
                    <div class="page-number">${pageId*2}</div>
                 </div>`;
        
        html += `</div>`; // Đóng .page
        pageId++;
    }

    container.innerHTML = html;
    
    // Cập nhật lại Z-index cho các trang vừa tạo
    updateZIndex();
    
    // Cập nhật tổng số trang cho input
    // Tổng số trang = Bìa trước (1) + Các trang nội dung + Bìa sau (1)
    const totalPagesElement = document.getElementById('totalPages');
    const allPages = document.querySelectorAll('.page');
    if(totalPagesElement) totalPagesElement.innerText = allPages.length;
}

function createResourceHTML(item) {
    return `
    <div class="resource-item">
        <div class="resource-logo">
            <img src="${item.logoUrl}" alt="${item.name} logo" onerror="this.src='https://via.placeholder.com/40?text=Dev'">
        </div>
        <div class="resource-info">
            <h3>${item.name}</h3>
            <p>${item.desc}</p>
            <a href="${item.url}" target="_blank">Xem chi tiết <i class="fa-solid fa-up-right-from-square"></i></a>
        </div>
    </div>
    `;
}

// Gọi hàm khởi tạo khi load xong
document.addEventListener('DOMContentLoaded', () => {
    initBookContent();
});

