// 搜索安全验证 > rss
muban.短视.二级.title = '.img&&img&&alt;.main-ui-meta&&div:eq(6)--span&&Text';
muban.短视.二级.desc = 'a.douban&&Text;;;.main-ui-meta&&div:eq(5)&&Text;.main-ui-meta&&div:eq(3)&&Text';
muban.短视.二级.tabs = '.py-tabs&&li';
muban.短视.二级.tab_text = 'body--small&&Text';
var rule={
	title:'老王电影',

	模板:'mxone5',
  host: "https://www.bcdy.xyz",
  url: "/vodshow/fyclassfyfilter.html",
    searchUrl: '/vodsearch/page/fypage/wd/**/',
  filterable: 1,

  filter_url: "-{{fl.area}}-{{fl.by}}-{{fl.class}}-{{fl.lang}}-{{fl.letter}}---fypage---{{fl.year}}",

	filter:{
	    "1":[
        {"key":"class","name":"剧情","value":[
{"n":"全部剧情","v":""},
{"n":"喜剧片","v":"喜剧"},
{"n":"爱情片","v":"爱情"},
{"n":"恐怖片","v":"恐怖"},
{"n":"奇幻片","v":"奇幻"},
{"n":"动作片","v":"动作"},
{"n":"冒险片","v":"冒险"},
{"n":"科幻片","v":"科幻"},
{"n":"剧情片","v":"剧情"},
{"n":"犯罪片","v":"犯罪"},
{"n":"战争片","v":"战争"},
{"n":"悬疑片","v":"悬疑"},
{"n":"灾难片","v":"灾难"}
    ]
    },

    {"key":"area","name":"地区","value":[
    {"n":"全部地区","v":""},
    {"n":"大陆","v":"大陆"},
    {"n":"香港","v":"香港"},
    {"n":"台湾","v":"台湾"},
    {"n":"美国","v":"美国"},
    {"n":"日本","v":"日本"},
    {"n":"韩国","v":"韩国"},
    {"n":"泰国","v":"泰马"},
    {"n":"俄罗斯","v":"俄罗斯"}
    ]
    },
    {"key":"year","name":"时间","value":[
    {"n":"全部时间","v":""},
    {"n":"2024","v":"2024"},
    {"n":"2023","v":"2023"},
    {"n":"2022","v":"2022"},
    {"n":"2021","v":"2021"},
    {"n":"2020","v":"2020"},
    {"n":"2019","v":"2019"},
    {"n":"2018","v":"2018"},
    {"n":"2017","v":"2017"},
    {"n":"2016","v":"2016"},
    {"n":"2015","v":"2015"},
    {"n":"2014","v":"2014"},
    {"n":"2013","v":"2013"},
    {"n":"2012","v":"2012"},
    {"n":"2011","v":"2011"},
    {"n":"2010","v":"2010"},
    {"n":"2009","v":"2009"},
    {"n":"2008","v":"2008"},
    {"n":"2007","v":"2007"}
    ]
    },
    {"key":"lang","name":"语言","value":[
    {"n":"全部语言","v":""},
    {"n":"国语","v":"国语"},
    {"n":"英语","v":"英语"},
    {"n":"粤语","v":"粤语"},
    {"n":"闽南语","v":"闽南语"},
    {"n":"韩语","v":"韩语"},
    {"n":"日语","v":"日语"},
    {"n":"法语","v":"法语"},
    {"n":"德语","v":"德语"},
    {"n":"其它","v":"其它"}
    ]
    },
        {"key":"letter","name":"字母","value":[
    {"n":"全部","v":""},
    {"n":"A","v":"A"},
    {"n":"B","v":"B"},
    {"n":"C","v":"C"},
    {"n":"D","v":"D"},
    {"n":"E","v":"E"},
    {"n":"F","v":"F"},
    {"n":"G","v":"G"},
    {"n":"H","v":"H"},
    {"n":"I","v":"I"},
    {"n":"J","v":"J"},
    {"n":"K","v":"K"},
    {"n":"L","v":"L"},
    {"n":"M","v":"M"},
    {"n":"N","v":"N"},
    {"n":"O","v":"O"},
    {"n":"P","v":"P"},
    {"n":"Q","v":"Q"},
    {"n":"R","v":"R"},
    {"n":"S","v":"S"},
    {"n":"T","v":"T"},
    {"n":"U","v":"U"},
    {"n":"V","v":"V"},
    {"n":"W","v":"W"},
    {"n":"X","v":"X"},
    {"n":"Y","v":"Y"},
    {"n":"Z","v":"Z"},
    {"n":"0-9","v":"0-9"}
    ]
    },
    {"key":"by","name":"排序","value":[
    {"n":"全部排序","v":""},
    {"n":"时间排序","v":"time"},
    {"n":"人气排序","v":"hits"},
    {"n":"评分排序","v":"score"}
    ]
    }
    ],
    "2":[
        {"key":"class","name":"剧情","value":[
{"n":"全部剧情","v":""},
{"n":"喜剧","v":"喜剧"},
{"n":"爱情","v":"爱情"},
{"n":"恐怖","v":"恐怖"},
{"n":"奇幻","v":"奇幻"},
{"n":"动作","v":"动作"},
{"n":"冒险","v":"冒险"},
{"n":"科幻","v":"科幻"},
{"n":"剧情","v":"剧情"},
{"n":"犯罪","v":"犯罪"},
{"n":"战争","v":"战争"},
{"n":"悬疑","v":"悬疑"},
{"n":"灾难","v":"灾难"}
    ]
    },

    {"key":"area","name":"地区","value":[
    {"n":"全部地区","v":""},
    {"n":"内地","v":"内地"},
    {"n":"香港","v":"香港"},
    {"n":"韩国","v":"韩国"},
    {"n":"香港","v":"香港"},
    {"n":"台湾","v":"台湾"},
    {"n":"日本","v":"日本"},
    {"n":"英国","v":"英国"},
    {"n":"泰国","v":"泰国"},
    {"n":"俄罗斯","v":"俄罗斯"}
    ]
    },
    {"key":"year","name":"时间","value":[
    {"n":"全部时间","v":""},
    {"n":"2024","v":"2024"},
    {"n":"2023","v":"2023"},
    {"n":"2022","v":"2022"},
    {"n":"2021","v":"2021"},
    {"n":"2020","v":"2020"},
    {"n":"2019","v":"2019"},
    {"n":"2018","v":"2018"},
    {"n":"2017","v":"2017"},
    {"n":"2016","v":"2016"},
    {"n":"2015","v":"2015"},
    {"n":"2014","v":"2014"},
    {"n":"2013","v":"2013"},
    {"n":"2012","v":"2012"},
    {"n":"2011","v":"2011"},
    {"n":"2010","v":"2010"},
    {"n":"2009","v":"2009"},
    {"n":"2008","v":"2008"},
    {"n":"2007","v":"2007"}
    ]
    },
    {"key":"lang","name":"语言","value":[
    {"n":"全部语言","v":""},
    {"n":"国语","v":"国语"},
    {"n":"英语","v":"英语"},
    {"n":"粤语","v":"粤语"},
    {"n":"闽南语","v":"闽南语"},
    {"n":"韩语","v":"韩语"},
    {"n":"日语","v":"日语"},
    {"n":"其它","v":"其它"}
    ]
    },
        {"key":"letter","name":"字母","value":[
    {"n":"全部","v":""},
    {"n":"A","v":"A"},
    {"n":"B","v":"B"},
    {"n":"C","v":"C"},
    {"n":"D","v":"D"},
    {"n":"E","v":"E"},
    {"n":"F","v":"F"},
    {"n":"G","v":"G"},
    {"n":"H","v":"H"},
    {"n":"I","v":"I"},
    {"n":"J","v":"J"},
    {"n":"K","v":"K"},
    {"n":"L","v":"L"},
    {"n":"M","v":"M"},
    {"n":"N","v":"N"},
    {"n":"O","v":"O"},
    {"n":"P","v":"P"},
    {"n":"Q","v":"Q"},
    {"n":"R","v":"R"},
    {"n":"S","v":"S"},
    {"n":"T","v":"T"},
    {"n":"U","v":"U"},
    {"n":"V","v":"V"},
    {"n":"W","v":"W"},
    {"n":"X","v":"X"},
    {"n":"Y","v":"Y"},
    {"n":"Z","v":"Z"},
    {"n":"0-9","v":"0-9"}
    ]
    },
    {"key":"by","name":"排序","value":[
    {"n":"全部排序","v":""},
    {"n":"时间排序","v":"time"},
    {"n":"人气排序","v":"hits"},
    {"n":"评分排序","v":"score"}
    ]
    }
    ],
    "3":[
        {"key":"class","name":"剧情","value":[
{"n":"全部剧情","v":""},
{"n":"选秀","v":"选秀"},
{"n":"情感","v":"情感"},
{"n":"访谈","v":"访谈"},
{"n":"旅游","v":"旅游"},
{"n":"音乐","v":"音乐"},
{"n":"曲艺","v":"曲艺"},
{"n":"求职","v":"求职"},
{"n":"纪实","v":"纪实"}
    ]
    },
    
    {"key":"area","name":"地区","value":[
    {"n":"全部地区","v":""},
    {"n":"内地","v":"内地"},
    {"n":"港台","v":"港台"},
    {"n":"日韩","v":"日韩"},
    {"n":"欧美","v":"欧美"}
    ]
    },
    {"key":"year","name":"时间","value":[
    {"n":"全部时间","v":""},
    {"n":"2024","v":"2024"},
    {"n":"2023","v":"2023"},
    {"n":"2022","v":"2022"},
    {"n":"2021","v":"2021"},
    {"n":"2020","v":"2020"},
    {"n":"2019","v":"2019"},
    {"n":"2018","v":"2018"},
    {"n":"2017","v":"2017"},
    {"n":"2016","v":"2016"},
    {"n":"2015","v":"2015"},
    {"n":"2014","v":"2014"},
    {"n":"2013","v":"2013"},
    {"n":"2012","v":"2012"},
    {"n":"2011","v":"2011"},
    {"n":"2010","v":"2010"},
    {"n":"2009","v":"2009"},
    {"n":"2008","v":"2008"},
    {"n":"2007","v":"2007"}
    ]
    },
    {"key":"lang","name":"语言","value":[
    {"n":"全部语言","v":""},
    {"n":"国语","v":"国语"},
    {"n":"英语","v":"英语"},
    {"n":"粤语","v":"粤语"},
    {"n":"闽南语","v":"闽南语"},
    {"n":"韩语","v":"韩语"},
    {"n":"日语","v":"日语"},
    {"n":"其它","v":"其它"}
    ]
    },
        {"key":"letter","name":"字母","value":[
    {"n":"全部","v":""},
    {"n":"A","v":"A"},
    {"n":"B","v":"B"},
    {"n":"C","v":"C"},
    {"n":"D","v":"D"},
    {"n":"E","v":"E"},
    {"n":"F","v":"F"},
    {"n":"G","v":"G"},
    {"n":"H","v":"H"},
    {"n":"I","v":"I"},
    {"n":"J","v":"J"},
    {"n":"K","v":"K"},
    {"n":"L","v":"L"},
    {"n":"M","v":"M"},
    {"n":"N","v":"N"},
    {"n":"O","v":"O"},
    {"n":"P","v":"P"},
    {"n":"Q","v":"Q"},
    {"n":"R","v":"R"},
    {"n":"S","v":"S"},
    {"n":"T","v":"T"},
    {"n":"U","v":"U"},
    {"n":"V","v":"V"},
    {"n":"W","v":"W"},
    {"n":"X","v":"X"},
    {"n":"Y","v":"Y"},
    {"n":"Z","v":"Z"},
    {"n":"0-9","v":"0-9"}
    ]
    },
    {"key":"by","name":"排序","value":[
    {"n":"全部排序","v":""},
    {"n":"时间排序","v":"time"},
    {"n":"人气排序","v":"hits"},
    {"n":"评分排序","v":"score"}
    ]
    }
    ],
    "4":[
        {"key":"class","name":"剧情","value":[
{"n":"全部剧情","v":""},
{"n":"喜剧","v":"喜剧"},
{"n":"奇幻","v":"奇幻"},
{"n":"动作","v":"动作"},
{"n":"冒险","v":"冒险"},
{"n":"剧情","v":"剧情"},
{"n":"科幻","v":"科幻"},
{"n":"动画","v":"动画"}
]
    },
        {"key":"year","name":"时间","value":[
    {"n":"全部时间","v":""},
    {"n":"2024","v":"2024"},
    {"n":"2023","v":"2023"},
    {"n":"2022","v":"2022"},
    {"n":"2021","v":"2021"},
    {"n":"2020","v":"2020"},
    {"n":"2019","v":"2019"},
    {"n":"2018","v":"2018"},
    {"n":"2017","v":"2017"},
    {"n":"2016","v":"2016"},
    {"n":"2015","v":"2015"},
    {"n":"2014","v":"2014"},
    {"n":"2013","v":"2013"},
    {"n":"2012","v":"2012"},
    {"n":"2011","v":"2011"},
    {"n":"2010","v":"2010"},
    {"n":"2009","v":"2009"},
    {"n":"2008","v":"2008"},
    {"n":"2007","v":"2007"}
    ]
    },
    {"key":"letter","name":"字母","value":[
    {"n":"全部","v":""},
    {"n":"A","v":"A"},
    {"n":"B","v":"B"},
    {"n":"C","v":"C"},
    {"n":"D","v":"D"},
    {"n":"E","v":"E"},
    {"n":"F","v":"F"},
    {"n":"G","v":"G"},
    {"n":"H","v":"H"},
    {"n":"I","v":"I"},
    {"n":"J","v":"J"},
    {"n":"K","v":"K"},
    {"n":"L","v":"L"},
    {"n":"M","v":"M"},
    {"n":"N","v":"N"},
    {"n":"O","v":"O"},
    {"n":"P","v":"P"},
    {"n":"Q","v":"Q"},
    {"n":"R","v":"R"},
    {"n":"S","v":"S"},
    {"n":"T","v":"T"},
    {"n":"U","v":"U"},
    {"n":"V","v":"V"},
    {"n":"W","v":"W"},
    {"n":"X","v":"X"},
    {"n":"Y","v":"Y"},
    {"n":"Z","v":"Z"},
    {"n":"0-9","v":"0-9"}
    ]
    },
    {"key":"by","name":"排序","value":[
    {"n":"全部排序","v":""},
    {"n":"时间排序","v":"time"},
    {"n":"人气排序","v":"hits"},
    {"n":"评分排序","v":"score"}]}]
	},
  
	filter_def:{
    	5:{cateId:'5'},
		1:{cateId:'1'},
		2:{cateId:'2'},
		3:{cateId:'3'},
		4:{cateId:'4'}
	},
    class_parse: '.navbar-items li:gt(1):lt(6);a&&Text;a&&href;.*/(.*?)/',

}