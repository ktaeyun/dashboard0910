// script.js

// 태블로 대시보드의 URL을 설정합니다.
const tableauURL = 'https://public.tableau.com/views/_17248735198700/sheet0?:language=ko-KR&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';

// 대시보드를 삽입할 컨테이너를 가져옵니다.
const containerDiv = document.getElementById('tableau-container');

// 대시보드 설정
const options = {
    hideTabs: true,
    width: '100%',
    height: '600px'
};

// 태블로 대시보드 임베드
const viz = new tableau.Viz(containerDiv, tableauURL, options);
