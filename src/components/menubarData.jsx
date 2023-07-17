import React, { useState } from 'react';

function MapIcon() {
  const [fillColor, setFillColor] = useState('#4AB2C9');

  const handleClick = () => {
    if (fillColor === '#4AB2C9') {
      setFillColor('#B6b6b6');
    } else {
      setFillColor('#4AB2C9');
    }
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="72" onClick={handleClick}>
      <path
        style={{ fill: fillColor }} // 인라인 스타일로 색상 변경
        d="M5.575 55.232v1.696c0 1.12-.16 2.192-.48 3.216a8.383 8.383 0 0 1-1.376 2.72 5.84 5.84 0 0 1-2.192 1.776l-1.12-1.568a5.277 5.277 0 0 0 1.936-1.488 7.072 7.072 0 0 0 1.232-2.192c.278-.81.416-1.632.416-2.464v-1.696h1.584Zm.416 0v1.696c0 .8.134 1.584.4 2.352a6.29 6.29 0 0 0 1.232 2.048 5.414 5.414 0 0 0 1.952 1.392l-1.088 1.568a6.046 6.046 0 0 1-2.224-1.696 7.773 7.773 0 0 1-1.376-2.576c-.309-.97-.464-2-.464-3.088v-1.696h1.568ZM9 54.384v1.632H.967v-1.632H9Zm3.376-1.376v14.336h-1.984V53.008h1.984Zm13.713 6.4v1.584H16.04v-1.584h10.048Zm1.408 4.656v1.632H14.52v-1.632h12.976Zm-5.52-3.936v4.48h-1.984v-4.48h1.984Zm4-6.144v1.6h-7.952v4.528H16.04v-6.128h9.936Zm13.92 9.008v4.192h-9.888v-4.192h9.888Zm-7.952 1.472v1.248h6.016v-1.248h-6.016Zm8.816-10.448v1.504H29.112v-1.504H40.76Zm-5.792 1.872c1.547 0 2.73.176 3.552.528.822.352 1.232.859 1.232 1.52s-.41 1.168-1.232 1.52c-.821.352-2.005.528-3.552.528-1.536 0-2.715-.176-3.536-.528-.821-.352-1.232-.859-1.232-1.52s.405-1.168 1.216-1.52c.821-.352 2.006-.528 3.552-.528Zm0 1.328c-.928 0-1.605.059-2.032.176-.416.117-.624.299-.624.544 0 .245.214.427.64.544.427.107 1.099.16 2.016.16s1.59-.053 2.016-.16c.438-.117.656-.299.656-.544 0-.245-.213-.427-.64-.544-.426-.117-1.104-.176-2.032-.176Zm.992-4.336v2.192h-1.984V52.88h1.984Zm5.488 7.824v1.52h-12.96v-1.52h12.96Zm-5.488-1.2v2h-1.984v-2h1.984ZM21 41s16-14.26 16-24.956C37 7.183 29.837 0 21 0S5 7.183 5 16.044C5 26.739 21 41 21 41Z"
      />
      <path
        fill="#fff"
        d="M26.112 15.375A5.118 5.118 0 0 1 21 20.5a5.118 5.118 0 0 1-5.112-5.125 5.118 5.118 0 0 1 5.112-5.125 5.118 5.118 0 0 1 5.11 5.125Z"
      />
    </svg>
  );
}

