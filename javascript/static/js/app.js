//load data into from .json file
let url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

//create drop down menu, which sets which id will be seen in dashboard
function init() {
    var dropdown_id = d3.select("#selDataset")
    d3.json(url).then((data) =>
{
    console.log(data)
    var sample_names = data.names; 
    sample_names.forEach((sample) => {
        dropdown_id.append("option")
        .text(sample)
        .property("value", sample);
    }); 
    var first_sample = sample_names[0]; 
    optionChanged(first_sample)

}); 
}


//these lines of code was used in multiple future functions, so we just created a function to be called
function get_subject_data(data, subject_id) {
    let all_samples = data.samples;
    let matching_samples = all_samples.filter(object => object.id == subject_id); 
    let result = matching_samples[0];
    return result; 
}


//create bar graph
function bar_graph(subject_id) {
    d3.json(url).then((data) => {

        let result = get_subject_data(data, subject_id); 

        let otu_ids = result.otu_ids;
        let sample_values = result.sample_values; 
        let otu_labels = result.otu_labels;

        let y_labels = otu_ids.slice(0, 10).map(otu_id => `OTU ${otu_id}`).reverse()
        let trace1 = {
            x: sample_values.slice(0, 10).reverse(), 
            y: y_labels, 
            text: otu_labels.slice(0, 10).reverse(), 
            type: "bar", 
            orientation: "h"          
        };
          


          
          let layout = {
            title: "Top 10 Bacteria", 
            margin: {t: 30, l: 150}
          };
          

          Plotly.newPlot("bar", [trace1], layout);


    }); 


}



//create bubble chart
function bubble_chart(subject_id) {

    d3.json(url).then((data) => {
        let result = get_subject_data(data, subject_id); 

        let otu_ids = result.otu_ids;
        let sample_values = result.sample_values; 
        let otu_labels = result.otu_labels;



        var trace1 = {
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: 'markers',
            marker: {
                size: sample_values, 
                colorscale: "Earth", 
                color: otu_ids
            }
        };
        
        
        var layout = {
            title: 'Bacteria Counts',
            showlegend: false,
        };
        
        Plotly.newPlot('bubble', [trace1], layout);
    }); 
}



//create demo box w/ info about subject
function demo_box(subject_id) {
    d3.json(url).then((data) => {
  
        let all_metadata = data.metadata;
        let subject_metadata = all_metadata.filter(object => object.id == subject_id)[0];

        let demo_panel = d3.select("#sample-metadata");
        demo_panel.html("");


        for (const key in subject_metadata) {

            demo_panel.append("h6").text(`${key}: ${subject_metadata[key]}`); 
        
          }



    }); 
}



//call all of them into a new function called optionChanged which is used in .html file
function optionChanged(subject_id) {
    bar_graph(subject_id);
    bubble_chart(subject_id);
    demo_box(subject_id); 

}

//finally call the init function to get the ball rolling on the html browser. 
init()











