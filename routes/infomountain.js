const express = require('express');
const request = require('request');
const APIkey = require('../public/mountainInfo/javascripts/APIkey')
const convert = require('xml-js');
const Mountain = require('../models/mountain')
const router = express.Router();

const servicekey = APIkey.servicekeyen
/* GET page. */
router.use((req, res, next) => {
  // res.locals.user = req.user;
  // res.locals.followerCount = 0;
  // res.locals.followingCount = 0;
  // res.locals.followerIdList = [];
  const mountainarry = ["가리산", "가리왕산", "가야산", "가지산", "감악산", "강천산", "계룡산", "계방산", "공작산", "관악산", "구병산", "금산", "금수산", "금오산", "금정산", "깃대봉", "남산", "내연산", "내장산", "대둔산", "대암산", "대야산", "덕숭산", "덕유산", "덕항산", "도락산", "도봉산", "두륜산", "두타산", "마니산", "마이산", "명성산", "명지산", "모악산", "무등산", "무학산", "미륵산", "민주지산", "방장산", "방태산", "백덕산", "백암산", "백운산", "백운산", "백운산", "변산", "북한산", "비슬산", "삼악산", "서대산", "선운산", "설악산", "성인봉", "소백산", "소요산", "속리산", "신불산", "연화산", "오대산", "오봉산", "용문산", "용화산", "운문산", "운악산", "운장산", "월악산", "월출산", "유명산", "응봉산", "장안산", "재약산", "적상산", "점봉산", "조계산", "주왕산", "주흘산", "지리산", "지리산", "천관산", "천마산", "천성산", "천태산", "청량산", "추월산", "축령산", "치악산", "칠갑산", "태백산", "태화산", "팔공산", "팔봉산", "팔영산", "한라산", "화악산", "화왕산", "황매산", "황석산", "황악산", "황장산", "희양산"];
  for (let i = 0; i < 3; i++) {
    let newmountaidata = [];
    const url = 'http://apis.data.go.kr/1400000/service/cultureInfoService/mntInfoOpenAPI';
    var queryParams = '?' + encodeURIComponent('ServiceKey') + '=' + servicekey; /* Service Key*/
    queryParams += '&' + encodeURIComponent('searchWrd') + '=' + encodeURIComponent(mountainarry[i]);; /* */
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('100'); /* */
    queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* */
    const fullurl = url + queryParams;
    // console.log(fullurl);

    request(fullurl, (error, response, body) => {
      if (!error && response.statusCode == 200) {
        data = JSON.parse(convert.xml2json(body, { compact: true, spaces: 4 }));
        mountaindata = data.response.body.items.item
        console.log(mountaindata);
      }
    });


  }

  next();
});

router.get('/', (req, res) => {
  res.render('infomountain');
});

module.exports = router;