function FindWayIcon() {
  const [fillColor, setFillColor] = useState('#4AB2C9');

  const handleClick = () => {
    if (fillColor === '#4AB2C9') {
      setFillColor('#B6b6b6');
    } else {
      setFillColor('#4AB2C9');
    }
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="71" onClick={handleClick}>
      <path
        style={{ fill: fillColor }}
        d="M12.423 51.992v7.216h-2v-7.216h2Zm-4.32.544c0 1.301-.245 2.416-.736 3.344-.49.917-1.226 1.675-2.208 2.272-.98.597-2.229 1.045-3.744 1.344l-.688-1.584c1.835-.341 3.163-.875 3.984-1.6.822-.725 1.232-1.605 1.232-2.64v-1.136h2.16Zm-.784 0v1.584H1.48v-1.584h5.84Zm5.104 7.264v3.856H4.887v1.616H2.92v-3.04h7.504v-.912H2.887V59.8h9.536Zm.352 4.864V66.2H2.92v-1.536h9.856Zm6.593-10.288v.528c0 .832-.155 1.605-.464 2.32a4.961 4.961 0 0 1-1.36 1.84c-.598.512-1.339.896-2.224 1.152l-.912-1.552c.747-.192 1.37-.48 1.872-.864.501-.395.874-.837 1.12-1.328a3.525 3.525 0 0 0 .368-1.568v-.528h1.6Zm.368 0v.528c0 .512.117.997.352 1.456.245.459.618.87 1.12 1.232.501.363 1.12.64 1.856.832l-.88 1.52c-.886-.224-1.632-.581-2.24-1.072a4.787 4.787 0 0 1-1.36-1.76 5.447 5.447 0 0 1-.448-2.208v-.528h1.6ZM22.6 53.4v1.568h-7.696V53.4H22.6Zm-2.864-1.456v2.176h-1.968v-2.176h1.968Zm6.032.064v8.176h-1.984v-8.176h1.984Zm1.936 3.232v1.616h-2.48V55.24h2.48ZM21.8 61.464v.352c0 .747-.208 1.435-.624 2.064-.416.619-1.024 1.136-1.824 1.552-.8.416-1.755.704-2.864.864l-.72-1.504c.938-.117 1.733-.325 2.384-.624.661-.31 1.152-.667 1.472-1.072.33-.405.496-.832.496-1.28v-.352h1.68Zm.432 0v.352c0 .427.165.848.496 1.264.33.405.821.768 1.472 1.088.65.31 1.44.523 2.368.64l-.704 1.504c-1.11-.15-2.064-.443-2.864-.88-.8-.427-1.408-.95-1.824-1.568a3.642 3.642 0 0 1-.624-2.048v-.352h1.68Zm3.728-.656v1.568h-9.568v-1.568h9.568Zm14.448-8.816v14.336h-1.984V51.992h1.984Zm-4.256 1.488c0 1.536-.208 2.933-.624 4.192-.405 1.259-1.093 2.41-2.064 3.456-.96 1.045-2.261 1.963-3.904 2.752l-1.024-1.568c1.355-.65 2.448-1.387 3.28-2.208.832-.821 1.435-1.739 1.808-2.752.373-1.024.56-2.197.56-3.52v-.352h1.968Zm-1.04 0v1.584h-5.84V53.48h5.84Z"
      />
      <rect width="40" height="40" x="1" rx="6.275" style={{ fill: fillColor }} />
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M25.046 7.843 31 15.858m0 0-5.954 8.015M31 15.858H15.314a3.137 3.137 0 0 0-3.137 3.137v12.378"
      />
    </svg>
  );
}

