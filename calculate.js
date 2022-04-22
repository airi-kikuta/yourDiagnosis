$(function() {
    // 以下は同義
    // const btn = document.getElementById('btn');
    // const btn = $("#btn");

    $(document).on('click', '#btn', function(){
        // 各傾向のスコア
        let case1 = 0; // 血液不足
        let case2 = 0; // 血行不良
        let case3 = 0; // 自律神経の乱れ
        let case4 = 0; // 糖質過多
        let case5 = 0; // プロスタグランジン過多
        let case6 = 0; // セロトニン不足
        let case7 = 0; // 質的栄養不足

        // スコアを計算する
        let a1 = $('input[name="q1"]:checked').val();
        if(a1 === "q1y"){
          case1 += 1
          case2 += 1
          case5 += 1
          case7 += 1
        }


        let a2 = $('input[name="q2"]:checked').val();
        if(a2 === "q2y"){
          case3 += 1
          case6 += 1
        }


        let a3 = $('input[name="q3"]:checked').val();
        if(a3 === "q3y"){
          case4 += 1
        }


        let a4 = $('input[name="q4"]:checked').val();
        if(a4 === "q4y"){
          case1 += 1
          case2 += 1
          case3 += 1
          case4 += 1
          case6 += 1
          case7 += 1
        }


        let a5 = $('input[name="q5"]:checked').val();
        if(a5 === "q5y"){
          case2 += 1
          case3 += 1
        }


        let a6 = $('input[name="q6"]:checked').val();
        if(a6 === "q6y"){
          case2 += 1
          case3 += 1
        }


        let a7 = $('input[name="q7"]:checked').val();
        if(a7 === "q7y"){
          case3 += 1
        }


        let a8 = $('input[name="q8"]:checked').val();
        if(a8 === "q8y"){
          case2 += 1
          case5 += 1
        }


        let a9 = $('input[name="q9"]:checked').val();
        if(a9 === "q9y"){
          case5 += 1
        }


        let a10 = $('input[name="q10"]:checked').val();
        if(a10 === "q10y"){
          case5 += 1
        }


        let a11 = $('input[name="q11"]:checked').val();
        if(a11 === "q11y"){
          case4 += 1
        }


        let a12 = $('input[name="q12"]:checked').val();
        if(a12 === "q12y"){
          case2 += 1
          case5 += 1
        }


        let a13 = $('input[name="q13"]:checked').val();
        if(a13 === "q13y"){
          case3 += 1
          case6 += 1
        }


        let a14 = $('input[name="q14"]:checked').val();
        if(a14 === "q14y"){
          case5 += 1
        }


        let a15 = $('input[name="q15"]:checked').val();
        if(a15 === "q15y"){
          case1 += 1
          case2 += 1
          case3 += 1
          case7 += 1
        }


        let a16 = $('input[name="q16"]:checked').val();
        if(a16 === "q16y"){
          case1 += 1
          case2 += 1
          case7 += 1
        }


        let a17 = $('input[name="q17"]:checked').val();
        if(a17 === "q17y"){
          case1 += 1
          case5 += 1
        }


        let a18 = $('input[name="q18"]:checked').val();
        if(a18 === "q18y"){
          case1 += 1
          case3 += 1
          case4 += 1
          case6 += 1
          case7 += 1
        }


        let a19 = $('input[name="q19"]:checked').val();
        if(a19 === "q19y"){
          case6 += 1
        }


        let a20 = $('input[name="q20"]:checked').val();
        if(a20 === "q20y"){
          case6 += 1
        }

        let a21 = $('input[name="q21"]:checked').val();
        if(a21 === "q21y"){
          case6 += 1
        }


        let a22 = $('input[name="q22"]:checked').val();
        if(a22 === "q22y"){
          case6 += 1
        }


        let a23 = $('input[name="q23"]:checked').val();
        if(a23 === "q23y"){
          case6 += 1
        }


        let a24 = $('input[name="q24"]:checked').val();
        if(a24 === "q24y"){
          case3 += 1
          case6 += 1
        }


        let a25 = $('input[name="q25"]:checked').val();
        if(a25 === "q25y"){
          case2 += 1
        }


        let a26 = $('input[name="q26"]:checked').val();
        if(a26 === "q26y"){
          case2 += 1
        }


        let a27 = $('input[name="q27"]:checked').val();
        if(a27 === "q27y"){
          case1 += 1
          case2 += 1
        }


        let a28 = $('input[name="q28"]:checked').val();
        if(a28 === "q28y"){
          case4 += 1
          case5 += 1
          case7 += 1
        }


        let a29 = $('input[name="q29"]:checked').val();
        if(a29 === "q29y"){
          case1 += 1
        }


        let a30 = $('input[name="q30"]:checked').val();
        if(a30 === "q30y"){
          case2 += 1
        }

        let a31 = $('input[name="q31"]:checked').val();
        if(a31 === "q31y"){
          case1 += 1
          case7 += 1
        }


        let a32 = $('input[name="q32"]:checked').val();
        if(a32 === "q32y"){
          case1 += 1
          case7 += 1
        }


        let a33 = $('input[name="q33"]:checked').val();
        if(a33 === "q33y"){
          case4 += 1
        }


        let a34 = $('input[name="q34"]:checked').val();
        if(a34 === "q34y"){
          case4 += 1
        }


        let a35 = $('input[name="q35"]:checked').val();
        if(a35 === "q35y"){
          case3 += 1
          case6 += 1
        }


        let a36 = $('input[name="q36"]:checked').val();
        if(a36 === "q36y"){
          case3 += 1
          case6 += 1
        }




        // チャートを描画
        let canvas = $("#myChart");
        const data = {
            labels: [
              '血液不足',
              '血行不良',
              '自律神経の乱れ',
              '糖質過多',
              'プロスタグランジン過多',
              'セロトニン不足',
              '質的栄養不足'
            ],
            datasets: [{
              label: 'PMS傾向結果',
              data: [case1, case2, case3, case4, case5, case6, case7],
              fill: true,
              backgroundColor: 'rgba(255,166,24,0.7)',
              borderColor: 'rgba(255,166,24,0.0)',
              // 色を変えたいときは https://generator.web-alpha.info/rgba/index.php#step1

              pointRadius: 0,
            },]
          };
          console.log(data)
        let setup = {
            type: 'radar',
            data: data,
            options: {
                plugins: {
                    title: {
                        display: true,
                        // text: "あなたのPMS傾向結果"
                    }
                },
                responsive: true,
                scale: {
                  gridLines: {
                      lineWidth: [1, 1, 0, 1, 0, 1, 0, 1, 0, 1]
                  },
                  r: {
                      min: 0,
                      max: Math.max(case1,case2,case3,case5,case4,case6,case7),
                      stepSize: 1,
                      display: false,
                      precision: 0,
                  }
              }
            }
        }
        console.log(setup)
        chart = new Chart(canvas, setup);
        console.log(chart)
        $("#case1").html(case1);




        let case1m = ''
        let case2m = ''
        let case3m = ''
        let case4m = ''
        let case5m = ''
        let case6m = ''
        let case7m = ''



        case1m = getCase1Message(case1)
        case2m = getCase1Message(case2)
        case3m = getCase1Message(case3)
        case4m = getCase1Message(case4)
        case5m = getCase1Message(case5)
        case6m = getCase1Message(case6)
        case7m = getCase1Message(case7)



        function getCase1Message(caseCount) {
          let message = ''
          if(caseCount === 0) {
            message = 'A'
          } else if(caseCount === 1) {
            message = 'B'
          } else if(caseCount === 2) {
            message = 'C'
          } else if(caseCount === 3) {
            message = 'D'
          } else if(caseCount === 4) {
            message = 'E'
          } else if(caseCount === 5) {
            message = 'F'
          }
          return message
        }




        $(".card").css("display", "block")

        $("#case1").html(`<div class=''>${case1m}</div>`);



        // ボタンを一度押したら押せなくする
        $(this).addClass("disabled");
    });
      });


