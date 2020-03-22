$( document ).ready(() => {
  //button animation
    const btn = $('.btn');
    const btnCom = $('.btn_com');
    const text = $('.text');

    btn.click((x) => {
      let   btnAnim = x.target.className.replace('btn ','.');
      $(btnAnim).addClass('btn_animation');
      setTimeout(function () {
        $(btnAnim).removeClass('btn_animation');
      }, 300);
      //Type text
      text.val(text.val() + $(btnAnim).text());
    });
    btnCom.click(function(x) {
      let   btnAnim = x.target.className.replace('btn_com ','.');
      $(btnAnim).addClass('btn_animation');
      setTimeout(function () {
        $(btnAnim).removeClass('btn_animation');
      }, 300);
      //buttons logic
      if(btnAnim === '.del')
        text.val('');
      else if(btnAnim === '.clear')
        text.val(text.val().slice(0, -1));
    });
    //calculator logic
    $('.equal').click(() => {
      let   stakNum = [];
      let   j = 0;
      const textVal = text.val();
      console.log(text.width());
      let num;

      for(let i = 0; i < textVal.length; i++)
      {
        if(textVal[i] === '+' || textVal[i] === '-' || textVal[i] === '*' || textVal[i] === '/')
        {
          stakNum.unshift(textVal[i]);
          stakNum.unshift(textVal.slice(j, i));
          j = i + 1;
          if(textVal[0] === '-')
          {
            stakNum[0] = '-' + stakNum[0];
          }

        }
        else if(i === textVal.length - 1){
          stakNum.unshift(textVal.slice(j, i + 1));
        }
      }

      if(stakNum.length > 3 && stakNum[3] != '-')
      {
        alert('Вы можете совершить операцию только с двумя числами');
        return 0;
      }

      switch (stakNum[2]) {
        case '-':
          num = parseFloat(stakNum[1]) - parseFloat(stakNum[0]);
          break;
        case '+':
          num = parseFloat(stakNum[1]) + parseFloat(stakNum[0]);
          break;
        case '*':
          num = parseFloat(stakNum[1]) * parseFloat(stakNum[0]);
          break;
        case '/':
          num = parseFloat(stakNum[1]) / parseFloat(stakNum[0]);
          break;

      }
      text.val(num);


    });

});
