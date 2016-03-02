var library = (function() {
  return {
	TimeStamp: (function(){
   	  return {
		UnixTimestamp: function(){
            var ms = new Date().getTime();
            return String(Math.floor(ms / 1000));
        },
		UnixMillisecond: function(){
            var ms = new Date().getTime();
            return ms;
        }
	  }
	})(),
	Local: (function(){
	  return {
		Time: (function() {
		  return {
	  	    WithSeconds: function(){
                   var hour = library.Hour.TwelveHour();
                   var minute = library.Minute.DblDigit();
                   var second = library.Second.DblDigit();
                   var period = library.Hour.AMPM.UpperCase();
                   return hour + ":" + minute + ":" + second + " " + period;
                },
	   	    WithOutSeconds: function() {
                   var hour = library.Hour.TwelveHour();
                   var minute = library.Minute.DblDigit();
                   var period = library.Hour.AMPM.UpperCase();
                   return hour + ":" + minute + " " + period;
               }
		  }
		})(),
		MDY: (function(){
	  	  return {
		    Numeral: function(){
                var month = library.Month.MonthNumber();
                var day = library.Month.DateOfMonth.Numeral();
                var year = library.Year.YearFull();
                return month + "/" + day + "/" + year;
            },
			Name: function(){
                var month = library.Month.CurrentMonth();
                var day = library.Month.DateOfMonth.Numeral();
                var year = library.Year.YearFull();
                return month + " " + day + ", " + year;
            }
		  }
		  })(),
		}
	})(),
	Second: (function(){
		return{
			Second: function(){
                var second = new Date().getSeconds();
                return String(second);
            },
			DblDigit: function(){
                var second = new Date().getSeconds();
                if (second < 10) {
                    return String("0" + second);
                } else {
                    return String(second);
                }
            }
		}
	})(),
	Minute: (function(){
		return{
			Minute: function(){
                var minute = new Date().getMinutes();
                return String(minute);
            },
			DblDigit: function(){
                var minute = new Date().getMinutes();
                if (minute < 10) {
                    return String("0" + minute);
                } else {
                    return String(minute);
                }
            }
		}
	})(),
	Hour: (function(){
		return {
			TwentyFourHour: function() {
                var hour = new Date().getHours();
                return String(hour);
            },
			TwelveHour: function() {
                var hour = new Date().getHours();
                if (hour > 12) {
                    return String(hour - 12);
                } else {
                    return String(hour);
                }
            },
			AMPM: (function() {
				return {
					UpperCase: function(){
                        var hour = new Date().getHours();
                        if (hour >= 12) {
                            var period  = "PM";
                        } else {
                            var period = "PM";
                        }
                        return period;
                    },
					LowerCase: function(){
                        var period = library.Hour.AMPM.UpperCase();
                        return period.toLowerCase();
                    }
				}
			})()
		}
	})(),
	Week: (function(){
		return {
			DayOfWeek: function(){
                var today = new Date().getDay();
                var daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
                return daysOfWeek[today];
            },
			AbrDayOfWeek: function(){
                var today = library.Week.DayOfWeek();
                return today.slice(0,3);
            },
			FirstTwoOfWeek: function(){
                var today = library.Week.DayOfWeek();
                return today.slice(0,2);
            },
			WeekOfYear: function(){
                var today = library.Year.DayOfYear.Numeral();
                var jan1DayOfWeek = new Date();
                jan1DayOfWeek.setMonth(0);
                jan1DayOfWeek.setDate(1);
                var daysInFirstWeek = 7 - jan1DayOfWeek.getDay();
                var week = ((today - daysInFirstWeek) / 7) + 1;

                return String(Math.floor(week));
            }
		}
	})(),
	Month: (function(){
		return {
			DateOfMonth: (function(){
				return {
					Numeral: function(){
                        var day = new Date().getDate();
                        return String(day);
                    },
					Ordinal: function(){
                        var day = library.Month.DateOfMonth.Numeral();
                        //var day = String(new Date().getDate());
                        var onesDigit = day[day.length - 1];
                        if (onesDigit == "1") {
                            day = day + "st";
                        } else if (onesDigit == "2") {
                            day = day + "nd";
                        } else {
                            day = day + "rd";
                        }
                        return day;
                    },
					DateDblDigit: function(){
                        var day = new Date().getDate();
                        if (day < 10) {
                            return "0" + day;
                        } else {
                            return day;
                        }
                        }
				    }
			})(),
			MonthNumber: function(){
                return String(new Date().getMonth() + 1);
            },
			MonthNumberDblDigit: function(){
                var month = String(new Date().getMonth() + 1);
                if (month < 10) {
                    month = "0" + month;
                }
                return month;
            },
			AbrOfCurrentMonth: function(){
                var month = new Date().getMonth();
                var monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
                return monthNames[month].slice(0,3);
            },
			CurrentMonth: function(){
                var month = new Date().getMonth();
                var monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
                return monthNames[month];
            }
		}
	})(),
	Year: (function(){
		return {
			DayOfYear: (function(){
				return {
					Numeral: function(){
                        var today = new Date();
                        var jan1 = new Date();
                        jan1.setMonth(0);
                        jan1.setDate(1);
                        var diff = today - jan1;
                        var dayOfYear = diff / 1000 / 60 / 60 / 24;
                        return String(dayOfYear + 1);
                    },
					Ordinal: function(){
                        var dayOfYear = library.Year.DayOfYear.Numeral();
                        var onesDigit = dayOfYear[dayOfYear.length - 1];
                        if (onesDigit == "1") {
                            dayOfYear = dayOfYear + "st";
                        } else if (onesDigit == "2") {
                            dayOfYear = dayOfYear + "nd";
                        } else {
                            dayOfYear = dayOfYear + "rd";
                        }
                        return dayOfYear;
                    }
				}
			})(),
			YearFull: function(){
                var year = new Date().getFullYear();
                return String(year);
            },
			YearAbr: function(){
                var year = String(new Date().getFullYear());
                return year.slice(year.length - 2);
            }
		}
	})(),
	Defaults: function(){
        var year = library.Year.YearFull();
        var month = library.Month.MonthNumberDblDigit();
        var day = library.Month.DateOfMonth.DateDblDigit();
        
        var hour = library.Hour.TwelveHour();
        var minute = library.Minute.DblDigit();
        var second = library.Second.DblDigit();
        
        var date = year + "-" + month + "-" + day;
        var time = hour + ":" + minute + ":" + second;
        
        return date + "T" + time;
    }
  }
})();