function ArticleIcon() {
  const [fillColor, setFillColor] = useState('#4AB2C9');

  const handleClick = () => {
    if (fillColor === '#4AB2C9') {
      setFillColor('#B6b6b6');
    } else {
      setFillColor('#4AB2C9');
    }
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="74" height="71" onClick={handleClick}>
      <path
        style={{ fill: fillColor }}
        d="M5.491 52.776v1.296c0 .96-.144 1.856-.432 2.688a5.844 5.844 0 0 1-1.328 2.176c-.586.619-1.317 1.083-2.192 1.392L.483 58.76c.758-.256 1.392-.624 1.904-1.104a4.392 4.392 0 0 0 1.12-1.632c.246-.619.368-1.27.368-1.952v-1.296h1.616Zm.384 0v1.472c0 .608.112 1.179.336 1.712a4.171 4.171 0 0 0 1.072 1.44c.491.427 1.099.752 1.824.976l-1.024 1.536c-.832-.277-1.536-.693-2.112-1.248a5.606 5.606 0 0 1-1.28-1.968 6.98 6.98 0 0 1-.416-2.448v-1.472h1.6Zm6.08-.768v8.496H9.971v-8.496h1.984Zm1.936 3.36V57h-2.48v-1.632h2.48ZM7.3 60.824c1.494 0 2.672.245 3.536.736.864.49 1.296 1.168 1.296 2.032 0 .565-.197 1.056-.592 1.472-.394.416-.954.73-1.68.944-.725.224-1.578.336-2.56.336-.992 0-1.85-.112-2.576-.336-.725-.213-1.285-.528-1.68-.944a2.068 2.068 0 0 1-.592-1.472c0-.576.198-1.067.592-1.472.395-.416.955-.736 1.68-.96.726-.224 1.584-.336 2.576-.336Zm-.016 1.536c-.938 0-1.653.107-2.144.32-.48.203-.72.507-.72.912 0 .395.24.699.72.912.491.203 1.206.304 2.144.304.939 0 1.654-.101 2.144-.304.491-.213.736-.517.736-.912 0-.405-.245-.71-.736-.912-.49-.213-1.205-.32-2.144-.32Zm17.889-7.024v1.6h-2.768v-1.6h2.768Zm1.472-3.328v8.288h-2v-8.288h2Zm0 8.88v5.296h-9.536v-5.296h9.536ZM19.06 62.44v2.176h5.648V62.44H19.06Zm.56-9.12v.944c0 .917-.15 1.781-.448 2.592a5.847 5.847 0 0 1-1.36 2.112c-.598.608-1.334 1.056-2.208 1.344l-1.008-1.568c.757-.256 1.392-.613 1.904-1.072.512-.459.89-.981 1.136-1.568.245-.597.368-1.21.368-1.84v-.944h1.616Zm.4 0v.928c0 .597.117 1.173.352 1.728a4.381 4.381 0 0 0 1.104 1.472c.49.437 1.098.779 1.824 1.024l-.992 1.552c-.854-.277-1.574-.704-2.16-1.28a5.753 5.753 0 0 1-1.296-2.032 7.2 7.2 0 0 1-.416-2.464v-.928h1.584Zm2.832-.576v1.584H15.14v-1.584h7.712ZM36.188 53c.725 0 1.37.208 1.936.624.576.416 1.018 1.013 1.328 1.792.32.768.48 1.664.48 2.688 0 1.035-.16 1.941-.48 2.72-.31.768-.752 1.36-1.328 1.776a3.182 3.182 0 0 1-1.936.624c-.726 0-1.371-.208-1.936-.624-.566-.416-1.008-1.013-1.328-1.792-.32-.779-.48-1.68-.48-2.704 0-1.024.16-1.92.48-2.688.32-.779.762-1.376 1.328-1.792A3.182 3.182 0 0 1 36.188 53Zm0 1.792c-.363 0-.683.133-.96.4-.278.256-.496.63-.656 1.12-.15.49-.224 1.088-.224 1.792s.074 1.307.224 1.808c.16.501.378.88.656 1.136.277.256.597.384.96.384.373 0 .698-.128.976-.384.277-.256.49-.635.64-1.136.16-.501.24-1.104.24-1.808s-.08-1.301-.24-1.792c-.15-.49-.363-.864-.64-1.12a1.363 1.363 0 0 0-.976-.4Zm7.376-2.784v14.336H41.58V52.008h1.984Zm2.112 5.44v1.632h-2.544v-1.632h2.544Zm2.672 4.016c1.397 0 2.597-.021 3.6-.064a30.631 30.631 0 0 0 3.056-.32l.176 1.584a34.82 34.82 0 0 1-3.12.336c-1.035.053-2.272.08-3.712.08h-1.232v-1.616h1.232Zm5.984-8.272v1.616h-5.264v7.2h-1.952v-8.816h7.216Zm-.592 4v1.552h-5.12v-1.552h5.12Zm4.512-5.184v14.336h-1.984V52.008h1.984Zm12.768.528v1.536h-9.088v-1.536h9.088Zm.736 0v1.232c0 .853-.021 1.6-.064 2.24a13.44 13.44 0 0 1-.288 2.08l-1.952-.192c.16-.747.262-1.413.304-2 .043-.597.064-1.307.064-2.128v-1.232h1.936Zm-1.344 3.76-8.672.352-.224-1.504 8.896-.208v1.36Zm2.848 1.28v1.536H60.348v-1.536H73.26Zm-1.408 2.432v3.76H63.74v1.568h-1.968v-2.992H69.9v-.848h-8.144v-1.488h10.096Zm.496 4.672v1.504H61.772V64.68h10.576Z"
      />
      <path
        stroke="#B6B6B6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        d="m19.458 8.333 30.401 29.68m-30.4-29.68a6.24 6.24 0 0 1 4.707-2.11h10.277m-14.985 2.11A5.82 5.82 0 0 0 18 12.183v21.856C18 37.331 20.76 40 24.166 40h22.61c3.406 0 6.166-2.669 6.166-5.96v-8.942m-18.498 0-13.36 12.915M49.01 8.756v-.127M56 8.609c0 4.405-6.989 10.28-6.989 10.28s-6.988-5.874-6.988-10.28c0-3.65 3.129-6.609 6.988-6.609C52.871 2 56 4.959 56 8.609Z"
      />
    </svg>
  );
}

