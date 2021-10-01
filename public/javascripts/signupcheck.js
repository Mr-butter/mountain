function checkId() {
  //아이디 유효성 검사
  const regExpId = /^[A-Za-z0-9]{4,10}$/;
  let id = document.getElementById("user-id").value;
  if (!regExpId.test(id)) {
    document.getElementById("wrongid").innerHTML =
      "형식에 맞지 않는 아이디 입니다.ID는 4~10자의 영문대소문자와 숫자로만 입력해주세요";
  } else {
    document.getElementById("wrongid").innerHTML = "";
    return true;
  }
}

function checkPw() {
  //비밀번호 유효성 검사
  const regExpPwd = /^(?=.*?[a-zA-Z])(?=.*?[0-9]).{4,20}$/;
  let pw = document.getElementById("user-pw").value;
  if (!regExpPwd.test(pw)) {
    document.getElementById("wrongPw").innerHTML =
      "형식에 맞지 않는 비밀번호 입니다.4~20자로 영문대소문자, 특수문자 최소1개포함";
  } else {
    document.getElementById("wrongPw").innerHTML = "";
    return true;
  }
}

function reCheckPw() {
  //비밀번호 재확인
  let pw = document.getElementById("user-pw").value;
  let repw = document.getElementById("user-pw-confirm").value;
  if (pw != repw) {
    document.getElementById("wrongRePw").innerHTML = "위 비밀번호와 다릅니다.";
  } else {
    document.getElementById("wrongRePw").innerHTML = "";
    return true;
  }
}

function checkName() {
  //이름 유효성 검사
  const regExpName = /^[가-힣]{2,6}$/;
  let name = document.getElementById("user-name").value;
  if (!regExpName.test(name)) {
    document.getElementById("wrongName").innerHTML =
      "형식에 맞지 않는 이름입니다.한글만가능, 최소2~6문자";
  } else {
    document.getElementById("wrongName").innerHTML = "";
    return true;
  }
}

function checkMail() {
  //메일 유효성 검사
  const regExpMail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z]*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3})$/i;
  let mail = document.getElementById("user-email").value;
  if (!regExpMail.test(mail)) {
    document.getElementById("usereMail").innerHTML =
      "형식에 맞지 않는 이메일 입니다. ";
  } else {
    document.getElementById("usereMail").innerHTML = "";
  }
}

//회원가입시 입력란 정규식 체크
function checkForm() {
  const regExp1 = /^[A-Za-z0-9]{4,10}$/;
  let id = document.getElementById("user-id").value;
  if (!regExp1.test(id)) {
    alert("형식이 맞지 않습니다.영문대소문자,숫자,최소4~10문자");
  }
}
