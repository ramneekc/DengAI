function initViz() {
    var containerDiv = document.getElementById("vizContainer"),
        url = "https://public.tableau.com/views/DengAi_Analysis/Sheet2?:display_count=y&:origin=viz_share_link";
    var viz = new tableau.Viz(containerDiv, url);

    var containerDiv2 = document.getElementById("vizContainer-2"),
        url2 = "https://public.tableau.com/views/DengAi_Analysis/Sheet14?:display_count=y&:origin=viz_share_link";
    var viz2 = new tableau.Viz(containerDiv2, url2);

    var containerDiv3 = document.getElementById("vizContainer-3"),
        url3 = "https://public.tableau.com/views/DengAi_Analysis/Sheet14?:display_count=y&:origin=viz_share_link";
    var viz3 = new tableau.Viz(containerDiv3, url3);

    var sheet = viz.getWorkbook().getActiveSheet();
    sheet.changeSizeAsync(
        { "behavior": "EXACTLY", "maxSize": { "height": 500, "width": 800 } })
        .then(viz.setFrameSize(parseInt(200, 10), parseInt(200, 10)));


    var sheet2 = viz2.getWorkbook().getActiveSheet();
    sheet2.changeSizeAsync(
        { "behavior": "EXACTLY", "maxSize": { "height": 500, "width": 800 } })
        .then(viz2.setFrameSize(parseInt(200, 10), parseInt(200, 10)));

    var sheet3 = viz3.getWorkbook().getActiveSheet();
    sheet3.changeSizeAsync(
        { "behavior": "EXACTLY", "maxSize": { "height": 500, "width": 800 } })
        .then(viz2.setFrameSize(parseInt(200, 10), parseInt(200, 10)));
}    