function BookMarkIcon() {
  const [fillColor, setFillColor] = useState('#4AB2C9');

  const handleClick = () => {
    if (fillColor === '#4AB2C9') {
      setFillColor('#B6b6b6');
    } else {
      setFillColor('#4AB2C9');
    }
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="65" onClick={handleClick}>
      <path
        style={{ fill: fillColor }}
        d="M7.975 54.024v2.208h-2v-2.208h2Zm5.504-1.184v1.584H.52V52.84h12.96Zm-1.568 2.848v4.656H9.943V57.24H1.96v-1.552h9.952Zm-7.776-9.312v1.296h5.728v-1.296h1.968v5.504H2.183v-5.504h1.952Zm0 3.952h5.728v-1.184H4.135v1.184ZM21.8 47.352v9.488h-6.832v-9.488H21.8Zm-4.88 1.568v6.352h2.928V48.92H16.92Zm8.8-2.912v14.336h-1.984V46.008h1.984Zm2.112 5.44v1.632h-2.544v-1.632h2.544ZM39 47.256v1.6h-9.04v-1.6H39Zm2.464 9.728v1.632h-12.96v-1.632h12.96Zm-1.344-9.728v1.68c0 1.376-.037 2.57-.112 3.584-.064 1.013-.245 2.208-.544 3.584l-1.952-.176c.288-1.27.47-2.41.544-3.424a49.31 49.31 0 0 0 .112-3.568v-1.68h1.952Zm-1.552 5.392-8.768.448-.24-1.6 9.008-.288v1.44ZM39.392 10.96c0 2.891-1.11 5.668-3.093 7.723-4.564 4.73-8.99 9.662-13.724 14.221a2.735 2.735 0 0 1-3.845-.084L5.092 18.683C.969 14.409.969 7.51 5.092 3.237a10.434 10.434 0 0 1 15.108 0l.495.514.496-.513C23.187 1.168 25.905 0 28.745 0s5.558 1.167 7.554 3.237c1.983 2.055 3.093 4.832 3.093 7.723Z"
      />
    </svg>
  );
}

