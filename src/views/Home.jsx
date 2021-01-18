import React, { Component } from 'react';
import '../assets/fonts/style.css';
import './Home.css';
import SectionTitleComponent from './Components/SectionTitleComponent/SectionTitleComponent';
import HeaderComponent from './Components/HeaderComponent/HeaderComponent';
import SymptomsComponent from './Components/SymptomsComponent/SymptomsComponent';
import PreventionComponent from './Components/PreventionComponent/PreventionComponent';
import SortButtonComponent from './Components/SortButtonComponent/SortButtonComponent';

class Home extends Component {

    // Array of symptoms data
    symptomsEntries = [
        {
            url: "./assets/images/symptom-breath.jpg",
            description: "Difficult to Breath",
        },
        {
            url: "./assets/images/symptom-chills.jpg",
            description: "Chills",
        },
        {
            url: "./assets/images/symptom-cough.jpg",
            description: "Cough",
        },
        {
            url: "./assets/images/symptom-diarrhea.jpg",
            description: "Diarrhea",
        },
        {
            url: "./assets/images/symptom-fever.jpg",
            description: "Fever",
        },
        {
            url: "./assets/images/symptom-loss.jpg",
            description: "Loss of Taste or Smell",
        },
        {
            url: "./assets/images/symptom-muscle.jpg",
            description: "Muscle or Body Aches",
        },
        {
            url: "./assets/images/symptom-vomit.jpg",
            description: "Vomiting",
        },]

    // Array of prevention data for first row
    preventionFirstEntries = [
        {
            url: "./assets/images/preventing-touch.jpg",
            title: "Don't Touch Your Face",
            description: "Do not touch your eyes, nose, and mouth.",
        },

        {
            url: "./assets/images/preventing-disinfect.jpg",
            title: "Disinfect Belongings",
            description: "Clean and disinfect frequently touched objects and surfaces.",
        },

        {
            url: "./assets/images/preventing-distance.jpg",
            title: "Social Distancing",
            description: "Stay at least 6 feet (about 2 arm lengths) from other people.",
        },

        {
            url: "./assets/images/preventing-mask.jpg",
            title: "Wear Mask",
            description: "Wear a mask over your nose and mouth in public.",
        },]

    // Array of prevention data for second row
    preventionSecondEntries = [
        {
            url: "./assets/images/preventing-cough.jpg",
            title: "Cover Your Cough",
            description: "Cover your cough or sneeze with tissue, then throw the tissue in the trash and wash your hands.",
        },

        {
            url: "./assets/images/preventing-wash.jpg",
            title: "Wash Your Hands",
            description: "Wash your hands often with soap and water for at least 20 seconds.",
        },

        {
            url: "./assets/images/preventing-wfh.jpg",
            title: "Stay at Home",
            description: "Stay at home and work from home, especially when you are sick. Except to get medical care.",
        },]

    constructor(props) {
        super(props);
        this.state = {
            confirmed: "Calculating...",
            recovered: "Calculating...",
            deaths: "Calculating...",
            covidData: [],
            sortedByConfirmed: true,
            sortedByRecovered: false,
            sortedByDeaths: false,
        }
    }

    /**
     * Function to sort table in Top 10 Section
     * @param sortBy : confirmed, recovered, or deaths
     */
    sortTable = ( sortBy ) => {
        let sorted;
        if (sortBy == "confirmed") {
            sorted = this.state.covidData.sort(function (a, b) {
                return parseInt(b.confirmed) - parseInt(a.confirmed);
            })
            this.setState({
                sortedByConfirmed: true,
                sortedByRecovered: false,
                sortedByDeaths: false,
            })
        }
        else if (sortBy == "recovered") {
            sorted = this.state.covidData.sort(function (a, b) {
                return parseInt(b.recovered) - parseInt(a.recovered);
            })
            this.setState({
                sortedByConfirmed: false,
                sortedByRecovered: true,
                sortedByDeaths: false,
            })
        }
        else {
            sorted = this.state.covidData.sort(function (a, b) {
                return parseInt(b.deaths) - parseInt(a.deaths);
            })
            this.setState({
                sortedByConfirmed: false,
                sortedByRecovered: false,
                sortedByDeaths: true,
            })
        }
        this.setState({
            covidData: sorted,
        })
    }

    componentDidMount() {
        // Get json from API
        fetch("https://covid-api.mmediagroup.fr/v1/cases?continent=Asia")
            .then(response => response.json())
            .then(json => {
                let confirmedSum = 0;
                let recoveredSum = 0;
                let deathsSum = 0;
                let temp_sort = [];
                for (const country in json) {
                    const element = json[country];
                    // Sum confirmed, recovered, and death cases for each country
                    if (element.hasOwnProperty("All")) {
                        confirmedSum += element["All"]["confirmed"];
                        recoveredSum += element["All"]["recovered"];
                        deathsSum += element["All"]["deaths"];
                    }
                    // Push the confirmed, recovered, and death cases that has been summed before
                    temp_sort.push({
                        countryName: country,
                        confirmed: element["All"]["confirmed"],
                        recovered: element["All"]["recovered"],
                        deaths: element["All"]["deaths"],
                    })
                }

                this.setState({
                    confirmed: confirmedSum,
                    recovered: recoveredSum,
                    deaths: deathsSum,
                    covidData: temp_sort,
                })

                // Default sort: sort by most cases
                this.sortTable("confirmed");

            })
    }

