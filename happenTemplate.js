var library = (function() {
  return {
	TimeStamp: (function(){
   	  return {
		UnixTimestamp: function(){},
		UnixMillisecond: function(){}
	  }
	})(),
	Local: (function(){
	  return {
		Time: (function() {
		  return {
	  	    WithSeconds: function(){},
	   	    WithOutSeconds: function() {}
		  }
		})(),
		MDY: (function(){
	  	  return {
		    Numeral: function(){},
			Name: function(){}
		  }
		  })(),
		}
	})(),
	Second: (function(){
		return{
			Second: function(){},
			DblDigit: function(){}
		}
	})(),
	Minute: (function(){
		return{
			Minute: function(){},
			DblDigit: function(){}
		}
	})(),
	Hour: (function(){
		return {
			TwentyFourHour: function() {},
			TwelveHour: function() {},
			AMPM: (function() {
				return {
					UpperCase: function(){},
					LowerCase: function(){}
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
                var week = (today - daysInFirstWeek) / 7;

                return String(Math.ceil(week));
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
                            day = "0" + day;
                        }
                        return day;
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
	Defaults: function(){}
  }
})();