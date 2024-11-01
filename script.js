// 배경색을 랜덤하게 설정하는 함수
function getRandomLightColor() {
    const r = Math.floor(Math.random() * 156) + 100; // 100–255 범위
    const g = Math.floor(Math.random() * 156) + 100;
    const b = Math.floor(Math.random() * 156) + 100;
    return `rgb(${r}, ${g}, ${b})`;
}

// DOM이 로드되었을 때 배경색 설정
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.backgroundColor = getRandomLightColor();
});

const articles = Array.from(document.querySelectorAll('.article'));
const articlesPerPage = 5; // 페이지당 보여줄 article 수
let currentPage = 1; // 현재 페이지 번호

// 페이지 설정 함수
function displayPage(page) {
    const startIndex = (page - 1) * articlesPerPage;
    const endIndex = page * articlesPerPage;

    articles.forEach((article, index) => {
        if (index >= startIndex && index < endIndex) {
            article.style.display = 'block'; // 현재 페이지에 해당하는 article 보이기
        } else {
            article.style.display = 'none'; // 나머지 article 숨기기
        }
    });

    document.getElementById('pageNumber').innerText = page; // 페이지 번호 업데이트
}

// 페이지 변경 함수
function changePage(offset) {
    const newPage = currentPage + offset;
    const totalPages = Math.ceil(articles.length / articlesPerPage);

    if (newPage >= 1 && newPage <= totalPages) {
        currentPage = newPage;
        displayPage(currentPage);

         // 페이지 변경 후 화면 맨 위로 스크롤
         window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// 페이지 초기화 및 버튼 이벤트 추가
document.getElementById('prevPage').addEventListener('click', () => changePage(-1));
document.getElementById('nextPage').addEventListener('click', () => changePage(1));

// 첫 페이지 표시
displayPage(currentPage);

document.querySelector('#header h1 a').addEventListener('click', (event) => {
    event.preventDefault(); // a태그의 기본 동작 막기
    currentPage = 1;        // 첫 페이지로 설정
    displayPage(currentPage);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // 화면 맨 위로 스크롤
});