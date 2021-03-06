import React, { Component } from 'react';
import $ from "jquery";
import Header from './header';
import Footer from './footer';
import "../css/bootstrap.min.css"
import "../css/style.css";
import "../css/index.css";
import Axios from "axios";

class Index extends Component {
    state = {

    }

    async componentDidMount() {
        var url = `http://localhost:8000/restaurant/${this.props.match.params.category}`;
        var result = await Axios.get(url);
        this.state.Restaurant = result.data;
        console.log(result.data);
        this.setState({});
    }

    async componentDidMount() {
        var url = `http://localhost:8000/search/${this.props.match.params.keyword}`;
        var result = await Axios.get(url);
        this.state.Restaurant = result.data;
        console.log(result.data);
        this.setState({});
    }

    search = () => {
        let search_a = document.getElementById("search_a");
        let keyword = document.getElementById("keyword").value;
        let area = document.getElementById("area_label").innerText;
        let chk = document.getElementsByClassName("chk_chk");
        let chk_chk = [];
        for (let i = 0; i < chk.length; i++) {
            if (chk[i].checked === true) {
                chk_chk.push(chk[i].defaultValue);
            }
        }

        if (area.length === 3 && chk_chk.length > 0) {
            search_a.setAttribute("herf", `/restaurant/list/search/${area}/${chk_chk}`);
            var result = search_a.getAttribute("herf");
            window.location.href = result;
        }
        else if (area.length === 3) {
            search_a.setAttribute("herf", `/restaurant/list/area/${area}`);
            var result = search_a.getAttribute("herf");
            window.location.href = result;
        } else if (keyword.length !== 0) {
            search_a.setAttribute("herf", `/restaurant/list/keyword/${keyword}`);
            var result = search_a.getAttribute("herf");
            window.location.href = result;
        } else if (chk_chk) {
            search_a.setAttribute("herf", `/restaurant/list/service/${chk_chk[0]}`);
            var result = search_a.getAttribute("herf");
            window.location.href = result;
        }
    }

    open_tab = (tab_name) => {
        let tab_div = document.getElementsByClassName("mobile_tab_div");
        for (let i = 0; i < tab_div.length; i++) {
            tab_div[i].style.display = "none";
        }
        document.getElementById(tab_name).style.display = "block";
    }

