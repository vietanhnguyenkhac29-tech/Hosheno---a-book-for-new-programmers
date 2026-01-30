// Biến toàn cục theo dõi trang hiện tại (0 là bìa)
let currentLocation = 1;
let numOfPages = 0; // Sẽ được cập nhật sau khi render
let maxLocation = 0;

// Update lại số trang sau khi DOM đã load và render xong
setTimeout(() => {
    const pages = document.querySelectorAll('.page');
    numOfPages = pages.length;
    maxLocation = numOfPages + 1;
    // Xếp chồng trang đúng thứ tự ban đầu (Bìa 0 ở trên cùng)
    pages.forEach((page, index) => {
        page.style.zIndex = numOfPages - index;
    });
}, 100);

// --- CÁC HÀM ĐIỀU KHIỂN ---

function openBook() {
    document.querySelector('.book-container').classList.add('book-open-state');
    document.getElementById('controls').classList.remove('disabled');
    goNext(); // Lật bìa ra
}

function closeBook() {
    // Đóng tất cả các trang
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('flipped');
    });
    // Reset vị trí
    currentLocation = 1;
    updateZIndex();
    
    document.querySelector('.book-container').classList.remove('book-open-state');
    document.getElementById('controls').classList.add('disabled');
}

function goNext() {
    if (currentLocation < maxLocation) {
        // Tìm trang hiện tại và thêm class flipped
        const pageIndex = currentLocation - 1; // Vì array bắt đầu từ 0
        const page = document.querySelectorAll('.page')[pageIndex];
        
        if(page) {
            page.classList.add('flipped');
            page.style.zIndex = currentLocation; // Đảo z-index để nó nằm dưới khi lật
        }
        
        currentLocation++;
        updatePageInput();
    }
}

function goPrev() {
    if (currentLocation > 1) {
        currentLocation--;
        
        const pageIndex = currentLocation - 1;
        const page = document.querySelectorAll('.page')[pageIndex];
        
        if(page) {
            page.classList.remove('flipped');
            // Tính toán lại z-index để nó đè lên các trang sau
            page.style.zIndex = numOfPages - pageIndex;
        }
        updatePageInput();
    }
}

// Hàm cập nhật input số trang
function updatePageInput() {
    const input = document.getElementById('pageInput');
    // currentLocation = 1 là bìa chưa lật.
    // currentLocation = 2 là đang xem trang 1-2.
    input.value = currentLocation - 1; 
}

// Hàm xử lý khi user nhập số và bấm nút Đi
function handleInputJump() {
    const input = document.getElementById('pageInput');
    let targetPage = parseInt(input.value);
    
    // Validate
    if (isNaN(targetPage) || targetPage < 0) targetPage = 0;
    if (targetPage > numOfPages) targetPage = numOfPages;

    // Logic nhảy trang
    // Nếu target > current -> Next liên tục
    // Nếu target < current -> Prev liên tục
    
    // Chuyển đổi targetPage (user nghĩ) sang currentLocation logic
    // User nhập 1 -> Muốn xem trang 1 (tức là bìa đã lật -> location 2)
    const targetLocation = targetPage + 1;

    if(targetLocation === currentLocation) return;

    // Lấy danh sách trang
    const pages = document.querySelectorAll('.page');

    if (targetLocation > currentLocation) {
        for (let i = currentLocation; i < targetLocation; i++) {
             pages[i-1].classList.add('flipped');
             pages[i-1].style.zIndex = i;
        }
    } else {
        for (let i = currentLocation - 1; i >= targetLocation; i--) {
            pages[i-1].classList.remove('flipped');
            pages[i-1].style.zIndex = numOfPages - (i-1);
        }
    }
    
    currentLocation = targetLocation;
    
    // Nếu về 0 (đóng bìa) thì reset giao diện đóng sách
    if(currentLocation === 1) {
        closeBook();
    } else {
        // Đảm bảo sách đang ở trạng thái mở
        document.querySelector('.book-container').classList.add('book-open-state');
        document.getElementById('controls').classList.remove('disabled');
    }
}

// Helper: Reset Z-index ban đầu
function updateZIndex() {
    const pages = document.querySelectorAll('.page');
    pages.forEach((page, index) => {
        if (!page.classList.contains('flipped')) {
            page.style.zIndex = pages.length - index;
        }
    });
}
// Thêm hàm này vào Book.js để gọi mỗi khi thêm ghi chú
function refreshBookLogic() {
    const pages = document.querySelectorAll('.page');
    numOfPages = pages.length;
    maxLocation = numOfPages + 1;
    
    pages.forEach((page, index) => {
        if (!page.classList.contains('flipped')) {
            page.style.zIndex = numOfPages - index;
        }
    });

    const totalPagesElement = document.getElementById('totalPages');
    if(totalPagesElement) totalPagesElement.innerText = numOfPages;
}