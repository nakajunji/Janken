var user_hand = prompt('ジャンケンの手をグー、チョキ、パーから選んでください。');

while((user_hand != 'グー')&&(user_hand != 'チョキ')&&(user_hand != 'パー')&&(user_hand != null)){
	alert('グー・チョキ・パーのいずれかを入力してください');
	var user_hand = prompt('ジャンケンの手をグー、チョキ、パーから選んでください。');
}

var js_hand = getJShand();

var judge = winlose(user_hand, js_hand);

if(user_hand != null){
	alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
}else{
	alert("またチャレンジしてね")
}

function getJShand(){
	var js_hand_num = Math.floor( Math.random() * 3);
	var hand_name;

	if (js_hand_num == 0){
		hand_name = 'グー';
	}else if(js_hand_num == 1){
		hand_name = 'チョキ';
	}else if(js_hand_num == 2){
		hand_name = 'パー';
	}

	return hand_name;
}

function winlose(user, js){
	var winloseStr;

	if(user == 'グー'){
		if (js == 'グー'){
			winloseStr = 'あいこ';
		}else if (js == 'チョキ'){
			winloseStr = '勝ち';
		}else if (js == 'パー'){
			winloseStr = '負け';
		}
	}else if(user == 'チョキ'){
		if (js == 'グー'){
			winloseStr = '負け';
		}else if (js == 'チョキ'){
			winloseStr = 'あいこ';
		}else if (js == 'パー'){
			winloseStr = '勝ち';
		}
	}else if(user == 'パー'){
		if (js == 'グー'){
			winloseStr = '勝ち';
		}else if (js == 'チョキ'){
			winloseStr = '負け';
		}else if (js == 'パー'){
			winloseStr = 'あいこ';
		}
	}

	return winloseStr;
}