//여기서는 색 변화가 아니라 이미지 변경이 필요
function MypageIcon() {
  const [fillColor, setFillColor] = useState('#4AB2C9');

  const handleClick = () => {
    if (fillColor === '#4AB2C9') {
      setFillColor('#B6b6b6');
    } else {
      setFillColor('#4AB2C9');
    }
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="74" height="74" onClick={handleClick}>
      <path
        style={{ fill: fillColor }}
        d="M7.987 56.352v9.488H1.155v-9.488h6.832Zm-4.88 1.568v6.352h2.928V57.92H3.107Zm8.8-2.912v14.336H9.923V55.008h1.984Zm2.112 5.44v1.632h-2.544v-1.632h2.544Zm12.529-5.472V69.36h-2V54.976h2ZM18.852 56c.714 0 1.354.208 1.92.624.576.416 1.024 1.013 1.344 1.792.32.768.48 1.664.48 2.688 0 1.024-.16 1.925-.48 2.704-.32.779-.768 1.376-1.344 1.792a3.158 3.158 0 0 1-1.92.624A3.252 3.252 0 0 1 16.9 65.6c-.566-.416-1.014-1.008-1.344-1.776-.32-.779-.48-1.685-.48-2.72 0-1.024.16-1.92.48-2.688.33-.779.778-1.376 1.344-1.792A3.252 3.252 0 0 1 18.852 56Zm0 1.792c-.374 0-.699.133-.976.4-.278.256-.496.63-.656 1.12-.15.49-.224 1.088-.224 1.792s.074 1.307.224 1.808c.16.501.378.88.656 1.136.277.256.602.384.976.384.362 0 .682-.128.96-.384.277-.256.49-.635.64-1.136.16-.501.24-1.104.24-1.808 0-.693-.08-1.285-.24-1.776-.15-.501-.363-.88-.64-1.136a1.344 1.344 0 0 0-.96-.4Zm25.912-2.784v14.336h-1.888V55.008h1.888Zm-4.176 5.248v1.728H38.62v-1.728h1.968Zm1.296-4.96v13.36h-1.84v-13.36h1.84Zm-2.912 1.344v1.568h-6.528V56.64h6.528Zm-6.768 7.808c3.04 0 5.37-.112 6.992-.336l.144 1.424c-.992.213-2.091.357-3.296.432a68.49 68.49 0 0 1-3.632.096l-.208-1.616Zm2.928-6.8v7.216h-1.776v-7.216h1.776Zm2.912 0v7.216h-1.792v-7.216h1.792Zm20.16-2.672V69.36h-2V54.976h2ZM50.508 56c.715 0 1.355.208 1.92.624.576.416 1.024 1.013 1.344 1.792.32.768.48 1.664.48 2.688 0 1.024-.16 1.925-.48 2.704-.32.779-.768 1.376-1.344 1.792a3.158 3.158 0 0 1-1.92.624 3.252 3.252 0 0 1-1.952-.624c-.565-.416-1.013-1.008-1.344-1.776-.32-.779-.48-1.685-.48-2.72 0-1.024.16-1.92.48-2.688.33-.779.779-1.376 1.344-1.792A3.252 3.252 0 0 1 50.508 56Zm0 1.792c-.373 0-.699.133-.976.4-.277.256-.496.63-.656 1.12-.15.49-.224 1.088-.224 1.792s.075 1.307.224 1.808c.16.501.379.88.656 1.136.277.256.603.384.976.384.363 0 .683-.128.96-.384.277-.256.49-.635.64-1.136.16-.501.24-1.104.24-1.808 0-.693-.08-1.285-.24-1.776-.15-.501-.363-.88-.64-1.136a1.344 1.344 0 0 0-.96-.4Zm14.864-.56v1.696c0 1.12-.16 2.192-.48 3.216a8.382 8.382 0 0 1-1.376 2.72 5.84 5.84 0 0 1-2.192 1.776l-1.12-1.568a5.277 5.277 0 0 0 1.936-1.488 7.07 7.07 0 0 0 1.232-2.192c.278-.81.416-1.632.416-2.464v-1.696h1.584Zm.416 0v1.696c0 .8.134 1.584.4 2.352a6.29 6.29 0 0 0 1.232 2.048 5.414 5.414 0 0 0 1.952 1.392l-1.088 1.568a6.046 6.046 0 0 1-2.224-1.696 7.772 7.772 0 0 1-1.376-2.576c-.309-.97-.464-2-.464-3.088v-1.696h1.568Zm3.008-.848v1.632h-8.032v-1.632h8.032Zm3.376-1.376v14.336h-1.984V55.008h1.984ZM15 40.564c0-8.455 7.064-15.31 21.5-15.31S58 32.109 58 40.564C58 41.91 57.019 43 55.808 43H17.192C15.982 43 15 41.91 15 40.564ZM44.563 8.063a8.062 8.062 0 1 1-16.125 0 8.062 8.062 0 0 1 16.125 0Z"
      />
    </svg>
  );
}

export { MapIcon, FindWayIcon, ArticleIcon, BookMarkIcon, MypageIcon };