    componentDidMount() {

        // ????????????
        $(".dropdown_label").click(function (e) {
            e.preventDefault();
            $(this).parent().find(".dropdown_div").slideToggle();
            $(this).parent().siblings().find(".dropdown_div").slideUp();
        });
        // ?????????????????????
        $(".mobile_dropdown_label").click(function (e) {
            e.preventDefault();
            $(this).parent().find(".mobile_dropdown_div").slideToggle();
            $(this).parent().siblings().find(".mobile_dropdown_div").slideUp();
        });
        // ????????????
        $(".tab_close,.chk_close").click(function () {
            $(".dropdown_div").slideUp();
        });
        // ???????????????
        $(".search_mobile_div").click(function () {
            $(".mobile_div").css("display", "unset");
        });
        // ????????????
        $(".turn_off").click(function () {
            $(".mobile_div").css("display", "none");
        });

        $(".mobile_tab_content span").click(function () {
            var text = $(this).text();
            $(".area_label").html(`<i class="fas fa-map-marker-alt"></i>${text}`);
        });

        $(".tab_content span").click(function () {
            var text = $(this).text();
            $(".area_label").html(`<i class="fas fa-map-marker-alt"></i>${text}`);
        });


        // ????????????:?????????????????????
        $(".ontop_btn").click(function () {
            $("html,body").animate({ scrollTop: 0 }, 300);
        });

        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
                $(".ontop_btn").fadeIn(100);
            } else {
                $(".ontop_btn").stop().fadeOut(100);
            }
        });
    }






    render() {
        return (
            <React.Fragment>
                <header className="header_page">
                    <Header />
                </header>
                <section id="search_box">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="search_div">
                                    <input className="search_keyword" id="keyword" name="keyword" type="text" placeholder="????????????????????????" />
                                    <div className="area_div">
                                        <input type="checkbox" className="area_btn" id="area_btn" />
                                        <label onClick={this.area_btn_click} htmlFor="area_btn" id="area_label" className="area_label dropdown_label"><i className="fas fa-map-marker-alt"></i>???????????????<i
                                            className="fas fa-sort-down"></i></label>

                                        <div className="tab_div dropdown_div">
                                            <div className="tab_css">

                                                <input id="tab1" type="radio" name="tab" />
                                                <label htmlFor="tab1">??????</label>
                                                <ul className="tab_content">
                                                    <li data-value="?????????">
                                                        <span>?????????</span>
                                                    </li>
                                                    <li data-value="?????????">
                                                        <span>?????????</span>
                                                    </li>
                                                    <li data-value="?????????">
                                                        <span>?????????</span>
                                                    </li>
                                                    <li data-value="?????????">
                                                        <span>?????????</span>
                                                    </li>
                                                    <li data-value="?????????">
                                                        <span>?????????</span>
                                                    </li>
                                                    <li data-value="?????????">
                                                        <span>?????????</span>
                                                    </li>
                                                </ul>

                                                <input id="tab2" type="radio" name="tab" />
                                                <label htmlFor="tab2">??????</label>
                                                <ul className="tab_content">
                                                    <li data-value="?????????">
                                                        <span>?????????</span>
                                                    </li>
                                                    <li data-value="?????????">
                                                        <span>?????????</span>
                                                    </li>
                                                    <li data-value="?????????">
                                                        <span>?????????</span>
                                                    </li>
                                                    <li data-value="?????????">
                                                        <span>?????????</span>
                                                    </li>
                                                    <li data-value="?????????">
                                                        <span>?????????</span>
                                                    </li>
                                                </ul>

                                                <input id="tab3" type="radio" name="tab" />
                                                <label htmlFor="tab3">??????</label>
                                                <ul className="tab_content">
                                                    <li data-value="?????????">
                                                        <span>?????????</span>
                                                    </li>
                                                    <li data-value="?????????">
                                                        <span>?????????</span>
                                                    </li>
                                                    <li data-value="?????????">
                                                        <span>?????????</span>
                                                    </li>
                                                    <li data-value="?????????">
                                                        <span>?????????</span>
                                                    </li>
                                                    <li data-value="?????????">
                                                        <span>?????????</span>
                                                    </li>
                                                </ul>

                                                <input id="tab4" type="radio" name="tab" />
                                                <label htmlFor="tab4">??????</label>
                                                <ul className="tab_content">
                                                    <li data-value="?????????">
                                                        <span>?????????</span>
                                                    </li>
                                                    <li data-value="?????????">
                                                        <span>?????????</span>
                                                    </li>
                                                    <li data-value="?????????">
                                                        <span>?????????</span>
                                                    </li>
                                                </ul>

                                                <input id="tab5" type="radio" name="tab" />
                                                <label htmlFor="tab5">??????</label>
                                                <ul className="tab_content">
                                                    <li data-value="?????????">
                                                        <span>?????????</span>
                                                    </li>
                                                    <li data-value="?????????">
                                                        <span>?????????</span>
                                                    </li>
                                                    <li data-value="?????????">
                                                        <span>?????????</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="tab_close">
                                                ??????
                                            </div>
                                        </div>
                                    </div>

                                    <div className="other_div">
                                        <input type="checkbox" className="other_btn" id="other_btn" />
                                        <label htmlFor="other_btn" className="other_label dropdown_label"><i className="fas fa-hand-point-up"></i>????????????<i
                                            className="fas fa-sort-down"></i></label>

                                        <div className="chk_div dropdown_div">
                                            <div className="chk_css">
                                                <div className="chk_item">
                                                    <input className="chk_chk" type="checkbox" name="service" id="child_seats" value="??????????????????" />
                                                    <label htmlFor="child_seats">??????????????????</label>
                                                </div>
                                                <div className="chk_item">
                                                    <input className="chk_chk" type="checkbox" name="service" id="barrier_free" value="???????????????" />
                                                    <label htmlFor="barrier_free">???????????????</label>
                                                </div>
                                                <div className="chk_item">
                                                    <input className="chk_chk" type="checkbox" name="service" id="min_consumption" value="??????????????????" />
                                                    <label htmlFor="min_consumption">??????????????????</label>
                                                </div>
                                                <div className="chk_item">
                                                    <input className="chk_chk" type="checkbox" name="service" id="limit_meal_time" value="??????????????????" />
                                                    <label htmlFor="limit_meal_time">??????????????????</label>
                                                </div>
                                                <div className="chk_item">
                                                    <input className="chk_chk" type="checkbox" name="service" id="delivery" value="????????????" />
                                                    <label htmlFor="delivery">????????????</label>
                                                </div>
                                                <div className="chk_item">
                                                    <input className="chk_chk" type="checkbox" name="service" id="service_free" value="???????????????" />
                                                    <label htmlFor="service_free">???????????????</label>
                                                </div>
                                                <div className="chk_item">
                                                    <input className="chk_chk" type="checkbox" name="service" id="parking" value="???????????????" />
                                                    <label htmlFor="parking">???????????????</label>
                                                </div>
                                                <div className="chk_item">
                                                    <input className="chk_chk" type="checkbox" name="service" id="allow_pets" value="??????????????????" />
                                                    <label htmlFor="allow_pets">??????????????????</label>
                                                </div>

                                            </div>
                                            <div className="chk_close">
                                                ??????
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#" onClick={this.search} id="search_a">
                                        <div className="dropdown">
                                            <button className="search_btn">??????</button>
                                        </div>
                                    </a>
                                </div>
                                <div className="mobile_search_div">
                                    <div className="search_mobile_div">
                                        <div className="search_mobile_inline_div">
                                            <i className="fas fa-search search_icon"></i>
                                            <label className="search_label">????????????</label>
                                        </div>
                                    </div>
                                    <div className="mobile_div">
                                        <div className="mobile_inline_div">
                                            <div className="turn_off">
                                                <i className="fas fa-times"></i>
                                            </div>
                                            <input className="search_keyword" id="keyword" type="text" placeholder="????????????????????????" />
                                            <div className="area_div">
                                                <label htmlFor="area_btn" onClick={() => this.open_tab("area")} className="area_label mobile_tab_label"><i className="fas fa-map-marker-alt"></i>???????????????<i
                                                    className="fas fa-sort-down"></i></label>
                                            </div>
                                            <div className="other_div">
                                                <label htmlFor="other_btn" onClick={() => this.open_tab("other")} className="other_label mobile_tab_label"><i className="fas fa-hand-point-up"></i>????????????<i
                                                    className="fas fa-sort-down"></i></label>
                                            </div>
                                            <a href="#" onClick={this.search} id="search_a">
                                                <div className="dropdown">
                                                    <button className="search_btn">??????</button>
                                                </div>
                                            </a>
                                        </div>
                                        <div id="area" className="mobile_tab_div">
                                            <div className="mobile_tab_css">

                                                <label className="mobile_dropdown_label">??????</label>
                                                <div className="mobile_tab_content mobile_dropdown_div">
                                                    <span>?????????</span>
                                                    <span>?????????</span>
                                                    <span>?????????</span>
                                                    <span>?????????</span>
                                                    <span>?????????</span>
                                                    <span>?????????</span>
                                                </div>

                                            </div>
                                            <div className="mobile_tab_css">

                                                <label className="mobile_dropdown_label">??????</label>
                                                <div className="mobile_tab_content mobile_dropdown_div">
                                                    <span>?????????</span>
                                                    <span>?????????</span>
                                                    <span>?????????</span>
                                                    <span>?????????</span>
                                                    <span>?????????</span>
                                                </div>

                                            </div>
                                            <div className="mobile_tab_css">

                                                <label className="mobile_dropdown_label">??????</label>
                                                <div className="mobile_tab_content mobile_dropdown_div">
                                                    <span>?????????</span>
                                                    <span>?????????</span>
                                                    <span>?????????</span>
                                                    <span>?????????</span>
                                                    <span>?????????</span>
                                                </div>

                                            </div>
                                            <div className="mobile_tab_css">

                                                <label className="mobile_dropdown_label">??????</label>
                                                <div className="mobile_tab_content mobile_dropdown_div">
                                                    <span>?????????</span>
                                                    <span>?????????</span>
                                                    <span>?????????</span>
                                                </div>

                                            </div>
                                            <div className="mobile_tab_css">

                                                <label className="mobile_dropdown_label">??????</label>
                                                <div className="mobile_tab_content mobile_dropdown_div">
                                                    <span>?????????</span>
                                                    <span>?????????</span>
                                                    <span>?????????</span>
                                                </div>

                                            </div>
                                        </div>
                                        <div id="other" className="mobile_tab_div">
                                            <div className="mobile_chk_css">
                                                <div className="mobile_chk_item">
                                                    <input className="mobile_chk_chk chk_chk" type="checkbox" name="child_seats" id="child_seats" value="??????????????????" />
                                                    <label htmlFor="child_seats">??????????????????</label>
                                                </div>
                                                <div className="mobile_chk_item">
                                                    <input className="mobile_chk_chk chk_chk" type="checkbox" name="barrier_free" id="barrier_free" value="???????????????" />
                                                    <label htmlFor="barrier_free">???????????????</label>
                                                </div>
                                                <div className="mobile_chk_item">
                                                    <input className="mobile_chk_chk chk_chk" type="checkbox" name="min_consumption" id="min_consumption" value="??????????????????" />
                                                    <label htmlFor="min_consumption">??????????????????</label>
                                                </div>
                                                <div className="mobile_chk_item">
                                                    <input className="mobile_chk_chk chk_chk" type="checkbox" name="limit_meal_time" id="limit_meal_time" value="??????????????????" />
                                                    <label htmlFor="limit_meal_time">??????????????????</label>
                                                </div>
                                            </div>
                                            <div className="mobile_chk_css">
                                                <div className="mobile_chk_item">
                                                    <input className="mobile_chk_chk chk_chk" type="checkbox" name="delivery" id="delivery" value="????????????" />
                                                    <label htmlFor="delivery">????????????</label>
                                                </div>
                                                <div className="mobile_chk_item">
                                                    <input className="mobile_chk_chk chk_chk" type="checkbox" name="service_free" id="service_free" value="???????????????" />
                                                    <label htmlFor="service_free">???????????????</label>
                                                </div>
                                                <div className="mobile_chk_item">
                                                    <input className="mobile_chk_chk chk_chk" type="checkbox" name="parking" id="parking" value="???????????????" />
                                                    <label htmlFor="parking">???????????????</label>
                                                </div>
                                                <div className="mobile_chk_item">
                                                    <input className="mobile_chk_chk chk_chk" type="checkbox" name="allow_pets" id="allow_pets" value="??????????????????" />
                                                    <label htmlFor="allow_pets">??????????????????</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="kind_page">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="kind_div">
                                    <div>
                                        <h3>??????????????????</h3>
                                    </div>
                                    <ul className="water_fall">
                                        <li className="kind_span">
                                            <a href="/restaurant/list/????????????" title="????????????">
                                                <div className="index_img">
                                                    <img src={require('../img/index_img/italian_food.png')} alt="????????????" />
                                                    <span>????????????</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="kind_span">
                                            <a href="/restaurant/list/????????????" title="????????????">
                                                <div className="index_img">
                                                    <img src={require('../img/index_img/chinese_food.png')} alt="????????????" />
                                                    <span>????????????</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="kind_span">
                                            <a href="/restaurant/list/????????????" title="????????????">
                                                <div className="index_img">
                                                    <img src={require('../img/index_img/french_food.png')} alt="????????????" />
                                                    <span>????????????</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="kind_span">
                                            <a href="/restaurant/list/????????????" title="????????????">
                                                <div className="index_img">
                                                    <img src={require('../img/index_img/american_food.png')} alt="????????????" />
                                                    <span>????????????</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="kind_span">
                                            <a href="/restaurant/list/????????????" title="????????????">
                                                <div className="index_img">
                                                    <img src={require('../img/index_img/japanese_food.png')} alt="????????????" />
                                                    <span>????????????</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="kind_span">
                                            <a href="/restaurant/list/????????????" title="????????????">
                                                <div className="index_img">
                                                    <img src={require('../img/index_img/korean_food.png')} alt="????????????" />
                                                    <span>????????????</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="kind_span">
                                            <a href="/restaurant/list/????????????" title="????????????">
                                                <div className="index_img">
                                                    <img src={require('../img/index_img/middle_east_food.png')} alt="????????????" />
                                                    <span>????????????</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="kind_span">
                                            <a href="/restaurant/list/????????????" title="????????????">
                                                <div className="index_img">
                                                    <img src={require('../img/index_img/port_food.png')} alt="????????????" />
                                                    <span>????????????</span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <button type="button" className="ontop_btn" onClick={this.topfunction}>
                    <i className="fas fa-arrow-up"></i>
                </button>

                <div className="blank"></div>

                <footer className="footer_page">
                    <Footer />
                </footer>
            </React.Fragment>
        );
    }
}

export default Index;