    render() {
        return (
            <div id="main-page" className="container-fluid">
                <HeaderComponent />
                {/* Total Cases in Asia Section */}
                <div id="home" className="section-odd py-5">
                    <SectionTitleComponent section_title="Total Cases in Asia" />
                    <div id="home-row" className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-5 confirmed-text">
                                    <h1>Confirmed</h1>
                                </div>
                                <div className="col-lg-6 col-md-6 col-7 confirmed-text">
                                    <h1>: {this.state.confirmed}</h1>
                                </div>
                                <div className="col-lg-6 col-md-6 col-5 recovered-text">
                                    <h1>Recovered</h1>
                                </div>
                                <div className="col-lg-6 col-md-6 col-7 recovered-text">
                                    <h1>: {this.state.recovered}</h1>
                                </div>
                                <div className="col-lg-6 col-md-6 col-5 deaths-text">
                                    <h1>Deaths</h1>
                                </div>
                                <div className="col-lg-6 col-md-6 col-7  deaths-text">
                                    <h1>: {this.state.deaths}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <img id="asia-map" src={'./assets/images/asia-map.jpg'}
                                className="fade-in" alt="World Map (Asia)" />
                        </div>
                    </div>
                </div>
                {/* Top 10 Countries Section */}
                <div id="top-10" className="section-even py-5">
                    <SectionTitleComponent section_title="Top 10 Countries with Highest COVID-19 Cases" />
                    <div className="row default-margin">
                        <div className="col-lg-6 col-md-8 col-sm-12 table-responsive">
                            <table id="covid-table" className="table table-hover table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col" className="text-center">#</th>
                                        <th scope="col">Country</th>
                                        <th scope="col" className="text-center confirmed-col">Confirmed</th>
                                        <th scope="col" className="text-center recovered-col">Recovered</th>
                                        <th scope="col" className="text-center deaths-col">Deaths</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.covidData.slice(0, 10).map((value, index) => (
                                        <tr key={`tbody-row-${index}`} className={(index + 1) % 2 == 0 ? 'even-row' : 'odd-row'}>
                                            <th scope="row" className="text-center">{index + 1}</th>
                                            <td>{value.countryName}</td>
                                            <td className="text-center">{value.confirmed}</td>
                                            <td className="text-center recovered-col">{value.recovered}</td>
                                            <td className="text-center deaths-col">{value.deaths}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="col-lg-6 col-md-4 col-sm-12 center-aligned">
                            <div className="row">
                                <h3 id="sort-table-text">Sort table by :</h3>
                                <div className="col-12">
                                    <SortButtonComponent sort_by_text="Most Cases"
                                        onclick_sort_btn={() => this.sortTable("confirmed")}
                                        is_disabled={this.state.sortedByConfirmed}
                                        background_color_button="lightgrey" />
                                </div>
                                <div className="col-12">
                                    <SortButtonComponent sort_by_text="Most Recovered"
                                        onclick_sort_btn={() => this.sortTable("recovered")}
                                        is_disabled={this.state.sortedByRecovered}
                                        background_color_button="lightgreen" />
                                </div>
                                <div className="col-12">
                                    <SortButtonComponent sort_by_text="Most Deaths"
                                        onclick_sort_btn={() => this.sortTable("deaths")}
                                        is_disabled={this.state.sortedByDeaths}
                                        background_color_button="lightcoral" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Prevention Section */}
                <div id="prevention" className="section-odd py-5" style={{ height: "auto" }}>
                    <SectionTitleComponent section_title="How to Prevent COVID-19" />
                    <div className="row default-margin">
                        {this.preventionFirstEntries.map((value, index) => (
                            <div key={`prevention-first-row-${index}`} className="col-lg-3 col-md-6 col-sm-12">
                                <PreventionComponent prevention_image_url={value.url}
                                    card_title={value.title} card_description={value.description} />
                            </div>
                        ))}
                    </div>
                    <div className="row prevention-second-row">
                        {this.preventionSecondEntries.map((value, index) => (
                            <div key={`prevention-second-row-${index}`} className="col-lg-4 col-md-6 col-sm-12">
                                <PreventionComponent prevention_image_url={value.url}
                                    card_title={value.title} card_description={value.description} />
                            </div>
                        ))}
                    </div>
                </div>
                {/* Symptoms Section */}
                <div id="symptoms" className="section-even py-5">
                    <SectionTitleComponent section_title="COVID-19 Symptoms" />
                    <div id="symptoms-row" className="row">
                        {this.symptomsEntries.map((value, index) => (
                            <SymptomsComponent key={`symptom-item-${index}`} symptom_image_url={value.url} symptom_description={value.description} />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;