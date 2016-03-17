EJ Global
============

Complements Syncfusion's Essential Studio for JavaScript with language packs for 
the localization of all EJ widgets.

Essential Studio for JavaScript
========

Essential Studio for JavaScript is a fantastic HTML 5 framework and component suite 
for developing cross-browser/device applications. It's based on the JavaScript 
language and has helpers for ASP.NET MVC and ASP.NET Webforms to make the life easier 
for .NET developers.

Unfortunately EJ widgets are provided without any form of localization,
except for culture-based number and date formats, so all widgets are rendered 
in plain, good, old English.

Enter EJ Global...

How
===

Simply add a reference to the desired language file after including the EJ
JavaScript files and all widgets will assume that file's language. Something
like this: 

    <script src="https://cdn.syncfusion.com/13.4.0.53/js/web/ej.web.all.min.js"></script>
	<script src="js/lang/ej.localetexts.fr-FR.js"></script>
    
**Note**: The JS files are encoded in UTF-8 so your page should also be enconded
in a compatible charset or else the special characters will look as garbage.
The demos set the correct charset as shown bellow:

    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8"> 
        ...   

Why
===

EJ widgets use locale text options inside the source code to define the 
many text messages and labels that will be used to render their parts. These 
options aren't available in the global context for easy overriding. These options
can be passed on a per-widget manner to change the texts used for that specific 
widget. Each widget will require a whole set of textual options in a specific 
language as shown below:

    toolboxTooltipTexts: {
        addTool: "إضافة",
        editTool: "تحرير",
        saveTool: "تحديث",
        deleteTool: "حذف",
        cancelTool: "إلغاء",
        searchTool: "بحث",
        indentTool: "المسافة البادئة",
        outdentTool: "تحريك إلى مستوى أعلى",
        expandAllTool: "توسيع جميع",
        collapseAllTool: "طي الكل",
        nextTimeSpanTool: "المدى الزمني المقبل",
        prevTimeSpanTool: "المدى الزمني السابق"
    },
    durationUnitTexts: {
        days: "أيام",
        hours: "ساعات",
        minutes: "دقيقة"
    },
    contextMenuTexts: {
        taskDetailsText: "تفاصيل مهمة ...",
        addNewTaskText: "إضافة مهمة جديدة",
        indentText: "المسافة البادئة",
        outdentText: "تحريك إلى مستوى أعلى",
        deleteText: "حذف",
        aboveText: "فوق",
        belowText: "أدناه"
    }
    ...

We capitalize on JavaScript nature and override these options at the prototype 
level, without breaking any functionality and still allowing individual overrides 
for specific keys or strings with passing individual options.      

Contributions are welcome
=========================

Currently there are 27 language packs (and growing). We are accepting any and 
all pull requests for corrections and new languages (and also email submissions)

To get started just open any of the files and save a copy of it named after the 
desired language's 2 or 4 character code and start translating it! 

Currently proposed cultures
===========================

| Culture-Code | Language                       |
| ------------ | ------------------------------ |
| ar-AE        | Arabic - United Arab Emirates  |
| cs-CZ        | Czech - Czech Republic         |
| da-DK        | Danish - Denmark               |
| de-DE        | German - Germany               |
| en-US        | English - United States        |
| es-ES        | Spanish - Spain                |
| fa-IR        | Farsi - Iran                   |
| fi-FI        | Finnish - Finland              |
| fr-FR        | French - France                |
| he-IL        | Hebrew - Israel                |
| hr-HR        | Croatian - Croatia             |
| hu-HU        | Hungarian - Hungary            |
| it-IT        | Italian - Italy                |
| ja-JP        | Japanese - Japan               |
| ko-KR        | Korean - Korea                 |
| ms-MY        | Malay - Malaysia               |
| nb-NO        | Norwegian (Bokmål) - Norway    |
| nl-NL        | Dutch - The Netherlands        |
| pl-PL        | Polish - Poland                |
| pt-PT        | Portuguese - Portugal          |
| ro-RO        | Romanian - Romania             |
| ru-RU        | Russian - Russia               |
| sk-SK        | Slovak - Slovakia              |
| sv-SE        | Swedish - Sweden               |
| tr-TR        | Turkish - Turkey               |
| vi-VN        | Vietnamese - Vietnam           |
| zh-CN        | Chinese - China                |

