$(function () {
  $('.sum').on('click', function () {
    let upMoney = $('#up-money').val()
    let upPercent1 = $('#up-percent1').val()
    let upPercent2 = $('#up-percent2').val()
    let dValue = $('#dValue').val()

    percent1 = upPercent1 / 100
    percent2 = upPercent2 / 100


    if (upMoney <= 500) { 
      b = upMoney * 0.2
      wPercent = upMoney - b 
    } else if (upMoney >= 501, upMoney <= 10000) {
      d = upMoney * 0.1
      wPercent = upMoney - d  
    } else if (upMoney >= 10000) {
      g = upMoney * 0.05
      wPercent = upMoney - g  
    }

    percentSum = wPercent * (percent1 + percent2)
    antonPercentUsd = wPercent * percent1
    managerPercentUsd = wPercent * percent2
    myMoneyUsd = wPercent - percentSum
    myMoneyUah = myMoneyUsd * dValue
    antonPercentUah = antonPercentUsd * dValue
    managerPercentUah = managerPercentUsd * dValue 
    $('.wPercent').html(wPercent)
    $('.myMoney--usd').html(myMoneyUsd)
    $('.myMoney--uah').html(myMoneyUah)
    $('.antonPercent--usd').html(antonPercentUsd)
    $('.antonPercent--uah').html(antonPercentUah)
    $('.managerPercent--usd').html(managerPercentUsd)
    $('.managerPercent--uah').html(managerPercentUah) 

    $('.result').addClass('show') 
  })

});