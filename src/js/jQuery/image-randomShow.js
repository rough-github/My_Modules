// ランダム生成(画像パスで直接)
let maxNam = 5;
let rdm = Math.floor(Math.random() * (maxNam)) + 1;
$("#randomShow").attr("src", `../../../../img/img${rdm}.jpg`);

// ランダム生成(クラスで切り替える)
$("#randomShow").addClass(`setView${rdm}`);
