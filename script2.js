document.addEventListener("DOMContentLoaded", () => {
    const commentForm = document.getElementById('commentForm');
    const commentInput = document.getElementById('commentInput');
    const commentsList = document.getElementById('commentsList');

    commentForm.addEventListener('submit', (event) => {
        event.preventDefault(); // 기본 제출 동작 방지

        const commentText = commentInput.value;
        if (commentText) {
            const newComment = document.createElement('li');
            newComment.textContent = commentText; // 댓글 텍스트 추가
            commentsList.appendChild(newComment); // 댓글 목록에 추가

            commentInput.value = ''; // 입력 필드 초기화
        }
    });
});
