function getImg(stampId, itemNum) {
    const result = document.getElementsByClassName('result')[0];
    result.innerHTML = '';

    for (let i = 0; i < itemNum; i++) {
        const img = window.document.createElement('img');
        const src = `https://stickershop.line-scdn.net/stickershop/v1/sticker/${stampId + i}/iPhone/sticker_key@2x.png;compress=true`;
        img.setAttribute('src', src);
        result.appendChild(img);
    }
}