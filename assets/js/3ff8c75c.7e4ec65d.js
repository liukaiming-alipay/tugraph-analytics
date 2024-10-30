"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9704],{869:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>d,default:()=>o,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=s(4848),i=s(8453);const r={},d="from_unixtime",l={id:"application-development/dsl/build-in/date",title:"date",description:"GeaFlow support the following date function:",source:"@site/docs/docs-en/application-development/dsl/build-in/date.md",sourceDirName:"application-development/dsl/build-in",slug:"/application-development/dsl/build-in/date",permalink:"/tugraph-analytics/en/application-development/dsl/build-in/date",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"condition",permalink:"/tugraph-analytics/en/application-development/dsl/build-in/condition"},next:{title:"logical",permalink:"/tugraph-analytics/en/application-development/dsl/build-in/logical"}},a={},c=[];function h(n){const e={a:"a",code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:"GeaFlow support the following date function:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"#from_unixtime",children:"from_unixtime"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"#from_unixtime_millis",children:"from_unixtime_millis"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"#unix_timestamp",children:"unix_timestamp"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"#unix_timestamp_millis",children:"unix_timestamp_millis"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"#isdate",children:"isdate"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"#now",children:"now"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"#day",children:"day"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"#weekday",children:"weekday"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"#lastday",children:"lastday"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"#day_of_month",children:"day_of_month"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"#week_of_year",children:"week_of_year"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"#date_add",children:"date_add"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"#date_sub",children:"date_sub"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"#date_diff",children:"date_diff"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"#add_months",children:"add_months"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"#date_format",children:"date_format"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"#date_part",children:"date_part"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"#date_trunc",children:"date_trunc"})}),"\n"]}),"\n",(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"from_unixtime",children:"from_unixtime"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Syntax"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"string from_unixtime(int unixtime)\nstring from_unixtime(long unixtime)\nstring from_unixtime(int unixtime, string format)\nstring from_unixtime(long unixtime, string format)\nstring from_unixtime(string unixtime, string format)\n"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Description"}),'\nTranslate unix timestamp to the format time. The default format is "yyyy-MM-dd HH:mm:ss". Return Null if any of the input is null.']}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"from_unixtime(11111111) = '1970-05-09 22:25:11'\nfrom_unixtime(11111111, 'yyyy-MM-dd HH:mm:ss.SSSSSS') = '1970-05-09 22:25:11.000000'\n"})}),"\n",(0,t.jsx)(e.h1,{id:"from_unixtime_millis",children:"from_unixtime_millis"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Syntax"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"string from_unixtime_millis(int unixtime)\nstring from_unixtime_millis(long unixtime)\nstring from_unixtime_millis(string unixtime)\nstring from_unixtime_millis(int unixtime, string format)\nstring from_unixtime_millis(long unixtime, string format)\n"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Description"}),'\nTranslate unix millis timestamp to the format time. The default format is "yyyy-MM-dd HH:mm:ss.SSS". Return Null if any of the input is null.\n',(0,t.jsx)(e.strong,{children:"Example"})]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"from_unixtime_millis(11111111) = '1970-01-01 11:05:11.111'\nfrom_unixtime_millis(11111111, 'yyyy-MM-dd HH:mm:ss') = '1970-01-01 11:05:11'\nfrom_unixtime_millis(11111111, 'yyyy-MM-dd HH:mm:ss.SSSSSS') = '1970-01-01 11:05:11.111000'\n"})}),"\n",(0,t.jsx)(e.h1,{id:"unix_timestamp",children:"unix_timestamp"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Syntax"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"long unix_timestamp()\nlong unix_timestamp(string dateText)\nlong unix_timestamp(string dateText, string patternText)\n"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Description"}),'\nReturn Unix timestamp. If no argument is provided, return the current timestamp. If dateText is given, return the corresponding timestamp. When the format patternText is not specified, parse dateText using the default formats "yyyy-MM-dd", "yyyy-MM-dd HH:mm:ss" or "yyyy-MM-dd HH:mm:ss.SSSSSS". Return Null if any of the input is null.']}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"unix_timestamp('1987-06-05 00:11:22') = 549817882\nunix_timestamp('1987-06-05 00:11', 'yyyy-MM-dd HH:mm') = 549817860\n"})}),"\n",(0,t.jsx)(e.h1,{id:"unix_timestamp_millis",children:"unix_timestamp_millis"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Syntax"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"long unix_timestamp_millis()\nlong unix_timestamp_millis(string dateText)\nlong unix_timestamp_millis(string dateText, string patternText)\n"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Description"}),"\nReturn Unix millis timestamp. Similar to the function ",(0,t.jsx)(e.strong,{children:"unix_timestamp"}),".\n",(0,t.jsx)(e.strong,{children:"Example"})]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"unix_timestamp_millis('1987-06-05 00:11:22') = 549817882000\nunix_timestamp_millis('1987-06-05', 'yyyy-mm-dd') = 536774760000\n"})}),"\n",(0,t.jsx)(e.h1,{id:"isdate",children:"isdate"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Syntax"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"boolean isdate(string date)\nboolean isdate(string date, string format)\n"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Description"}),'\nReturns whether string is a date of the format. The default format is "yyyy-MM-dd HH:mm:ss". Return false if any of the input is null.']}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"isdate('1987-06-05 00:11:22') = true\nisdate('xxxxxxxxxxxxx') = false\nisdate('1987-06-05 00:11:22', 'yyyy-MM-dd HH:mm:ss.SSSSSS') = false\n"})}),"\n",(0,t.jsx)(e.h1,{id:"now",children:"now"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Syntax"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"long now()\nlong now(int offset)\nlong now(long offset)\n"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Description"}),"\nReturns the current timestamp with an optional offset."]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"now()\nnow(1000)\n"})}),"\n",(0,t.jsx)(e.h1,{id:"day",children:"day"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Syntax"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"int day(string dateString)\n"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Description"}),'\nReturns the day of date. The default format is "yyyy-MM-dd" or "yyyy-MM-dd HH:mm:ss". Return null if any of the input is null.']}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"day('1987-06-05 00:11:22') = 5\n"})}),"\n",(0,t.jsx)(e.h1,{id:"weekday",children:"weekday"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Syntax"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"int weekday(string dateString)\n"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Description"}),'\nReturns the weekday of date. The default format is "yyyy-MM-dd" or "yyyy-MM-dd HH:mm:ss". Return null if any of the input is null.']}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"weekday('1987-06-05 00:11:22') = 5\n"})}),"\n",(0,t.jsx)(e.h1,{id:"lastday",children:"lastday"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Syntax"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"string lastday(string dateString)\n"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Description"}),'\nReturns the last day of the month which the date belongs to. The default format is "yyyy-MM-dd" or "yyyy-MM-dd HH:mm:ss". Return null if any of the input is null.']}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"lastday('1987-06-05') = '1987-06-30 00:00:00'\n"})}),"\n",(0,t.jsx)(e.h1,{id:"day_of_month",children:"day_of_month"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Syntax"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"int day_of_month(string dateString)\n"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Description"}),'\nReturns the date of the month of date. The default format is "yyyy-MM-dd" or "yyyy-MM-dd HH:mm:ss". Return null if any of the input is null.']}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"day_of_month('1987-06-05 00:11:22') = 5\n"})}),"\n",(0,t.jsx)(e.h1,{id:"week_of_year",children:"week_of_year"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Syntax"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"int week_of_year(string dateString)\n"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Description"}),'\nReturns the week of the year of the given date. The default format is "yyyy-MM-dd" or "yyyy-MM-dd HH:mm:ss". Return null if any of the input is null.']}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"week_of_year('1987-06-05 00:11:22') = 23\n"})}),"\n",(0,t.jsx)(e.h1,{id:"date_add",children:"date_add"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Syntax"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"string date_add(string date, int days)\n"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Description"}),'\nAdd a number of days to the specified date. The default format is "yyyy-MM-dd" or "yyyy-MM-dd HH:mm:ss". Return Null if any of the input is null.']}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"date_add('2017-09-25 10:00:00', 1) = '2017-09-26'\ndate_add('2017-09-25', 1) = '2017-09-26'\ndate_add('2017-09-25', -1) = '2017-09-24'\n"})}),"\n",(0,t.jsx)(e.h1,{id:"date_sub",children:"date_sub"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Syntax"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"string date_sub(string date, int days)\n"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Description"}),'\nSub a number of days to the specified date. The default format is "yyyy-MM-dd" or "yyyy-MM-dd HH:mm:ss". Return Null if any of the input is null.']}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"date_sub('2017-09-25 10:00:00', 1) = '2017-09-24'\ndate_sub('2017-09-25', 1) = '2017-09-24'\ndate_sub('2017-09-25', -1) = '2017-09-26'\n"})}),"\n",(0,t.jsx)(e.h1,{id:"date_diff",children:"date_diff"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Syntax"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"int date_diff(string dateString1, string dateString2)\n"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Description"}),'\nReturns the number of days from dateString2 to dateString1. The default format is "yyyy-MM-dd" or "yyyy-MM-dd HH:mm:ss". Return Null if any of the input is null.']}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"date_diff('2017-09-26', '2017-09-25') = 1\ndate_diff('2017-09-24', '2017-09-25') = -1\n"})}),"\n",(0,t.jsx)(e.h1,{id:"add_months",children:"add_months"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Syntax"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"string add_months(string date, int months)\n"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Description"}),'\nAdd a number of months to the specified date. The default format is "yyyy-MM-dd" or "yyyy-MM-dd HH:mm:ss". Return Null if any of the input is null.']}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"add_months('2017-09-25 10:00:00', 1) = '2017-10-25 10:00:00'\nadd_months('2017-09-25', 1) = '2017-10-25'\nadd_months('2017-09-25', -1) = '2017-08-25'\n"})}),"\n",(0,t.jsx)(e.h1,{id:"date_format",children:"date_format"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Syntax"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"string date_format(string dateText)\nstring date_format(string dateText, string toFormat)\nstring date_format(string dateText, string fromFormat, string toFormat)\n"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Description"}),"\nReturns convert the date from a format to another. The default ",(0,t.jsx)(e.strong,{children:"fromFormat"}),' is "yyyy-MM-dd HH:mm:ss" or "yyyy-MM-dd HH:mm:ss.SSSSSS", and the default ',(0,t.jsx)(e.strong,{children:"toFormat"}),' is "yyyy-MM-dd HH:mm:ss". Return Null if any of the input is null.']}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"date_format('1987-06-05 00:11:22') = '1987-06-05 00:11:22'\ndate_format('1987-06-05 00:11:22', 'MM-dd-yyyy') = '06-05-1987'\ndate_format('00:11:22 1987-06-05', 'HH:mm:ss yyyy-MM-dd', 'MM-dd-yyyy') = '06-05-1987'\n"})}),"\n",(0,t.jsx)(e.h1,{id:"date_part",children:"date_part"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Syntax"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"int date_part(string dateText, string datePart)\n"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Description"}),'\nReturns part of the date by date part format. The default date format is "yyyy-MM-dd HH:mm:ss" or "yyyy-MM-dd". Return Null if any of the input is null. The datePart format is as shown in the table below.']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Select"}),(0,t.jsx)(e.th,{children:"datePart"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"YEAR"}),(0,t.jsx)(e.td,{children:"yyyy, year"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"MONTH"}),(0,t.jsx)(e.td,{children:"mm, mon, month"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"DAY_OF_MONTH"}),(0,t.jsx)(e.td,{children:"dd, day"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"HOUR_OF_DAY"}),(0,t.jsx)(e.td,{children:"hh, hour"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"MINUTE"}),(0,t.jsx)(e.td,{children:"mi, minute"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"SECOND"}),(0,t.jsx)(e.td,{children:"ss, second"})]})]})]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"date_part('1987-06-05 00:11:22', 'yyyy') = 1987\ndate_part('1987-06-05 00:11:22', 'mm') = 6\ndate_part('1987-06-05 00:11:22', 'dd') = 5\ndate_part('1987-06-05 00:11:22', 'hh') = 0\ndate_part('1987-06-05 00:11:22', 'mi') = 11\ndate_part('1987-06-05 00:11:22', 'ss') = 22\ndate_part('1987-06-05', 'ss') = 0\n"})}),"\n",(0,t.jsx)(e.h1,{id:"date_trunc",children:"date_trunc"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Syntax"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"string date_trunc(string dateText, string datePart)\n"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Description"}),'\nReturns date truncated to the unit specified by the format. The default date format is "yyyy-MM-dd HH:mm:ss" or "yyyy-MM-dd". Return Null if any of the input is null. The datePart format is the same as the function ',(0,t.jsx)(e.strong,{children:"date_part"}),"."]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"date_trunc('1987-06-05 00:11:22', 'yyyy') = '1987-01-01 00:00:00'\ndate_trunc('1987-06-05 00:11:22', 'mm') = '1987-06-01 00:00:00'\ndate_trunc('1987-06-05 00:11:22', 'dd') = '1987-06-05 00:00:00'\ndate_trunc('1987-06-05 00:11:22', 'hh') = '1987-06-05 00:00:00'\ndate_trunc('1987-06-05 00:11:22', 'mi') = '1987-06-05 00:11:00'\ndate_trunc('1987-06-05 00:11:22', 'ss') = '1987-06-05 00:11:22'\ndate_trunc('1987-06-05', 'ss') = '1987-01-01 00:00:00'\n"})})]})}function o(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>d,x:()=>l});var t=s(6540);const i={},r=t.createContext(i);function d(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:d(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);