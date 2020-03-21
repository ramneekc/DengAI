function initViz() {
    var containerDiv = document.getElementById("vizContainer"),
    url = "https://public.tableau.com/views/DengAi_Analysis/Story1?:display_count=y&:origin=viz_share_link";
    var viz = new tableau.Viz(containerDiv, url);

    var containerDiv2 = document.getElementById("vizContainer-2"),
    url2 = "https://public.tableau.com/views/DengAi_Analysis/Story2?:display_count=y&:origin=viz_share_link";
    var viz = new tableau.Viz(containerDiv2, url2);
}