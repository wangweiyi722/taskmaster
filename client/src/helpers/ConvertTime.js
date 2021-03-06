export const ConvertTime = (unixTime) => {
  var a = new Date(unixTime * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = a.getMonth();
  var date = a.getDate();
  var hour = a.getHours()%12;
  var min = a.getMinutes();
  var amPm = Math.floor(a.getHours()/12)===1?"PM":"AM";
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + " " + amPm;
  return {
    year:year,
    month:month,
    date:date,
    hour:hour,
    min:min,
    amPm:amPm,
    formattedDate:month+"/"+date+"/"+year,
    time:hour + ':' + min + " " + amPm
  }
}
